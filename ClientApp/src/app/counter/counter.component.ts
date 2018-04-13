import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
 
  public partNumber: string;
  public oldPartNumber: string;
  public productCodes = [
  { Name: 'MS Office', value: 1 },
  { Name: 'Windows 10', value: 2 },
  { Name: 'Visual Studio', value: 3 },
  { Name: 'SQL Server', value: 4 },
  { Name: 'MSBI', value: 5 }
  ];

  @ViewChild('partItemForm') form;

  ngOnInit(): void {
    this.formValid = this.form.status;
  }



  public formValid: string;

  

  public incrementCounter() {
    this.partNumber = '';
    this.oldPartNumber = '';

  }

}
