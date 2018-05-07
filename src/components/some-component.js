import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
 
class SomeComponent extends React.Component {

  render() {
    return (
      <div>
        Some Component<br />
        {this.props.isLoading ? 
          <span>Loading...</span> :
          <span>{this.props.chuckNorrisQuote}</span>
        }
        <Link to={`/some-other-path`}>More</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
 return {
   chuckNorrisQuote: state.chuckNorrisQuote,
   isLoading: state.isLoading
 }
}
 
export const SomeComponentConnected = connect(
  mapStateToProps
)(SomeComponent)