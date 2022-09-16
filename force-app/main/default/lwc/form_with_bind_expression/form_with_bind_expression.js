import { LightningElement } from 'lwc';

export default class Form_with_bind_expression extends LightningElement {
    handleChange(event){
        const field = event.target.name;
        if(field=='fullName'){
            this.fullName = event.target.value;
            
        }
        else if(field=='phone'){
            this.phone == event.target.value;
        }
        else if(field=='email'){
            this.email == event.target.value;
        }
    }
    
}