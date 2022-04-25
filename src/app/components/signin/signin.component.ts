import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

   faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router,private route :ActivatedRoute) {}

  ngOnInit(): void {
   if (this.auth.isLoggedIn()) {
      this.router.navigate(['homec']);
    }
  }
  onSubmit(): void {
   if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['./homec']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
