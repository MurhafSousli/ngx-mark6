import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemePickerService} from './theme-picker.service';

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
export class Mark6ThemePicker implements OnInit {

    @HostBinding('class') classes = 'mark6-theme-picker';

    @Input() themes;
    @Input() defaultTheme;

    public theme: string;

    constructor(private themeService: ThemePickerService) {
        /* Get back the set Theme */
        this.themeService.theme.asObservable().subscribe((theme) => {
            if (theme !== null) {
                /* Write theme in Theme Variable */
                this.theme = theme;
            }
        });
    }

    onThemeChange(value) {
        this.themeService.setTheme(value);
    }

    ngOnInit() {
        /* Set a default Theme */
        this.themeService.setTheme(this.defaultTheme);
    }

}



