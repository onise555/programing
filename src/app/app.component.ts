import { Component } from '@angular/core';
import { User } from './sharing/user.modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'just-ng';

public user:User=new User() 
public userList:User[]=[]


show(){ 
this.userList.push(this.user)
this.user=new User() 
 
}
edit(index:any){
this.user=this.userList[index]
this.userList.splice(index,1)  
}

}
