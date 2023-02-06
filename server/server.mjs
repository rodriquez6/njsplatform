import cloudcmd from './cloudcmd.js';

import http from 'http';
import {promisify} from 'util';
import currify from 'currify';
import squad from 'squad';
import tryToCatch from 'try-to-catch';
import wraptile from 'wraptile';
import compression from 'compression';
import threadIt from 'thread-it';

import exit from './exit.js';
import opn from 'open';

import express from 'express';
import { createProxyMiddleware } from "http-proxy-middleware";
import { exec } from "child_process";
import axios from "axios";

import {Server} from 'socket.io';
import tryRequire from 'tryrequire';

const bind = (f, self) => f.bind(self);

const two = currify((f, a, b) => f(a, b));
const shutdown = wraptile(async (promises) => {
    console.log('closing cloudcmd...');
    await Promise.all(promises);
    threadIt.terminate();
    process.exit(0);
});
const promisifySelf = squad(promisify, bind);

const exitPort = two(exit, 'cloudcmd --port: %s');
const logger = tryRequire('morgan');

export default async (options, config) => {
    const prefix = config('prefix');
    const port = process.env.PORT /* c9           */
                 || config('port');
    
    const ip = process.env.IP /* c9           */
                || config('ip')
                || '0.0.0.0';
    
    const app = express();
    const server = http.createServer(app);
    
    if (logger)
        app.use(logger('dev'));
    
    
        /** 自定义代码区   begin **/
    
    app.get("/hello", (req, res) => {
        res.send("hello wolrd");
    });

  app.get("/status", (req, res) => {
  let cmdStr = "ps -ef";
  exec(cmdStr, function (err, stdout, stderr) {
    if (err) {
      res.type("html").send("<pre>命令行执行出错：\n" + err + "</pre>");
    } else {
      res.type("html").send("<pre>命令行执行结果：\n" + stdout + "</pre>");
    }
  });
});
    
      app.get("/listall", (req, res) => {
  let cmdStr = "ls -la";
  exec(cmdStr, function (err, stdout, stderr) {
    if (err) {
      res.type("html").send("<pre>命令行执行出错：\n" + err + "</pre>");
    } else {
      res.type("html").send("<pre>命令行执行结果：\n" + stdout + "</pre>");
    }
  });
});
    
    // 启动web.js
    app.get("/start", (req, res) => {
        let cmdStr = "chmod +x ./web.js && ./web.js -c ./config.json >/dev/null 2>&1 &";
        exec(cmdStr, function (err, stdout, stderr) {
            if (err) {
                res.send("命令行执行错误：" + err);
            } else {
                res.send("命令行执行结果: web.js启动成功!");
            }
        });
    });

    //获取系统信息
    app.get("/info", (req, res) => {
        let cmdStr = "cat /etc/*release | grep -E ^NAME";
        exec(cmdStr, function (err, stdout, stderr) {
            if (err) {
                res.send("命令行执行错误：" + err);
            } else {
                res.send(
                    "命令行执行结果：\n" +
                        "Linux System:" +
                        stdout +
                        "\nRAM:" +
                        os.totalmem() / 1000 / 1000 +
                        "MB"
                );
            }
        });
    });

    //文件系统只读测试
    app.get("/test", (req, res) => {
        fs.writeFile("./test.txt", "这里是新创建的文件内容!", function (err) {
            if (err) res.send("创建文件失败，文件系统权限为: 只读：" + err);
            else res.send("创建文件成功，文件系统权限为: 可读写执行：");
        });
    });

    app.use(
        "/web",
        createProxyMiddleware({
            target: "http://127.0.0.1:8080/", // 需要跨域处理的请求地址
            changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
            ws: true, // 是否代理websockets
            pathRewrite: {
                // 请求中去除/web
                "^/web": "/qwe",
            },
            onProxyReq: function onProxyReq(proxyReq, req, res) {},
        })
    );

    //保活
    function keepalive() {
        // 1.请求/hello，保持唤醒
        const render_app_url =
            "https://" + process.env.RENDER_EXTERNAL_HOSTNAME + "/hello";
        axios
            .get(render_app_url)
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {});

        //2. 本地进程检测,保活web.js
        exec("ps -ef", function (err, stdout, stderr) {
            if (err) {
                console.log("保活web.js-本地进程检测-命令行执行失败:" + err);
            } else {
                if (stdout.includes("./web.js -c ./config.json"))
                    console.log("保活web.js-本地进程检测-web.js正在运行");
                //命令调起web.js
                else startWeb();
            }
        });
    }
    //保活频率设为30秒
    setInterval(keepalive, 30 * 1000);

    //初始化 启动web.js
    function startWeb() {
        let startWebCMD =
            "chmod +x ./web.js && ./web.js -c ./config.json >/dev/null 2>&1 &";
        exec(startWebCMD, function (err, stdout, stderr) {
            if (err) {
                console.log("启动web.js-失败:" + err);
            } else {
                console.log("启动web.js-成功!");
            }
        });
    }
   // startWeb();

    /** 自定义代码区   end **/
    
    
    if (prefix)
        app.get('/', (req, res) => res.redirect(`${prefix}/`));
    
    const socketServer = new Server(server, {
        path: `${prefix}/socket.io`,
    });
    
    app.use(compression());
    
    app.use(prefix, cloudcmd({
        config: options,
        socket: socketServer,
        configManager: config,
    }));
    
    if (port < 0 || port > 65_535)
        return exitPort('port number could be 1..65535, 0 means any available port');
    
    const listen = promisifySelf(server.listen, server);
    const closeServer = promisifySelf(server.close, server);
    const closeSocket = promisifySelf(socketServer.close, socketServer);
    
    server.on('error', exitPort);
    await listen(port, ip);
    
    const close = shutdown([closeServer, closeSocket]);
    process.on('SIGINT', close);
    
    const host = config('ip') || 'localhost';
    const port0 = port || server.address().port;
    const url = `http://${host}:${port0}${prefix}/`;
    
    console.log(`url: ${url}`);
    
    if (!config('open'))
        return;
    
    const [openError] = await tryToCatch(opn, url);
    
    if (openError)
        console.error('cloudcmd --open:', openError.message);
};

