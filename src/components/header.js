import React from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
      <Link to={`/some-path`}>Chuck</Link>&nbsp;
      <Link to={`/some-other-path`}>XKCD</Link>&nbsp;
      <Link to={`/news`}>News</Link>&nbsp;
      <Link to={`/pw`}>PW</Link>
      </div>
    )
  }
}

export default Header;