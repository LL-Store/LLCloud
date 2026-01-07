const compressing = require("compressing")
const { deleteDisk, copyDisk } = require("oipage/nodejs/disk/index.js");
const pkg = require("../package.json")

deleteDisk("./LLCloud")
deleteDisk("./userlogin")
deleteDisk("./userspace")

copyDisk("./dist", "./LLCloud/dist")
copyDisk("./client", "./LLCloud/client")
copyDisk("./.mailmap", "./LLCloud/.mailmap")
copyDisk("./AUTHORS.txt", "./LLCloud/AUTHORS.txt")
copyDisk("./CHANGELOG", "./LLCloud/CHANGELOG")
copyDisk("./LICENSE", "./LLCloud/LICENSE")
copyDisk("./package.json", "./LLCloud/package.json")
copyDisk("./package-lock.json", "./LLCloud/package-lock.json")
copyDisk("./README.md", "./LLCloud/README.md")

compressing.zip.compressDir("./LLCloud", "./LLCloud-v" + pkg.version + ".zip").then(() => {
    deleteDisk("./LLCloud")

    console.log("打包完成\n")
}).catch((e) => {
    console.error(e)
})