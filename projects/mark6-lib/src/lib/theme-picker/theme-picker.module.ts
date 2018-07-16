import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {FormsModule} from '@angular/forms';

// import {Mark6ThemePickerComponent} from './theme-picker';
import {ThemePickerService} from './theme-picker.service';


@NgModule({
    imports: [
        CommonModule,
        // FormsModule
    ],
    exports: [
        // Mark6ThemePickerComponent
    ],
    declarations: [
        // Mark6ThemePickerComponent
    ],
    providers: [
        ThemePickerService
    ]
})


export class Mark6ThemePickerModule {
}
