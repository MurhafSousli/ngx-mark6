import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatProgressBarModule} from '@angular/material';
import {Mark6Avatar, Mark6AvatarContent, Mark6AvatarImage} from './avatar';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [
    Mark6Avatar,
    Mark6AvatarImage,
    Mark6AvatarContent
  ],
  declarations: [
    Mark6Avatar,
    Mark6AvatarImage,
    Mark6AvatarContent
  ]
})


export class Mark6AvatarModule {
}
