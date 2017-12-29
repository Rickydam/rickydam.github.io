var express = require('express');
var app = express();
app.use(express.static(__dirname));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App running on localhost:3000");

// var browserSync = require('browser-sync').create('myServer');
// browserSync.init({
//   server: "./",
//   notify: false
// });
//
// var currentSession = require('browser-sync').get('myServer');
// currentSession.watch('index.html').on('change', currentSession.reload);
// currentSession.watch('views/*.html').on('change', currentSession.reload);
// console.log("Watching HTML files...");
// currentSession.watch('assets/css/custom.css').on('change', currentSession.reload);
// console.log("Watching all CSS files...");
