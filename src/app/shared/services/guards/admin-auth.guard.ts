import {inject} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

export const adminAuthGuardFn = (): Promise<boolean> | boolean => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated() && authService.getRole() == 'ROLE_ADMIN') {
        return true;
    } else {
        router.navigate(['/auth']);
        return false;
    }
};
