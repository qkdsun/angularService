import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../share/stock.service';
// import { Stock2Service } from '../share/stock2.service';

@Component({
	selector: 'app-stock2',
	templateUrl: './stock2.component.html',
	styleUrls: ['./stock2.component.css'],
	// providers: [{provide: StockService, useClass: Stock2Service}] // 优先级高
})
export class Stock2Component implements OnInit {

	private stock: Stock;

	constructor(public stockService:StockService) { }

	ngOnInit() {
		this.stock = this.stockService.getStock()
	}

}
