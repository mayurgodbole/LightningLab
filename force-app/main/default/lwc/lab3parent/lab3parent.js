import { LightningElement,track } from 'lwc';

export default class Lab3parent extends LightningElement {

    @track data = [];
  accountValueChange(event) {
    this.progressValue = event.detail;
  }
}