import {VideoHandlerURL} from "./VideoHandlerURL";
const YoutubeDlWrap = require("youtube-dl-wrap");
//const youtubeDlWrap = new YoutubeDlWrap("/usr/local/bin/youtube-dl");

const { getInfo } = require('ytdl-getinfo');


let myURL = 'https://www.youtube.com/watch?v=p1l4XeIsw70';
let myURL2 = 'localvideo/video1.mp4';
let path = 'localvideo/';

let vkurl = 'https://vk.com/video?z=video-57604288_456253400%2Fpl_cat_trends';
let okurl = 'https://ok.ru/video/1385579219645';
let  insta = 'https://www.instagram.com/p/CWGvuhjotWn/';
let facebookUrl = 'https://fb.watch/9cxRpRqYQk/';

// Загружаем питоновский бинарный файл
YoutubeDlWrap.downloadFromWebsite("/usr/local/bin/binary");
// Указываем путь до него при создании класса
const youtubeDlWrap = new YoutubeDlWrap("/usr/local/bin/binary");

let video = new VideoHandlerURL(okurl, path);

video.minutes().then(console.log);
video.getName().then(console.log);
//facebook.download();