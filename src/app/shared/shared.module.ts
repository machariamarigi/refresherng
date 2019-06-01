import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { SidenavWrapperComponent } from './layout/sidenav-wrapper/sidenav-wrapper.component';

@NgModule({
  declarations: [ContentWrapperComponent, SidenavWrapperComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ContentWrapperComponent,
    SidenavWrapperComponent
  ]
})
export class SharedModule {}
