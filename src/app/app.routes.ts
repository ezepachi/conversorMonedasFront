import { Routes } from '@angular/router';
import { ConvertidorComponent } from '../user-logged/convertidor/convertidor.component';
import { SubscriptionComponent } from '../user-logged/subscription/subscription.component';
import { LoginComponent } from '../app/public/login/login.component';
import { RegisterComponent } from '../app/public/register/register.component';
import { FavoriteCurrenciesComponent } from '../user-logged/favorite-currencies/favorite-currencies.component';
export const routes: Routes = [
    {
        path: '',
        component: ConvertidorComponent
    }
    ,
    {
        path: 'subscription',
        component: SubscriptionComponent
    }
    ,
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
            path: 'register',
            component: RegisterComponent
    }

    ,
    {
        path: 'favorites',
        component: FavoriteCurrenciesComponent
    }

];
