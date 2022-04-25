import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-headerc',
  templateUrl: './headerc.component.html',
  styleUrls: ['./headerc.component.css']
})
export class HeadercComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }
}
