import {Body, Controller, Delete, Get, Param, ParamData, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../../dtos/users/create-user.dto";

@Controller('user')
export class UserController {
    
    constructor(private userService: UserService) {
    }
    
    @Get()
    async get() {
        return await this.userService.get();
    }
    
    @Get(':id')
    async getCurrent(@Param() param: ParamData) {
        return await this.userService.getCurrent(param);
    }
    
    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() body: CreateUserDto) {
        return await this.userService.create(body);
    }
    
    @Patch(':id')
    async patch() {
        return await this.userService.patch();
    }
    
    @Delete(':id')
    async delete() {
        return await this.userService.delete();
    }
}
