import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-initclient',
  templateUrl: './initclient.component.html',
  styleUrls: ['./initclient.component.css']
})
export class InitclientComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Privacidad y personalización', cols: 1, rows: 1 },
          { title: 'Gestión De Cuenta', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Privacidad y personalización', cols: 1, rows: 1 },
        { title: 'Gestión De Cuenta', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
