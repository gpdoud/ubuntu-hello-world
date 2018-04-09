import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Hello, {{name}}!</p>
    
  `
})
export class AppComponent {
  name = 'Greg';
}
