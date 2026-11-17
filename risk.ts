export function calcRisk({ balance, riskPct, entry, sl, tp }: any) {
  if (!balance || !entry || entry === sl) return null;
  const riskAmount = balance * (riskPct / 100);
  const qty = riskAmount / Math.abs(entry - sl);
  return { riskAmount, qty, positionSize: qty * entry, profit: Math.abs(tp - entry) * qty, loss: riskAmount };
}
