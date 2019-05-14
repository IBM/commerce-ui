import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../features/user-management/pipe/search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPipe],
  exports: [SearchPipe]
})
export class SearchPipeModule { }
