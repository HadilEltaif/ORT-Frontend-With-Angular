import { Router } from '@angular/router';
import { AuthreService } from './../../services/authre.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signinre',
  templateUrl: './signinre.component.html',
  styleUrls: ['./signinre.component.css']
})
export class SigninreComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthreService, private router: Router) {}

  ngOnInit(): void {
   if (this.auth.isLoggedIn()) {
      this.router.navigate(['homer']);
    }
  }
  onSubmit(): void {
   if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['homer']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
