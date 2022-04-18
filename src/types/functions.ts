import { IColumn } from "./interfaces";

export interface ColumnFunctions {
  onEditColumn: (values: IColumn) => void;
}

export interface CardFunctions {
  onCardClick: (id: number) => void;
  onAddCard: () => void;
  onEditCard: (id: number) => void;
  onDeleteCard: (id: number) => void;
}

export interface CommentFunction {
  onAddComment: (id: number, comment: string) => void;
  onEditComment: (id: number, comment: string) => void;
  onDeleteComment: (id: number) => void;
}
