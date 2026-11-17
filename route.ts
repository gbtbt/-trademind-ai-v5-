export const dynamic = 'force-dynamic';
import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) return new Response('Stripe env vars not set', { status: 500 });
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;
  let event: Stripe.Event;
  try { event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET); }
  catch (e: any) { return new Response(`Webhook Error: ${e.message}`, { status: 400 }); }
  const admin = getSupabaseAdmin();
  if (event.type === 'checkout.session.completed') { /* set plan via admin */ }
  if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.deleted') { /* sync */ }
  if (event.type === 'invoice.payment_failed') { /* mark past_due, do NOT unlock */ }
  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
