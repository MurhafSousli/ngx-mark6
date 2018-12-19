import {Injectable} from '@angular/core';


@Injectable()
export class Mark6ImageService {

    /* Creates a base64 string */
    convertToDataURLViaCanvas(outputFormat, width, height, color) {
        return new Promise((resolve) => {
            let canvas = <HTMLCanvasElement>document.createElement('CANVAS');
            canvas.height = height;
            canvas.width = width;
            const ctx = canvas.getContext('2d');

            // fill the entire canvas with color
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let dataURL = canvas.toDataURL(outputFormat);
            // callback(dataURL);
            canvas = null;
            resolve(dataURL);
        });
    }

}
