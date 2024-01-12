import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css'],
})
export class CardArticleComponent {
  @Input() image: string = './assets/article-image.png';
  @Input() date: string = 'Saturday, November 11 2023';
  @Input() title: string = 'Lorem Ipsum is simply dummy text of the printing.';
  @Input() description: string =
    'ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,';
}
