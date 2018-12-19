import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'mark6-editable-image',
    exportAs: 'mark6EditableImage',
    templateUrl: './editable-image.html',
    styleUrls: ['./editable-image.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6EditableImageComponent {

    @HostBinding('class') classes = 'mark6-editable-image';

    @HostBinding('class.uploading')
    get isUploading() {
        return this.uploadProgress > 0;
    }

    @Input() public editMode = false;
    @Input() public uploadProgress = null;
    @Input() public uploadProgressColor = 'rgba(0, 0, 0, 0.64)';

}
