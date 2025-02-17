import { shoppingCart } from '@/types/types';
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configura el cliente de Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.token_MP!, // Usa tu access token desde las variables de entorno
});

console.log("client", client);

export async function POST(request: Request) {
  try {
    
    const body = await request.json();
    const { items } = body;
    console.log("items", items);
    // Crea la preferencia de pago
    const preferenceData = {
      items: items.map((item: shoppingCart) => ({
        title: item.title,
        unit_price: item.price,
        quantity: item.quantity,
      })),
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`, // URL de éxito
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`, // URL de fallo
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/pending`, // URL pendiente
      },
      auto_return: 'approved', // Redirige automáticamente al usuario después del pago
    };

    // Crea la preferencia en Mercado Pago
    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceData });

    // Devuelve el ID de la preferencia
    return new Response(JSON.stringify({ id: result.id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating Mercado Pago preference:', error);
    return new Response(JSON.stringify({ error: 'Failed to create preference' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}