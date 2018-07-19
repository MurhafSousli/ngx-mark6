import {
    AfterViewChecked, Component, ElementRef, HostBinding, HostListener, Inject, Input, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
    selector: 'mark6-messenger',
    exportAs: 'Mark6Messenger',
    templateUrl: './messenger.html',
    styleUrls: ['./messenger.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerComponent {

    // @Input() @HostBinding('style.width.px') public width = window.innerWidth;
    // @Input() @HostBinding('style.height.px') public height = window.innerHeight;

    @HostBinding('class') classes = 'mark6-messenger';

    @HostListener('window:resize') onResize() {
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
    }

}


@Component({
    selector: 'mark6-messenger-history',
    exportAs: 'Mark6MessengerHistory',
    templateUrl: './messenger-history.html',
    styleUrls: ['./messenger-history.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerHistoryComponent {

    @HostBinding('class') classes = 'mark6-messenger-history';

}


@Component({
    selector: 'mark6-messenger-message',
    exportAs: 'Mark6MessengerMessage',
    templateUrl: './messenger-message.html',
    styleUrls: ['./messenger-message.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageComponent {

    @Input() public messages = null;
    @Input() public avatarMe = false;
    @Input() public avatarOthers = false;

    @HostBinding('class') classes = 'mark6-messenger-message';

}


@Component({
    selector: 'mark6-messenger-footer',
    exportAs: 'Mark6MessengerFooter',
    templateUrl: './messenger-footer.html',
    styleUrls: ['./messenger-footer.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerFooterComponent {

    @HostBinding('class') classes = 'mark6-messenger-footer';

}


@Component({
    selector: 'mark6-messenger-textarea',
    exportAs: 'Mark6MessengerTextarea',
    templateUrl: './messenger-textarea.html',
    styleUrls: ['./messenger-textarea.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerTextAreaComponent {

    @Input() public placeholder = 'Enter Message ...';

    @HostBinding('class') classes = 'mark6-messenger-textarea';

    @HostListener('click') onClick() {
        this.focusTextArea();
    }

    @ViewChild('textInput') someInput: ElementRef;

    focusTextArea() {
        this.someInput.nativeElement.focus();
    }

}


@Component({
    selector: 'mark6-messenger-actions',
    exportAs: 'Mark6MessengerActions',
    templateUrl: './messenger-actions.html',
    styleUrls: ['./messenger-actions.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerActionsComponent {

    @HostBinding('class') classes = 'mark6-messenger-actions';

}
