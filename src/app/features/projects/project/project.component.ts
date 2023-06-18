import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects = [];
  projectsLength = 0;
  selectedRate = null;
  exportColumns  = [];
  asd = [
    { title: 'Project Task/Inventory', dataKey: 'projectTask' },
    { title: 'Person Responsible', dataKey: 'personResponse' },
    { title: 'Start Date', dataKey: 'startDate' },
    { title: 'End Date', dataKey: 'endDate' },
    { title: 'Status', dataKey: 'status' },
    { title: 'Cost', dataKey: 'cost' },
    { title: 'Budgeted Cost', dataKey: 'budgetCost' },
    { title: 'Actual Cost', dataKey: 'actualCost' },
    { title: 'Unit Quantity', dataKey: 'unitQuantity' },
    { title: 'Unit Cost', dataKey: 'unitCost' }
  ];

  item = null;

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const data = JSON.parse(localStorage.getItem('projects'));
    this.item = data.filter(m => m.id == id)[0];
    this.projects = this.item.child;
    this.projectsLength = this.projects.length;

  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('p', 'px', 'a4');
            (doc as any).autoTable(this.asd, this.selectedRate);
            doc.save('products.pdf');
        });
    });
  }
}
