import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6CoverComponent, Mark6CoverEditMenuComponent, Mark6CoverImageComponent} from './cover';
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
        Mark6CoverComponent,
        Mark6CoverImageComponent,
        Mark6CoverEditMenuComponent
    ],
    declarations: [
        Mark6CoverComponent,
        Mark6CoverImageComponent,
        Mark6CoverEditMenuComponent
    ]
})


export class Mark6CoverModule {
}
