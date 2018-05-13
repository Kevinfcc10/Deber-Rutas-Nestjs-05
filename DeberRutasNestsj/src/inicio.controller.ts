import {Controller, Get, Res} from "@nestjs/common";
import {error} from "util";

const fs = require("fs");
@Controller()
export class InicioController {
    @Get('Home')
    mostrar(@Res() response){

        let headerHtml= fs.readFileSync(__dirname+'/html/header.html', 'utf8');
        let contenidoHtml= fs.readFileSync(__dirname+'/html/contenido.html', 'utf8');
        let footerHtml= fs.readFileSync(__dirname+'/html/footer.html', 'utf8');

        return response.status(200).send(headerHtml+'  ' + contenidoHtml+'   '+footerHtml);

    }
}