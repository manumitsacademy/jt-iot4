import { Routes } from "@angular/router";
import { AddsocietyComponent } from "./addsociety/addsociety.component";
import { SocietylistComponent } from "./societylist/societylist.component";


export var routes:Routes = [
    {
        path:"addsociety",
        component:AddsocietyComponent
    },
    {
        path:"allSocieties",
        component:SocietylistComponent
    }
]