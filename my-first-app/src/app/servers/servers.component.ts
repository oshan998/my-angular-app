import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
 // template: '<app-server></app-server>',
 templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer= false;
  serverCreationStatus='no server was created';
  serverName='Testserver';
  username='';
  serverCreated=false;
  servers=['testserver 1','testserver 2'];
  paragraphContent=false;
  log=[];
  displaycontent=false;
  clickarray=[];

  constructor(){
    setTimeout(
      () => {
        this.allowNewServer=true;
      }, 2000
    );
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was created and name is '+ this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName=(<HTMLInputElement>event.target).value;

  }

  onUpdateText(){
    this.username='';
  }
  onToggleDisplay(){
    this.paragraphContent=!this.paragraphContent;
    //this.log.push(this.log.length+1);
  }

  displayItem(){
    this.displaycontent=!this.displaycontent;
    //this.clickarray.push(this.clickarray.length+1);
    this.clickarray.push(new Date());
  }
  

}
