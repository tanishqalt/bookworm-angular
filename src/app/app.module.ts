import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RequestFormComponent } from './components/user/request-form/request-form.component';
import { ReadingListComponent } from './components/user/reading-list/reading-list.component';
import { BookPickerComponent } from './components/user/book-picker/book-picker.component';
import { BookBrowserComponent } from './components/user/book-browser/book-browser.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { OpenNavBarComponent } from './components/open-nav-bar/open-nav-bar.component';
import { InventoryComponent } from './components/library/inventory/inventory.component';
import { ListOfUsersComponent } from './components/library/list-of-users/list-of-users.component';
import { ReadingRadarComponent } from './components/library/reading-radar/reading-radar.component';
import { RequestListComponent } from './components/library/request-list/request-list.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    RequestFormComponent,
    ReadingListComponent,
    BookPickerComponent,
    BookBrowserComponent,
    LoginUserComponent,
    OpenNavBarComponent,
    InventoryComponent,
    ListOfUsersComponent,
    ReadingRadarComponent,
    RequestListComponent,
    RegisterUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
