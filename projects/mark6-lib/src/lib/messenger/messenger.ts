import {Component, ElementRef, HostBinding, HostListener, Input, ViewChild, ViewEncapsulation} from '@angular/core';


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

    // public test = false;

    @HostBinding('class') classes = 'mark6-messenger-history';

    /*
        @HostListener('scroll', ['$event'])
        public scrollHandler(event) {
            let obj = document.getElementById('markMessageHistory');
            let objScrollHeight = Math.round((obj.scrollTop) * 100) / 100;
            if ( (objScrollHeight) === (obj.scrollHeight - obj.offsetHeight - 0.55)) {
                console.log('object to bottom');
            }
        }


        @HostListener('window:scroll', [])
        onScroll(): void {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.test = true;
            } else {
                this.test = false;
            }
        }
        */

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
    selector: 'mark6-messenger-attachments',
    exportAs: 'Mark6MessengerAttachments',
    templateUrl: './messenger-attachments.html',
    styleUrls: ['./messenger-attachments.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerAttachmentsComponent {

    @Input() public attachments = [];

    @HostBinding('class') classes = 'mark6-messenger-attachments';

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
