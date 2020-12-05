import React from 'react'

// props.data must be an array of objects {key: string, url: string}.
// The autocomplete search is done on key and onSelection we navigate to url.
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    // Importing autocomplete uses window, so it must be avoided in server-side rendering.
    const autoComplete = require('@tarekraafat/autocomplete.js')

    new autoComplete({
      selector: '#' + this.props.id,
      placeHolder: this.props.placeholder,
      data: { src: this.props.data, key: ['key'] },
      resultsList: { render: true, element: 'div' },
      resultItem: { element: 'div' },
      highlight: true,
      onSelection: feedback => {window.location.href = feedback.selection.value.url},
    })
  }

  render() {
    return <div className="search-box" style={{width: this.props.width || '200px'}}>
      <input id={this.props.id} tabIndex="1" autoComplete="off" />
    </div>
  }
}

export default SearchBar
