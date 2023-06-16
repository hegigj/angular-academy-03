import { ActivatedRouteSnapshot, CanActivate, CanActivateChild } from "@angular/router";
import { Role, UserService } from "../user.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {
    constructor(private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const { roles } = route.data;
        return this.checkRole(roles);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
        const { roles } = childRoute.data;
        return this.checkRole(roles);
    }

    private checkRole(roles: Role[]): boolean {
        const authRole: boolean = roles.includes(this.userService.loggedUserRole);

        if (!authRole) alert('You are not authorized to access this route!');

        return authRole;
    }
}