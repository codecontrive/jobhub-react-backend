import 'reflect-metadata'; // this shim is required

import { Get, HttpCode, JsonController, OnUndefined, Param } from 'routing-controllers';

@JsonController('/users')
export class UsersController {

    @HttpCode(200)
    @OnUndefined(404)
    @Get()
    public getClients(): any[] {
         return [{client: "client1"}, {client: "client2"}, {client: "client3"}];
    }

    @HttpCode(200)
    @OnUndefined(404)
    @Get('/:id')
    public getClient(@Param('id') id: string): any {
        console.log("param is", id)
        return {client: "client1"};
    }
}
