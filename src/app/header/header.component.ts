import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() navbarItemSelected = new EventEmitter<string>();

  onSelect(navBarItem: string) {
    this.navbarItemSelected.emit(navBarItem);
  }

}
