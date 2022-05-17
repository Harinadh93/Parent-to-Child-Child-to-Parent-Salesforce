import { LightningElement, track, api } from 'lwc';

export default class ChildToParent_Child extends LightningElement {
    @api childVar;

    handleChange(event){
        this.childVar = event.detail.value;
        const eventHandler = new CustomEvent('childtoparent', {detail:this.childVar});
        this.dispatchEvent(eventHandler);
    }
}