export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'Customer' | 'Seller';
  image: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  favorites: Products[];
}

export interface Products {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string | string[];
  material: string;
  stock: number;
  category: string;
  userId: string;
  rating: number;
}

export interface Category {
  _id: string;
  name: string;
  subCategories: string | string[] | [];
}

export interface shoppingCart {
    _id: string;
    product: Products | Products[];
    quantity: number;
    stock: number;
    userId: string;
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
}

export interface CartState {
  cartItems: shoppingCart[];
}

export interface RootState {
  cartReducer: CartState;
  // otros estados...
}