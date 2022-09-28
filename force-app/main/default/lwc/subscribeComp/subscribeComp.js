import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import COUNTER_FILE from '@salesforce/messageChannel/updatecounter__c';


export default class SubscribeComp extends LightningElement {
    counter = 0;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel(){
        this.subscription = subscribe(
            this.messageContext,
            COUNTER_FILE,
            (message) => this.handleMessage(message)
        );
    }
    handleMessage(message){
        if(message.operator == 'add'){
            this.counter += message.constant;
        }
        else if(message.operator == 'subtract'){
            this.counter -= message.constant;
        }
        else if(message.operator == 'Multiply'){
            this.counter *= message.constant;
        }
    }
}