import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PasswordModule } from 'primeng/password';


const modPrimeNg: any [] =  [
  ButtonModule,
  CardModule,
  InputTextModule,
  MenuModule,
  PasswordModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg
  ],
  exports:[
    modPrimeNg
  ]
})
export class PrimengModule { }
