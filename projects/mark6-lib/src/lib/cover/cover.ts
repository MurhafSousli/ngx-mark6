import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';


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
    encapsulation: ViewEncapsulation.None
})
export class Mark6CoverComponent {

    @HostBinding('class') classes = 'mark6-cover';

    @HostBinding('class.uploading')
    get isUploading() {
        return this.uploadProgress > 0;
    }

    @Input() public editMode = false;
    @Input() public uploadProgress = null;
    @Input() public uploadProgressColor = '#e53935';

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-cover-content',
    templateUrl: 'cover-content.html',
    styleUrls: ['./cover-content.scss'],
    encapsulation: ViewEncapsulation.None
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
    encapsulation: ViewEncapsulation.None
})
export class Mark6CoverContentEditComponent {

    @HostBinding('class') classes = 'mark6-cover-content-edit';

}
