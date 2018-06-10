import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
    selector: 'app-site-user-profile',
    templateUrl: './site-user-profile.component.html',
    styleUrls: ['./site-user-profile.component.scss']
})


export class SiteUserProfileComponent implements OnDestroy {

    public user = {
        avatarURL: 'https://avatarfiles.alphacoders.com/752/75205.png',
        birthDate: 514072800000,
        coverURL: 'https://i.imgur.com/VQaJKNO.png',
        displayName: 'Sven',
        email: 'sven@budak.info',
        gender: 'male',
    };

    // Media Querys
    public resMinMobile: MediaQueryList;
    public resMaxMobile: MediaQueryList;
    public resMinDesktop: MediaQueryList;
    public resMaxDesktop: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {

        this.resMinMobile = media.matchMedia('(min-width: 719px)');
        this.resMaxMobile = media.matchMedia('(min-width: 720px)');
        this.resMinDesktop = media.matchMedia('(min-width: 1279px)');
        this.resMaxDesktop = media.matchMedia('(min-width: 1280px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.resMinMobile.addListener(this._mobileQueryListener);
        this.resMaxMobile.addListener(this._mobileQueryListener);
        this.resMinDesktop.addListener(this._mobileQueryListener);
        this.resMaxDesktop.addListener(this._mobileQueryListener);
    }

    uploadAvatar() {
        console.log('Horaaaay Go Avatar... GO!');
    }

    ngOnDestroy(): void {
        this.resMinMobile.removeListener(this._mobileQueryListener);
        this.resMaxMobile.removeListener(this._mobileQueryListener);
        this.resMinDesktop.removeListener(this._mobileQueryListener);
        this.resMaxDesktop.removeListener(this._mobileQueryListener);
    }

}

