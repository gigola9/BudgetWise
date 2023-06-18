import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../containers';

@Component({
  selector: 'app-topbar',
  template: `
      <div class="layout-topbar">
          <div class="layout-topbar-wrapper">
              <div class="layout-topbar-left">
                  <div class="layout-topbar-logo" id="logolink" style="cursor: pointer; outline: none;" routerLink="/">
                      <img id="app-logo"
                          style="height: 45px; margin-top: 7px;"
                           src="assets/logos/aaa.png"
                           alt="poseidon-layout">
                  </div>
              </div>

              <div class="layout-topbar-right">
                  <a class="menu-button" href="#" (click)="appMain.onMenuButtonClick($event)">
                      <i class="pi pi-bars"></i>
                  </a>

                  <ul class="layout-topbar-actions">
                      <li #searchItem class="search-item topbar-item" [ngClass]="{'active-topmenuitem': appMain.search}">
                          <a href="#" (click)="appMain.onTopbarItemClick($event,searchItem)">
                              <span class="topbar-icon">
                                  <i class="pi pi-search"></i>
                              </span>
                          </a>
                          <ul class="fadeInDown">
                              <div class="search-input-wrapper p-fluid">
                                  <span class="p-input-icon-left">
                                      <i class="pi pi-search"></i>
                                      <input type="text" pInputText placeholder="Search..." (click)="appMain.searchClick = true;"/>
                                  </span>
                              </div>
                          </ul>
                      </li>
                      <li #notifications class="topbar-item notifications"
                          [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === notifications}">
                          <a href="#" (click)="appMain.onTopbarItemClick($event,notifications)">
                              <span class="p-overlay-badge topbar-icon">
                                  <i class="pi pi-bell" pBadge value="5"></i>
                              </span>
                          </a>
                          <ul class="fadeInDown">
                              <li class="layout-submenu-header">
                                  <h6 class="header-text">Notifications</h6>
                                  <span class="p-badge">5</span>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <img src="assets/logos/rs.ge.png">
                                      <div class="notifications-item">
                                          <h6>Important Reminder</h6>
                                          <span>Monthly Declaration Due in 3 Days</span>
                                      </div>
                                  </a>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <i class="pi pi-shopping-cart"></i>
                                      <div class="notifications-item">
                                          <h6>Payment Received</h6>
                                          <span>Your payment has been received.</span>
                                      </div>
                                  </a>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <i class="pi pi-clock"></i>
                                      <div class="notifications-item">
                                          <h6>Upcoming Invoice Reminder</h6>
                                          <span>You have an upcoming invoice due.</span>
                                      </div>
                                  </a>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                     <img src="assets/logos/bog.png">
                                      <div class="notifications-item">
                                          <h6>Bank Of Georgia</h6>
                                          <span>Secure a loan for your 'Summer Spritz' project at 11.45 % interest rate</span>
                                      </div>
                                  </a>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <i class="pi pi-th-large" style="width:40px;"></i>
                                      <div class="notifications-item">
                                          <h6>Budget Exceeded Alert!</h6>
                                          <span>Your project expenses have exceeded the budget.</span>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li #profile class="topbar-item user-profile"
                          [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === profile}">
                          <a href="#" (click)="appMain.onTopbarItemClick($event,profile)">
                          <i class="pi pi-user" style="margin: 2px;"></i>
                              <div class="profile-info">
                                  <h6>Giorgi Asanidze</h6>
                              </div>
                          </a>

                          <ul class="fadeInDown">
                              <li class="layout-submenu-header">
                              <i class="pi pi-user" style="color: white;" id="top-bar-menu-username"></i>
                                  <div class="profile-info">
                                      <h6>Giorgi Asanidze</h6>
                                  </div>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <i class="pi pi-cog"></i>
                                      <h6>Settings</h6>
                                  </a>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <i class="pi pi-compass"></i>
                                      <h6>Support</h6>
                                  </a>
                              </li>
                              <li role="menuitem">
                                  <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                      <i class="pi pi-power-off"></i>
                                      <h6>Logout</h6>
                                  </a>
                              </li>
                          </ul>
                      </li>
                  </ul>

                  <a class="layout-rightpanel-button" href="#" (click)="appMain.onRightPanelButtonClick($event)">
                      <i class="pi pi-arrow-left"></i>
                  </a>
              </div>
          </div>
      </div>
  `
})
export class TopbarComponent implements OnInit {

  constructor(public appMain: MainComponent) {
  }

  ngOnInit(): void {
  }

}
