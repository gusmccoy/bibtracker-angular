import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddRunnersComponent } from './add-runners/add-runners.component';
import { LogRunnersComponent } from './log-runners/log-runners.component';
import { StartListComponent } from './start-list/start-list.component';

const routes: Routes = [
  { path: 'list', component: StartListComponent },
  { path: 'add', component: AddRunnersComponent },
  { path: 'log', component: LogRunnersComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
