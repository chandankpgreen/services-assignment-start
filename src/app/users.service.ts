import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private loggingService: LoggingService){

    }

    setToInActive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.logCounts();
        
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.logCounts();
    }

    logCounts(){
        this.loggingService.logToConsole(this.activeUsers.length, this.inactiveUsers.length);
    }
}
