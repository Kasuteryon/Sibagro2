import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-internal-login',
  templateUrl: './internal-login.component.html',
  styleUrls: ['./internal-login.component.css']
})
export class InternalLoginComponent implements OnInit {

  validFlag:boolean = true;
  form: FormGroup = new FormGroup({
    Email: new FormControl(''),
    Password : new FormControl('')
  }); 
  constructor(private service:AuthService, 
              private router:Router,
              private snack:MatSnackBar) { }

  ngOnInit(): void {
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  submit(){
    if (this.form.valid){
      try {
        this.service.access(this.form.value).subscribe((result:any) => {
            console.log(result["body"]);
            localStorage.setItem("logged", JSON.stringify(result["body"]["Data"]));
            localStorage.setItem("token", JSON.stringify(result["body"]["Key"]));
            localStorage.setItem("role", result["body"]["Data"]["role_Id"]);

            this.router.navigate(['admin', 'admin-home']);
            this.snack.open("Bienvenido de Nuevo", "Cerrar", {
              duration: 5000
            })
          },
          err => {
            console.log("PASO POR AQUI", err["status"]),
            this.validFlag = false;
          }
          
        ); 
      } catch (error) {
        console.log("paso por aqui!");
        console.log(error);
        this.validFlag = false;
      }
    }
  }

}
