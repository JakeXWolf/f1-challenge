export function buildRaceId(raceNum: number, isSprint: boolean): string {
    return `${raceNum}${isSprint ? 'SP' : 'GP'}`;
}