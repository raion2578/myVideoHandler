import {VideoHandler} from "./VideoHandler";
import * as fbvideos from 'fbvideos';
const Downloader = require('nodejs-file-downloader');

export class VideoHandlerFacebook extends VideoHandler {
    url: string;

    constructor(link: string, path: string) {
        super(link, path);
        this.url = link;
    }

    getUrlForDownload() {
        return fbvideos.low(this.url).then(vid => {
            return vid.url;
        });
    }
    download() {
        this.getUrlForDownload().then(data =>{
            const downloader = new Downloader({
                url: data,
                directory: "./",
            })
            downloader.download();
        });
    }

}