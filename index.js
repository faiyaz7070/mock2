const jsonserver=require("json-server")
const cors=require("cors")
const path=require("path")

const server=jsonserver.create()
const router=jsonserver.router("db.json")
const middleware=jsonserver.defaults()

server.use(cors())
server.use(middleware)
server.use(jsonserver.bodyParser)
server.use(router)

const PORT=3030;
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})