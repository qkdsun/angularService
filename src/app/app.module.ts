import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './share/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './share/logger.service';
import { Stock2Service } from './share/stock2.service';


@NgModule({
	declarations: [
			AppComponent,
			StockComponent,
			Stock2Component
	],
	imports: [
		BrowserModule
	],

  // useClass、useValue、useFactory
  // 工厂方法创建出来的对象 是一个单利对象
  providers: [

	{provide:StockService, useFactory: (logger:LoggerService)=> {
		let dev = Math.random() > 0.5
		if(dev){
			return new StockService(logger)
		}else{
			return new Stock2Service(logger)
		}
	}, deps: [LoggerService]},

	LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

