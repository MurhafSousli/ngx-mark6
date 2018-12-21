import {Component, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'mark6-image',
    exportAs: 'mark6Image',
    // templateUrl: './image.html',
    template: `
        <ng-container *ngIf="imageLoaded">
            <img class="mark6-image" *ngIf="src" [src]="src" [attr.alt]="alt"/>
        </ng-container>
        <div *ngIf="!imageLoaded" class="mark6-placeholder" [style.paddingTop.%]="100 / (width / height)" [style.backgroundColor]="backgroundColor"></div>
    `,
    styleUrls: ['./image.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6ImageComponent implements OnInit {

    @ViewChild('imgContainer', {read: ElementRef}) container: ElementRef;

    @Input() public src = null;
    @Input() public alt = null;
    @Input() public width = 1;
    @Input() public height = 1;
    @Input() public backgroundColor = '#404040';

    @HostBinding('class') classes = 'mark6-image';

    public imageLoaded = false;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        if (this.src) {
            const img = this.renderer.createElement('img');
            img.onload = () => {
                this.imageLoaded = true;
                this.renderer.appendChild(this.container.nativeElement, img);
            };
            img.src = this.src;
        }
    }

}


@Directive({
    selector: `mark6-image, [mark6-image]`
})
export class Mark6ImageDirective {
    @HostBinding('class') classes = 'mark6-image';
}
