export type Configuration = {
  username: string;
  outputDirectory: string;
};

export type Player = {
  name: string;
  win: boolean;
  score: number;
  firstPlay: boolean;
  team?: string;
};

export type Game = {
  id: string;
  name: string;
};

export type Play = {
  players: Player[];
  game: Game;
  id: string;
  location: string;
  date: string;
};

export type Page = {
  username: string;
  userid: string;
  total: number;
  page: number;
  plays: Play[];
};
