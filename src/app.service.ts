import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';



@Injectable()
export class AppService {

  constructor(
    @Inject('USER_MICROSERVICE') private readonly client: ClientProxy
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(){
    return this.client.send({role:'user', cmd: 'get_users'}, {});
  }

  createUser(createUserDto){
    return this.client.send({role: 'user', cmd: 'create'}, createUserDto);
  }
}
