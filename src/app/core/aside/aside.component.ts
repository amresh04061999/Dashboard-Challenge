import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
 public isDarkMode:boolean;
 public themIcon:string;

  constructor() {
  this.isDarkMode=false;
  this.themIcon='sun-fill';
  }
  ngOnInit(): void {
    this.isDarkMode = JSON.parse(localStorage.getItem('isDarkMode') || 'false');
    this.updateTheme();
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    this.updateTheme();
  }
  private updateTheme() {
    const rootElement = document.documentElement;
    this.isDarkMode?rootElement.classList.add('dark-mode'):rootElement.classList.remove('dark-mode');
    }
  
}
