import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article/article.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  title = 'World!';
  todaysDate;

  constructor( private articleService : ArticleService){
    
  }
 
ngOnInit(){

  this.todaysDate = this.articleService.showDate();


}
  

}
