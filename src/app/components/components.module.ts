import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';

//cada vez que se crea un componente para que este sea reconocido se debe impotar y declarar
//una vez importado el modulo + hedercomponent se debe declara la variable



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ], 
  exports: [
    HeaderComponent,
  ]
})
export class ComponentsModule { }
