$(document).ready(function () {
    let photo = "http://openweathermap.org/img/wn/";
    let viki = "https://en.wikipedia.org/wiki/";
    let ph2 = "@2x.png";
    let time = new Date($.now()).getDate()+"."+new Date($.now()).getMonth()+"."+new Date($.now()).getFullYear()+" "+new Date($.now()).getHours()+":"+new Date($.now()).getMinutes();
    let url = "https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=6d17692af2b23c232e5ff43c23b7406e";
    let urli = "https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=6d17692af2b23c232e5ff43c23b7406e";
    let urlp = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=6d17692af2b23c232e5ff43c23b7406e";
    let urlb = "https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=6d17692af2b23c232e5ff43c23b7406e";
    let urll = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6d17692af2b23c232e5ff43c23b7406e";
    let urlt = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=6d17692af2b23c232e5ff43c23b7406e";
    let urls = "https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=6d17692af2b23c232e5ff43c23b7406e";
    
    function MainWth(urlOfM){

        $.get(urlOfM, function (data, status) {
            $(".mainWeather").html(`
        <div class="headerMv">
        <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
        <a id="time"></a>
        </div>
        <div class="contentM">
        <div class="icons">
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <a >${data.weather[0].main}</a>
            </div>
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
            <div class="icons">
            <br>
            <br>
            <a >Feels Like:${(data.main.feels_like - 273.15).toFixed(0)}&deg;C</a>
            <a >Wind:${data.wind.speed} kph</a>
            </div>
            </div>`)
            $("#time").text(time);
        });
    }
    $.get(url, function (data, status) {
        $(".weathers").append(`
        <div id="url" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
    });
    $.get(urli, function (data, status) {
        $(".weathers").append(`
        <div id="urli" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
    });
    $.get(urlp, function (data, status) {
        $(".weathers").append(`
        <div id="urlp" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
    });
    $.get(urlb, function (data, status) {
        $(".weathers").append(`
        <div id="urlb" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
    });
    $.get(urll, function (data, status) {
        $(".weathers").append(`
        <div id="urll" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
    });
    $.get(urlt, function (data, status) {
        $(".weathers").append(`
        <div id="urlt" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
    });
    $.get(urls, function (data, status) {
        $(".weathers").append(`
        <div id="urls" class="weather">
            <a href="https://en.wikipedia.org/wiki/${data.name}">${data.name}</a>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${(data.main.temp - 273).toFixed(0)}&deg;C</h1>
        </div>`)
        $("#time").text(time);
        $(".weather").click( function() {
            Main(this);
        });
    });
    MainWth(url);
    function Main(e) {
        console.log( `hello ${e.id}` );
        if(e.id == "url"){
            MainWth(url);
        }
        else if(e.id == "urli"){
            MainWth(urli);
        }
        else if(e.id == "urlp"){
            MainWth(urlp);
        }
        else if(e.id == "urlb"){
            MainWth(urlb);
        }
        else if(e.id == "urll"){
            MainWth(urll);
        }
        else if(e.id == "urlt"){
            MainWth(urlt);
        }
        else if(e.id == "urls"){
            MainWth(urls);
        }
    }
});