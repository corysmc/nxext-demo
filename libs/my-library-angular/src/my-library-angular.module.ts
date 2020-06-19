import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './generated/directives/proxies';
import { defineCustomElements } from "@nxext-demo/my-library/loader";

defineCustomElements(window);

const DECLARATIONS = [
  MyComponent
];


@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS
})
export class MyLibraryAngularModule { }
