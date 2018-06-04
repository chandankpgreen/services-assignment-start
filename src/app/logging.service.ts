import { Injectable } from "@angular/core";
import { UserService } from "./users.service";

export class LoggingService{
    
    logToConsole(activeUsers: number, inactiveUsers:number){
        console.log("Active users count updated :" + activeUsers);
        console.log("Inactive users count updated :" + inactiveUsers);
        
    }
}