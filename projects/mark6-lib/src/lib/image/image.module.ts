import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6ImageComponent, Mark6ImageDirective} from './image';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6ImageComponent,
        Mark6ImageDirective
    ],
    declarations: [
        Mark6ImageComponent,
        Mark6ImageDirective
    ]
})


export class Mark6ImageModule {
}
