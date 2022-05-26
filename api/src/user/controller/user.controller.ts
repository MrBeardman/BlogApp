import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { create } from 'domain';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    create(@Body()user: User): Observable<User> {
        return this.userService.create(user);
    }
    
    @Get(':id')
    findOne(@Param()params): Observable<any> {
        return this.userService.findOne(params.id);
     }

     @Get()
    fidnAll(): Observable<User[]> {
        return this.userService.findAll(); 
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<User>{
        return this.userService.deleteOne(Number(id));
    }
    @Put('id')
    updateOne(@Param('id') id : string,@Body() user: User): Observable<any> {
        return this.userService.UpdateOne(Number(id),user);
    }

}




