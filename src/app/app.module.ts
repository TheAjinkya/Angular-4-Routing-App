import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GuestComponent } from './guest/guest.component';
import { AdminComponent } from './admin/admin.component';
import { Http } from '@angular/http/src/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GuestComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path: 'user-cmp',
         component: UserComponent
      },
      {
        path: 'guest-cmp',
        component: GuestComponent
     },
     {
      path: 'admin-cmp',
      component: AdminComponent
   }

   ])
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
