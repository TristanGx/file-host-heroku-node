const app = require("express")()
const path = require("path")

var port = process.env.PORT

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
}).listen(port, function (err) {
    console.log("Running on port:" + port)
})