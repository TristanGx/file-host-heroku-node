const app = require("express")()
const path = require("path")

var port = process.env.PORT

app.get("/", (req, res) => {
    res.send({hello : "world"})
}).listen(port, function (err) {
    console.log("Running on port:" + port)
})