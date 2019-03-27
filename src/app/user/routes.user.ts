import { Routes } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserlistComponent } from "./userlist/userlist.component";

export var routes:Routes = [
    {
        path:"addUser",
        component:AddUserComponent
    },
    {
        path:"userList",
        component:UserlistComponent
    }
]