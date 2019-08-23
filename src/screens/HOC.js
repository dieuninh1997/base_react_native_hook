import { connect, useSelector } from 'react-redux'
import React, { } from 'react'

export default (Component) => {
  const mapStateToProps = (state) => ({ global: state.global.token })

  return connect(mapStateToProps, null)(class Abc extends React.PureComponent {
    constructor(props) {
      super(props)
    }

    
    render() {
      return (<Component {...this.props} />)
    }
  })
}
