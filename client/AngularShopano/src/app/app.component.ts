import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopano';

  searchTerm = '';
  isCollapsed = true;

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropDown(dropdown) {
    dropdown.close();
  }

  logout() {

  }
  search() {

  }



}
