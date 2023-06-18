import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-actions',
  templateUrl: './project-actions.component.html',
  styleUrls: ['./project-actions.component.scss']
})
export class ProjectActionsComponent implements OnInit {

  @Input() selectedRate: any;
  @Output() onShowDialog = new EventEmitter();
  @Output() onAuthorize = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onRefresh = new EventEmitter();
  @Output() onExport = new EventEmitter();
  @Output() onShowEventHistory = new EventEmitter();
  @Output() onUndoOperation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showAddDialog() {
    this.onShowDialog.emit();
  }

  authorize() {
    this.onAuthorize.emit();
  }

  delete() {
    this.onDelete.emit();
  }

  undoOperation() {
    this.onUndoOperation.emit();
  }

  refresh() {
    this.onRefresh.emit();
  }

  excel() {
    this.onExport.emit();
  }

  showEventHistory(){
    this.onShowEventHistory.emit();
  }
}
