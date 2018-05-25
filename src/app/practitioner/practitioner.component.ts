import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.css']
})
export class PractitionerComponent implements OnInit {

  private ptype: string;
  private sub: any;
  private link:boolean;
  constructor(private route: ActivatedRoute)
   { 

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.ptype = params['ptype']; // (+) converts string 'id' to a number
      if(this.ptype=='c')
       {
         this.link=true;
       }
       else
       {
         this.link=false;
       }
     console.log(this.ptype);
    
  });
}
}


