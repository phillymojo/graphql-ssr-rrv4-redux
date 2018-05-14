import React from "react"
import { connect } from 'react-redux';
import Header from './header';
 
export class Bitcoin extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        {!this.props.isLoading ?
        <div>
          <div>Bitcoin price:</div>
          <div>{`USD: ${this.props.bitcoin.usdPrice}`}</div>
          <div>{`GBP: ${this.props.bitcoin.gbpPrice}`}</div>
          <div>{`EUR: ${this.props.bitcoin.eurPrice}`}</div>
        </div> :
        <div>Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    bitcoin: state.bitcoin.data.bitcoin,
    isLoading: state.isLoading
  }
 }
  
 export const BitcoinConnected = connect(
   mapStateToProps
 )(Bitcoin)

