import React from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
      <Link to={`/chuck`}>Chuck</Link>&nbsp;
      <Link to={`/xkcd`}>XKCD</Link>&nbsp;
      <Link to={`/news`}>News</Link>&nbsp;
      <Link to={`/pw`}>PW</Link>&nbsp;
      <Link to={`/bitcoin`}>Bitcoin</Link>&nbsp;
      <Link to={`/dad`}>Dad Joke</Link>
      </div>
    )
  }
}

export default Header;