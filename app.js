// Weather App
// These are the packages that will be used in the application
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const https = require("https")

// Here created our route for URL to Page.html
app.use(bodyParser.urlencoded({ extended:true }))
app.get("/", function (req, res){
    res.sendFile(__direname + "/page.html");
});