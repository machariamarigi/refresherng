import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [ ContentWrapperComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [MaterialModule, FlexLayoutModule, ContentWrapperComponent]
})
export class SharedModule {}
