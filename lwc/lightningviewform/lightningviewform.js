import { LightningElement,track,api } from 'lwc';
import nm from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class Lightningviewform extends LightningElement {
    @api recordId;
    @api objectApiName = nm;

    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];

    handleSubmit(event) {
        // event.preventDefault(); // stop the form from submitting
        // const fields = event.detail.fields;
        // this.template.querySelector('lightning-record-form').submit(fields);
    }
}