import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { InvoicesComponent } from '../../invoices/invoices.component';
import { AddInvoicesComponent } from '../../invoices/add-invoices/add-invoices.component';
import { EditinvoicesComponent } from '../../invoices/editinvoices/editinvoices.component';
import { ClientsComponent } from '../../clients/clients.component';
import { AddclientComponent } from '../../clients/addclient/addclient.component';
import { EditclientComponent } from '../../clients/editclient/editclient.component';
import { ProductComponent } from '../../product/product.component';
import { AddproductComponent } from '../../product/addproduct/addproduct.component';
import { EditproductComponent } from '../../product/editproduct/editproduct.component';
import { StockComponent } from '../../stock/stock.component';
import { AddstockComponent } from '../../stock/addstock/addstock.component';
import { EditstockComponent } from '../../stock/editstock/editstock.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'invoices',       component: InvoicesComponent },
    { path: 'addinvoices',    component: AddInvoicesComponent },
    { path: 'editinvoices',   component: EditinvoicesComponent },
    { path: 'client',         component: ClientsComponent },
    { path: 'addclient',      component: AddclientComponent },
    { path: 'editclient',     component: EditclientComponent },
    { path: 'product',        component: ProductComponent},
    { path: 'addproduct',     component: AddproductComponent },
    { path: 'editproduct',    component: EditproductComponent },
    { path: 'stock',          component: StockComponent },
    { path: 'addstock',       component: AddstockComponent },
    { path: 'editstock',      component: EditstockComponent },



];
