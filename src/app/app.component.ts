import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BudgetWise';

  ngOnInit() {
    const getData = localStorage.getItem('projects');

    if(!getData) {
      const projects = [
        {
          id: 1,
          name: 'New Software Product Launch',
          type:'Product Launch',
          startDate: new Date(),
          endDate: new Date(new Date().getTime() + 9790000000),
          budget: 263000,
          totalExpenses: 253000,
          remainingBudget: 10000,
          status: 'Completed',
          tasksCompleted: 88.1,
          revenueGenerated: 10230,
          profitLoss: 34211,
          teamMembers: "Irakli Match, Tatia Khakh, Rezi Kukava, Giorgi Asanidze, Tatia Khakh",
          child: [
            {
              id: 1,
             "projectTask": "Social Media Campaign",
             "personResponse": "Irakli",
             "startDate": "07.01.2023",
             "endDate": "07.15.2023",
             "status": "In Progress",
             "cost": 500,
             "budgetCost": 1000,
             "actualCost": 450,
             "unitQuantity": 4,
             "unitCost": 477
            },
            {
              id: 2,
             "projectTask": "Email Marketing",
             "personResponse": "Tatia",
             "startDate": "07.05.2023",
             "endDate": "07.12.2023",
             "status": "Completed",
             "cost": 300,
             "budgetCost": 300,
             "actualCost": 300,
             "unitQuantity": 1,
             "unitCost": 991
            },
            {
              id: 3,
             "projectTask": "Website Redesign",
             "personResponse": "Grigori",
             "startDate": "07.10.2023",
             "endDate": "07.25.2023",
             "status": "In Progress",
             "cost": 2000,
             "budgetCost": 2500,
             "actualCost": 1800,
             "unitQuantity": 5,
             "unitCost": 1335
            },
            {
              id: 4,
             "projectTask": "Paid Advertising",
             "personResponse": "Rezi",
             "startDate": "07.15.2023",
             "endDate": "07.31.2023",
             "status": "Pending",
             "cost": 1000,
             "budgetCost": 1500,
             "unitQuantity": 3,
             "unitCost": 1340
            },
            {
              id: 5,
             "projectTask": "Product Discounts",
             "personResponse": "Giorgi",
             "startDate": "07.20.2023",
             "endDate": "07.30.2023",
             "status": "Completed",
             "cost": 800,
             "budgetCost": 1000,
             "actualCost": 800,
             "unitQuantity": 5,
             "unitCost": 553
            },
            {
              id: 6,
             "projectTask": "Analytics Tracking",
             "personResponse": "Irakli",
             "startDate": "07.25.2023",
             "endDate": "08.05.2023",
             "status": "In Progress",
             "cost": 500,
             "budgetCost": 500,
             "actualCost": 400,
             "unitQuantity": 3,
             "unitCost": 236
            },
            {
              id: 7,
             "projectTask": "Social Media Ads",
             "personResponse": "Tatia",
             "startDate": "07.05.2023",
             "endDate": "07.31.2023",
             "status": "In Progress",
             "cost": 1200,
             "budgetCost": 1500,
             "actualCost": "-",
             "unitQuantity": 2,
             "unitCost": 1891
            },
            {
              id: 8,
             "projectTask": "Influencer Campaign",
             "personResponse": "Grigori",
             "startDate": "07.10.2023",
             "endDate": "07.25.2023",
             "status": "Completed",
             "cost": 2000,
             "budgetCost": 2000,
             "actualCost": 2000,
             "unitQuantity": 3,
             "unitCost": 1203
            },
            {
              id: 8,
             "projectTask": "Content Creation",
             "personResponse": "Rezi",
             "startDate": "07.15.2023",
             "endDate": "07.28.2023",
             "status": "In Progress",
             "cost": 800,
             "budgetCost": 1000,
             "actualCost": 600,
             "unitQuantity": 1,
             "unitCost": 1574
            },
            {
              id: 10,
             "projectTask": "SEO Optimization",
             "personResponse": "Giorgi",
             "startDate": "07.20.2023",
             "endDate": "08.10.2023",
             "status": "Pending",
             "cost": 1500,
             "budgetCost": 2000,
             "actualCost": "-",
             "unitQuantity": 3,
             "unitCost": 1945
            },
            {
              id: 11,
             "projectTask": "Customer Support",
             "personResponse": "Irakli",
             "startDate": "07.25.2023",
             "endDate": "08.10.2023",
             "status": "In Progress",
             "cost": 1000,
             "budgetCost": 1200,
             "actualCost": 900,
             "unitQuantity": 5,
             "unitCost": 1291
            },
            {
              id: 12,
             "projectTask": "Packaging Redesign",
             "personResponse": "Tatia",
             "startDate": "07.28.2023",
             "endDate": "08.05.2023",
             "status": "Completed",
             "cost": 500,
             "budgetCost": 500,
             "actualCost": 500,
             "unitQuantity": 1,
             "unitCost": 1452
            },
            {
              id: 13,
             "projectTask": "Affiliate Marketing",
             "personResponse": "Grigori",
             "startDate": "08.01.2023",
             "endDate": "08.31.2023",
             "status": "Pending",
             "cost": 800,
             "budgetCost": 1000,
             "actualCost": "-",
             "unitQuantity": 2,
             "unitCost": 1170
            }
           ]
        },
        {
          id: 2,
          name: 'Summer Sales Blitz',
          type:'Sales Campaign',
          startDate: new Date(new Date().getTime() + 3790000000),
          endDate: new Date(new Date().getTime() + 11790000000),
          budget: 60984,
          totalExpenses: 39567,
          remainingBudget: 21417,
          status: 'Ongoing',
          tasksCompleted: 54.13,
          revenueGenerated: 121767,
          profitLoss: 82200,
          teamMembers: "Irakli Match, Tatia Khakh, Rezi Kukava, Giorgi Asanidze, Tatia Khakh",
          child: [
            {
              id: 1,
             "projectTask": "Social Media Campaign",
             "personResponse": "Irakli",
             "startDate": "07.01.2023",
             "endDate": "07.15.2023",
             "status": "In Progress",
             "cost": 500,
             "budgetCost": 1000,
             "actualCost": 450,
             "unitQuantity": 4,
             "unitCost": 477
            },
            {
              id: 2,
             "projectTask": "Email Marketing",
             "personResponse": "Tatia",
             "startDate": "07.05.2023",
             "endDate": "07.12.2023",
             "status": "Completed",
             "cost": 300,
             "budgetCost": 300,
             "actualCost": 300,
             "unitQuantity": 1,
             "unitCost": 991
            },
            {
             "projectTask": "Website Redesign",
             "personResponse": "Grigori",
             "startDate": "07.10.2023",
             "endDate": "07.25.2023",
             "status": "In Progress",
             "cost": 2000,
             "budgetCost": 2500,
             "actualCost": 1800,
             "unitQuantity": 5,
             "unitCost": 1335
            },
            {
             "projectTask": "Paid Advertising",
             "personResponse": "Rezi",
             "startDate": "07.15.2023",
             "endDate": "07.31.2023",
             "status": "Pending",
             "cost": 1000,
             "budgetCost": 1500,
             "unitQuantity": 3,
             "unitCost": 1340
            },
            {
             "projectTask": "Product Discounts",
             "personResponse": "Giorgi",
             "startDate": "07.20.2023",
             "endDate": "07.30.2023",
             "status": "Completed",
             "cost": 800,
             "budgetCost": 1000,
             "actualCost": 800,
             "unitQuantity": 5,
             "unitCost": 553
            },
            {
             "projectTask": "Analytics Tracking",
             "personResponse": "Irakli",
             "startDate": "07.25.2023",
             "endDate": "08.05.2023",
             "status": "In Progress",
             "cost": 500,
             "budgetCost": 500,
             "actualCost": 400,
             "unitQuantity": 3,
             "unitCost": 236
            },
            {
             "projectTask": "Social Media Ads",
             "personResponse": "Tatia",
             "startDate": "07.05.2023",
             "endDate": "07.31.2023",
             "status": "In Progress",
             "cost": 1200,
             "budgetCost": 1500,
             "actualCost": "-",
             "unitQuantity": 2,
             "unitCost": 1891
            },
            {
             "projectTask": "Influencer Campaign",
             "personResponse": "Grigori",
             "startDate": "07.10.2023",
             "endDate": "07.25.2023",
             "status": "Completed",
             "cost": 2000,
             "budgetCost": 2000,
             "actualCost": 2000,
             "unitQuantity": 3,
             "unitCost": 1203
            },
            {
             "projectTask": "Content Creation",
             "personResponse": "Rezi",
             "startDate": "07.15.2023",
             "endDate": "07.28.2023",
             "status": "In Progress",
             "cost": 800,
             "budgetCost": 1000,
             "actualCost": 600,
             "unitQuantity": 1,
             "unitCost": 1574
            },
            {
             "projectTask": "SEO Optimization",
             "personResponse": "Giorgi",
             "startDate": "07.20.2023",
             "endDate": "08.10.2023",
             "status": "Pending",
             "cost": 1500,
             "budgetCost": 2000,
             "actualCost": "-",
             "unitQuantity": 3,
             "unitCost": 1945
            },
            {
             "projectTask": "Customer Support",
             "personResponse": "Irakli",
             "startDate": "07.25.2023",
             "endDate": "08.10.2023",
             "status": "In Progress",
             "cost": 1000,
             "budgetCost": 1200,
             "actualCost": 900,
             "unitQuantity": 5,
             "unitCost": 1291
            },
            {
             "projectTask": "Packaging Redesign",
             "personResponse": "Tatia",
             "startDate": "07.28.2023",
             "endDate": "08.05.2023",
             "status": "Completed",
             "cost": 500,
             "budgetCost": 500,
             "actualCost": 500,
             "unitQuantity": 1,
             "unitCost": 1452
            },
            {
             "projectTask": "Affiliate Marketing",
             "personResponse": "Grigori",
             "startDate": "08.01.2023",
             "endDate": "08.31.2023",
             "status": "Pending",
             "cost": 800,
             "budgetCost": 1000,
             "actualCost": "-",
             "unitQuantity": 2,
             "unitCost": 1170
            }
           ]
        },
      ];


      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }
}
