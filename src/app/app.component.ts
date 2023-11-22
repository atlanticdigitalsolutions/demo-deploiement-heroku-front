import { Component } from '@angular/core';
import { AppServiceService } from 'src/service/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion des employes';
employees: any;

  constructor(
    private appService: AppServiceService,
  ){}

  ngOnInit(): void{
    this.getAll();
  }

  getAll(){
    this.appService.getAllEmployees().subscribe(data => {
      this.employees = data
      console.log(data)
    })
  }
}
