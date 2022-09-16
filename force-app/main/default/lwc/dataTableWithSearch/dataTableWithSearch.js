import { LightningElement } from 'lwc';
import getData from '@salesforce/apex/ApexDatatable.getData';
import { getReplicatedDataset } from 'lightning/analyticsWaveApi';
const actions=[{label:'View', name:'View'},
{label:'Edit', name:'Edit'},
{label:'Delete', name:'Delete'}            
];
export default class DataTableWithSearch extends LightningElement {

    searchValue;
    displayResult;
    
    columns=[
        {
            label: 'Name', fieldName:'Name'
        },
        {
            type:'action',
            typeAttributes:{
                rowActions:actions,
                menuAlighment:'right'
            }
        }
    ];
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