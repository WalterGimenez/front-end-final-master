import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  datoPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      
      this.datoPortfolio = data;
    });
  }

}
