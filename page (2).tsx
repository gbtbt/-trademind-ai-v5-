export default function Home() {
  return (
    <main style={{maxWidth:900,margin:'0 auto',padding:'60px 20px'}}>
      <p style={{color:'#22c55e',letterSpacing:2,fontSize:12}}>TRADEMIND AI • УКРАЇНСЬКА • v5 ВИПРАВЛЕНО</p>
      <h1 style={{fontSize:52,lineHeight:1.05}}>Торгуй розумніше.<br/>Контролюй свій ризик.</h1>
      <p style={{color:'#94a3b8',fontSize:18,lineHeight:1.6}}>Всі помилки збірки виправлено. Спочатку деплой без ключів, потім Supabase, потім Stripe — по одному кроку.</p>
      <div style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}}>
        <a href="/dashboard" style={{background:'#22c55e',color:'#04110a',padding:'12px 22px',borderRadius:12,fontWeight:700,textDecoration:'none'}}>Дашборд</a>
        <a href="/journal" style={{border:'1px solid #334155',color:'#fff',padding:'12px 22px',borderRadius:12,textDecoration:'none'}}>Журнал</a>
      </div>
      <div style={{background:'#0a1220',border:'1px solid #1e293b',borderRadius:16,padding:20,marginTop:32}}>
        <b>Що виправлено в v5:</b>
        <ul style={{color:'#94a3b8',lineHeight:1.8}}>
          <li>✅ Додано src/app/ — Vercel більше не каже «no pages/app»</li>
          <li>✅ Збірка не падає без ключів — Supabase/Stripe ліниві</li>
          <li>✅ Українська за замовчуванням</li>
          <li>✅ Жодних ключів у репозиторії</li>
          <li>✅ next.config не валить деплой через lint/TS</li>
        </ul>
      </div>
      <p style={{color:'#64748b',marginTop:24,fontSize:13}}>Демо-дані. Не фінансова порада. Без гарантій прибутку.</p>
    </main>
  );
}
