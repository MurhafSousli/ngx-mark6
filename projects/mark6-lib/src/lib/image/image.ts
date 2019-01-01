import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mark6-image',
  exportAs: 'mark6Image',
  templateUrl: './image.html',
  styleUrls: ['./image.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.mark6-image]': 'true',
    '[class.mark6-image-load-success]': '!!imageUrl',
    '[class.mark6-image-load-failed]': '!!loadError'
  },
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ],
})

export class Mark6ImageComponent {

  /** Stream that emits the state */
  readonly state = new BehaviorSubject<'loading' | 'success' | 'failed'>('loading');

  /** Image URL after load success */
  imageUrl: SafeUrl;

  /** Load failed error */
  loadError: Error;

  /** Image source URL */
  @Input() src: string;

  /** Image alt attribute */
  @Input() alt: string;

  /** Custom loader template */
  @Input() loadingTemplate: TemplateRef<any>;

  /** Custom error template */
  @Input() errorTemplate: TemplateRef<any>;

  /** Stream that emits when an error occurs */
  @Output() error = new EventEmitter<Error>();

  constructor(private _sanitizer: DomSanitizer) {
  }

  loadSuccess(blobUrl: string) {
    this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(blobUrl);
    this.state.next('success');
  }

  loadFailed(err: Error) {
    this.loadError = err;
    this.state.next('failed');
    this.error.emit(err);
  }

}
