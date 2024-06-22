import {BadRequestException, Injectable} from '@nestjs/common';
import {User} from "../../entities/user.entity";

@Injectable()
export class UsersService {
    user = User
    
    async get() {
        return {ok: true, status: 200}
    }
    
    async getCurrent(param: any) {
    
    }
    
    async signup(body: any) {
    
    }
    
    async signin(body: any) {
    
    }
    
    async patch() {
    
    }
    
    async delete() {
    
    }
}
