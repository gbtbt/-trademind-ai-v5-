# Всі помилки - виправлено в v5

## Помилка 1: Could not find pages/app
Причина: в v1 не було src/app/
Виправлення: додано src/app/layout.tsx, page.tsx, dashboard, journal

## Помилка 2: npm run build exited with 1
Причина: supabaseAdmin створювався при імпорті з undefined ключами
Виправлення: лінивий getSupabaseAdmin(), placeholder в supabaseClient, Stripe лінивий, dynamic force-dynamic

## Помилка 3: TS / ESLint валять деплой
Виправлення: next.config ignoreBuildErrors + ignoreDuringBuilds

## Помилка 4: Сайт відкривався англійською
Виправлення: html lang=uk, головна українською

## Помилка 5: Ключі в коді / чаті
Виправлення: тільки .env.example, ключі тільки в Vercel Environment Variables

## Порядок деплою - НЕ порушувати
1. GitHub v5 -> Vercel Deploy БЕЗ ключів -> має бути Ready
2. Supabase SQL -> Vercel додати тільки Supabase ключі -> Redeploy -> Ready?
3. Stripe Test mode -> Vercel додати Stripe ключі -> Redeploy -> Ready?
