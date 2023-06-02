import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  click(f:HTMLDivElement){
    if(f.style.display=="none"){
      f.style.display="block"
    }
    else{
      f.style.display="none"
    }
  }

}
