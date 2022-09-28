import { LightningElement,track} from 'lwc';

export default class Lab1 extends LightningElement {
    @track word='';
    onchangeHandler(event){
        this.word = event.target.value;
    }
    get uppercased() {

        return `${this.word} `.toUpperCase();
        
        }
}