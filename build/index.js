const { copySync, deleteSync, log, error } = require("devby")
const compressing = require("compressing")
const pkg = require("../package.json")

deleteSync("./LLCloud")
deleteSync("./userlogin")
deleteSync("./client/userspace")

copySync("./dist", "./LLCloud/dist")
copySync("./client", "./LLCloud/client")
copySync("./.mailmap", "./LLCloud/.mailmap")
copySync("./AUTHORS.txt", "./LLCloud/AUTHORS.txt")
copySync("./CHANGELOG", "./LLCloud/CHANGELOG")
copySync("./LICENSE", "./LLCloud/LICENSE")
copySync("./package.json", "./LLCloud/package.json")
copySync("./package-lock.json", "./LLCloud/package-lock.json")
copySync("./README.md", "./LLCloud/README.md")

compressing.zip.compressDir("./LLCloud", "./LLCloud-v" + pkg.version + ".zip").then(() => {
    deleteSync("./LLCloud")

    log("打包完成\n")
}).catch((e) => {
    error(e)
})