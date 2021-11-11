import {VideoHandler} from "./VideoHandler";
import * as fbvideos from 'fbvideos';

const Downloader = require('nodejs-file-downloader');
const {getInfo} = require('ytdl-getinfo');
const YoutubeDlWrap = require("youtube-dl-wrap");
const youtubeDlWrap = new YoutubeDlWrap("/usr/local/bin/youtube-dl");

export class VideoHandlerFacebook extends VideoHandler {
    url: string;
    duration: Promise<number>;

    constructor(link: string, path: string) {
        super(link, path);
        this.url = link;
    }

    getUrlForDownload() {
        return fbvideos.low(this.url).then(vid => {
            return vid.url;
        });
    }

    async download() {
        try {
            this._promiseFile = new Promise(async (resolve, reject) => {
                let name = await this.getName();
                let stdout = await youtubeDlWrap.execPromise([this.url,
                    "-f", "best", "-o", name + ".mp4"]);
                resolve(name + ".mp4");
            });
        }catch (e){
            throw  e;
        }
    }

    async getName():Promise<string>{
        try {
            return await getInfo(this.url).then(info => {
                return info.items[0].id;
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

    async minutes(): Promise<number> {
        try {
            return await getInfo(this.url).then(info => {
                console.log(info);
                return Math.round(Number(info.items[0].duration)/60);
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

}