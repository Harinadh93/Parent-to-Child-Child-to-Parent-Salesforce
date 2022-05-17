import { LightningElement, track } from 'lwc';

export default class ChildToParent_Parent extends LightningElement {
    @track parentVar;

    handleEvent(event){
        this.parentVar = event.detail;
    }
}