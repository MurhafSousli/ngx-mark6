import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6CoverComponent, Mark6CoverContentComponent, Mark6CoverContentEditComponent} from './cover';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Mark6CoverComponent,
        Mark6CoverContentComponent,
        Mark6CoverContentEditComponent
    ],
    declarations: [
        Mark6CoverComponent,
        Mark6CoverContentComponent,
        Mark6CoverContentEditComponent
    ]
})


export class Mark6CoverModule {
}
