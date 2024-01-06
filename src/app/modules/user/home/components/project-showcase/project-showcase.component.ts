import { Component, OnDestroy, OnInit } from '@angular/core';
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
}
