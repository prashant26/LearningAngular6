import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showMessage = true;
  clickLog = [];

  toggleMessage() {
    this.showMessage = (this.showMessage) ? false :  true;
    this.clickLog.push(this.clickLog.length + 1);
  }

  getBgColor(count) {
    if( count >= 5 ) {
        return 'blue';
    } else {
      return 'yellow';
    }
  }

}
