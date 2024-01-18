import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  declarations: [DocumentationComponent, HeroComponent, HighlightComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DocumentationRoutingModule,
    SharedModule,
  ],
})
export class DocumentationModule {}
