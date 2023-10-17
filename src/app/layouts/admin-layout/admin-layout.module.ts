import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {  InvoicesComponent } from '../../invoices/invoices.component';
import { AddInvoicesComponent } from '../../invoices/add-invoices/add-invoices.component';
import { ClientsComponent } from '../../clients/clients.component';
import { AddclientComponent } from '../../clients/addclient/addclient.component';
import { EditclientComponent } from '../../clients/editclient/editclient.component';
import { EditinvoicesComponent } from '../../invoices/editinvoices/editinvoices.component';
import { ProductComponent } from '../../product/product.component';
import { AddproductComponent } from '../../product/addproduct/addproduct.component';
import { EditproductComponent } from '../../product/editproduct/editproduct.component';
import { StockComponent } from '../../stock/stock.component';
import { AddstockComponent } from '../../stock/addstock/addstock.component';
import { EditstockComponent } from '../../stock/editstock/editstock.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    InvoicesComponent,
    AddInvoicesComponent,
    ClientsComponent,
    AddclientComponent,
    EditclientComponent,
    EditinvoicesComponent,
    ProductComponent,
    AddproductComponent,
    EditproductComponent,
    StockComponent,
    AddstockComponent,
    EditstockComponent,

  ]
})

export class AdminLayoutModule {}
