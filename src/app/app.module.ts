import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GuestComponent } from './guest/guest.component';
import { AdminComponent } from './admin/admin.component';
// import { Http } from '@angular/http';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GuestComponent,
    AdminComponent,
    ArticleComponent,
    PersonComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
      },
      {
        path: 'article-cmp',
        component: ArticleComponent
      },
      {
        path: 'person-cmp',
        component: PersonComponent
      }

    ])
  ],
  providers: [ ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
