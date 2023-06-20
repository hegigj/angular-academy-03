import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./home/product/product.component";
import { ServiceComponent } from "./home/service/service.component";
import { RoleGuard } from "./guards/role.guard";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./posts/post/post.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        // canActivateChild: [RoleGuard],
        children: [
            {
                path: 'product',
                component: ProductComponent,
                // canActivate: [RoleGuard],
                data: {
                    roles: ['ADMIN', 'CRM']
                }
            },
            {
                path: 'service',
                component: ServiceComponent,
                // canActivate: [RoleGuard],
                data: {
                    roles: ['ADMIN']
                }
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'posts',
        component: PostsComponent,
        children: [
            {
                path: ':POST_ID/image/:IMG_ID/:USER_ID', // /posts/1
                component: PostComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        // redirectTo: '/home',
        // pathMatch: 'full'
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, {})],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}