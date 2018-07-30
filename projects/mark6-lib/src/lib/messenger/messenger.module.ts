import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    Mark6MessengerComponent,
    Mark6MessengerHistoryComponent,
    Mark6MessengerMessageComponent,
    Mark6MessengerFooterComponent,
    Mark6MessengerActionsComponent,
    Mark6MessengerTextAreaComponent,
    Mark6MessengerAttachmentsComponent
} from './messenger';
import {Mark6TextAreaAutoSizeDirective} from '../directives/text-area-auto-size';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Mark6MessengerComponent,
        Mark6MessengerHistoryComponent,
        Mark6MessengerMessageComponent,
        Mark6MessengerAttachmentsComponent,
        Mark6MessengerFooterComponent,
        Mark6MessengerActionsComponent,
        Mark6MessengerTextAreaComponent
    ],
    declarations: [
        Mark6TextAreaAutoSizeDirective,
        Mark6MessengerComponent,
        Mark6MessengerHistoryComponent,
        Mark6MessengerMessageComponent,
        Mark6MessengerAttachmentsComponent,
        Mark6MessengerFooterComponent,
        Mark6MessengerActionsComponent,
        Mark6MessengerTextAreaComponent
    ],
    providers: []
})


export class Mark6MessengerModule {
}
