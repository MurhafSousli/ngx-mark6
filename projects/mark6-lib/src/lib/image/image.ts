import {Component, Directive, HostBinding, Input, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'mark6-image',
    exportAs: 'mark6Image',
    templateUrl: './image.html',
    styleUrls: ['./image.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6ImageComponent {

    @Input() public src = null;
    @Input() public alt = null;
    @Input() public width = 1;
    @Input() public height = 1;
    @Input() public backgroundColor;

    @HostBinding('class') classes = 'mark6-image';

}


@Directive({
    selector: `mark6-image, [mark6-image]`
})
export class Mark6ImageDirective {
    @HostBinding('class') classes = 'mark6-image';
}
