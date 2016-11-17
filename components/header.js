import React from 'react'
import '../css/index.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <img src={require('../img/fox.png')} />
        <h1>Don't Steal My Startup Idea</h1>
        <h4>Список стартап идей, с которыми я с вами ни за что не поделюсь.</h4>
      </div>
    )
  }
}
