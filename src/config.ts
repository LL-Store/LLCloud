const { join } = require("path")

export default {
    user: {
        path: join(__dirname, '../userlogin/')
    },
    email: {
        host: '', // 主机
        secureConnection: true, // 使用 SSL
        service: 'qq',
        port: 465, // SMTP 端口
        auth: {
            user: '', // 账号
            pass: '' // 授权码
        }
    }
}