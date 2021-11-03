import {VideoHandlerYouTube} from "./VideoHandlerYouTube";
import {VideoHandlerLocalFile} from "./VideoHandlerLocalFile";

//let myURL = 'https://www.youtube.com/watch?v=nyIpDs2DJ_c&t=3669s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD';
let myURL2 = 'localvideo/video1.mp4';
let myURL = 'https://www.youtube.com/watch?v=p1l4XeIsw70';
let path = 'localvideo/'

let globalFile = new VideoHandlerYouTube(myURL, path);
let localFile = new VideoHandlerLocalFile(myURL2, path);

console.log('Local file');
localFile.minutes();

console.log('Is youTybe');
globalFile.getMinutes().then(data =>{
        console.log(data);
    }
);

globalFile.download();

globalFile._promiseFile.then(data=>{
    console.log(data);
});




