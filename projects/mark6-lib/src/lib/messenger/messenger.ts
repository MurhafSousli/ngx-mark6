import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, ViewEncapsulation} from '@angular/core';

/**
 * Theme Picker
 *
 * Can contain elements:
 * - etc...
 */
@Component({
    selector: 'mark6-messenger',
    exportAs: 'Mark6Messenger',
    templateUrl: './messenger.html',
    styleUrls: ['./messenger.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6Messenger {

    @Input() public _width = window.innerWidth;
    @Input() public _height = window.innerHeight;

    @HostListener('window:resize') onResize() {
        this._width = window.innerWidth;
        this._height = window.innerHeight;
    }

    @HostBinding('class') classes = 'mark6-messenger';
    @HostBinding('style.width.px') width: 50;

    constructor() {
    }

}



