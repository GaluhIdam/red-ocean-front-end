import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CardArticleDTO } from 'src/app/shared/components/card-article/card-article.interface';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
})
export class HighlightComponent {
  faCheckCircle = faCheckCircle;

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
