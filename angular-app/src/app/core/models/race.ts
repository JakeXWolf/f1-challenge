import { RaceStatus } from "./race-status";

export interface GrandPrix {
    RaceNum: number;
    Name: string;
    Location: string;
    Date: Date;
    HasSprint: boolean;
    SprintDate: Date | null;
    RaceStatus: RaceStatus;
}