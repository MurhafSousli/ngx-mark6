import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mark6ImageComponent } from './image';
import { LazyImage } from './lazy-image';

@NgModule({
    imports: [CommonModule],
    exports: [Mark6ImageComponent, LazyImage],
    declarations: [Mark6ImageComponent, LazyImage]
})
export class Mark6ImageModule {}
