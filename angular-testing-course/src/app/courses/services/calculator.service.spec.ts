import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { CalculatorService } from './calculator.service';

describe('Calculator Service', () => {

	let calculatorService: CalculatorService;

	beforeEach(() => {
/* 		const loggerService = jasmine.createSpyObj('LoggerService', ["log"]);
		const calculatorService = new CalculatorService(loggerService);

		TestBed.configureTestingModule({
			providers: [
				CalculatorService,
				{ provide: LoggerService, useValue: loggerService }
			]
		});
		calculatorService = TestBed.get(CalculatorService); */

		TestBed.configureTestingModule({});
		calculatorService = TestBed.inject(CalculatorService);

	});

	it('should add two numbers', () => {
		const result = calculatorService.add(2,2);
		expect(result).toBe(4);
	});

	it('should subtract two numbers', () => {
		const result = calculatorService.subtract(2, 2);
		expect(result).toBe(0, "unexpected subtraction result");
	});
})