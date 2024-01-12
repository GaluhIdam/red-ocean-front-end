import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent {
  @Input() title: string = 'Project Title';
  @Input() description: string = 'This is for project description';
  @Input() bgProject: string = '../../../../assets/project-showcase-1.jpg';
  @Input() link: string = '/';
  @Input() bgColor: string = 'bg-red-ocean';
}
