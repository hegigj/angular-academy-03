import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Role, UserService } from "../user.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const { roles } = route.data;
        return this.checkRole(roles);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
        const { roles } = childRoute.data;
        return this.checkRole(roles);
    }

    canLoad(route: Route): boolean {
        const { roles } = route.data as any;
        return this.checkRole(roles);
    }

    private checkRole(roles: Role[]): boolean {
        const authRole: boolean = roles.includes(this.userService.loggedUserRole);

        if (!authRole) alert('You are not authorized to access this route!');

        return authRole;
    }
}