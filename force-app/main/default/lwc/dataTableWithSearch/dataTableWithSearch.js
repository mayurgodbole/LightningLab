import { LightningElement } from 'lwc';
import getData from '@salesforce/apex/ApexDatatable.getData';
import deleteAccount from '@salesforce/apex/ApexDatatable.deleteAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteDataset, getReplicatedDataset } from 'lightning/analyticsWaveApi';
import {NavigationMixin} from 'lightning/navigation';
const actions=[{label:'View', name:'view'},
{label:'Edit', name:'edit'},
{label:'Delete', name:'delete'}            
];

const columns=[
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
export default class DataTableWithSearch extends NavigationMixin (LightningElement) {

    searchValue;
    displayResult;
    columns=columns;
    
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

    handleRowAction(event){
        const actionName=event.detail.action.name;
        console.log('Event Action: ', actionName);
        const row=event.detail.row;
        switch(actionName){
            case 'view':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId:row.Id,
                        objectApiName:'Account',
                        actionName:'view'
                        
                    }
                });
                break;

            case 'edit':
                
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId:row.Id,
                        objectApiName:'Account',
                        actionName:'edit',
                        
                    }
                    
                });
                break;
            case 'delete':
                this.deleteAccount(row);
                console.log(row);
            break;

        }
    }
    deleteAccount(currentRow){
        
        deleteAccount({objaccount:currentRow})
        .then((result)=>{
            this.dispatchEvent(new ShowToastEvent({
                title:'Success',
                message:currentRow.Name +' account deleteDataset.',
                variant:success

            }))

        })

        .catch((error)=>{
            this.dispatchEvent(new ShowToastEvent({
                title:'Error',
                message:currentRow.Name +' account deleted',
                variant:'error'
            }))
        })
            
        

    }
}