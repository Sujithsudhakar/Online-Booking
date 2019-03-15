import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  animations: [
    trigger(
        'enterAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('800ms', style({ opacity: 1 }))
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
  displayList = false;
  searchResult;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      search: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [])
    })
    this.searchResult = [{ "name": "John Doe", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Mellisa Doe", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "John Coven", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Lovis Joe", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "JPat Thettick", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Arthur Warden", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Percy Kewshun", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Simon Sais", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Mark Ateer", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" },
    { "name": "Emma Grate", "specialized": "MD. Orthopaedic Surgeon", "time": "7.00 - 18.00" }]
  }

  onSubmit(form) {
     if(form.valid){
      this.displayList = true;
     }
  }

  inputFocus(){
    this.displayList = false;
  }
}
