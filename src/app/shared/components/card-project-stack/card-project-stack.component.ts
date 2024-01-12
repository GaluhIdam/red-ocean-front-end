import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project-stack',
  templateUrl: './card-project-stack.component.html',
  styleUrls: ['./card-project-stack.component.css'],
})
export class CardProjectStackComponent {
  @Input() title: string = 'Project Title';
  @Input() description: string = 'Project Description';
  @Input() link: string = '/project-overview';
  @Input() stackTech: string[] = [
    '../../../../../../assets/nestjs-icon.png',
    '../../../../../../assets/angular-icon.png',
    '../../../../../../assets/postgresql-icon.png',
  ];
  @Input() bgProject: string = '../../../../assets/project-showcase-1.jpg';
  @Input() bgColor: string = 'bg-red-ocean';
}
