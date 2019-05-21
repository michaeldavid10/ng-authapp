import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-protectec',
  templateUrl: './protectec.component.html',
  styles: []
})
export class ProtectecComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
