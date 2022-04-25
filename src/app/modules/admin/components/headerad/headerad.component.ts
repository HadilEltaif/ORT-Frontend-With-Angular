import { Component, OnInit } from '@angular/core';
import { AuthadService } from 'src/app/services/authad.service';

@Component({
  selector: 'app-headerad',
  templateUrl: './headerad.component.html',
  styleUrls: ['./headerad.component.css']
})
export class HeaderadComponent implements OnInit {

  constructor(private auth: AuthadService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

}
