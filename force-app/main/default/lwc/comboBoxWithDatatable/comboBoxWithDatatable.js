import { LightningElement, track } from 'lwc';
import getAccountNames from '@salesforce/apex/comboboxWithDatatable.getAccountNames';

const columns = [
    { label : 'Contacts Name', fieldName : 'Name'},
    { label : 'Email', fieldName : 'Email'},
    { label : 'Phone', fieldName: 'Phone'}
]

export default class ComboBoxWithDatatable extends LightningElement {

    @track value = '';
    @track optionsArray = []; //this array will store the options for combobox
    @track cardVisible  = false;
    @track data = []; // use for storing contact details in datatable
    @track columns = columns;
    
    //store option by returing the optionsArray
    get options(){
        return this.optionsArray;

    }

    // Call Apex method to get Account store in Salesforce org Database
    connectedCallback(){
        getAccountNames()
        .then(response=>{
            let arr = []; //This array store the accounts details in lable and pair
            for(var i=0; i<response.length; i++)
            {
                //add the account Name as label and Id as value in arr[]
                arr.push({label : response[i].Name, value : response[i].Id})

            }
            //store the arr objects into optionsArray
            this.optionsArray = arr

        });
    }

    //get selected Account recordId
    handleChangeValue(event){
        //whenever (cardVisible = true) then contact with related account will show in datatable
        this.cardVisible = true;
        //store selected accountId in "value" property
        this.value = event.detail.value;
        window.alert(JSON.stringify(this.value));

    }
}