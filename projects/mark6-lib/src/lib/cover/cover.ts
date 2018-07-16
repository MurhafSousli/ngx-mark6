import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';


/**
 * Cover
 *
 * Can contain elements:
 * - etc...
 */
@Component({
    selector: 'mark6-cover',
    exportAs: 'mark6Cover',
    templateUrl: './cover.html',
    styleUrls: ['./cover.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverComponent {
    @HostBinding('class') classes = 'mark6-cover';

    @HostBinding('class.uploading')
    get isUploading() {
        return this.uploadProgress > 0;
    }

    @Input() editMode = false;
    @Input() size = '1024x410';
    @Input() uploadProgress = null;

    constructor() {
    }

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-cover-image',
    templateUrl: 'cover-image.html',
    styleUrls: ['./cover-image.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverImageComponent {
    @HostBinding('class') classes = 'mark6-cover-image';

    @Input() image;
    @Input() alt;

    public defaultImage = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-cover-edit-menu',
    templateUrl: 'cover-edit-menu.html',
    styleUrls: ['./cover-edit-menu.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverEditMenuComponent {
    @HostBinding('class') classes = 'mark6-cover-edit-menu';
}
