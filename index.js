const app = require("express")()

app.get("/", (req, res) => {
    if (req.url != "/"){
        res.sendFile(req.url)
    }
}).listen(80)