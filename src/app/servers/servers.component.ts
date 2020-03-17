import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName='';
  serverCreationStatus = 'notCreat';
  allowNewServer=true;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=false;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus='ServerExists'+this.serverName;
  }
  onUpdateServer(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
    //this.serverName = event.target.value;
  }
}
