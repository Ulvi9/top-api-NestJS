import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { isRegularExpressionLiteral } from 'typescript';
import { AuthDto } from './dto/auh.dto';

@Controller('auth')
export class AuthController {
    @Post("register")
    async register (@Body() dto:AuthDto){

    };
    @HttpCode(200)
    @Post("login")
    async login(@Body() dto:AuthDto){

    }
}
