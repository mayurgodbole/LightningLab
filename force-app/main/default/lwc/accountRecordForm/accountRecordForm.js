import { LightningElement } from 'lwc'; 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class AccountRecordForm extends LightningElement {
    objectApiName=ACCOUNT_OBJECT;
    fields = [NAME_FIELD,PHONE_FIELD,WEBSITE_FIELD,REVENUE_FIELD];

    handleSuccess(event){
        const toastEvent= new toastEvent({
            title:"Account Created",
            message:"Account Created:" +event.details.id,
            variant : "success"
        });
        this.dispatchEvent
    }
}