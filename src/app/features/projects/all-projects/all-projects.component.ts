import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  selectedRate: any;

  projects = [];
  projectsLength = 0;

  addWeightsVisible = false;

  constructor(    private confirmationService: ConfirmationService) { 

  }

  delete() {
    this.confirmationService.confirm({
        header: 'Delete Project',
        message: 'Delete Current Project',
        acceptButtonStyleClass: 'p-button-success',
        rejectButtonStyleClass: 'p-button-danger',
        accept: /* istanbul ignore next */ () => {
          this.projects = this.projects.filter(m => m.id != this.selectedRate.id);
          localStorage.setItem('projects', JSON.stringify(this.projects));
        }
    });
  }

  ngOnInit(): void {
    this.projects = JSON.parse(localStorage.getItem('projects'));
  }

  onWeightHide(e) {
    this.addWeightsVisible = false;
  }

  onAddWeightSubmit(e) {
    let maxId = 0;
    this.projects.forEach(m => {
      if(m.id > maxId) {
        maxId = m.id;
      }
    });
    this.projects.unshift({ ...e, id: maxId + 1, date: new Date() });
    localStorage.setItem('projects', JSON.stringify(this.projects));
    this.addWeightsVisible = false;
  }

  showAddWeightDialog() {
    this.addWeightsVisible = true;
  }


  refreshTable() {}

  downloadExcel() {
    import("xlsx").then(xlsx => {
      const parseData = this.projects;
        const worksheet = xlsx.utils.json_to_sheet(parseData);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

}
