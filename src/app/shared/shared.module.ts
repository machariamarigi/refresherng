import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { LayoutWrapperComponent } from './layout/layout-wrapper/layout-wrapper.component';

@NgModule({
  declarations: [LayoutWrapperComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [MaterialModule, FlexLayoutModule, LayoutWrapperComponent]
})
export class SharedModule {}
