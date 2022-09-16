import { LightningElement } from 'lwc';

export default class Form_with_bind_expression extends LightningElement {

    

    handleChange(event){
        const field = event.target.name;
        if(field ==='fullName'){
            return this.fullName = event.target.value;
            
        }
        if(field ==='phone'){
            return this.phone == event.target.value;
        }
        if(field === 'email'){
            return this.email == event.target.value;
        }
    }
    
    
}