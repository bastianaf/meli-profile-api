import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/')
    user(): any {
        return this.userService.getUser();
    }
    
    @Get('/restrictions/:user_id')
    userRestrictions(@Param() params): any {
        return this.userService.getUserRestrictions(params.user_id);
    }

    @Get('/purchases/:user_id')
    userPurchases(@Param() params): any {
        return this.userService.getUserPurchases(params.user_id);
    }
}
