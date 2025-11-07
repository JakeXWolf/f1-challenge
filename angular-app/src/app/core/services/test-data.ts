import { Constructor } from "../models/constructor";
import { Driver } from "../models/driver";
import { GrandPrix } from "../models/race";
import { RaceResult } from "../models/race-results";
import { RaceStatus } from "../models/race-status";

/*
export const grandPrixList: GrandPrix[] = [
    { RaceNum: 1, Name: 'Australian', Location: 'Melbourne', Date: new Date('2025-03-16'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 2, Name: 'Chinese', Location: 'Shanghai', Date: new Date('2025-03-23'), HasSprint: true, SprintDate: new Date('2025-03-22'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 3, Name: 'Japanese', Location: 'Suzuka', Date: new Date('2025-04-06'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 4, Name: 'Bahrain', Location: 'Sakhir', Date: new Date('2025-04-13'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 5, Name: 'Saudi Arabian', Location: 'Jeddah', Date: new Date('2025-04-20'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 6, Name: 'Miami', Location: 'Miami', Date: new Date('2025-05-04'), HasSprint: true, SprintDate: new Date('2025-05-03'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 7, Name: 'Emilia Romagna', Location: 'Imola', Date: new Date('2025-05-18'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 8, Name: 'Monaco', Location: 'Monaco', Date: new Date('2025-05-25'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 9, Name: 'Spanish', Location: 'Barcelona', Date: new Date('2025-06-01'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 10, Name: 'Canadian', Location: 'Montreal', Date: new Date('2025-06-15'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 11, Name: 'Austrian', Location: 'Spielberg', Date: new Date('2025-06-29'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 12, Name: 'British', Location: 'Silverstone', Date: new Date('2025-07-06'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 13, Name: 'Belgian', Location: 'Spa', Date: new Date('2025-07-27'), HasSprint: true, SprintDate: new Date('2025-07-26'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 14, Name: 'Hungarian', Location: 'Budapest', Date: new Date('2025-08-03'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 15, Name: 'Dutch', Location: 'Zandvoort', Date: new Date('2025-08-31'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 16, Name: 'Italian', Location: 'Monza', Date: new Date('2025-09-07'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 17, Name: 'Azerbaijan', Location: 'Baku', Date: new Date('2025-09-21'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 18, Name: 'Singapore', Location: 'Marina Bay', Date: new Date('2025-10-05'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 19, Name: 'United States', Location: 'Austin', Date: new Date('2025-10-19'), HasSprint: true, SprintDate: new Date('2025-10-18'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 20, Name: 'Mexican', Location: 'Mexico City', Date: new Date('2025-10-26'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 21, Name: 'Brazilian', Location: 'Sao Paulo', Date: new Date('2025-11-09'), HasSprint: true, SprintDate: new Date('2025-11-08'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 22, Name: 'Las Vegas', Location: 'Las Vegas', Date: new Date('2025-11-22'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 23, Name: 'Qatar', Location: 'Lusail', Date: new Date('2025-11-30'), HasSprint: true, SprintDate: new Date('2025-11-29'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 24, Name: 'Abu Dhabi', Location: 'Yas Marina', Date: new Date('2025-12-07'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING }
  ];
*/
/*export const drivers: Driver[] = [
    { Number: 4, Name: 'Lando Norris', ChampionshipPosition: 1 },
    { Number: 81, Name: 'Oscar Piastri', ChampionshipPosition: 2 },
    { Number: 16, Name: 'Charles Leclerc', ChampionshipPosition: 3 },
    { Number: 44, Name: 'Lewis Hamilton', ChampionshipPosition: 4 },
    { Number: 1, Name: 'Max Verstappen', ChampionshipPosition: 5 },
    // { Number: 30, Name: 'Liam Lawson', ChampionshipPosition: 6 },
    { Number: 22, Name: 'Yuki Tsunoda', ChampionshipPosition: 6 },
    { Number: 63, Name: 'George Russell', ChampionshipPosition: 7 },
    { Number: 12, Name: 'Andrea Kimi Antonelli', ChampionshipPosition: 8 },
    { Number: 14, Name: 'Fernando Alonso', ChampionshipPosition: 9 },
    { Number: 18, Name: 'Lance Stroll', ChampionshipPosition: 10 },

    { Number: 30, Name: 'Liam Lawson', ChampionshipPosition: 11 },

    // { Number: 22, Name: 'Yuki Tsunoda', ChampionshipPosition: 11 },
    { Number: 6, Name: 'Isack Hadjar', ChampionshipPosition: 12 },

    { Number: 23, Name: 'Alexander Albon', ChampionshipPosition: 13 },
    { Number: 55, Name: 'Carlos Sainz Jr.', ChampionshipPosition: 14 },

    { Number: 10, Name: 'Pierre Gasly', ChampionshipPosition: 15 },
    //{ Number: 7, Name: 'Jack Doohan', ChampionshipPosition: 16 },
    { Number: 43, Name: 'Franco Colapinto', ChampionshipPosition: 16 },

    
    { Number: 87, Name: 'Oliver Bearman', ChampionshipPosition: 17 },
    { Number: 31, Name: 'Esteban Ocon', ChampionshipPosition: 18 },
    
    // { Number: 55, Name: 'Carlos Sainz Jr.', ChampionshipPosition: 17 },
    // { Number: 23, Name: 'Alexander Albon', ChampionshipPosition: 18 },

    { Number: 27, Name: 'Nico Hülkenberg', ChampionshipPosition: 19 },
    { Number: 5, Name: 'Gabriel Bortoleto', ChampionshipPosition: 20 },

  ] ;
*/

export const drivers: Driver[] = [
    { Number: 81, Name: 'Oscar Piastri', ChampionshipPosition: 1 },
    { Number: 4, Name: 'Lando Norris', ChampionshipPosition: 2 },
    { Number: 1, Name: 'Max Verstappen', ChampionshipPosition: 3 },
    { Number: 63, Name: 'George Russell', ChampionshipPosition: 4 },
    { Number: 16, Name: 'Charles Leclerc', ChampionshipPosition: 5 },
    { Number: 44, Name: 'Lewis Hamilton', ChampionshipPosition: 6 },
    { Number: 12, Name: 'Andrea Kimi Antonelli', ChampionshipPosition: 7 },
    { Number: 23, Name: 'Alexander Albon', ChampionshipPosition: 8 },
    { Number: 31, Name: 'Esteban Ocon', ChampionshipPosition: 9 },
    { Number: 27, Name: 'Nico Hülkenberg', ChampionshipPosition: 10 },
    { Number: 6, Name: 'Isack Hadjar', ChampionshipPosition: 11 },
    { Number: 18, Name: 'Lance Stroll', ChampionshipPosition: 12 },
    { Number: 10, Name: 'Pierre Gasly', ChampionshipPosition: 13 },
    { Number: 14, Name: 'Fernando Alonso', ChampionshipPosition: 14 },
    { Number: 55, Name: 'Carlos Sainz Jr.', ChampionshipPosition: 15 },
    { Number: 30, Name: 'Liam Lawson', ChampionshipPosition: 16 },
    { Number: 22, Name: 'Yuki Tsunoda', ChampionshipPosition: 17 },
    { Number: 87, Name: 'Oliver Bearman', ChampionshipPosition: 18 },
    { Number: 5, Name: 'Gabriel Bortoleto', ChampionshipPosition: 19 },
    { Number: 43, Name: 'Franco Colapinto', ChampionshipPosition: 20 }
  ];
  


export const constructorLineup_Australia: Constructor[] = [
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        44,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        63,
        6,
        87,
        23,
        27,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        4,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        81,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        1,
        31
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        12,
        22
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        30,
        14
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 7,
        "Name": "Jack Doohan",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        16,
        7
      ],
      "TotalPoints": 0
    }
  ];

export const raceResults_Australia: RaceResult[] = [
    {
      "position": "1",
      "number": "4",
      "driver": "Lando Norris",
      "car": "McLaren Mercedes",
      "laps": 57,
      "timeOrRetired": "1:42:06.304",
      "points": 25
    },
    {
      "position": "2",
      "number": "1",
      "driver": "Max Verstappen",
      "car": "Red Bull Racing Honda RBPT",
      "laps": 57,
      "timeOrRetired": "+0.895s",
      "points": 18
    },
    {
      "position": "3",
      "number": "63",
      "driver": "George Russell",
      "car": "Mercedes",
      "laps": 57,
      "timeOrRetired": "+8.481s",
      "points": 15
    },
    {
      "position": "4",
      "number": "12",
      "driver": "Andrea Kimi Antonelli",
      "car": "Mercedes",
      "laps": 57,
      "timeOrRetired": "+10.135s",
      "points": 12
    },
    {
      "position": "5",
      "number": "23",
      "driver": "Alexander Albon",
      "car": "Williams Mercedes",
      "laps": 57,
      "timeOrRetired": "+12.773s",
      "points": 10
    },
    {
      "position": "6",
      "number": "18",
      "driver": "Lance Stroll",
      "car": "Aston Martin Aramco Mercedes",
      "laps": 57,
      "timeOrRetired": "+17.413s",
      "points": 8
    },
    {
      "position": "7",
      "number": "27",
      "driver": "Nico Hulkenberg",
      "car": "Kick Sauber Ferrari",
      "laps": 57,
      "timeOrRetired": "+18.423s",
      "points": 6
    },
    {
      "position": "8",
      "number": "16",
      "driver": "Charles Leclerc",
      "car": "Ferrari",
      "laps": 57,
      "timeOrRetired": "+19.826s",
      "points": 4
    },
    {
      "position": "9",
      "number": "81",
      "driver": "Oscar Piastri",
      "car": "McLaren Mercedes",
      "laps": 57,
      "timeOrRetired": "+20.448s",
      "points": 2
    },
    {
      "position": "10",
      "number": "44",
      "driver": "Lewis Hamilton",
      "car": "Ferrari",
      "laps": 57,
      "timeOrRetired": "+22.473s",
      "points": 1
    },
    {
      "position": "11",
      "number": "10",
      "driver": "Pierre Gasly",
      "car": "Alpine Renault",
      "laps": 57,
      "timeOrRetired": "+26.502s",
      "points": 0
    },
    {
      "position": "12",
      "number": "22",
      "driver": "Yuki Tsunoda",
      "car": "Racing Bulls Honda RBPT",
      "laps": 57,
      "timeOrRetired": "+29.884s",
      "points": 0
    },
    {
      "position": "13",
      "number": "31",
      "driver": "Esteban Ocon",
      "car": "Haas Ferrari",
      "laps": 57,
      "timeOrRetired": "+33.161s",
      "points": 0
    },
    {
      "position": "14",
      "number": "87",
      "driver": "Oliver Bearman",
      "car": "Haas Ferrari",
      "laps": 57,
      "timeOrRetired": "+40.351s",
      "points": 0
    },
    {
      "position": "NC",
      "number": "30",
      "driver": "Liam Lawson",
      "car": "Red Bull Racing Honda RBPT",
      "laps": 46,
      "timeOrRetired": "DNF",
      "points": 0
    },
    {
      "position": "NC",
      "number": "5",
      "driver": "Gabriel Bortoleto",
      "car": "Kick Sauber Ferrari",
      "laps": 45,
      "timeOrRetired": "DNF",
      "points": 0
    },
    {
      "position": "NC",
      "number": "14",
      "driver": "Fernando Alonso",
      "car": "Aston Martin Aramco Mercedes",
      "laps": 32,
      "timeOrRetired": "DNF",
      "points": 0
    },
    {
      "position": "NC",
      "number": "55",
      "driver": "Carlos Sainz",
      "car": "Williams Mercedes",
      "laps": 0,
      "timeOrRetired": "DNF",
      "points": 0
    },
    {
      "position": "NC",
      "number": "7",
      "driver": "Jack Doohan",
      "car": "Alpine Renault",
      "laps": 0,
      "timeOrRetired": "DNF",
      "points": 0
    },
    {
      "position": "NC",
      "number": "6",
      "driver": "Isack Hadjar",
      "car": "Racing Bulls Honda RBPT",
      "laps": 0,
      "timeOrRetired": "DNF",
      "points": 0
    }
  ];

  export const constructorLineup_China_Sprint: Constructor[] = [
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [22, 18],
      "TotalPoints": 15
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [81, 23],
      "TotalPoints": 14
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [1, 55],
      "TotalPoints": 7
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [44, 6, 87, 23, 27, 5],
      "TotalPoints": 3
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [16, 10],
      "TotalPoints": 3
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [63, 6],
      "TotalPoints": 2
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [12, 30],
      "TotalPoints": 1
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [4, 14],
      "TotalPoints": 0
    }
  ];
  
  export const constructorLineup_China_GP: Constructor[] = [
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [63, 6, 87, 23, 27, 5],
      "TotalPoints": 11
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [16, 30],
      "TotalPoints": 11
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [81, 18],
      "TotalPoints": 21
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [1, 14],
      "TotalPoints": 13
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [12, 6],
      "TotalPoints": 3
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [22, 55],
      "TotalPoints": 14
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [44, 10],
      "TotalPoints": 13
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [4, 23],
      "TotalPoints": 21
    }
  ];
  
  export const constructorLineup_Japan: Constructor[] = [
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        4,
        30
      ],
      "TotalPoints": 34
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        44,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 33
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        12,
        10
      ],
      "TotalPoints": 25
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        81,
        23
      ],
      "TotalPoints": 15
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        1,
        18
      ],
      "TotalPoints": 13
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        22,
        14
      ],
      "TotalPoints": 11
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        16,
        6
      ],
      "TotalPoints": 8
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        63,
        55
      ],
      "TotalPoints": 8
    }
  ];

  
  export const constructorLineup_Bahrain: Constructor[] = [
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        16,
        18
      ],
      "TotalPoints": 23
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        63,
        55
      ],
      "TotalPoints": 43
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        81,
        23
      ],
      "TotalPoints": 18
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        44,
        10
      ],
      "TotalPoints": 30
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        22,
        14
      ],
      "TotalPoints": 38
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        12,
        30
      ],
      "TotalPoints": 14
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        4,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 25
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        1,
        6
      ],
      "TotalPoints": 11
    }
  ]

  export const raceResults_Bahrain: RaceResult[] = []



  export const constructorLineup_SaudiArabia: Constructor[] = [
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        12,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        44,
        23
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        16,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        22,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        63,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        1,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        81,
        14
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        4,
        30
      ],
      "TotalPoints": 0
    }
  ]

  export const constructorLineup_Miami_Sprint: Constructor[] = [
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        22,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        1,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        44,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        16,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        12,
        14
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        81,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        63,
        30
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        4,
        23
      ],
      "TotalPoints": 0
    }
  ];


  export const constructorLineup_Miami_GP: Constructor[] = [
  {
    "UserName": "Jimmer",
    "Driver1": {
      "Number": 1,
      "Name": "Max Verstappen",
      "ChampionshipPosition": 5
    },
    "Driver2": {
      "Number": 6,
      "Name": "Isack Hadjar",
      "ChampionshipPosition": 12
    },
    "DriverNumbers": [
      1,
      6
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Perry",
    "Driver1": {
      "Number": 63,
      "Name": "George Russell",
      "ChampionshipPosition": 7
    },
    "Driver2": {
      "Number": 14,
      "Name": "Fernando Alonso",
      "ChampionshipPosition": 9
    },
    "DriverNumbers": [
      63,
      14
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Joey",
    "Driver1": {
      "Number": 4,
      "Name": "Lando Norris",
      "ChampionshipPosition": 1
    },
    "Driver2": {
      "Number": 18,
      "Name": "Lance Stroll",
      "ChampionshipPosition": 10
    },
    "DriverNumbers": [
      4,
      18
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Gabe",
    "Driver1": {
      "Number": 22,
      "Name": "Yuki Tsunoda",
      "ChampionshipPosition": 6
    },
    "Driver2": {
      "Number": 10,
      "Name": "Pierre Gasly",
      "ChampionshipPosition": 15
    },
    "DriverNumbers": [
      22,
      10
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Zac",
    "Driver1": {
      "Number": 44,
      "Name": "Lewis Hamilton",
      "ChampionshipPosition": 4
    },
    "Driver2": {
      "Number": 55,
      "Name": "Carlos Sainz Jr.",
      "ChampionshipPosition": 14
    },
    "DriverNumbers": [
      44,
      55
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Nick",
    "Driver1": {
      "Number": 81,
      "Name": "Oscar Piastri",
      "ChampionshipPosition": 2
    },
    "Driver2": {
      "Number": 23,
      "Name": "Alexander Albon",
      "ChampionshipPosition": 13
    },
    "DriverNumbers": [
      81,
      23
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Kristin",
    "Driver1": {
      "Number": 12,
      "Name": "Andrea Kimi Antonelli",
      "ChampionshipPosition": 8
    },
    "Driver2": {
      "Number": 30,
      "Name": "Liam Lawson",
      "ChampionshipPosition": 11
    },
    "DriverNumbers": [
      12,
      30
    ],
    "TotalPoints": 0
  },
  {
    "UserName": "Jake",
    "Driver1": {
      "Number": 16,
      "Name": "Charles Leclerc",
      "ChampionshipPosition": 3
    },
    "Driver2": {
      "Number": 0,
      "Name": "Best Of The Rest",
      "ChampionshipPosition": 0
    },
    "DriverNumbers": [
      16,
      7,
      87,
      31,
      27,
      5
    ],
    "TotalPoints": 0
  }
]


export const constructorLineup_ImolaGP: Constructor[] = [
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        81,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        4,
        6,
        14,
        30,
        7,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 27,
        "Name": "Nico Hülkenberg",
        "ChampionshipPosition": 16
      },
      "DriverNumbers": [
        1,
        27
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        44,
        31
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 87,
        "Name": "Oliver Bearman",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        63,
        87
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        16,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "Driver2": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        23,
        22
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        12,
        55
      ],
      "TotalPoints": 0
    }
  ];


export const constructorLineup_MonacoGP: Constructor[] = [
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        63,
        22
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        81,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 27,
        "Name": "Nico Hülkenberg",
        "ChampionshipPosition": 16
      },
      "DriverNumbers": [
        44,
        27
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        16,
        31
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        12,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 87,
        "Name": "Oliver Bearman",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        1,
        87
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        23,
        6,
        14,
        30,
        7,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        4,
        55
      ],
      "TotalPoints": 0
    }
  ];
  



export const constructorLineup_BarcelonaGP: Constructor[] = [
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        22,
        23
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        81,
        14
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        63,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        16,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        12,
        30
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        4,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        44,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        1,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 0
    }
  ]
  



export const constructorLineup_CanadaGP: Constructor[] = [
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        63,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        16,
        14
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        22,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        44,
        30
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        81,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        4,
        23
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        1,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        12,
        18
      ],
      "TotalPoints": 0
    }
  ]
  
  


export const constructorLineup_AustrianGP: Constructor[] = [
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        1,
        23
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        44,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        4,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        81,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 22,
        "Name": "Yuki Tsunoda",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        22,
        30
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        12,
        7,
        87,
        31,
        27,
        5
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        16,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        63,
        14
      ],
      "TotalPoints": 0
    }
  ]


export const constructorLineup_BritishGP: Constructor[] = [
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [44, 6],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [16, 30],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [12, 18],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 16
      },
      "DriverNumbers": [23, 31],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [1, 55],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 27,
        "Name": "Nico Hülkenberg",
        "ChampionshipPosition": 17
      },
      "DriverNumbers": [63, 27],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [4, 14],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [81,
        7,
        87,
        31,
        27,
        5],
      "TotalPoints": 0
    }
  ];
  



export const constructorLineup_SpaSP: Constructor[] = [
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        1,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        23,
        31
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        63,
        10,
        22,
        87,
        5,
        43
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        4,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        16,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 30,
        "Name": "Liam Lawson",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        81,
        30
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        12,
        14
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 27,
        "Name": "Nico Hülkenberg",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        44,
        27
      ],
      "TotalPoints": 0
    }
  ]
  


  export const constructorLineup_SpaGP: Constructor[] = [
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [81, 30, 22, 87, 5, 43],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [4, 14],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [12, 10],
      "TotalPoints": 0
    },
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [1, 18],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 13
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [23, 55],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [63, 6],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 27,
        "Name": "Nico Hülkenberg",
        "ChampionshipPosition": 17
      },
      "DriverNumbers": [16, 27],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 16
      },
      "DriverNumbers": [44, 31],
      "TotalPoints": 0
    }
  ];
  


  export const constructorLineup_MexicanGP: Constructor[] = [
    {
      "UserName": "Joey",
      "Driver1": {
        "Number": 81,
        "Name": "Oscar Piastri",
        "ChampionshipPosition": 1
      },
      "Driver2": {
        "Number": 31,
        "Name": "Esteban Ocon",
        "ChampionshipPosition": 9
      },
      "DriverNumbers": [
        81,
        31
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Perry",
      "Driver1": {
        "Number": 12,
        "Name": "Andrea Kimi Antonelli",
        "ChampionshipPosition": 7
      },
      "Driver2": {
        "Number": 0,
        "Name": "Best Of The Rest",
        "ChampionshipPosition": 0
      },
      "DriverNumbers": [
        12,
        30,
        22,
        87,
        5,
        43
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Zac",
      "Driver1": {
        "Number": 4,
        "Name": "Lando Norris",
        "ChampionshipPosition": 2
      },
      "Driver2": {
        "Number": 55,
        "Name": "Carlos Sainz Jr.",
        "ChampionshipPosition": 15
      },
      "DriverNumbers": [
        4,
        55
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Gabe",
      "Driver1": {
        "Number": 44,
        "Name": "Lewis Hamilton",
        "ChampionshipPosition": 6
      },
      "Driver2": {
        "Number": 6,
        "Name": "Isack Hadjar",
        "ChampionshipPosition": 11
      },
      "DriverNumbers": [
        44,
        6
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jimmer",
      "Driver1": {
        "Number": 1,
        "Name": "Max Verstappen",
        "ChampionshipPosition": 3
      },
      "Driver2": {
        "Number": 18,
        "Name": "Lance Stroll",
        "ChampionshipPosition": 12
      },
      "DriverNumbers": [
        1,
        18
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Kristin",
      "Driver1": {
        "Number": 63,
        "Name": "George Russell",
        "ChampionshipPosition": 4
      },
      "Driver2": {
        "Number": 10,
        "Name": "Pierre Gasly",
        "ChampionshipPosition": 13
      },
      "DriverNumbers": [
        63,
        10
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Nick",
      "Driver1": {
        "Number": 16,
        "Name": "Charles Leclerc",
        "ChampionshipPosition": 5
      },
      "Driver2": {
        "Number": 27,
        "Name": "Nico Hülkenberg",
        "ChampionshipPosition": 10
      },
      "DriverNumbers": [
        16,
        27
      ],
      "TotalPoints": 0
    },
    {
      "UserName": "Jake",
      "Driver1": {
        "Number": 23,
        "Name": "Alexander Albon",
        "ChampionshipPosition": 8
      },
      "Driver2": {
        "Number": 14,
        "Name": "Fernando Alonso",
        "ChampionshipPosition": 14
      },
      "DriverNumbers": [
        23,
        14
      ],
      "TotalPoints": 0
    }
  ];