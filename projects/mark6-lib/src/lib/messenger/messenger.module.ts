import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    Mark6Messenger, Mark6MessengerActions, Mark6MessengerFooter, Mark6MessengerHistory, Mark6MessengerMessage,
    Mark6MessengerTextarea
} from './messenger';
import {Mark6TextAreaAutoSizeDirective} from '../directives/text-area-auto-size';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6Messenger,
        Mark6MessengerHistory,
        Mark6MessengerMessage,
        Mark6MessengerFooter,
        Mark6MessengerActions,
        Mark6MessengerTextarea
    ],
    declarations: [
        Mark6TextAreaAutoSizeDirective,
        Mark6Messenger,
        Mark6MessengerHistory,
        Mark6MessengerMessage,
        Mark6MessengerFooter,
        Mark6MessengerActions,
        Mark6MessengerTextarea
    ],
    providers: []
})


export class Mark6MessengerModule {
}
