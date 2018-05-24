import { Injectable } from '@angular/core';
import { StockService, Stock } from './stock.service';

@Injectable()
export class Stock2Service implements StockService{

	getStock(): Stock {
		return new Stock(2, '微软')
	}
  	constructor() { }

}
