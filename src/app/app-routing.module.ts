import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';
import {SiteMessengerComponent} from './sites/site-messenger/site-messenger.component';
import {SiteDropDownComponent} from './sites/site-drop-down/site-drop-down.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'user'},
    {path: 'profile', component: SiteUserProfileComponent},
    {path: 'messenger', component: SiteMessengerComponent},
    {path: 'drop-down', component: SiteDropDownComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
