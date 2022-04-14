export interface usersInterface {
  id: number;
  name: string;
};

export interface columnsInterface {
  id: number;
  column: string;
};

export interface cardsInterface {
  id: number;
  idColumn: number;
  title: string;
  description: string;
};

export interface commentsInterface {
  id: number;
  idCard: number;
  idUser: number;
  comment: string;
};

