import {BadRequestException, Injectable} from '@nestjs/common';
import {User} from "../../entities/user.entity";

@Injectable()
export class UserService {
    user = User
    
    async get() {
    
    }
    
    async getCurrent(param: any) {
    
    }
    
    async create(body: any) {
        try {
            await this.user.create(body);
        } catch (e) {
            throw new BadRequestException(e.message);
        }
        
        
    }
    
    async patch() {
    
    }
    
    async delete() {
    
    }
}
