import { Component, OnInit, NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

import { FormsModule } from '@angular/forms';

import * as noUiSlider from 'nouislider';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';

  employeeSizeRange = [0, 1000];
  turnOverRange = [0, 500];

  currentTurnOver;
  currentEmployeeSize;

  selectedLocation;
  selectedDepartment;
  selectedIndustry;

  revenue = false;
  employeeSize = false;
  industry = false;
  location = false;

  settingsPageShown = false;

  employeeSizeConfig = {
    start: [0, 1000],
    connect: true,
    step: 5,
    range: {
      'min': 0,
      'max': 1000
    },
    pips: {
      mode: 'count',
      values: 5,
      density: 20,
      stepped: true
    },
    tooltips: true
  }

  turnOverConfig = {
    behaviour: 'drag',
    start: [0, 500],
    connect: true,
    step: 5,
    range: {
      'min': 0,
      'max': 500,
    },
    pips: {
      mode: 'count',
      values: 5,
      density: 20,
      stepped: true
    },
    tooltips: true
  }

  config = {
    displayKey: "name",
    search: true,
    limitTo: 5
  };


  industryOptions = [
    {
      "index": 0,
      "name": "Sales"
    },
    {
      "index": 1,
      "name": "Marketing"
    },
    {
      "index": 2,
      "name": "Advertising"
    },
    {
      "index": 3,
      "name": "Entertainment"
    },
    {
      "index": 4,
      "name": "Animation"
    }
  ];

  departmentOptions = [
    {
      "index": 0,
      "name": "Sales"
    },
    {
      "index": 1,
      "name": "Marketing"
    },
    {
      "index": 2,
      "name": "Advertising"
    },
    {
      "index": 3,
      "name": "Entertainment"
    },
    {
      "index": 4,
      "name": "Animation"
    }
  ];

  locationOptions = [
    {
      "index": 0,
      "name": "India"
    },
    {
      "index": 1,
      "name": "Singapore"
    },
    {
      "index": 2,
      "name": "USA"
    },
    {
      "index": 3,
      "name": "China"
    },
    {
      "index": 4,
      "name": "UK"
    }
  ];

  async ngOnInit() {
  }

  toggleSettingsPage() {
    this.settingsPageShown = !this.settingsPageShown;

    if($('.nsdicon-angle-down .fa').length === 0) {
      $('.nsdicon-angle-down').append('<i class="fa fa-credit-card"></i>');
    }
  }

  monitorEmployeeSize(eve) {
    console.log(eve);

    this.currentEmployeeSize = eve;
  }

  monitorTurnOver(eve) {
    this.currentTurnOver = eve.join('-') + 'M';

    console.log(eve);
  }

  selectionChanged(eve, type) {
    console.log(eve);

    if(type === 'location') {
      this.selectedLocation = eve.value;
    } else if(type === 'industry') {
      this.selectedIndustry = eve.value;
    } else if(type === 'department') {
      this.selectedDepartment = eve.value;
    }
  }
}
