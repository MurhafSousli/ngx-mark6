import {ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';


/**
 * Cover
 *
 * Can contain elements:
 * - etc...
 */
@Component({
    moduleId: module.id,
    selector: 'mark6-cover',
    exportAs: 'mark6Cover',
    templateUrl: './cover.html',
    styleUrls: ['./cover.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6Cover implements OnInit, OnDestroy {
    @HostBinding('class') classes = 'mark6-cover';

    @HostBinding('class.uploading')
    get isUploading() {
        return this.uploadProgress > 0;
    }

    // @ViewChild('fileInput') fileInput: ElementRef;
    // @Input() cover: FileStack[];
    @Input() editMode = false;
    // Default Size that we use later to config the Cropper and create a version from the Original Uploaded File.
    @Input() size = '1024x410';
    @Input() uploadProgress = null;

    // public currentUser: User;
    // TODO @Murhaf - Please make it possible that we can set a default avatar from the Project where we use this NPM Package
    // TODO @Murhaf - I recommend to setup this in the module array in the app.module.ts where the package will be loaded.
    public defaultCover: string;

    // private _cover: FileStack;
    // TODO @Murhaf Please Add Stuff to this Array, And Kill onDestroy to keep Memory Clean and improve Performance
    private subscriptions: Subscription[] = [];

    constructor() {
        // TODO @Murhaf - Check this ConfigService. Maybe you can need it for doing the Config stuff in the app.modules.ts array
        // this.defaultCover = ConfigService.get('noCover');
    }

    // TODO @Sven - Move this Functions out of this Component.
    uploadCover() {
        // TODO - Write Function to Upload Cover. Create a "Album" with Name "Covers" that contains all user Covers.
    }

    editCover() {
        // TODO - Write Function to Edit Cover. Keep Old Covers in Album "Covers"
    }

    removeCover() {
        // TODO - Write Function to Delete Cover. Just set a flag "deleted" but keep it on storage.
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // Kill Everything in Subscription Array to Keep Memory Clean
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }

}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    moduleId: module.id,
    selector: 'mark6-cover-image',
    templateUrl: 'cover-image.html',
    styleUrls: ['./cover-image.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverImage {
    @HostBinding('class') classes = 'mark6-cover-image';

    @Input() image;
    @Input() alt;

    public defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0+A8AAYUBQcxKiF0AAAAASUVORK5CYII='
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    moduleId: module.id,
    selector: 'mark6-cover-edit-menu',
    templateUrl: 'cover-edit-menu.html',
    styleUrls: ['./cover-edit-menu.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverEditMenu {
    @HostBinding('class') classes = 'mark6-cover-edit-menu';
}


/**
 * CoverImage - Component intended to be used within the `<mark6-cover>`.
 */
@Component({
    moduleId: module.id,
    selector: 'mark6-cover-upload-progress',
    templateUrl: 'cover-upload-progress.html',
    styleUrls: ['./cover-upload-progress.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6CoverUploadProgress {
    @HostBinding('class') classes = 'mark6-cover-upload-progress';
}
