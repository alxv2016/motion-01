import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgObjectComponent} from './svg-object/svg-object.component';
import {ArtFrameComponent} from './art-frame/art-frame.component';

@NgModule({
  declarations: [SvgObjectComponent, ArtFrameComponent],
  exports: [SvgObjectComponent, ArtFrameComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
