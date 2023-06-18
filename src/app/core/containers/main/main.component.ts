import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit, OnDestroy {

  topbarTheme = 'dim';

  menuTheme = 'dim';

  layoutMode = 'light';

  menuMode = 'static';

  isRTL = false;

  inputStyle = 'outlined';

  ripple!: boolean;

  rotateMenuButton!: boolean;

  topbarMenuActive!: boolean;

  overlayMenuActive!: boolean;

  staticMenuDesktopInactive!: boolean;

  staticMenuMobileActive!: boolean;

  menuClick!: boolean;

  topbarItemClick!: boolean;

  activeTopbarItem: any;

  documentClickListener!: () => void;

  configActive!: boolean;

  configClick!: boolean;

  rightPanelActive!: boolean;

  rightPanelClick!: boolean;

  menuHoverActive = false;

  searchClick = false;

  search = false;

  constructor(
    public renderer: Renderer2,
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
  ) {}

  ngAfterViewInit() {
    // hides the horizontal submenus or top menu if outside is clicked
    this.documentClickListener = this.renderer.listen(
      'body',
      'click',
      (event: any) => {
        if (!this.topbarItemClick) {
          this.activeTopbarItem = null;
          this.topbarMenuActive = false;
        }

        if (!this.menuClick && this.isHorizontal()) {
          this.menuService.reset();
        }

        if (this.configActive && !this.configClick) {
          this.configActive = false;
        }

        if (!this.rightPanelClick) {
          this.rightPanelActive = false;
        }

        if (!this.menuClick) {
          if (this.overlayMenuActive) {
            this.overlayMenuActive = false;
          }
          if (this.staticMenuMobileActive) {
            this.staticMenuMobileActive = false;
          }

          this.menuHoverActive = false;
          this.unblockBodyScroll();
        }

        if (!this.searchClick) {
          this.search = false;
        }

        this.searchClick = false;
        this.configClick = false;
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
      }
    );
  }

  onMenuButtonClick(event: any) {
    this.rotateMenuButton = !this.rotateMenuButton;
    this.topbarMenuActive = false;
    this.menuClick = true;

    if (this.menuMode === 'overlay' && !this.isMobile()) {
      this.overlayMenuActive = !this.overlayMenuActive;
    }

    if (this.isDesktop()) {
      this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
      this.staticMenuMobileActive = !this.staticMenuMobileActive;
      if (this.staticMenuMobileActive) {
        this.blockBodyScroll();
      } else {
        this.unblockBodyScroll();
      }
    }

    event.preventDefault();
  }

  onMenuClick($event: any) {
    this.menuClick = true;
  }

  onTopbarItemClick(event: any, item: any) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    if (item.className === 'search-item topbar-item') {
      this.search = !this.search;
      this.searchClick = !this.searchClick;
    }

    event.preventDefault();
  }

  onTopbarSubItemClick(event: any) {
    event.preventDefault();
  }

  onRTLChange(event: any) {
    this.isRTL = event.checked;
  }

  onRippleChange(event: any) {
    this.ripple = event.checked;
    this.primengConfig.ripple = event.checked;
  }

  onConfigClick(event: any) {
    this.configClick = true;
  }

  onRightPanelButtonClick(event: any) {
    this.rightPanelClick = true;
    this.rightPanelActive = !this.rightPanelActive;
    event.preventDefault();
  }

  onRightPanelClick() {
    this.rightPanelClick = true;
  }

  isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  isMobile() {
    return window.innerWidth <= 640;
  }

  isOverlay() {
    return this.menuMode === 'overlay';
  }

  isStatic() {
    return this.menuMode === 'static';
  }

  isHorizontal() {
    return this.menuMode === 'horizontal';
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp(
          '(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      );
    }
  }

  ngOnDestroy() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }
}
