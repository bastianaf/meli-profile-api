import { Controller, Get, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/')
    user(): any {
        console.log("NEW REQUEST !")
        return this.userService.getUser();
    }
    
    @Get('/restrictions/:user_id')
    userRestrictions(@Param() params): any {
        return this.userService.getUserRestrictions(params.user_id);
    }

    @Get('/purchases/:user_id')
    userPurchases(@Param() params, @Query() query): any {
        return this.userService.getUserPurchases(params.user_id, parseInt(query.limit, 10), parseInt(query.offset, 10));
    }
}
