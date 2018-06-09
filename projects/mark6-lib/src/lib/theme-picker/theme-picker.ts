import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemePickerService} from "./theme-picker.service";

/**
 * Theme Picker
 *
 * Can contain elements:
 * - etc...
 */
@Component({
    moduleId: module.id,
    selector: 'mark6-theme-picker',
    exportAs: 'mark6ThemePicker',
    templateUrl: './theme-picker.html',
    styleUrls: ['./theme-picker.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'class': 'mark6-theme-picker'}
})
export class ThemePicker implements OnInit {
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



