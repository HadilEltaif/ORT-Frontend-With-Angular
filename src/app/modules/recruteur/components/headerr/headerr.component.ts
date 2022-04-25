import { Component, OnInit } from '@angular/core';
import { AuthreService } from 'src/app/services/authre.service';
@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.css']
})
export class HeaderrComponent implements OnInit {

  constructor(private auth: AuthreService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

}
