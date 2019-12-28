import { NgModule } from '@angular/core';

import { AddCommasPipe } from '@app/shared/pipes/add-commas.pipe';
import { EllipsisPipe } from '@app/shared/pipes/ellipsis.pipe';

export const PIPES = [AddCommasPipe, EllipsisPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
