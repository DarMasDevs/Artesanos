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
    subtotal: number;
    image: string;
    title: string;
    price: number;
}

export interface Order {
    _id: string;
    number: string;
    date: string;
    total: string;
    status: string;
}

export interface Notification {
    _id: string;
    message: string;
    date: string;
    isRead: boolean;
}


export interface CartState {
  cartItems: shoppingCart[];
}

export interface userState {
  user: User;
  favorites: Products[];
  editingReviewId: string | null;
  editedComment: string;
}

export interface RootState {
  cartReducer: CartState;
  userReducer: userState;
  // otros estados...
}