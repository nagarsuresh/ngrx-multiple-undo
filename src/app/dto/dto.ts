export interface Order {
  id: string;
  product?: string;
  customerName?: string;
  quantity?: number;
  rate?: number;
  total?: number;
}

// export interface Product {
//   productId: string;
//   productName: string;
// }

// export const productsList: Product[] = [
//   {
//     productId: 'greenTea',
//     productName: 'Grean Tea'
//   },
//   {
//     productId: 'blackTea',
//     productName: 'Black Tea'
//   }
// ];
