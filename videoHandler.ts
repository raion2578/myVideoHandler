import * as ytdl from 'ytdl-core';
import getVideoDurationInSeconds from "get-video-duration";
import * as fs from 'fs';

export class VideoHandler {
    _promiseFile: Promise<File> | null = null;
    videoDuration: Promise<string>;
    pathFile: string;
    videoHostingName: string;
    isDownload: boolean = false;

    constructor(link: string, type: string, path: string) {
        this.videoDuration = this._getDuration(link, type);
        this.pathFile = path;
    }

    async minutes(): Promise<number> {
        try {
            return await this.videoDuration.then(data => {
                return Math.round((Number(data) / 60));
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

    download(fileName: string) {
        try {
            ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ').pipe(fs.createWriteStream(this.pathFile + fileName));
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

    private getHostName(url: string) {
        let reg = RegExp('^(?:https?:\\/\\/)?(?:www\\.)?((?:(?!www\\.|\\.).)+\\.[a-zA-Z0-9.]+)');
        this.videoHostingName = reg.exec(url)[1];
    }

    private async _getDuration(link: string, type: string): Promise<string> {
        if (type == 'url') {
            try {
                this.getHostName(link);
                if (this.videoHostingName == 'youtube.com') {
                    let videoLink = ytdl.getBasicInfo(link);
                    return await videoLink.then(data => {
                        return data.videoDetails.lengthSeconds;
                    });
                }
            } catch (e) {
                console.log(((e as Error).message));
            }
        } else if (type == 'file') {
            try {
                this.isDownload = true;
                return await getVideoDurationInSeconds(link).then((duration) => {
                    return String(duration);
                });
            } catch (e) {
                console.log(((e as Error).message));
            }
        }
    }
}