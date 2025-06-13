import { ConstructorResults } from "./constructor-results";

export interface RaceEvent {
    RaceNum: number; // PK to race.ts
    IsSprint: boolean;
    ConstructorResults: ConstructorResults[];
}