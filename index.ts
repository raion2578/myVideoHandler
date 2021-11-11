import {VideoHandlerYouTube} from "./VideoHandlerYouTube";
import {VideoHandlerLocalFile} from "./VideoHandlerLocalFile";
import {VideoHandlerURL} from "./VideoHandlerURL";
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


let vkurl = 'https://vk.com/video?z=video-57604288_456253400%2Fpl_cat_trends';
let okurl = 'https://ok.ru/video/1385579219645';
let  insta = 'https://www.instagram.com/p/CWGvuhjotWn/';
let facebookUrl = 'https://fb.watch/9cxRpRqYQk/';

let facebook = new VideoHandlerURL(okurl, path);

facebook.minutes().then(console.log);
facebook.getName().then(console.log);
facebook.download();