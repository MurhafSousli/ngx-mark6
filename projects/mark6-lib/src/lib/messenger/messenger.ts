import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

/**
 * Theme Picker
 *
 * Can contain elements:
 * - etc...
 */
@Component({
    selector: 'mark6-theme-picker',
    exportAs: 'mark6ThemePicker',
    templateUrl: './theme-picker.html',
    styleUrls: ['./theme-picker.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6Messenger {

    @HostBinding('class') classes = 'mark6-messenger';

    constructor() {
    }

}



