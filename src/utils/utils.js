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

// TODO: replace with https://www.gnucoop.com
const baseUrl = 'https://www.gnucoop.com';

export function helmetMeta({title, description, fixedImage}) {
  const meta = [];
  if (title) {
    meta.push(
      { property:  'og:title', content: title },
      { name: 'twitter:title', content: title },
    );
  }
  if (description) {
    const desc = description.substring(0, Math.min(160, description.length));
    meta.push(
      { name:         'description', content: desc },
      { property:  'og:description', content: desc },
      { name: 'twitter:description', content: desc },
    );
  }
  if (fixedImage && fixedImage.src) {
    meta.push(
      { property: 'og:image', content: baseUrl + fixedImage.src },
    );
  }
  if (fixedImage && fixedImage.width && fixedImage.height) {
    meta.push(
      { property: 'og:image:width',  content: fixedImage.width  },
      { property: 'og:image:height', content: fixedImage.height },
    );
  }
  return meta;
}
