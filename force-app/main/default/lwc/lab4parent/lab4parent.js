import { LightningElement } from 'lwc';

export default class Lab4parent extends LightningElement {

    handleClick(){
        this.template.querySelector('c-lab4-child').handlechildMethodActive();
    }
    handeClickInactive(){
        this.template.querySelector('c-lab4-child').handlechildMethodinActive();
    }
}