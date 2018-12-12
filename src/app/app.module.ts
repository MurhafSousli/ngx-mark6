import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Sites
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';

// Material 2
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';

// Mark6
import {Mark6AvatarModule} from '../../projects/mark6-lib/src/lib/avatar';
import {Mark6CoverModule} from '../../projects/mark6-lib/src/lib/cover';
import {Mark6DropDownModule} from '../../projects/mark6-lib/src/lib/drop-down';
import {Mark6MessengerModule} from '../../projects/mark6-lib/src/lib/messenger';
import {SiteMessengerComponent} from './sites/site-messenger/site-messenger.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SiteDropDownComponent} from './sites/site-drop-down/site-drop-down.component';


@NgModule({
    declarations: [
        AppComponent,
        // Sites
        SiteUserProfileComponent,
        SiteMessengerComponent,
        SiteDropDownComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        // Material 2
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        // Mark6
        Mark6AvatarModule,
        Mark6DropDownModule,
        Mark6CoverModule,
        Mark6MessengerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule {
}
