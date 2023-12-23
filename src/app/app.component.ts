import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NotesListComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photoEditor';
  isRed = false;
  products = ['apple', 'orange', 'banana'];
  loggedIn = true;
  name = new FormControl('');
  password = 'User Password';
  
  login() {
    alert('Welcome!');
  }
  
  change() {
    this.isRed = !this.isRed;
  }

  showName() {
    alert(this.name);
  }
}

