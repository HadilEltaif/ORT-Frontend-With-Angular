
import { AuthadService } from './../../services/authad.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-siginad',
  templateUrl: './siginad.component.html',
  styleUrls: ['./siginad.component.css']
})
export class SiginadComponent implements OnInit {

  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthadService, private router: Router) {}

  ngOnInit(): void {
   if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  onSubmit(): void {
   if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

}
