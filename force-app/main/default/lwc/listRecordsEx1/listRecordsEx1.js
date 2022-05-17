import { LightningElement, track } from 'lwc';
import getStudentTrainerDetails from '@salesforce/apex/RecordController.getStudentTrainerDetails';

export default class ListRecordsEx1 extends LightningElement {
    @track stulist = [];

    @track columns = [
        {label: 'Student Name', fieldName: 'StudentName' , type: 'text'},
        {label: 'Student Age', fieldName: 'StudentAge' , type: 'number'},
        {label: 'Student Phone Number', fieldName: 'StudentPhoneNumber' , type: 'phone'},
        {label: 'Student Email', fieldName: 'StudentEmail' , type: 'email'},
        {label: 'Trainer Name', fieldName: 'TrainerName' , type: 'text'},
    ];

    columnHeader = ['StudentName', 'StudentAge', 'StudentPhoneNumber', 'StudentEmail', 'TrainerName']

    connectedCallback(){
        getStudentTrainerDetails()
        .then(result=>{
            this.stulist = result;
            alert('Trainer Details' + JSON.stringify(this.stulist));
        })
        .catch(error=>{
            console.log('Error' + JSON.stringify(error));
        })
    }

    downloadExcel(){
        // Prepare a html table
        let doc = '<table>';
        // Add styles for the table
        doc += '<style>';
        doc += 'table, th, td {';
        doc += '    border: 1px solid black;';
        doc += '    border-collapse: collapse;';
        doc += '}';          
        doc += '</style>';
        // Add all the Table Headers
        doc += '<tr>';
        this.columnHeader.forEach(element => {            
            doc += '<th>'+ element +'</th>'           
        });
        doc += '</tr>';
        // Add the data rows
        this.stulist.forEach(record => {
            doc += '<tr>';
            doc += '<th>'+record.StudentName+'</th>'; 
            doc += '<th>'+record.StudentAge+'</th>'; 
            doc += '<th>'+record.StudentPhoneNumber+'</th>';
            doc += '<th>'+record.StudentEmail+'</th>';
            doc += '<th>'+record.TrainerName+'</th>'; 
            doc += '</tr>';
        });
        doc += '</table>';
        var element = 'data:application/vnd.ms-excel,' + encodeURIComponent(doc);
        let downloadElement = document.createElement('a');
        downloadElement.href = element;
        downloadElement.target = '_self';
        // use .csv as extension on below line if you want to export data as csv
        downloadElement.download = 'Student Trainer Data.xls';
        document.body.appendChild(downloadElement);
        downloadElement.click();
    }
}