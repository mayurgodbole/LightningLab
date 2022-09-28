import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement { 
    @api inputitem;

    fireSelectEvent(){
        console.log("Child:: fireSelectEvent");

        const event = new CustomEvent('inputitemselect', {
            // detail contains only primitives
            detail: this.inputitem
            });
            
        this.dispatchEvent(event);
    }
}