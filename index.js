const app = require('express')();


app.get("/", (req, res) => {
    
    res.send("Second Node Server Running");
})

app.listen(3000, () => {
    console.log("Second Server Listening on 3000");
})