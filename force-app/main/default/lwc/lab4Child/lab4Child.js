import { LightningElement,api,wire} from 'lwc';
import getActiveAccountInfo from '@salesforce/apex/AccountPubSub.getActiveAccountInfo';
//import getinActiveAccountInfo from '@salesforce/apex/AccountPubSub.getinActiveAccountInfo';


export default class Lab4Child extends LightningElement {
    showActive ;
    showinActive;
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
        },
        {
            label:'Active',
            fieldName:'Active__c'
        }
    ]
    @api handlechildMethodActive(){

        
        this.showActive='List of Active Account';
    }
    // @api handleInactive(){

        
    //     this.showinActive='List of InActive Account';
    // }
    @wire(getActiveAccountInfo)
    relatedData({error,data}){
        if(data)
        {
            this.displaytable=data;
        }
        else if(error){
            console.log(error);
        }
    }

    // @wire(getInActiveAccountInfo)
    // relatedData({error,data}){
    //     if(data)
    //     {
    //         this.displaytable=data;
    //     }
    //     else if(error){
    //         console.log(error);
    //     }
    // }
   
}