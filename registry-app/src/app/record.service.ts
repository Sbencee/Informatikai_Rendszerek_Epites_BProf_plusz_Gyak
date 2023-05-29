import { Injectable } from '@angular/core';
import { Record } from './record.model';

@Injectable({ providedIn: 'root' })
export class RecordService {
  records: Record[] = [];

  addRecord(record: Record) {
    this.records.push(record);
  }

  getRecords() {
    return this.records;
  }

  deleteRecord(record: Record) {
    const index = this.records.indexOf(record);
    if (index > -1) {
      this.records.splice(index, 1);
    }
  }
}
