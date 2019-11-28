import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PhoneService} from '../../service/phone.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  addPhoneForm = this.formBuilder.group({
    name: [''],
    price: [''],
  });

  constructor(private formBuilder: FormBuilder,
              private phoneService: PhoneService,
              private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    const phone = this.addPhoneForm.value;
    return this.phoneService.addPhone(phone).subscribe(res => {
      return this.router.navigate(['/phones']);
    });
  }
}
