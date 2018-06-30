const app = require("express")()

app.get("/", (req, res) => {
    res.sendFile("assets/html/index.js")
    if (req.url != "/"){
        res.sendFile(req.url)
    }
}).listen(80)