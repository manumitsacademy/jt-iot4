import { Routes } from "@angular/router";
import {CompanylistComponent} from './companylist/companylist.component'
import { AddcompanyComponent } from "./addcompany/addcompany.component";
export var routes:Routes = [
    {
        path:"company",
        component:CompanylistComponent
    },
    {
        path:"addcompany",
        component:AddcompanyComponent
    }
]