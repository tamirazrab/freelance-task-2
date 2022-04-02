import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

const MaterialComponents = [
  MatTableModule,
  MatIconModule,
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    CommonModule
  ], exports: [MaterialComponents]
})
export class MaterialModule { }
