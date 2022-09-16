import { LightningElement,wire } from 'lwc';
import getAccountInfo from '@salesforce/apex/AccountPubSub.getAccountInfo';



export default class LightningDatable extends LightningElement {
    
    displaytable;
    columns=[
        {
        label:'Account Name',
        fieldName:'Name'
        },
        {
            label:'Phone Number',
            fieldName:'Phone',
            type:'phone'
        },
        {
            label:'Account Type',
            fieldName:'Type'
        },
        {
            label:'Website',
            fieldName:'Website'
        }
    ]
    
    
    @wire(getAccountInfo)
    relatedData({error,data}){
        if(data)
        {
            this.displaytable=data;
        }
        else if(error){
            console.log(error);
        }
    }
}