import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {runner} from '../models/runner.model';

@Component({
  selector: 'app-start-list',
  templateUrl: './start-list.component.html',
  styleUrls: ['./start-list.component.css']
})
export class StartListComponent implements OnInit {

  constructor() { }

  tabMenuItems: MenuItem[];
  runners: runner[];

  ngOnInit(): void {
    this.tabMenuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Start List', icon: 'pi pi-users'},
      {label: 'Adding', icon: 'pi pi-user-plus'},
      {label: 'Logging', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    this.runners = [
      { bibNumber: 100, createTimestamp: new Date() },
      { bibNumber: 101, createTimestamp: new Date() },
      { bibNumber: 102, createTimestamp: new Date() },
      { bibNumber: 103, createTimestamp: new Date() },
      { bibNumber: 104, createTimestamp: new Date() },
      { bibNumber: 105, createTimestamp: new Date() },
      { bibNumber: 106, createTimestamp: new Date() },
      { bibNumber: 107, createTimestamp: new Date() },
      { bibNumber: 108, createTimestamp: new Date() },
      { bibNumber: 109, createTimestamp: new Date() }
    ];
  }

}
