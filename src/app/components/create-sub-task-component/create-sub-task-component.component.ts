import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SubtaskMComponent} from "../subtask-m/subtask-m.component";
import {Task} from "../../models/task";
import {Subtask} from "../../models/subtask";

@Component({
  selector: 'app-create-sub-task-component',
  templateUrl: './create-sub-task-component.component.html',
  styleUrls: ['./create-sub-task-component.component.css']
})
export class CreateSubTaskComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateSubTaskComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);
  }
  onNoClick(): void {
    this.dialogRef.close({action: 0});
  }

}
