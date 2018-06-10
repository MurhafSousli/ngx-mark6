import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';


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
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'mark6-avatar',
        '[class.uploading]': 'uploadProgress > 0',
    }
})
export class Mark6Avatar {

    @Input() editMode = false;
    // Default Size that we use later to config the Cropper and create a version from the Original Uploaded File.
    @Input() size = '256x256';
    @Input() uploadProgress = null;

    constructor() {
    }

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-image',
    templateUrl: 'avatar-image.html',
    styleUrls: ['./avatar-image.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6AvatarImage {
    @HostBinding('class') classes = 'mark6-avatar-image';

    @Input() image;
    @Input() alt;

    public defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0+A8AAYUBQcxKiF0AAAAASUVORK5CYII=';
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-content',
    templateUrl: 'avatar-content.html',
    styleUrls: ['./avatar-content.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6AvatarContent {
    @HostBinding('class') classes = 'mark6-avatar-content';
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    selector: 'mark6-avatar-upload',
    templateUrl: 'avatar-upload.html',
    styleUrls: ['./avatar-upload.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6AvatarUpload {
    @HostBinding('class') classes = 'mark6-avatar-upload';
}
