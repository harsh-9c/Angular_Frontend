import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css'],
})
export class CardLayoutComponent {
  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    sessionStorage.removeItem('eid');
    sessionStorage.removeItem('useType');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('pid');
    sessionStorage.removeItem('tid');
    this.router.navigate(['login']);
  }
}
