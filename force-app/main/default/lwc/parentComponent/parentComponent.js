import { LightningElement, api, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    input;
    selected = false;
    @track list = [];

    addInputToList(event)
    {
        console.log("Parent:: addInputToList");
        var temp=this.template.querySelector("lightning-input");
		//this.input = temp.value;
        console.log(temp.value);
        this.list.push(temp.value);
		console.log(this.list);
    }

    
    handleSelect(event){
        console.log("Parent:: handleSelect");
        event.preventDefault();
        //console.log(event.target);
        console.log(event.detail);
        if(event.detail !=null){
            this.selected = true;
            this.input  = event.detail;
        }
    }
}