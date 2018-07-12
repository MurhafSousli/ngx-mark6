import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6Messenger} from './messenger';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6Messenger
    ],
    declarations: [
        Mark6Messenger
    ],
    providers: []
})


export class Mark6MessengerModule {
}
