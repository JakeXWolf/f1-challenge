import { Constructor } from './constructor';

export interface ConstructorResults extends Constructor {
    ResultMessage: string;
    PreviousRanking: number;
    CurrentRanking: number;
    TotalGained: number;
}