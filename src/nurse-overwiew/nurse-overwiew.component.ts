import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nurse-overwiew',
  templateUrl: './nurse-overwiew.component.html',
  styleUrls: ['./nurse-overwiew.component.css']
})
export class NurseOverwiewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onAddVitals(){
    this.router.navigate(['/home/diagnosis']);
  }
  onNurseViewVisit(){
    this.router.navigate(['/home/diagnosis']);
  }
  onNurseViewMedical(){
    this.router.navigate(['/home/diagnosis']);
  }
  onNurseDrawBlood(){
    this.router.navigate(['/home/diagnosis']);
  }
  onNurseAdminVaccine(){
    this.router.navigate(['/home/diagnosis']);
  }
  onNurseTest(){
    this.router.navigate(['/home/diagnosis']);
  }
  onCheckoutBtn(){
    this.router.navigate(['/home/diagnosis']);
  }
}
