import React, { Component } from 'react';
import Loader from './Loader';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    pageSize: 16,
    catagory: 'health'
  };

  static propTypes = {
    pageSize: PropTypes.number,
    catagory: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalNews: 0,
    }
  }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 12 more records in 1.5 secs
    //setTimeout(() => {
    console.log(this.state.page)
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parseData.articles),
      loading: false
    });
    //this.updateNews();    
    //}, 1500);
  };

  async updateNews() {
    console.log(this.state.page)
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalNews: parseData.totalResults,
      loading: true
    });
  }
  async componentDidMount() {
    /* let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page:1,
      totalNews:parseData.totalResults,
      loading:false
    }); */
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  }

  prevNews = async () => {
    /* let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page:this.state.page - 1,
      loading:false
    }); */
    this.setState({
      page: this.state.page - 1
    });
    this.updateNews();
  }

  nextNews = async () => {
    /* if (!(this.state.page + 1 > Math.ceil(this.state.totalNews/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page:this.state.page + 1,
        loading:false
      });
      console.log('Next Clicked', this.state.page)
     }    */
    console.log('Next ', this.state.page)
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  }
  render() {
    return (
      <>
        <h2 className='my-4'>Top headlines of {this.props.category} news</h2>
        {/* {this.state.loading && <Loader />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalNews}
          loader={this.state.loading && <Loader />}
          key={this.state.articles.length}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return <div className="col-md-4 my-4" key={index}>
                  <NewsItems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.prevNews}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalNews/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.nextNews}>Next &rarr; </button>
      </div> */}

      </>
    );
  }
}

export default News;