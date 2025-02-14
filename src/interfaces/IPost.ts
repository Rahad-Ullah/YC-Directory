export interface IPost {
  _id: number;
  author: {
    _id: number;
    name: string;
  };
  title: string;
  description: string;
  image: string;
  views: number;
  category: string;
  _createdAt: string;
}
