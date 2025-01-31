export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'seller' | 'user';
  image: string;
  products: Products[];
}

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  material: string;
}


export interface shoppingCart {
    id: string;
    product: Products | Products[];
    quantity: number;
    userId: string;
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
}