import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Input() addWeightsVisible: boolean;
  @Output() hideRateWeight = new EventEmitter<boolean>();
  @Output() onAddWeightSubmit = new EventEmitter<any>();

  addWeightForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addWeightForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false}, Validators.required),
      description: new FormControl({ value: '', disabled: false}, Validators.required),
      type: new FormControl({ value: '', disabled: false}, Validators.required),
      budget: new FormControl({ value: null, disabled: false}, Validators.required),
      teamMembers: new FormControl({ value: '', disabled: false}, Validators.required),
      startDate: new FormControl({ value: null, disabled: false}, Validators.required),
      endDate: new FormControl({ value: null, disabled: false}, Validators.required),
    });
  }

  addWeight() {
    this.onAddWeightSubmit.emit({
      description: this.addWeightForm.get('description').value,
      name: this.addWeightForm.get('name').value,
      type: this.addWeightForm.get('type').value,
      startDate: this.addWeightForm.get('startDate').value,
      endDate: this.addWeightForm.get('endDate').value,
      budget: this.addWeightForm.get('budget').value,
      totalExpenses: this.addWeightForm.get('budget').value - 12031,
      remainingBudget: 12031,
      status: 'Ongoing',
      tasksCompleted: 0,
      revenueGenerated: 0,
      profitLoss: 0,
      teamMembers: this.addWeightForm.get('teamMembers').value,
      child: [
        {
          id: 1,
         "projectTask": "Land Survey",
         "personResponse": "Irakli Match",
         "startDate": "05.02.2023",
         "endDate": "05.12.2023",
         "status": "Completed",
         "cost": "15,000$",
         "budgetCost": "1,000$",
         "actualCost": "14,000$",
         "unitQuantity": 1,
         "unitCost": "13,999$"
        },
        {
          id: 2,
         "projectTask": "Environmental Impact Assessment",
         "personResponse": "Tatia Khakh",
         "startDate": "05.12.2023",
         "endDate": "05.22.2023",
         "status": "Completed",
         "cost": "15,000$",
         "actualCost": "15,000$",
         "unitQuantity": 1,
         "unitCost": "14,999$"
        },
        {
          id: 3,
         "projectTask": "Feasibility Study",
         "personResponse": "Rezi Kukava",
         "startDate": "05.22.2023",
         "endDate": "06.01.2023",
         "status": "Completed",
         "cost": "20,000$",
         "budgetCost": 50,
         "actualCost": "19,950$",
         "unitQuantity": 1,
         "unitCost": "19,949$"
        },
        {
          id: 4,
         "projectTask": "Architectural Design",
         "personResponse": "Giorgi Asanidze",
         "startDate": "06.01.2023",
         "endDate": "06.11.2023",
         "status": "Completed",
         "cost": "30,000$",
         "budgetCost": 100,
         "actualCost": "29,900$",
         "unitQuantity": 1,
         "unitCost": "29,899$"
        },
        {
          id: 5,
         "projectTask": "Engineering Design",
         "personResponse": "Grigori Monaselidze",
         "startDate": "06.11.2023",
         "endDate": "06.21.2023",
         "status": "Completed",
         "cost": "50,000$",
         "budgetCost": 150,
         "actualCost": "49,850$",
         "unitQuantity": 1,
         "unitCost": "49,849$"
        },
        {
          id: 6,
         "projectTask": "Permits and Approvals",
         "personResponse": "Irakli Match",
         "startDate": "06.21.2023",
         "endDate": "07.01.2023",
         "status": "Completed",
         "cost": "25,000$",
         "budgetCost": 200,
         "actualCost": "24,800$",
         "unitQuantity": 1,
         "unitCost": "24,799$"
        },
        {
          id: 7,
         "projectTask": "Asphalt",
         "personResponse": "Irakli Match",
         "startDate": "05.02.2023",
         "endDate": "05.12.2023",
         "status": "Completed",
         "cost": "500,000$",
         "budgetCost": "2,000$",
         "actualCost": "498,000$",
         "unitQuantity": 1,
         "unitCost": "498,000$"
        },
        {
          id: 8,
         "projectTask": "Concrete",
         "personResponse": "Tatia Khakh",
         "startDate": "05.12.2023",
         "endDate": "05.22.2023",
         "status": "Completed",
         "cost": "400,000$",
         "budgetCost": "3,000$",
         "actualCost": "397,000$",
         "unitQuantity": 1,
         "unitCost": "397,000$"
        },
        {
          id: 9,
         "projectTask": "Steel",
         "personResponse": "Rezi Kukava",
         "startDate": "05.22.2023",
         "endDate": "06.01.2023",
         "status": "Completed",
         "cost": "150,000$",
         "budgetCost": "4,000$",
         "actualCost": "146,000$",
         "unitQuantity": 1,
         "unitCost": "146,000$"
        },
        {
          id: 10,
         "projectTask": "Aggregates",
         "personResponse": "Giorgi Asanidze",
         "startDate": "06.01.2023",
         "endDate": "06.11.2023",
         "status": "Completed",
         "cost": "100,000$",
         "budgetCost": "5,000$",
         "actualCost": "95,000$",
         "unitQuantity": 100,
         "unitCost": 1000
        },
        {
          id: 11,
         "projectTask": "Bitumen",
         "personResponse": "Grigori Monaselidze",
         "startDate": "06.11.2023",
         "endDate": "06.21.2023",
         "status": "Completed",
         "cost": "80,000$",
         "budgetCost": "6,000$",
         "actualCost": "74,000$",
         "unitQuantity": 1,
         "unitCost": "74,000$"
        },
        {
          id: 12,
         "projectTask": "Drainage Pipes",
         "personResponse": "Irakli Match",
         "startDate": "06.21.2023",
         "endDate": "07.01.2023",
         "status": "Completed",
         "cost": "80,000$",
         "budgetCost": "7,000$",
         "actualCost": "73,000$",
         "unitQuantity": 80,
         "unitCost": "913$"
        },
        {
          id: 13,
         "projectTask": "Guardrails",
         "personResponse": "Tatia Khakh",
         "startDate": "05.03.2023",
         "endDate": "05.13.2023",
         "status": "Ongoing",
         "cost": "500,000$",
         "budgetCost": "8,000$",
         "actualCost": "492,000$",
         "unitQuantity": 1,
         "unitCost": "492,000$"
        }
       ]
    });
  }

  hideModal() {
    this.addWeightForm.reset();
    this.hideRateWeight.emit(false);
  }
}
