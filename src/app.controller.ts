import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  LoggerService,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './createUser.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(Logger)
    private readonly logger: LoggerService,
  ) {}

  @Get('logTest')
  getLogs() {
    this.logger.error('error:');
    this.logger.log('hihi');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }
}
