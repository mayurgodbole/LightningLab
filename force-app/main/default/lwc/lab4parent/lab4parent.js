import { api,LightningElement} from 'lwc';

export default class Lab4parent extends LightningElement {

    @api value = "No";

    handleActive(){
        this.value = "Yes";
    }
    handleInactive(){
        this.value = "No";
    }
}