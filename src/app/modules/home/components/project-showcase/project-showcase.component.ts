import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardProjectDTO } from 'src/app/shared/components/card-project/card-project.interface';
import { Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css'],
})
export class ProjectShowcaseComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    initTE({ Carousel });
  }
  ngOnDestroy(): void {
    initTE({ Carousel });
  }

  data: CardProjectDTO[] = [
    {
      title: 'Nex Knowledge Management',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '../project/nex-knowledge-management',
      bgProject: './assets/project-showcase-1.jpg',
    },
    {
      title: 'SP Document',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '../project/sp-document',
      bgProject: './assets/project-showcase-1.jpg',
    },
    {
      title: 'GSMART',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '../project/sp-document',
      bgProject: './assets/project-showcase-1.jpg',
    },
    {
      title: 'Pusat Logistik Berikat',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '../project/sp-document',
      bgProject: './assets/project-showcase-1.jpg',
    },
    {
      title: 'Hold Item List',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '../project/sp-document',
      bgProject: './assets/project-showcase-1.jpg',
    },
    {
      title: 'Tech Mancing',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      link: '../project/sp-document',
      bgProject: './assets/project-showcase-1.jpg',
    },
  ];
}
