import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mark6ImageComponent, Mark6ImageDirective, Mark6ImgComponent, Mark6BackgroundComponent } from './image';


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
        Mark6ImageDirective,
        Mark6ImgComponent,
        Mark6BackgroundComponent
    ],
    entryComponents: [Mark6ImgComponent, Mark6BackgroundComponent]
})


export class Mark6ImageModule {
}
