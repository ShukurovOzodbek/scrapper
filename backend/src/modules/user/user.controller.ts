import {Controller, Delete, Get, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    
    constructor(private userService: UserService) {
    }
    @Get()
    async get() {
    
    }
    
    @Get(':id')
    async getCurrent() {
    
    }
    
    @Post()
    async create() {
    
    }
    
    @Patch(':id')
    async patch() {
    
    }
    
    @Delete(':id')
    async delete() {
    
    }
}
