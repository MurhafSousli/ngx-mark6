import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ThemePickerService {

    private _theme: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor() {
    }

    get theme() {
        return this._theme;
    }

    setTheme(value) {
        this._theme.next(value);
        // The Material CDK recommended Way, but i write it direct in body, so don't need this.
        // this.overlayContainer.getContainerElement().classList.add(value);
        // Write the class in <body> instead of the cdk element, to make the styles global available.
        document.getElementsByTagName('body')[0].classList.add(value);
    }

}
