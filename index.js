const app = require("express")()
const path = require("path")

var port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.sendFile("/index.html")
    if (req.url != "/") {
        res.sendFile(req.url)
    }
}).listen(port, function (err) {
    console.log("Running on port:" + port)
})