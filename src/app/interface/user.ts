export interface User {
  username: string;
  password: string;
}

export interface ReadingList {
  _id: string;
  title: string;
  author: string;
  description: string;
  isbn: string;
  timesRead: number;
  __v: number;
  ratings: Rating[];
}

export interface Rating {
  username: string;
  rating: string;
}
