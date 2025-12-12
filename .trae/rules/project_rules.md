1、本项目是next+typescript+tailwindcss+wordpress的项目；wordpress的地址：https://admin.keyfirebbq.com/；域名是：https://keyfirebbq.com/；
2、项目的代码仓库是：https://github.com/servicekeyo/next；
3、项目采用静态缓存wordpress的api，缓存时间是10分钟；
4、每次发送打包命令时，会先清除缓存，缓存包括wordpress有数据更新，新的sitemap，然后打包，最后部署到服务器上；
5、CSS修改先读取global.css，如果没有合适的就在global.css中添加，然后再引用；