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



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GuestComponent,
    AdminComponent,
    ArticleComponent

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
      }

    ])
  ],
  providers: [ ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
