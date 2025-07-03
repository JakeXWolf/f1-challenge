
export type RaceId = '1GP' | '2SP' | '2GP' | '3GP' | '4GP' | '5GP' | '6SP' | '6GP' | '7GP' | '8GP' | '9GP' | '10GP' | '11GP';

export function buildRaceId(raceNum: number, isSprint: boolean): RaceId {
    return `${raceNum}${isSprint ? 'SP' : 'GP'}` as RaceId;
}