import { ActivatedRouteSnapshot, CanActivate, CanActivateChild } from "@angular/router";
import { UserService } from "../user.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {
    constructor(private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const { roles } = route.data;

        const authRole: boolean = roles.includes(this.userService.loggedUserRole);

        if (!authRole) alert('You are not authorized to access this route!');

        return authRole;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
        
    }
}