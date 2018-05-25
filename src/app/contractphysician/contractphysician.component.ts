import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Dropdown } from '../shared/dropdown';

@Component({
  selector: 'app-contractphysician',
  templateUrl: './contractphysician.component.html',
  styleUrls: ['./contractphysician.component.css']
})

export class ContractphysicianComponent implements OnInit {

  contractPhysicianForm: FormGroup;
  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;
  npiCtrl:FormControl;
  licenceCtrl:FormControl;
  deaCtrl:FormControl;
  addressCtrl: FormControl;


  demoPanelClicked = true;
  cpPanelClicked = true;
  licencePanelClicked = true;
  locationPanelClicked = true;
  
  demoPanelValueChange = false;
  cpPanelValueChange = false;
  licencePanelValueChange = false;
  locationPanelValueChange = false;

  states: Dropdown[] = [];
  contractedPartners: Dropdown[] = [];
  degrees: Dropdown[] = [];
  txcodes: Dropdown[] = [];
  days: Dropdown[] = [];
  hours: Dropdown[] = [];
  practiceTypes: Dropdown[] = [];
  locationTypes: Dropdown[] = [];
  male = true;
  gender = "male";

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.firstnameCtrl = new FormControl(null, [Validators.required, Validators.pattern("[A-z]+$")]);
    this.lastnameCtrl = new FormControl(null, [Validators.required, Validators.pattern("[A-z]+$")]);
    this.npiCtrl = new FormControl(null, [Validators.required, Validators.minLength(10)]);
    this.licenceCtrl = new FormControl(null, [Validators.required]);
    this.deaCtrl = new FormControl(null, [Validators.required, Validators.minLength(9), Validators.pattern("[a-zA-Z]{2}[0-9]{7}")]);
    this.addressCtrl = new FormControl(null, Validators.required);

    this.contractPhysicianForm = this.fb.group({
      demographics: this.fb.group({
        firstName: this.firstnameCtrl,
        lastName: this.lastnameCtrl,
        middleName: new FormControl(),
        aliasName: new FormControl(),
        suffixName: new FormControl(),
        dateOfBirth: new FormControl(null, Validators.required),
        genderType: new FormControl("male", Validators.required)
      }),
      contractedPartners: this.fb.array([
        this.initContractedPartner()
      ]),
      licensing: this.fb.group({
        npiNumber: this.npiCtrl,
        licNumber: this.licenceCtrl,
        deaNumber: this.deaCtrl,
        degreeName: new FormControl(null, Validators.required),
        taxanomyCode: new FormControl(null, Validators.required),
        description: new FormControl()
      }),
      locations: this.fb.array([
        this.initLocation(false)
      ])
    });

    this.populateDropDowns();

    (<FormGroup>this.contractPhysicianForm.get('demographics')).valueChanges.subscribe(val => {
      this.demoPanelValueChange = true;
      this.cpPanelValueChange = false;
      this.licencePanelValueChange = false;
      this.locationPanelValueChange = false;
    });

    (<FormArray>this.contractPhysicianForm.get('contractedPartners')).valueChanges.subscribe(val => {
      this.demoPanelValueChange = false;
      this.cpPanelValueChange = true;
      this.licencePanelValueChange = false;
      this.locationPanelValueChange = false;
    });

    (<FormGroup>this.contractPhysicianForm.get('licensing')).valueChanges.subscribe(val => {
      this.demoPanelValueChange = false;
      this.cpPanelValueChange = false;
      this.licencePanelValueChange = true;
      this.locationPanelValueChange = false;
    });

    (<FormArray>this.contractPhysicianForm.get('locations')).valueChanges.subscribe(val => {
      this.demoPanelValueChange = false;
      this.cpPanelValueChange = false;
      this.licencePanelValueChange = false;
      this.locationPanelValueChange = true;
    });
    
  }

  initContractedPartner() {
    return this.fb.group({
      contractedPartner: new FormControl(null, Validators.required)
    })
  }

  addContractedPartner() {
    const control = <FormArray>this.contractPhysicianForm.get('contractedPartners');
    control.push(this.initContractedPartner());
  }

  removeContractedPartner(i: number) {
    const control = <FormArray>this.contractPhysicianForm.get('contractedPartners');
    control.removeAt(i);
  }

  initLocation(clicked : boolean) {
    return this.fb.group({
      locationType: new FormControl( clicked ? "":"Practice", Validators.required),
      address: this.addressCtrl,
      suite: new FormControl(),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      fax: new FormControl(),
      email: new FormControl(null, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")),
      minAge: new FormControl(null, [Validators.required, Validators.min(18)]),
      maxAge: new FormControl(null, [Validators.required, Validators.max(70)]),
      providerType: new FormControl(null, Validators.required),
      officeHours: this.fb.array([
        this.initOfficeHour()
      ])
    })
  }

  addLocation() {
    const control = <FormArray>this.contractPhysicianForm.get('locations');
    control.push(this.fb.group({
      locationType: new FormControl("", Validators.required),
      address: new FormControl(null, Validators.required),
      suite: new FormControl(),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      fax: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      email: new FormControl(null, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"))
    })
    );
    //control.push(this.initLocation(true));
  }

  removeLocation(i: number) {
    const control = <FormArray>this.contractPhysicianForm.get('locations');
    control.removeAt(i);
  }

  initOfficeHour() {
    return this.fb.group({
      day: new FormControl(null, Validators.required),
      open: new FormControl(null, Validators.required),
      close: new FormControl(null, Validators.required)
    })
  }

  getOfficeHour(form) {
    return form.controls.officeHours.controls;
  }

  addOfficeHour(i: number) {
    //const control = <FormArray>this.contractPhysicianForm.get('locations.${i}.officeHours');
    const control = (<FormArray>this.contractPhysicianForm.controls['locations']).controls[i]['controls']['officeHours'];
    control.push(this.initOfficeHour());
  }

  removeOfficeHour(i: number) {
    //const control = <FormArray>this.contractPhysicianForm.get('locations.${i}.officeHours');
    const control = (<FormArray>this.contractPhysicianForm.controls['locations']).controls[i]['controls']['officeHours'];
    control.removeAt(i);
  }

  toggleGender(){
    this.male =! this.male;
    this.gender = this.male ? "male" : "female";
  }

  togglePanel(id:string){
    switch(id){
      case "demo" :
      this.demoPanelClicked =! this.demoPanelClicked;
        break;
        case "cp" :
        this.cpPanelClicked =! this.cpPanelClicked;
        break;
        case "licence" :
        this.licencePanelClicked =! this.licencePanelClicked;
        break;
        case "location" :
        this.locationPanelClicked =! this.locationPanelClicked;
        break;
    }
  }

  scrollTo(elementid) {
    let element = document.getElementById(elementid);
    element.scrollIntoView();

    switch(elementid){
      case "demographicsPanel" :
        if(!this.demoPanelClicked){
          this.demoPanelClicked = true;
          document.getElementById("demoPanelinfo").setAttribute('class','show');
        }
        break;
        case "cpPanel" :
        if(!this.cpPanelClicked){
          this.cpPanelClicked = true;
          document.getElementById("cpPanelinfo").setAttribute('class','show');
        }
        break;
        case "licencePanel" :
        if(!this.licencePanelClicked){
          this.licencePanelClicked = true;
          document.getElementById("licensePanelinfo").setAttribute('class','show');
        }
        break;
        case "locationPanel" :
        if(!this.locationPanelClicked){
          this.locationPanelClicked = true;
          document.getElementById("locationPanelinfo").setAttribute('class','show');
        }
        break;
    }
  }

  populateDropDowns() {
    this.states.push(new Dropdown("Alabama", "AL"));
    this.states.push(new Dropdown("Alaska", "AK"));
    this.states.push(new Dropdown("Arizona", "AZ"));
    this.states.push(new Dropdown("Arkansas", "AR"));
    this.states.push(new Dropdown("California", "CA"));
    this.states.push(new Dropdown("Colorado", "CO"));
    this.states.push(new Dropdown("Connecticut", "CT"));
    this.states.push(new Dropdown("Delaware", "DE"));
    this.states.push(new Dropdown("District Of Columbia", "DC"));
    this.states.push(new Dropdown("Florida", "FL"));
    this.states.push(new Dropdown("Georgia", "GA"));
    this.states.push(new Dropdown("Hawaii", "HI"));
    this.states.push(new Dropdown("Idaho", "ID"));
    this.states.push(new Dropdown("Illinois", "IL"));
    this.states.push(new Dropdown("Indiana", "IN"));
    this.states.push(new Dropdown("Iowa", "IA"));
    this.states.push(new Dropdown("Kansas", "KS"));
    this.states.push(new Dropdown("Kentucky", "KY"));
    this.states.push(new Dropdown("Louisiana", "LA"));
    this.states.push(new Dropdown("Maine", "ME"));
    this.states.push(new Dropdown("Maryland", "MD"));
    this.states.push(new Dropdown("Massachusetts", "MA"));
    this.states.push(new Dropdown("Michigan", "MI"));
    this.states.push(new Dropdown("Minnesota", "MN"));
    this.states.push(new Dropdown("Mississippi", "MS"));
    this.states.push(new Dropdown("Missouri", "MO"));
    this.states.push(new Dropdown("Montana", "MT"));
    this.states.push(new Dropdown("Nebraska", "NE"));
    this.states.push(new Dropdown("Nevada", "NV"));
    this.states.push(new Dropdown("New Hampshire", "NH"));
    this.states.push(new Dropdown("New Jersey", "NJ"));
    this.states.push(new Dropdown("New Mexico", "NM"));
    this.states.push(new Dropdown("New York", "NY"));
    this.states.push(new Dropdown("North Carolina", "NC"));
    this.states.push(new Dropdown("North Dakota", "ND"));
    this.states.push(new Dropdown("Ohio", "OH"));
    this.states.push(new Dropdown("Oklahoma", "OK"));
    this.states.push(new Dropdown("Oregon", "OR"));
    this.states.push(new Dropdown("Pennsylvania", "PA"));
    this.states.push(new Dropdown("Rhode Island", "RI"));
    this.states.push(new Dropdown("South Carolina", "SC"));
    this.states.push(new Dropdown("South Dakota", "SD"));
    this.states.push(new Dropdown("Tennessee", "TN"));
    this.states.push(new Dropdown("Texas", "TX"));
    this.states.push(new Dropdown("Utah", "UT"));
    this.states.push(new Dropdown("Vermont", "VI"));
    this.states.push(new Dropdown("Virginia", "VA"));
    this.states.push(new Dropdown("Washington", "WA"));
    this.states.push(new Dropdown("West Virginia", "WV"));
    this.states.push(new Dropdown("Wisconsin", "WI"));
    this.states.push(new Dropdown("Wyoming", "WY"));


    this.contractedPartners.push(new Dropdown("CNTR. PARTNER1", "CNTRPARTNER1"));
    this.contractedPartners.push(new Dropdown("CNTR. PARTNER2", "CNTRPARTNER2"));
    this.contractedPartners.push(new Dropdown("CNTR. PARTNER3", "CNTRPARTNER3"));
    this.contractedPartners.push(new Dropdown("CNTR. PARTNER4", "CNTRPARTNER4"));

    this.degrees.push(new Dropdown("MA", "01a"));
    this.degrees.push(new Dropdown("MD", "01b"));

    this.txcodes.push(new Dropdown("Taxonomy Code1", "txc1"));
    this.txcodes.push(new Dropdown("Taxonomy Code2", "txc2"));
    this.txcodes.push(new Dropdown("Taxonomy Code3", "txc3"));

    this.days.push(new Dropdown("Monday", "monday"));
    this.days.push(new Dropdown("Tuesday", "tuesday"));
    this.days.push(new Dropdown("Wednesday", "wednesday"));
    this.days.push(new Dropdown("Thursday", "thursday"));
    this.days.push(new Dropdown("Friday", "friday"));
    this.days.push(new Dropdown("Saturday", "saturday"));
    this.days.push(new Dropdown("Sunday", "sunday"));

    this.hours.push(new Dropdown("8:00am", "8:00am"));
    this.hours.push(new Dropdown("8:30am", "8:30am"));
    this.hours.push(new Dropdown("9:00am", "9:00am"));
    this.hours.push(new Dropdown("9:30am", "9:30am"));
    this.hours.push(new Dropdown("10:00am", "10:00am"));
    this.hours.push(new Dropdown("10:30am", "10:30am"));
    this.hours.push(new Dropdown("11:00am", "11:00am"));
    this.hours.push(new Dropdown("11:30am", "11:30am"));
    this.hours.push(new Dropdown("12:00pm", "12:00pm"));
    this.hours.push(new Dropdown("12:30pm", "12:30pm"));
    this.hours.push(new Dropdown("1:00pm", "1:00pm"));
    this.hours.push(new Dropdown("1:30pm", "1:30pm"));
    this.hours.push(new Dropdown("2:00pm", "2:00pm"));
    this.hours.push(new Dropdown("2:30pm", "2:30pm"));
    this.hours.push(new Dropdown("3:00pm", "3:00pm"));
    this.hours.push(new Dropdown("3:30pm", "3:30pm"));
    this.hours.push(new Dropdown("4:00pm", "4:00pm"));
    this.hours.push(new Dropdown("4:30pm", "4:30pm"));
    this.hours.push(new Dropdown("5:00pm", "5:00pm"));
    this.hours.push(new Dropdown("5:30pm", "5:30pm"));
    this.hours.push(new Dropdown("6:00pm", "6:00pm"));
    this.hours.push(new Dropdown("6:30pm", "6:30pm"));
    this.hours.push(new Dropdown("7:00pm", "7:00pm"));

    this.practiceTypes.push(new Dropdown("Provider Type1", "Provider Type1"));
    this.practiceTypes.push(new Dropdown("Provider Type2", "Provider Type2"));
    this.practiceTypes.push(new Dropdown("Provider Type3", "Provider Type3"));

    this.locationTypes.push(new Dropdown("Practice", "Practise"));
    this.locationTypes.push(new Dropdown("Office", "Office"));
    this.locationTypes.push(new Dropdown("Billing", "Billing"));

  }



  onSubmit() {
    console.log(this.contractPhysicianForm.value)
    let contrphysiciandata = JSON.stringify(this.contractPhysicianForm.value);
    console.log(contrphysiciandata);
  }

}