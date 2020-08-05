import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-add-runners',
  templateUrl: './add-runners.component.html',
  styleUrls: ['./add-runners.component.css']
})
export class AddRunnersComponent implements OnInit {

  constructor() { }

  val: number;
  tabMenuItems: MenuItem[];
  
  ngOnInit(): void {
    this.tabMenuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Start List', icon: 'pi pi-users'},
      {label: 'Adding', icon: 'pi pi-user-plus'},
      {label: 'Logging', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

  }

}
