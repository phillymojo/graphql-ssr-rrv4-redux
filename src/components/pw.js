import React from "react"
import { connect } from "react-redux";
import Header from './header';
 
class PW extends React.Component {

  render() {
    const analyzer = this.props.pw.analyzer;
    return (
      <div>
        <Header />
        <br />
        { (this.props.isLoading) ? <div>Loading...</div> : 
        <div>
          <div>The request for {analyzer.url} should redirect to {analyzer.redirectUrl}</div>
          <ul>
            {
              this.props.pw.products.map((product, i) => {
                return <li key={i}>{product.title}</li>
              })
            }
          </ul>
        </div>
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