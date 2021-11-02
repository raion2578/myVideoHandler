import {VideoHandler} from "./videoHandler";


//let myURL = 'https://www.youtube.com/watch?v=nyIpDs2DJ_c&t=3669s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD';
//let myURL = 'localvideo/video1.mp4';
let myURL = 'https://www.youtube.com/watch?v=p1l4XeIsw70';

let video = new VideoHandler(myURL, 'url', './localvideo/');


// video.videoDuration.then(data =>{
//     console.log(data);
// });
//
// video.minutes().then(data=>{
//     console.log(data);
// });

console.log(video.videoHostingName);

//video.download('./localvideo/mepege.mp4');

//video.download();
// video.minutes().then(data=>{
//     console.log(data);
// });

