export interface BookType {
  id: string;
  author: string;
  title: string;
}

export interface BookListType extends Array<BookType> {}
