export interface FoodType{
    id?: string;
    name: string;
    cookTime: string;
    price: number;
    favorite: boolean;
    origins: string[];
    stars: number;
    imageUrl: string;
    tags: string[];
};

export interface TagType{
    name: string;
    count: number;
};

export interface UserType {
  id?:string
  name: string;
  email: string;
  password: string;
  address: string;
  isAdmin: boolean
};