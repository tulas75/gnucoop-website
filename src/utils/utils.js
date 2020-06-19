// '2020-12-31' -> '31/12/2020'
export function formatDateEu(d) {
  return `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}`;
}
