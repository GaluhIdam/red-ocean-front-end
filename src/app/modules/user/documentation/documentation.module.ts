import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightComponent } from './components/highlight/highlight.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    HeroComponent,
    HighlightComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
