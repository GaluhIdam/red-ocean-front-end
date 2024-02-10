import { Component } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  loading: boolean = true;
  animate: boolean | null = null;

  constructor() {
    setTimeout(() => {
      this.animate = true;
    }, 1000);
    setTimeout(() => {
      this.animate = false;
    }, 2000);
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
