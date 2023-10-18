import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../service/user-data.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css']
})
export class RateListComponent implements OnInit {
  firstCategorysubcategory: string;
  secondCategorysubcategory: string;
  thirdCategorysubcategory: string;
  fourthCategorysubcategory: string;
  firstCategory: string;
  secondCategory: string;
  thirdCategory: string;
  fourthCategory: string;
  total: number=0;
  num:number;
  
  categoryNames: string[] = [];
  subCategoryNames: string[] = [];
  employeeForm: FormGroup;
  employees: any[] = [];

  employeeFormsubcategory: FormGroup;
  employeessubcategory: any[] = [];

  constructor(private fb: FormBuilder,public router : Router, public userService : UserDataService) 
  {
    this.employeeForm = this.fb.group({
      categoryName: ['', Validators.required],
    });

    this.employeeFormsubcategory = this.fb.group({
      subCategoryName: ['', Validators.required],
    });
   }
  sum:number=0;
  n:number=1;
  ngOnInit(): void {
    this.fetchAllEmployees();
    this.fetchAllEmployeessubcategory();

  }
 
  fetchAllEmployees() {
    this.userService.getAllEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.categoryNames = this.employees.map(employee => employee.categoryName);

        // Assigning values to category variables
        this.firstCategory = this.categoryNames[0];
        this.secondCategory = this.categoryNames[1];
        this.thirdCategory = this.categoryNames[2];
        this.fourthCategory = this.categoryNames[3];
      },
      error => {
        console.error(error);
      }
    );
  }

  fetchAllEmployeessubcategory() {
    this.userService.getAllEmployeesubcategory().subscribe(
      employees => {
        this.employees = employees;
        this.subCategoryNames = this.employees.map(employee => employee.subCategoryName);

        // Assigning values to category variables
        this.firstCategorysubcategory = this.subCategoryNames[0];
        this.secondCategorysubcategory = this.subCategoryNames[1];
        this.thirdCategorysubcategory = this.subCategoryNames[2];
        this.fourthCategorysubcategory = this.subCategoryNames[3];
      },
      error => {
        console.error(error);
      }
    );
  }
  MensTop=[
    {
      top :'shirt-1',
      amount:200,
      qnt:1
    },
    {
      top :'shirt-2',
      amount:380,
      qnt:1
    },
    {
      top :'shirt-3',
      amount:600,
      qnt:1
    },
    {
      top :'shirt-4',
      amount:500,
      qnt:1
    },
    {
      top :'shirt-5',
      amount:300,
      qnt:1
    },
    {
      top :'shirt-6',
      amount:650,
      qnt:1
    },
    {
      top :'shirt-7',
      amount:800,
      qnt:1
    }

  ]
  Mensbottom=[
    {
      top :'Trouser-1',
      amount:300,
      qnt:1
    },
    {
      top :'Trouser-2',
      amount:150,
      qnt:1
    },
    {
      top :'Trouser-3',
      amount:200,
      qnt:1
    },
    {
      top :'Trouser-4',
      amount:450,
      qnt:1
    },
    {
      top :'Trouser-5',
      amount:150,
      qnt:1
    },
    {
      top :'Trouser-6',
      amount:700,
      qnt:1
    },
    {
      top :'Trouser-7',
      amount:1000,
      qnt:1
    }

  ]
  Dresses=[
    {
      top :'dress-1',
      amount:300,
      qnt:1
    },
    {
      top :'dress-2',
      amount:150,
      qnt:1
    },
    {
      top :'dress-3',
      amount:200,
      qnt:1
    },
    {
      top :'dress-4',
      amount:120,
      qnt:1
    },
    {
      top :'dress-5',
      amount:120,
      qnt:1
    },
    {
      top :'dress-6',
      amount:450,
      qnt:1
    },
    {
      top :'dress-7',
      amount:1200,
      qnt:1
    }

  ]
  Household=[
    {
      top :'Item-1',
      amount:120,
      qnt:1
    },
    {
      top :'Item-2',
      amount:350,
      qnt:1
    },
    {
      top :'Item-3',
      amount:600,
      qnt:1
    },
    {
      top :'Item-4',
      amount:900,
      qnt:1
    },
    {
      top :'Item-5',
      amount:120,
      qnt:1
    },
    {
      top :'Item-6',
      amount:950,
      qnt:1
    },
    {
      top :'Item-7',
      amount:800,
      qnt:1
    }

  ]

  increase(e)
  {
    if(e.qnt>=1)
    {
      this.sum+=e.amount;
      console.log(this.sum);
    // console.log(e.qnt)
    e.qnt++;
    }
    this.total=this.sum
  }
  decrease(event)
  {
    if(event.qnt>1)
    {
      this.sum-=event.amount;
      console.log(this.sum);
    // console.log(e.qnt)
    event.qnt--;
    }
    this.total=this.sum
  }

  goToState(){
    this.userService.setTotalAmount(this.total);
    this.router.navigate(['/service-provider']);
  }

  setTab(tabName){
    this.userService.settabSelected(tabName);
  }
  setPerson(personName){
    this.userService.settabSelected(personName);
  }
 
  

  

}

