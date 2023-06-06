// Weather App
// These are the packages that will be used in the application
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const https = require("https")

// Created our route for URL to Page.html
app.use(bodyParser.urlencoded({ extended:true }))
app.get("/", function (req, res){
    res.sendFile( __dirname + "/page.html");
});

// Here we will implement our API CALL to our URL

app.post("/", function(req, res){
    const cityName = req.body.cityName
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=30.266666&lon=-97.733330&appid=064b6b9e0084795ff796c8bd93aba1de&units=imperial`
    https.get(url, function (response){
        response.on("data", function(data){
            const jsondata = JSON.parse(data)
            const temp = jsondata.main.temp
            const desc = jsondata.weather[0].description
            const icon = jsondata.weather[0].icon
            // This imageURL will add an icon depending on the weather
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write(`<h1>The temperature in ${cityName} is ${temp} degrees. </h1>`)
            res.write(`<p>The weather description is ${desc}</p>`)
            res.write(`<img src=${imageURL}>`)
        })
    })
})
app.listen(9000)
