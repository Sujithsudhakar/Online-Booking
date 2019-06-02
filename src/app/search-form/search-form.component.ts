import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { requestService } from '../services/request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('0ms', style({ opacity: 0 }))
        ])
      ]
    )
  ]
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  searchResult = {
    medicalCentreList: []
  }
  statusText = false;
  isLoaded = false;
  constructor(private _fb: FormBuilder, private _requestService: requestService) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      search: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [])
    })
    // this.searchResult = [{ "name": "John Doe", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Mellisa Doe", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "John Coven", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Lovis Joe", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "JPat Thettick", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Arthur Warden", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Percy Kewshun", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Simon Sais", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Mark Ateer", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    // { "name": "Emma Grate", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" }]
  }

  onSubmit(form) {
    this.isLoaded = true;
    this.statusText = false;
    this.searchResult = {
      medicalCentreList: []
    }
    if (form.valid) {
      setTimeout(() => {
        this._requestService.getSearch('?searchQuery=' + form.value.search)
          .subscribe(
            (response) => {
              this.isLoaded = false;
              this.searchResult = response.body;
            },
            err => {
              this.isLoaded = false;
              this.statusText = true;
            });
      }, 2000);

    }
  }

  inputEnter() {
    console.log('hai');
    this.statusText = false;
  }
  inputFocus() {
    this.statusText = false;
  }

}
