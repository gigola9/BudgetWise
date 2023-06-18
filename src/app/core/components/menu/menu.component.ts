import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../containers';

@Component({
  selector: 'app-menu',
  template: `
    <ul class="layout-menu">
      <li
        app-menuitem
        *ngFor="let item of model; let i = index"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
    </ul>
  `,
})
export class MenuComponent implements OnInit {
  model!: any[];

  constructor(public app: MainComponent) {}

  ngOnInit() {
    this.model = [
      {
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: ['/'],
          },
          {
            label: 'Projects',
            icon: 'pi pi-th-large',
            routerLink: ['/projects'],
          },
          {
            label: 'Report & Analytics',
            icon: 'pi pi-chart-line',
            routerLink: ['/projects/reports'],
          },
          {
            label: 'Vendor Management',
            icon: 'pi pi-sitemap',
            routerLink: ['/projects/vendros'],
          },
          {
            label: 'Help/Support',
            icon: 'pi pi-bars',
            routerLink: ['/projects/support'],
          },
        ]
      }
    ];
  }
}
