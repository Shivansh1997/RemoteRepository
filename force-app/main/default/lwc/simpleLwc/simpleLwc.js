import { LightningElement } from 'lwc';
export default class SimpleLWC extends LightningElement {
    name = 'Marlabs Innovations'
    connectedCallback() {
        console.log('came into connectedCallback')
    }
}