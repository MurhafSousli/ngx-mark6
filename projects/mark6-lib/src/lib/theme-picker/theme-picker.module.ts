import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ThemePicker} from "./theme-picker";
import {ThemePickerService} from "./theme-picker.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ThemePicker
    ],
    declarations: [
        ThemePicker
    ],
    providers : [
        ThemePickerService
    ]
})


export class Mark6ThemePickerModule {
}
