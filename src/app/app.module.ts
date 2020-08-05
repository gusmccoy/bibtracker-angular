import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddRunnersComponent } from './add-runners/add-runners.component';
import { LogRunnersComponent } from './log-runners/log-runners.component';
import { AppRoutingModule } from './app-routing.module';

import {InputNumberModule} from 'primeng/inputnumber';
import {TabMenuModule} from 'primeng/tabmenu';
import { StartListComponent } from './start-list/start-list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AddRunnersComponent,
    LogRunnersComponent,
    StartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputNumberModule,
    TabMenuModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
