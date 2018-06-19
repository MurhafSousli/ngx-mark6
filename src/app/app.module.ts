import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Sites
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';

// Material 2
import {MatButtonModule} from '@angular/material';

// Mark6
import {Mark6AvatarModule} from '../../projects/mark6-lib/src/lib/avatar';
import {Mark6CoverModule} from '../../projects/mark6-lib/src/lib/cover';
import {Mark6DropDownModule} from '../../projects/mark6-lib/src/lib/drop-down';
import {RouterTestingModule} from '@angular/router/testing';


@NgModule({
    declarations: [
        AppComponent,
        // Sites
        SiteUserProfileComponent
    ],
    imports: [
        BrowserModule,
        RouterTestingModule,
        AppRoutingModule,
        // Material 2
        MatButtonModule,
        // Mark6
        Mark6AvatarModule,
        Mark6DropDownModule,
        Mark6CoverModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule {
}
