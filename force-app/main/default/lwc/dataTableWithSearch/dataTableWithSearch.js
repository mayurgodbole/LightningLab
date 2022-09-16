import { LightningElement } from 'lwc';
import getData from '@salesforce/apex/ApexDatatable.getData';
import { getReplicatedDataset } from 'lightning/analyticsWaveApi';
export default class DataTableWithSearch extends LightningElement {

    searchValue;
    displayResult;
    columns=[
        {
            label: 'Name', fieldName:'Name'
        }
    ]
    handleSearch(event){
        this.searchValue = event.target.value;
        this.ImperativeCall();
    }
    ImperativeCall(){
        getData({str:this.searchValue})
        .then((result)=>{
            console.log('Result is: ',result);
            this.displayResult = result;
        })
        .catch((error)=>{
            console.log('Error occured in Search Database',error);
        })
    }
}