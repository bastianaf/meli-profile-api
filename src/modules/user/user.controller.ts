import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/')
    user(): any {
        return this.userService.getUser();
    }
    
    @Get('/restrictions')
    userRestrictions(): any {
        return this.userService.getUserRestrictions();
    }

    @Get('/purchases')
    userPurchases(): any {
        return this.userService.getUserPurchases();
    }
}
