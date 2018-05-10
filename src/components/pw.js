import React from "react"
import { connect } from "react-redux";
import Header from './header';

class PW extends React.Component {

  render() {
    const analyzer = this.props.pw.analyzer;
    return (
      <div className="pw">
        <Header />
        <br />
        {(this.props.isLoading) ? <div className="isLoading">Loading...</div> :
          <div>
            <div className="redirect">The request for {analyzer.url} should redirect to {analyzer.redirectUrl}</div>
            <div className="content">
              <ul className="navlinks">
                {
                  this.props.pw.navlinks.map((navlink, i) => {
                    return <li key={i}>{navlink.displayText}</li>
                  })
                }
              </ul>
              <ul className="products">
                {
                  this.props.pw.products.map((product, i) => {
                    return <li key={i}>{product.title}</li>
                  })
                }
              </ul>
            </div>
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