import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css'],
})
export class HeaderSectionComponent {
  @Input() title: string = 'Title Section';
  @Input() description: string = 'This is for description section';
  @Input() darkColor: string = 'dark:text-white';
}
