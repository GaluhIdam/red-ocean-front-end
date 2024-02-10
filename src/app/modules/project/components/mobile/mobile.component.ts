import { Component } from '@angular/core';
import { CardProjectStackDTO } from 'src/app/shared/components/card-project-stack/card-project-stack.interface';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  project: CardProjectStackDTO[] = [
    {
      title: 'Nex Knowledge Management',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '/project/nex-knowledge-management',
      bgProject: './assets/project-showcase-1.jpg',
      stackTech: [
        './assets/nestjs-icon.png',
        './assets/angular-icon.png',
        './assets/postgresql-icon.png',
      ],
    },
    {
      title: 'SP Document',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '/project/nex-knowledge-management',
      bgProject: './assets/project-showcase-1.jpg',
      stackTech: [
        './assets/nestjs-icon.png',
        './assets/angular-icon.png',
        './assets/postgresql-icon.png',
      ],
    },
    {
      title: 'GSMART',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '/project/nex-knowledge-management',
      bgProject: './assets/project-showcase-1.jpg',
      stackTech: [
        './assets/nestjs-icon.png',
        './assets/angular-icon.png',
        './assets/postgresql-icon.png',
      ],
    },
    {
      title: 'Pusat Logistik Berikat',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '/project/nex-knowledge-management',
      bgProject: './assets/project-showcase-1.jpg',
      stackTech: [
        './assets/nestjs-icon.png',
        './assets/angular-icon.png',
        './assets/postgresql-icon.png',
      ],
    },
  ];
}
