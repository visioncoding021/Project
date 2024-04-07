const express = require("express");
const urlRoute = require("./routes/url")
const {connectToMongodb} = require("./connection")
const app = express();
const PORT = 8001;
app.listen(PORT,()=>{
    console.log(`App is listning at ${PORT}`);
})
app.use(express.json());
connectToMongodb("mongodb://127.0.0.1:27017/short-url");
app.use("url",urlRoute);