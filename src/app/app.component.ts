import { Component } from '@angular/core';
import { DataPageService } from './servicios/data-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'VwBodasyEventos';

  constructor(public DataPageService: DataPageService){

  }
}
