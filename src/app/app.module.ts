import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import {FormsModule} from '@angular/forms';
import { MyRevPipe } from './my-rev.pipe';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MyChkPipe } from './my-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyRevPipe,
    MyAddPipe,
    MyMultPipe,
    MyChkPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
