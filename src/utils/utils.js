// '2020-12-31' -> '31/12/2020'
export function formatDateEu(d) {
  return `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}`;
}

// Returns a function that tells if an article has the specified tag.
export function hasTag(tag) {
  return article => {
    for (const t of article.node.tags) {
      if (t.tag === tag) {
        return true;
      }
    }
    return false;
  }
}
