import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

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

    @Get('/level')
    getUserLevel(): any {
        return this.userService.getUserLevel();
    }
}
