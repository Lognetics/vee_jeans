export function formatNaira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export function calcDiscount(price: number, comparePrice?: number) {
  if (!comparePrice || comparePrice <= price) return null;
  return Math.round(((comparePrice - price) / comparePrice) * 100);
}
