import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PhoneService} from '../../service/phone.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IHttpResult} from '../i-http-result';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent implements OnInit {
  updatePhoneForm = this.formBuilder.group({
    name: [''],
    price: [''],
  });

  index = this.route.snapshot.paramMap.get('id');

  constructor(private formBuilder: FormBuilder,
              private phoneService: PhoneService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.phoneService.findById(+this.index).subscribe((res: IHttpResult) => {
      this.updatePhoneForm.patchValue({
        name: res.data.name,
        price: res.data.price,
      })
      ;
    });
  }

  update() {
    const newPhone = this.updatePhoneForm.value;
    this.phoneService.updateSuccess(+this.index, newPhone).subscribe((res: IHttpResult) => {
      return this.router.navigate(['/phones']);
    });
  }
}
