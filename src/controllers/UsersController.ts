import 'reflect-metadata'; // this shim is required

import { Get, HttpCode, JsonController, OnUndefined, Param, Post, Put, Delete } from 'routing-controllers';

@JsonController('/users')
export class UsersController {

    @HttpCode(201)
    @OnUndefined(404)
    @Post()
    public createClient(): any {
         return {client: "newClient"}; // New data object as seen in DB
    }

    @HttpCode(200)
    @OnUndefined(404)
    @Get()
    public readClients(): any[] {
         return [{client: "client1"}, {client: "client2"}, {client: "client3"}]; //Data object answering request
    }

    @HttpCode(200)
    @OnUndefined(404)
    @Get('/:id')
    public readClient(@Param('id') id: string): any {
        console.log("param is", id)
        return {client: "client1"}; //Data object answering request
    }

    @HttpCode(200)
    @OnUndefined(404)
    @Put('/:id')
    public updateClient(@Param('id') id: string): any {
        console.log("param is", id)
        return {client: "client1"}; // Updated data object as seen in DB
    }

    @HttpCode(204)
    @OnUndefined(404)
    @Delete('/:id')
    public deleteClient(@Param('id') id: string): any {
        console.log("param is", id)
        return null; // Delete requests return null
    }
}
