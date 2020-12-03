import React from 'react'

import autoComplete from '@tarekraafat/autocomplete.js'

// props.data must be an array of objects {key: string, url: string}.
// The autocomplete search is done on key and onSelection we navigate to url.
const SearchBar = props => {
  // setTimeout avoids creating the autoComplete object in server-side rendering.
  // TODO: we may want to better integrate the autoComplete object in the react
  // component's lifecycle. Right now we rely on the fact that the site is static
  // and each component instance is rendered once.
  setTimeout(() => new autoComplete({
    selector: '#' + props.id,
    placeHolder: props.placeholder,
    data: { src: props.data, key: ['key'] },
    resultsList: { render: true, element: 'div' },
    resultItem: { element: 'div' },
    highlight: true,
    onSelection: feedback => {window.location.href = feedback.selection.value.url},
  }), 1)
  return <div className="search-box" style={{width: props.width || '200px'}}>
    <input id={props.id} tabIndex="1" autoComplete="off" />
  </div>
}

export default SearchBar
