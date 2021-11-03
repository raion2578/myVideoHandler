import * as ytdl from 'ytdl-core';
import {VideoHandler} from "./videoHandler";
import * as fs from 'fs';


export class VideoHandlerYouTube extends VideoHandler {
    duration: Promise<string>;
    pathFile: string;
    isDownload: boolean = false;

    constructor(link: string, path: string) {
        super(link, path);
        this.duration = this._getVideoDuration(link);
    }

    private async _getVideoDuration(link: string): Promise<string> {
        try {
            let videoLink = ytdl.getBasicInfo(link);
            return await videoLink.then(data => {
                return data.videoDetails.lengthSeconds;
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

    async getMinutes(): Promise<number> {
        try {
            return await this.duration.then(data => {
                return Math.round((Number(data) / 60));
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

    async _getVideoId() {
        let videoLink = ytdl.getBasicInfo(this._pathToFile);
        return await videoLink.then(data => {
            return data.videoDetails.videoId;
        });
    }


    download() {
        try {
            this._promiseFile = new Promise(async (resolve, reject) => {
                let fileName = await this._getVideoId().then(data => {
                        resolve(data);
                    }
                );

                ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ').pipe(fs.createWriteStream(this.pathFile + fileName));

            })

        } catch (e) {
            console.log(((e as Error).message));
        }
    }
}