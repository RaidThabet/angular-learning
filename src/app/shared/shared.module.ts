import {NgModule} from '@angular/core';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent] // tell angular to make it available
})
export class SharedModule {

}
