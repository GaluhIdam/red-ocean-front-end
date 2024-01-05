import { Component, OnDestroy, OnInit } from '@angular/core';
import { Collapse, initTE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    initTE({ Collapse });
  }
  ngOnDestroy(): void {
  }
}
