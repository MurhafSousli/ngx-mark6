import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6Avatar, Mark6AvatarContent, Mark6AvatarImage, Mark6AvatarUpload} from './avatar';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6Avatar,
        Mark6AvatarImage,
        Mark6AvatarContent,
        Mark6AvatarUpload
    ],
    declarations: [
        Mark6Avatar,
        Mark6AvatarImage,
        Mark6AvatarContent,
        Mark6AvatarUpload
    ]
})


export class Mark6AvatarModule {
}
