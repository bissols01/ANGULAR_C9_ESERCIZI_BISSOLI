import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'card mt-4';
@Input() article: Article;
  votes: number;
  title: string;
  link: string;
  
  
  constructor() { 
    
    
   
  }
 voteUp():Boolean { //Aggiunto tipo di ritorno
    this.article.voteUp(); //accediamo alla proprietà votes di article
    return false; //Non propagare l'evento

}
voteDown():Boolean{
    this.article.voteDown();
    return false; //Non propagare l'evento

}

  ngOnInit() {
  }

}
