import {Component, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild} from '@angular/core';


@Component({
    selector: 'mark6-image',
    exportAs: 'mark6Image',
    // templateUrl: './image.html',
    template: `
        <img class="mark6-image" *ngIf="src" [src]="src" [attr.alt]="alt" (load)="loaded = true">
        <div
            *ngIf="!loaded"
            class="mark6-placeholder"
            [style.paddingTop.%]="100 / (width / height)"
            [style.backgroundColor]="backgroundColor">
        </div>
    `,
    styleUrls: ['./image.scss']
})
export class Mark6ImageComponent {

    @Input() public src = null;
    @Input() public alt = null;
    @Input() public width = 1;
    @Input() public height = 1;
    @Input() public backgroundColor = '#404040';

    @HostBinding('class') classes = 'mark6-image';

    public loaded = false;

}


@Directive({
    selector: `mark6Image, [mark6Image]`
})
export class Mark6ImageDirective {
    @HostBinding('class') classes = 'mark6-image';
}
