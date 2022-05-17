import { LightningElement, track, api } from 'lwc';

export default class ParentToChild_Child extends LightningElement {
    @api childVar;
}