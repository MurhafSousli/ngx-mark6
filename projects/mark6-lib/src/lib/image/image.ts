import { Component, Directive, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';


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
    selector: `mark6-img, [mark6-img]`
})
export class Mark6ImageDirective implements OnInit {
    @Input() public src = null;
    @Input() public backgroundColor = null;

    componentRef: any;
    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit() {
        const component = this.src ? Mark6ImgComponent : Mark6BackgroundComponent;
        const factory = this.resolver.resolveComponentFactory(component as any);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.src = this.src;
        this.componentRef.instance.backgroundColor = this.backgroundColor;

    }
}
/* TODO ALEX HERE
constructor(private renderer: Renderer2, private el: ElementRef) {}

ngOnInit() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
}
*/



@Component({
    template: '<img [src]="src" />'
})
export class Mark6ImgComponent {
    @Input() src;
}
@Component({
    template: '<div style="height:100px;width:100px" [style.backgroundColor]="backgroundColor"></div>'
})
export class Mark6BackgroundComponent {
    @Input() backgroundColor;
}
