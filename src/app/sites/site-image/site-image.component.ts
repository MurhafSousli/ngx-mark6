import { ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
    selector: 'app-image',
    templateUrl: './site-image.component.html',
    styleUrls: ['./site-image.component.scss'],
    encapsulation: ViewEncapsulation.None
})


export class SiteImageComponent {
    src = 'assets/demo/avatar.png';
    backgroundColor = '#ff00ff';
    constructor() {

    }
}
