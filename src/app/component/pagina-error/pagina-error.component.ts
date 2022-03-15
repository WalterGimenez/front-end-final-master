import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-pagina-error',
  templateUrl: './pagina-error.component.html',
  styleUrls: ['./pagina-error.component.css']
})
export class PaginaErrorComponent implements OnInit {
  datoErroneo: any;
  

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datoErroneo = data.error;
    });
  }

}
