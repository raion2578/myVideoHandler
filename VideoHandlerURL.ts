import {VideoHandler} from "./VideoHandler";

const {getInfo} = require('ytdl-getinfo');
const YoutubeDlWrap = require("youtube-dl-wrap");
const youtubeDlWrap = new YoutubeDlWrap("/usr/local/bin/youtube-dl");

export class VideoHandlerURL extends VideoHandler {
    url: string;
    duration: Promise<number>;
    fileName: string;

    constructor(link: string, path: string) {
        super(link, path);
        this.url = link;
    }

    async download() {
        try {
            this._promiseFile = new Promise(async (resolve, reject) => {
                let name = await this.getName();
                this.fileName = name + ".mp4";
                let stdout = await youtubeDlWrap.execPromise([this.url,
                    "-f", "best", "-o", this.pathDownloadFile + this.fileName]);
                resolve(name + ".mp4");
                return (this.fileName);
            });
        } catch (e) {
            throw  e;
        }
    }

    async getName(): Promise<string> {
        try {
            return await getInfo(this.url).then(info => {
                return info.items[0].id;
            });
        } catch (e) {
            throw e;
        }
    }

    async minutes(): Promise<number> {
        try {
            return await getInfo(this.url).then(info => {
                return Math.round(Number(info.items[0].duration) / 60);
            });
        } catch (e) {
            throw e;
        }
    }

}