import {VideoHandler} from "./videoHandler";


export class VideoHandlerLocalFile extends VideoHandler{
    constructor(link:string, path:string) {
        super(link, path);
    }
}