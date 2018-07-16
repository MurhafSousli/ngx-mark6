import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6AvatarComponent, Mark6AvatarContentComponent, Mark6AvatarImageComponent, Mark6AvatarUploadComponent} from './avatar';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6AvatarComponent,
        Mark6AvatarImageComponent,
        Mark6AvatarContentComponent,
        Mark6AvatarUploadComponent
    ],
    declarations: [
        Mark6AvatarComponent,
        Mark6AvatarImageComponent,
        Mark6AvatarContentComponent,
        Mark6AvatarUploadComponent
    ]
})


export class Mark6AvatarModule {
}
