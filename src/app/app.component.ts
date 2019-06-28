import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
    Running {{ title }}...
  </h1>
  <app-ice-cream-decorator></app-ice-cream-decorator>
</div>
`
})
export class AppComponent {
  title = 'ice-cream-decorators';
}
