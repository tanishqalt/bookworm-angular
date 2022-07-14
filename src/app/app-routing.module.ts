import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/library/inventory/inventory.component';
import { ListOfUsersComponent } from './components/library/list-of-users/list-of-users.component';
import { ReadingRadarComponent } from './components/library/reading-radar/reading-radar.component';
import { RequestListComponent } from './components/library/request-list/request-list.component';
import { BookBrowserComponent } from './components/user/book-browser/book-browser.component';
import { BookPickerComponent } from './components/user/book-picker/book-picker.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { ReadingListComponent } from './components/user/reading-list/reading-list.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { RequestFormComponent } from './components/user/request-form/request-form.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'user/book-browser',
    component: BookBrowserComponent,
  },
  {
    path: 'user/login',
    component: LoginUserComponent,
  },
  {
    path: 'user/book-picker',
    component: BookPickerComponent,
  },
  {
    path: 'user/register',
    component: RegisterUserComponent,
  },
  {
    path: 'user/reading-list',
    component: ReadingListComponent,
  },
  {
    path: 'user/request-form',
    component: RequestFormComponent,
  },
  {
    path: 'user/profile',
    component: UserProfileComponent,
  },
  // Library Components
  {
    path: 'library/inventory',
    component: InventoryComponent,
  },
  {
    path: 'library/list-of-users',
    component: ListOfUsersComponent,
  },
  {
    path: 'library/reading-radar',
    component: ReadingRadarComponent,
  },
  {
    path: 'library/request-list',
    component: RequestListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
