/**
 * Created by haibao on 2015/12/22.
 */
var jay = {
    name:"Jay Chang",
    birth:1987,
    "middle-school":"\"ZheJiang\" hnyz",
    sex:"male",
    skills:["JavaScript","C++","Node.js"]
};

console.log(JSON.stringify(jay,null,"   "));


console.log(JSON.stringify(jay,function(key,value){
        if(typeof value === "string" && key === "name"){
            return value.toUpperCase();
        }
        return value;
    },"   "));


console.log(JSON.parse("{\"name\":\"Jay Chang\",\"age\":28,\"middle-school\":\"ZheJiang HNYZ\"}", function (key,value) {
    if(key === "name"){
        return value+" Student";
    }
    return value;
}));


var yhtqJSONStr = '{"query":{"count":1,"created":"2015-12-22T02:37:30Z","lang":"zh-CN","results":{"channel":{"title":"Yahoo! Weather - Beijing, CN","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Beijing__CN/*http://weather.yahoo.com/forecast/CHXX0008_f.html","description":"Yahoo! Weather for Beijing, CN","language":"en-us","lastBuildDate":"Tue, 22 Dec 2015 8:00 am CST","ttl":"60","location":{"city":"Beijing","country":"China","region":""},"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"wind":{"chill":"23","direction":"70","speed":"4"},"atmosphere":{"humidity":"75","pressure":"30.27","rising":"0","visibility":"0.81"},"astronomy":{"sunrise":"7:33 am","sunset":"4:52 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Beijing, CN at 8:00 am CST","lat":"39.91","long":"116.39","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Beijing__CN/*http://weather.yahoo.com/forecast/CHXX0008_f.html","pubDate":"Tue, 22 Dec 2015 8:00 am CST","condition":{"code":"20","date":"Tue, 22 Dec 2015 8:00 am CST","temp":"28","text":"Mist"},"description":"\n<img src=\"http://l.yimg.com/a/i/us/we/52/20.gif\"/><br />\n<b>Current Conditions:</b><br />\nMist, 28 F<BR />\n<BR /><b>Forecast:</b><BR />\nTue - Sunny. High: 43 Low: 22<br />\nWed - Mostly Sunny. High: 41 Low: 23<br />\nThu - Partly Cloudy. High: 41 Low: 21<br />\nFri - Sunny. High: 40 Low: 21<br />\nSat - Mostly Sunny. High: 44 Low: 20<br />\n<br />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Beijing__CN/*http://weather.yahoo.com/forecast/CHXX0008_f.html\">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)<br/>\n","forecast":[{"code":"32","date":"22 Dec 2015","day":"Tue","high":"43","low":"22","text":"Sunny"},{"code":"34","date":"23 Dec 2015","day":"Wed","high":"41","low":"23","text":"Mostly Sunny"},{"code":"30","date":"24 Dec 2015","day":"Thu","high":"41","low":"21","text":"Partly Cloudy"},{"code":"32","date":"25 Dec 2015","day":"Fri","high":"40","low":"21","text":"Sunny"},{"code":"34","date":"26 Dec 2015","day":"Sat","high":"44","low":"20","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false","content":"CHXX0008_2015_12_26_7_00_CST"}}}}}}';

var yhtq = JSON.parse(yhtqJSONStr);

console.log(yhtq);