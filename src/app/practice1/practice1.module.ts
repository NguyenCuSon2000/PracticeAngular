import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Practice1Component } from './practice1.component';
import { RouterModule, Routes } from '@angular/router';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { FormsModule } from '@angular/forms';
import { Exercise4Component } from './exercise4/exercise4.component';
import { Exercise5Component } from './exercise5/exercise5.component';
import { Exercise6Component } from './exercise6/exercise6.component';
import { Exercise7Component } from './exercise7/exercise7.component';
import { Exercise8Component } from './exercise8/exercise8.component';

export const practice1Route: Routes = [
  {
    path: '',
    component: Practice1Component,
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
      {
        path: 'exercise4',
        component: Exercise4Component,
      },
      {
        path: 'exercise5',
        component: Exercise5Component,
      },
      {
        path: 'exercise6',
        component: Exercise6Component,
      },
      {
        path: 'exercise7',
        component: Exercise7Component,
      },
      {
        path: 'exercise8',
        component: Exercise8Component,
      },
    ]
  }
];

@NgModule({
  declarations: [
    Practice1Component,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    Exercise5Component,
    Exercise6Component,
    Exercise7Component,
    Exercise8Component
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(practice1Route),
  ]
})
export class Practice1Module { }
