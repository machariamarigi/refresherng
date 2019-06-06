import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [ContentWrapperComponent, HeaderComponent ],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ContentWrapperComponent,
    HeaderComponent
  ]
})
export class SharedModule {}
