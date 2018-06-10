import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6Cover, Mark6CoverEditMenu, Mark6CoverImage} from './cover';
import {MatCardModule, MatIconModule, MatListModule, MatProgressBarModule} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports: [
        Mark6Cover,
        Mark6CoverImage,
        Mark6CoverEditMenu
    ],
    declarations: [
        Mark6Cover,
        Mark6CoverImage,
        Mark6CoverEditMenu
    ]
})


export class Mark6CoverModule {
}
