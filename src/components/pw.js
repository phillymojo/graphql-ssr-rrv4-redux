import React from "react"
import { connect } from "react-redux";
import Header from './header';
 
class PW extends React.Component {

  render() {
    const pw = this.props.pw;
    return (
      <div>
        <Header />
        <br />
        { (this.props.isLoading) ? <div>Loading...</div> : 
        <div>The request for {pw.url} should redirect to {pw.redirectUrl}</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
 return {
  //  newsItems: state.newsItems.data.news,
  pw: state.PW.data.pw,
  isLoading: state.isLoading
 }
}
 
export const PWConnected = connect(
  mapStateToProps
)(PW)