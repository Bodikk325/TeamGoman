import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showHeader = false;
  mobileMenuOpen = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
