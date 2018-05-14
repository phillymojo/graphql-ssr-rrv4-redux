import React from "react"
import { connect } from 'react-redux';
import Header from './header';
 
export class Dad extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        {!this.props.isLoading ?
        <div>
          <div>Dad joke:</div>
          <div>{this.props.dad.joke}</div>
        </div> :
        <div>Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    dad: state.dad.data.dad,
    isLoading: state.isLoading
  }
 }
  
 export const DadConnected = connect(
   mapStateToProps
 )(Dad)

