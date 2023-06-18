import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ConfigComponent } from "./config/config.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { MenuitemComponent } from "./menuitem/menuitem.component";
import { RightPanelComponent } from "./right-panel/right-panel.component";
import { TopbarComponent } from "./topbar/topbar.component";

export const components: any[] = [
    TopbarComponent,
    RightPanelComponent,
    FooterComponent,
    ConfigComponent,
    MenuComponent,
    BreadcrumbComponent,
    MenuitemComponent,
  ];

export * from "./topbar/topbar.component";
export * from "./right-panel/right-panel.component";
export * from "./footer/footer.component";
export * from "./config/config.component";
export * from "./menu/menu.component";
export * from "./breadcrumb/breadcrumb.component";
export * from "./menuitem/menuitem.component";
