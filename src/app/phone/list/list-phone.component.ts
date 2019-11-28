import {Component, OnInit} from '@angular/core';
import {PhoneService} from '../../service/phone.service';
import {IHttpResult} from '../i-http-result';
import {IPhone} from '../iphone';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css']
})
export class ListPhoneComponent implements OnInit {
  private phones: IPhone[] = [];

  constructor(private phoneService: PhoneService,
              private router: Router) {
  }

  ngOnInit() {
    this.phoneService.getAll().subscribe((data: IHttpResult) => {
      this.phones = data.data;
    });
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.phoneService.deleteSuccess(id).subscribe((result: IHttpResult) => {
        return this.ngOnInit();
      });
    }
  }
}
