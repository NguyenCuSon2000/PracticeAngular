import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Practice2Component } from './practice2.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';

export const practice2Route: Routes = [
  {
    path: '',
    component: Practice2Component,
    children: [
      {
        path: 'exercise1',
        component: Exercise1Component,
      },
      {
        path: 'exercise2',
        component: Exercise2Component,
      },
      {
        path: 'exercise3',
        component: Exercise3Component,
      },
    ]
  }
];

@NgModule({
  declarations: [
    Practice2Component,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(practice2Route),
  ]
})
export class Practice2Module { }
