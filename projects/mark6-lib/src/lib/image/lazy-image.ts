import { Directive, Input, Output, OnDestroy, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { Subject, Observable, Subscription, SubscriptionLike, zip, fromEvent } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[lazyImage]'
})
export class LazyImage implements OnChanges, OnDestroy {

  private readonly _imageLoader$ = new Subject<string>();
  private _loaderSub$: SubscriptionLike = Subscription.EMPTY;

  @Input('lazyImage') src: string;

  @Output() loadSuccess = new EventEmitter<string>();

  @Output() loadFailed = new EventEmitter<Error>();

  constructor() {
    this._loaderSub$ = this._imageLoader$.pipe(
      switchMap((imageSrc: string) => this.imageLoader(imageSrc))
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
      this.loadImage(this.src);
    }
  }

  ngOnDestroy() {
    this._loaderSub$.unsubscribe();
    this._imageLoader$.complete();
  }

  loadImage(url: string) {
    this._imageLoader$.next(url);
  }

  /**
   * Image loader
   * @param url
   */
  imageLoader(url: string): Observable<any> {
    const img = new Image();
    // Stop previously loading
    img.src = url;
    // Image load success
    const loadSuccess = fromEvent(img, 'load').pipe(
      tap(() => this.loadSuccess.emit(url))
    );
    // Image load failed
    const loadError = fromEvent(img, 'error').pipe(
      tap(() => this.loadFailed.emit(new Error(`[lazyImage]: The image ${url} did not load`)))
    );
    return zip(loadSuccess, loadError);
  }

}
