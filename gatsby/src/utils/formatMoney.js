const formatter = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
}).format

export default function formatMoney(cents) {
  return formatter(cents / 100)
}
