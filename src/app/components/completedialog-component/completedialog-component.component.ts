import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog-data';

@Component({
  selector: 'app-completedialog-component',
  templateUrl: './completedialog-component.component.html',
  styleUrls: ['./completedialog-component.component.css'],
})
export class CompletedialogComponentComponent implements OnInit {
  ngOnInit() {}

  enval: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<CompletedialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onKey(event: any) {
    console.log(this.data.enterProject);
    let project_name = this.data.projectName;
    if (this.data.enterProject.toUpperCase() === project_name.toUpperCase()) {
      this.enval = false;
    } else {
      this.enval = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
