import { LightningElement, track } from 'lwc';

export default class ParentToChild_Parent extends LightningElement {
    @track parentVar;

    handleChange(event){
        this.parentVar = event.detail.value;
    }
}