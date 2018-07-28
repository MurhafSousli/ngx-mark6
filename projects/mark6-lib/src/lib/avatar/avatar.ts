import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';


/**
 * Avatar
 *
 * Can contain elements:
 * - etc...
 */
@Component({
    selector: 'mark6-avatar',
    exportAs: 'mark6Avatar',
    templateUrl: './avatar.html',
    styleUrls: ['./avatar.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6AvatarComponent {

    @HostBinding('class') classes = 'mark6-avatar';

    @HostBinding('class.uploading')
    get isUploading() {
        return this.uploadProgress > 0;
    }

    @Input() public editMode = false;
    // Default Size that we use later to config the Cropper and create a version from the Original Uploaded File.
    @Input() public size = '256x256';
    @Input() public uploadProgress = null;

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-image',
    templateUrl: 'avatar-image.html',
    styleUrls: ['./avatar-image.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6AvatarImageComponent {

    @HostBinding('class') public classes = 'mark6-avatar-image';

    @Input() public image;
    @Input() public alt;

    public defaultImage = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-content',
    templateUrl: 'avatar-content.html',
    styleUrls: ['./avatar-content.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6AvatarContentComponent {

    @HostBinding('class') public classes = 'mark6-avatar-content';

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-content-edit',
    templateUrl: 'avatar-content-edit.html',
    styleUrls: ['./avatar-content-edit.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6AvatarContentEditComponent {

    @HostBinding('class') public classes = 'mark6-avatar-content-edit';

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-upload',
    templateUrl: 'avatar-upload.html',
    styleUrls: ['./avatar-upload.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6AvatarUploadComponent {

    @HostBinding('class') public classes = 'mark6-avatar-upload';

}
