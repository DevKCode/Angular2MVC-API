import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateAppComponent } from './create-app/create-app.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './Profile/user/user.component';
import { ContactComponent } from './Profile/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAppComponent,
    ProfileComponent,
    UserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
