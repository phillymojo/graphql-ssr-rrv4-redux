import React from "react"
import { connect } from "react-redux"
import Header from './header';

class SomeComponent extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        {this.props.isLoading ? 
          <span>Loading...</span> :
          <span>{this.props.chuckNorrisQuote}</span>
        }
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