import {VideoHandlerYouTube} from "./VideoHandlerYouTube";
import {VideoHandlerLocalFile} from "./VideoHandlerLocalFile";
import {VideoHandlerFacebook} from "./VideoHandlerFacebook";
const YoutubeDlWrap = require("youtube-dl-wrap");
const youtubeDlWrap = new YoutubeDlWrap("/usr/local/bin/youtube-dl");

const fbdl = require("fbdl-core");
const fs = require("fs");
const fbdashdl = require('fbdashdl');
const { getInfo } = require('ytdl-getinfo');

//let myURL = 'https://www.youtube.com/watch?v=nyIpDs2DJ_c&t=3669s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD';
let myURL2 = 'localvideo/video1.mp4';
let myURL = 'https://www.youtube.com/watch?v=p1l4XeIsw70';
let path = 'localvideo/';
let facebookUrl = 'https://www.facebook.com/100012385715803/videos/1068928076863373/';

let globalFile = new VideoHandlerYouTube(myURL, path);
let localFile = new VideoHandlerLocalFile(myURL2, path);
let facebook = new VideoHandlerFacebook(facebookUrl, path);



//localFile.minutes().then(console.log);


// globalFile.getMinutes().then(console.log
// );

//globalFile.download();

// globalFile._promiseFile.then(data=>{
//     console.log(data);
// });

 //const video = 'https://www.facebook.com/dizelshow/videos/436342094086531';
//
// let faceb = new VideoHandlerFacebook(facebookURL4, path);
// faceb.getUrlForDownload();
//faceb.download();

//localFile.sendURLPathFile('http://192.168.33.129:8000/').then(console.log);

// getInfo('https://ok.ru/video/2959569586785').then(info => {
//     // info.items[0] should contain the output of youtube-dl --dump-json
//     console.log(info.items[0].duration);
// });

// let stdout = youtubeDlWrap.execPromise([facebookUrl,
//     "--get-duration "]);
// console.log(stdout);


facebook.minutes().then(console.log);