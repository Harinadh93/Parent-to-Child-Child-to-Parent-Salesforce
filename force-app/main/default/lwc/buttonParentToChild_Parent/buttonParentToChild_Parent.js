import { LightningElement,track } from 'lwc';

export default class ButtonParentToChild_Parent extends LightningElement {
    @track parentVar;

    handleChange(event){
        this.parentVar = event.detail.value;
    }

    handleClick(event){
        this.parentVar = event.detail.value;
    }
}