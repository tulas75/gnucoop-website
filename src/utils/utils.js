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

export function setCookie(name, value, exdays) {
  if (!exdays) {
    exdays = 365;
  }
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

export function getCookie(name) {
  name = name + '=';
  const ca = decodeURIComponent(document.cookie).split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
