import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})


export class SiteMessengerComponent implements AfterViewInit {

    public messages = [
        {
            direction: 'me', // Required
            user_id: 23, // Required
            user: 'Sven', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'Hi du alter babbsack!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 233, // Required
            user: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 233, // Required
            user: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!' // Optional
        },
        {
            direction: 'others', // Required
            user_id: 2323, // Required
            user: 'Otto', // Optional
            avatar: 'https://www.shareicon.net/download/2015/09/24/106425_man.ico', // Optional
            message: 'Wuaaas?! Ich bin doch kahn babbsack! Du ahler groschepetzer!', // Optional
            attachment: {
                type: 'image',
                thumb: 'https://via.placeholder.com/500x500',
                id: 'j2ikd94fsd923325sdf'
            }
        }
    ];

    // availHeight: number;
    // innerHeight: number;
    // chromeH: number;
    // myInnerHeight = window.innerHeight - this.chromeH;


    // @HostListener('window:resize', ['$event'])
    // onResize(event) {
        // this.myInnerHeight = window.innerHeight - this.chromeH;
    // }

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'send',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/material/baseline-send-24px.svg'));

        // this.availHeight = screen.availHeight;
        // this.innerHeight = window.innerHeight;

        // setTimeout(function () {
            // this.chromeH = window.innerHeight - window.outerHeight;
        // }, 300);
    }

    ngAfterViewInit() {

    }

}

