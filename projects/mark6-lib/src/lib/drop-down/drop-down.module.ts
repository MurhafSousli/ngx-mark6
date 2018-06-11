import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6DropDown, Mark6DropDownContent, Mark6DropDownOrigin, Mark6DropDownTrigger} from './drop-down';
import {DropDownService} from './drop-down.service';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Mark6DropDown,
        Mark6DropDownTrigger,
        Mark6DropDownOrigin,
        Mark6DropDownContent
    ],
    declarations: [
        Mark6DropDown,
        Mark6DropDownTrigger,
        Mark6DropDownOrigin,
        Mark6DropDownContent
    ],
    providers: [
        DropDownService
    ]
})


export class Mark6DropDownModule {
}