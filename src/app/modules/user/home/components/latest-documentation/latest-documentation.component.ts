import { Component } from '@angular/core';
import { CardArticleDTO } from 'src/app/shared/components/card-article/card-article.interface';

@Component({
  selector: 'app-latest-documentation',
  templateUrl: './latest-documentation.component.html',
  styleUrls: ['./latest-documentation.component.css'],
})
export class LatestDocumentationComponent {
  article: CardArticleDTO[] = [
    {
      image: './assets/article-image.png',
      date: 'Saturday, November 11 2023',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      description:
        'ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis',
    },
    {
      image: './assets/article-image.png',
      date: 'Saturday, November 11 2023',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      description:
        'ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis',
    },
    {
      image: './assets/article-image.png',
      date: 'Saturday, November 11 2023',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      description:
        'ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis',
    },
    {
      image: './assets/article-image.png',
      date: 'Saturday, November 11 2023',
      title: 'Lorem Ipsum is simply dummy text of the printing',
      description:
        'ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis',
    },
  ];
}
