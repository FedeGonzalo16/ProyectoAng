import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/servicios/data-page.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor( public service: DataPageService ) { }

  ngOnInit(): void {
  }

}
