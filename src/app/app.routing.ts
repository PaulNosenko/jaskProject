import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategorizedComponent } from './categorized/categorized.component';
import { CategclComponent } from './categcl/categcl.component';
import { AscComponent } from './asc/asc.component';
import { DescComponent } from './desc/desc.component';

const appRoutes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"products",
        component:ProductComponent
    },
    {
        path:"categ/smart",
        component:CategorizedComponent
    },
    {
        path:"categ/classic",
        component:CategclComponent
    },
    {
        path:"priceAsc",
        component:AscComponent
    },
    {
        path:"priceDesc",
        component:DescComponent
    },
    {
        path:"products/:link",
        component:ProductDetailComponent
    },
    {
        path:"search",
        component:SearchDetailComponent
    },
    {
        path:"checkout",
        component:CheckoutComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}