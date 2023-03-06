import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  imports:      [ BrowserModule, NgxDocViewerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
