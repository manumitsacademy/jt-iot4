import { Routes } from "@angular/router";
import { DeviceslistComponent } from "./deviceslist/deviceslist.component";
import { AdddeviceComponent } from "./adddevice/adddevice.component";
export var routes:Routes = [
    {
        path:"deviceList",
        component:DeviceslistComponent
    },
    {
        path:"addDevice",
        component:AdddeviceComponent
    },
    {
        path:"editDevice/:mac",
        component:AdddeviceComponent
    }
]