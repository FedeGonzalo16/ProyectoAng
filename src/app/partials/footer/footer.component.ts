import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/servicios/data-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year: number = new Date().getFullYear();

  constructor(public service: DataPageService) { }

  ngOnInit(): void {
  }

}
