import { Component, OnInit } from '@angular/core';
import { ApiservesService } from '../service/apiserves.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  constructor(
    private service :ApiservesService,
  ){}
  readData:any;
  ngOnInit(): void {
    this.getAllData();


  }
deleteId(id:any){
  console.log(id,"deleted");
  this.service.deleteData(id).subscribe((res)=>{
    console.log(res,"deleteded");

    this.getAllData();
  })


}
getAllData(){
  this.service.getalldata().subscribe((res) => {
    console.log(res,"res==>");
    this.readData= res
    });
}
}
