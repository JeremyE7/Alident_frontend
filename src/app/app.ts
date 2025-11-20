import { Component } from '@angular/core';
import { MainLayoutComponent } from './components/layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
