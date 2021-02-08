export type GameType = "DOTA2" | "CSGO";

export enum TournamentStage {
  GROUP = "group",
  PLAYOFF = "playoff",
}

export enum TournamentType {
  SINGLE = "single elimination",
  DOUBLE = "double elimination",
  RR = "round robin",
  SWISS = "swiss",
}

export enum TournamentAccess {
  PRIVATE = "private",
  PUBLIC = "public",
}

export interface ITournamentBase {
  _id: string;
  name: string;
  description: string;
  sponsors: [
    {
      name: string;
      img: string;
    }
  ];
  afisha: string;
  game_rules: string;
  matches: any[];
  added_participants: boolean;
  isRegistrationOpen: boolean;
  size: number;
  teamSize: number;
  registration_fee: number;
  date?: Date;
  prize_pool: number;
  location: string;
  tournament_type: TournamentType;
  games: GameType[];
  active: boolean;
  admins: string[];
  tournament_stage: TournamentStage;
  winner?: string;
  access: TournamentAccess;
}

export interface ITournament extends ITournamentBase {
  status: "Registration" | "Started" | "Finished";
}
