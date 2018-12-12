import {Component} from '@angular/core';


@Component({
    selector: 'app-site-drop-down',
    templateUrl: './site-drop-down.component.html',
    styleUrls: ['./site-drop-down.component.scss']
})


export class SiteDropDownComponent {

    public demoEntries = [
        {
            title: 'Entrie 1'
        },
        {
            title: 'Entrie 2'
        },
        {
            title: 'Entrie 3'
        }
    ];

}
