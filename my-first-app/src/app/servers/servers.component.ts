import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server is created yet';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['test1', 'test2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created, its name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
