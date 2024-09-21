import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNavActive: boolean = false;
  activeDropdown: string | null = null;
  logo: string = '../../../../assets/images/HD-BLANCO.png';

  constructor() {}

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }
  toggleDropdown(menu: string) {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const navMenu = document.querySelector('.nav-menu') as HTMLElement;
    const burgerIcon = document.querySelector('.burger-icon') as HTMLElement;
    const dropdowns = document.querySelectorAll('.dropdown') as NodeListOf<HTMLElement>;

    //Cierra el menú de navegación si se hace clic fuera de él
    if (
      !navMenu?.contains(clickedElement) &&
      !burgerIcon?.contains(clickedElement) &&
      this.isNavActive
    ) {
      this.isNavActive = false;
    }

    //Cierra todos los menús desplegables si se hace clic fuera de ellos
    Array.from(dropdowns).forEach((dropdown) => {
      if (!dropdown.contains(clickedElement)) {
        const isActive = dropdown.classList.contains('active');
        if (isActive) {
          dropdown.classList.remove('active');
        }
      }
    });

    //Actualiza el estado del dropdown en el componente
    if (!Array.from(dropdowns).some((dropdown) => dropdown.contains(clickedElement))) {
      this.activeDropdown = null;
    }
  }

  ngOnInit(): void {}
}
