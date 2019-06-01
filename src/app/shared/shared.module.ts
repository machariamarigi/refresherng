import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [LayoutComponent, MaterialModule, FlexLayoutModule]
})
export class SharedModule {}
