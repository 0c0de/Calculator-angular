import { Component, HostListener } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';
  tempNum = '';
  opToShow = '';
  result = [];
  finalResult = 0;

  @HostListener('document:keydown', ['$event'])
  handleKeyBoardKeyPressed(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case '1':
        this.onPressedNumber('1');
        break;
      case '2':
        this.onPressedNumber('2');
        break;
      case '3':
        this.onPressedNumber('3');
        break;
      case '4':
        this.onPressedNumber('4');
        break;
      case '5':
        this.onPressedNumber('5');
        break;
      case '6':
        this.onPressedNumber('6');
        break;
      case '7':
        this.onPressedNumber('7');
        break;
      case '8':
        this.onPressedNumber('8');
        break;
      case '9':
        this.onPressedNumber('9');
        break;
      case '0':
        this.onPressedNumber('0');
        break;
      case '*':
        this.onPressedOP('*');
        break;
      case '+':
        this.onPressedOP('+');
        break;
      case '-':
        this.onPressedOP('-');
        break;
      case 'Enter':
        this.onCalculate();
        break;
      case '/':
        this.onPressedOP('/');
        break;
      case 'Backspace':
        this.onPressedClear();
        break;
    }
  }

  onPressedOP(op: string) {
    if (this.tempNum.trim() !== '') {
      this.result.push(parseInt(this.tempNum, 10));
    }
    this.result.push(op);
    this.opToShow += op;
    this.tempNum = '';
    console.log(this.result);
  }

  onPressedNumber(num: string) {
    this.opToShow += num;
    this.tempNum += num;
  }

  onPressedClear() {
    console.log('Cleared calcs');
    this.tempNum = '';
    this.opToShow = '';
    this.result = [];
  }

  onCalculate() {
    this.result.push(parseInt(this.tempNum, 10));
    this.result.push('=');
    this.tempNum = '';
    for (let i = 1; i < this.result.length; i += 2) {
      const actualArrVal = this.result[i];
      switch (actualArrVal) {
        case '+':
          this.finalResult = this.result[i - 1] + this.result[i + 1];
          break;
        case '*':
          this.finalResult = this.result[i - 1] * this.result[i + 1];
          break;
        case '-':
          this.finalResult = this.result[i - 1] - this.result[i + 1];
          break;
        case '/':
          this.finalResult = this.result[i - 1] / this.result[i + 1];
          break;
        default:
          console.log(`An strange symbol found maybe an equal sign?`);
          break;
      }
    }
    this.opToShow = this.finalResult.toString();
    this.result.push(this.finalResult);

    console.log(`Array values: ${this.result}`);
    console.log(`Final Operation: ${this.finalResult}`);
  }
}
