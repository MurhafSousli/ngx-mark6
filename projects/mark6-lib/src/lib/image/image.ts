import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mark6-image',
  exportAs: 'mark6Image',
  templateUrl: './image.html',
  styleUrls: ['./image.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.mark6-image]': 'true'
  }
})

export class Mark6ImageComponent {

  /** Image loading state */
  state: 'loading' | 'success' | 'failed' = 'loading';

  /** Image URL after load success */
  url: string;

  /** Image source URL */
  @Input() src: string;

  /** Image alt attribute */
  @Input() alt: string;

  constructor(private _cd: ChangeDetectorRef) {
  }

  loadSuccess(url: string) {
    this.url = url;
    this.state = 'success';
    this._cd.detectChanges();
  }

  loadFailed() {
    this.state = 'failed';
    this._cd.detectChanges();
  }

}
