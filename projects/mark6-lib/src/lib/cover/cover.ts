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

    public defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0+A8AAYUBQcxKiF0AAAAASUVORK5CYII=';
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-cover-content',
    templateUrl: 'cover-content.html',
    styleUrls: ['./cover-content.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverContentComponent {
    @HostBinding('class') classes = 'mark6-cover-content';
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-cover-content-edit',
    templateUrl: 'cover-content-edit.html',
    styleUrls: ['./cover-content-edit.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverContentEditComponent {
    @HostBinding('class') classes = 'mark6-cover-content-edit';
}
