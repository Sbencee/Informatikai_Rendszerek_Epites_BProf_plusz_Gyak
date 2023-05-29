import { Component } from '@angular/core';
import { Record } from './record.model';
import { RecordService } from './record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  field1 = '';
  field2 = '';
  field3 = '';
  field4 = '';

  constructor(private recordService: RecordService) {}

  addRecord() {
    const newRecord = new Record(this.field1, this.field2, this.field3, this.field4);
    this.recordService.addRecord(newRecord);
    this.field1 = '';
    this.field2 = '';
    this.field3 = '';
    this.field4 = '';
  }

  get records() {
    return this.recordService.getRecords();
  }

  deleteRecord(record: Record) {
    this.recordService.deleteRecord(record);
  }
}
