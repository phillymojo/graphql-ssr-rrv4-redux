import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
 
class News extends React.Component {

  render() {
    return (
      <div>
        News<br />
        <ul>
          {
            this.props.newsItems.map((newsItem, i) => {
              return (
                <li key={i}>
                  <a href={newsItem.url} target="_blank">
                  <img src={newsItem.urlToImage} width="100px" />
                  {newsItem.title}
                  </a>
                </li>
              )
            })
          }
          </ul>
        <Link to={`/some-other-path`}>More</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
 return {
   newsItems: state.newsItems.data.news,
   isLoading: state.isLoading
 }
}
 
export const NewsConnected = connect(
  mapStateToProps
)(News)