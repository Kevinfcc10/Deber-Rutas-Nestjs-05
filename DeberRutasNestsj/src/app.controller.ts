import {Get, Controller, Req, Res} from '@nestjs/common';
const fs = require("fs");
@Controller()
export class AppController {
    @Get()
    root(): string {
        return 'Hello World!';
    }
}