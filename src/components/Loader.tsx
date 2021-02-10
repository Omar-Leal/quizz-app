import React from 'react'

import '../styles/Loader.css'

export default class Loader extends React.Component {
  render() {
    return (
      <div className="lds-ellipsis">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
