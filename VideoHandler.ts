import getVideoDurationInSeconds from "get-video-duration";
import * as fs from 'fs';
import fetch from "node-fetch";

export abstract class VideoHandler {
    _promiseFile: Promise<string | Error> | null = null;
    pathDownloadFile: string;
    _pathToFile: string;
    private _csvLink: string;
    private _docLink: string;


    protected constructor(link: string, path: string) {
        this.pathDownloadFile = path;
        this._pathToFile = link;
    }

    async minutes(): Promise<number> {
        try {
            return await this.getDurationLocalFile().then(data => {
                return Math.round((Number(data) / 60));
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }


    getFilePath() {
        return this._pathToFile;
    }

    async getDurationLocalFile(): Promise<string> {
        try {
            return await getVideoDurationInSeconds(this._pathToFile).then((duration) => {
                return String(duration);
            });
        } catch (e) {
            console.log(((e as Error).message));
        }
    }

    async sendURLPathFile(url: string) {
        try {
            const body = JSON.stringify({path: this._pathToFile});
            //process.env.CONST_URL
            return await fetch(url + "/path-upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            }).then(res => res.json()).then(json => {
                this._csvLink = json.csv_link;
                this._docLink = json.doc_link;
                return json;
            });
        } catch (e) {
            throw e;
        }

    }


    deleteFile() {
        try {
            fs.unlinkSync(this._pathToFile);
        } catch (e) {
            throw e;
        }
    }

}