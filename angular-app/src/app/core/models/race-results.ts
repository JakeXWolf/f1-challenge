export interface RaceResult {
    position: string;  // "1", "2", "NC", etc.
    number: string;    // Driver's number
    driver: string;    // Driver's name
    car: string;       // Car/team details
    laps: number;      // Number of laps completed
    timeOrRetired: string; // Time gap or "DNF"
    points: number;    // Points scored
}