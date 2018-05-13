import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {InicioController} from "./inicio.controller";
import {PreguntasFrecuentes} from "./preguntasFrecuentes";

@Module({
    imports: [],
    controllers: [AppController, InicioController, PreguntasFrecuentes ],
    components: [],
})
export class AppModule {}
