export interface userInterface {
  id: number;
  name: string;
};

export interface columnInterface {
  id: number;
  column: string;
};

export interface cardInterface {
  id: number;
  columnId: number;
  title: string;
  description: string;
};

export interface commentInterface {
  id: number;
  cardId: number;
  userId: number;
  comment: string;
};

