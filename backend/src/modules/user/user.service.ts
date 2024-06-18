import {BadRequestException, Injectable} from '@nestjs/common';
import {User} from "../../entities/user.entity";

@Injectable()
export class UserService {
    user = User
    
    async get() {
    
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
