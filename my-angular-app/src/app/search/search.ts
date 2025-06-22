import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
resultValue: any = "Searched Result";
count: number = 0

effectChange(inputEl: any) {
this.resultValue = inputEl.value;
};
}
