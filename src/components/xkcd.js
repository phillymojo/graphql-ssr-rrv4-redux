import React from "react"
import { connect } from 'react-redux';
import Header from './header';
 
export class XKCD extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        {!this.props.isLoading ?
        <div>
          <div>{this.props.xkcd.title}(#{this.props.xkcd.num})</div>
          <img src={this.props.xkcd.img} title={this.props.xkcd.alt} />
        </div> :
        <div>Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    xkcd: state.XKCD.data.xkcd,
    isLoading: state.isLoading
  }
 }
  
 export const XKCDConnected = connect(
   mapStateToProps
 )(XKCD)

