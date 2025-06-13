import { Driver } from "./driver";

export interface Constructor {
    UserName: string;
    TotalPoints: number;
    Driver1: Driver;
    Driver2: Driver;
    DriverNumbers: number[];
}