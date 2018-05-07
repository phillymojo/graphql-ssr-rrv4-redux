import React from "react"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
export class SomeOtherComponent extends React.Component {

  render() {
    return (
      <div>
        Some Other Component<br />
        {!this.props.isLoading ?
        <div>
          <div>{this.props.xkcd.title}(#{this.props.xkcd.num})</div>
          <img src={this.props.xkcd.img} title={this.props.xkcd.alt} />
        </div> :
        <div>Loading...</div>
        }
        <Link to={`/some-path`}>More</Link>
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
  
 export const SomeOtherComponentConnected = connect(
   mapStateToProps
 )(SomeOtherComponent)

