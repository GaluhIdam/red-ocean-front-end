import { Component, OnDestroy, OnInit } from '@angular/core';
import {faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';
import {
  Collapse,
  initTE,
} from "tw-elements";


@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css'],
})
export class UserLayoutComponent implements OnInit, OnDestroy {
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    initTE({ Collapse });
  }
  ngOnDestroy(): void {}
  faCircleHalfStroke = faCircleHalfStroke;

  toggleDarkMode(): void {
    this.appService.toggleDarkMode();
  }
}
