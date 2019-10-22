import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Initial value';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // assigment atributte
  username = '';
  displayDetails = true;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  resetUsername() {
    this.username = '';
  }

  toggleDetails(event) {
    this.displayDetails = !this.displayDetails;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

}
