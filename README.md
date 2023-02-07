>  基于https://github.com/coderaiser/cloudcmd

## 功能
- 网页ftp
- 网页ssh
- xray-core

## 部署
本项目适用于支持nodejs的server端平台，要求文件系统有读写可执行权限，不适用于托管Vue、React、angular等前端静态资源平台。配置保活请修改`server/server.mjs`第137行url，本项目以Render为例，自动获取环境变量，如您也部署在Render上，则不需要修改此处。
- env: NodeJS
- Start Command: `node bin/cloudcmd.mjs`
- 网页ftp路径: `/files/`

## 说明
修改`config.json`可自定义xray协议，以下为默认配置
- 协议： trojan
- 端口： ssl/tls  443
- 密码： 123
- ws路径： /web

## 图示
![示例1](https://file.eeea.ga/view.php/9bfcef430fb4c1409c344c7078d9cb14.png)
![示例2](https://file.eeea.ga/view.php/066b32274b87148fc321667213ce0c59.png)
