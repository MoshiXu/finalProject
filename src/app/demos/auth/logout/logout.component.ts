import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout()
      .subscribe(res => {
        if (res.success) {
          // this.router.navigate(['/logout]);
        }
      });
  }

}
