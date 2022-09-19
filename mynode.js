const express = require('express')
const cors = require('cors')
const os = require('os');


const app = express()




let getIPAdress = function() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
let ip = getIPAdress();


app.listen(38610, () => {
    console.log(`start,ip:${ip}`);
})


 
app.use(express.urlencoded({extended:false}))

app.use(cors())


const userRouter = require('./router'); 
app.use('/', userRouter)  


app.use(express.static('./public'))



console.log('end');


