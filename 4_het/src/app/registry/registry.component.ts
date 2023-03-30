
import { Component } from '@angular/core';

@Component({
   selector: 'app-registry',
   templateUrl: './registry.component.html',
   styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {
   records = [
      { id: 1, field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 4' },
      { id: 2, field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 4' }
   ];
   newRecord = { id: 0, field1: '', field2: '', field3: '', field4: '' };

   deleteRecord(recordId: number) {
      const index = this.records.findIndex(record => record.id === recordId);
      if (index !== -1) {
         this.records.splice(index, 1);
      }
   }

   addRecord() {
      this.newRecord.id = this.records.length + 1;
      this.records.push({ ...this.newRecord });
      this.newRecord = { id: 0, field1: '', field2: '', field3: '', field4: '' };
   }
   }
