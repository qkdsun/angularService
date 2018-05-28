import { Injectable, OnInit } from '@angular/core';
import { StockService, Stock } from './stock.service';
import { LoggerService } from './logger.service';

@Injectable()
export class Stock2Service  implements StockService {
	
	constructor(public logger:LoggerService) { }

	getStock(): Stock {
		this.logger.log("Stock2Service")
		return new Stock(2, '微软')
	}

}
