import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasty-recipes-app';

  loadedNavbarItem = 'recipes';

  onNavigate(navItem: string) {
    this.loadedNavbarItem = navItem;
  }
}
