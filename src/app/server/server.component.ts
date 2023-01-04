import { Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.Component.html'
})

export class ServerComponentee{
    serverId: number =10;
    serverStatus: string='ofline';

    getServerStatus(){
        return this.serverStatus;
    }
}
