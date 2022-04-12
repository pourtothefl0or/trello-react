export interface usersInterface {
  id: number;
  name: string;
};

export interface titlesInterface {
  id: number;
  title: string;
};

export interface cardsInterface {
  id: number;
  idTitle: number;
  title: string;
  description: string;
};

export interface commentsInterface {
  id: number;
  idCard: number;
  idUser: number;
  comment: string;
};

