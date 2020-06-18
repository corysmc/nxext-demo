import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibraryAngularModule } from '@nxext-demo/my-library-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibraryAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
