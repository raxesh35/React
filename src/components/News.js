import React, { Component } from 'react';
import NewsItems from './NewsItems';

class News extends Component {
  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&page=1&pageSize=12";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page:1,
      totalNews:parseData.totalResults
    });
  }

  prevNews = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&page=${this.state.page - 1}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page:this.state.page - 1
    });
  }

  nextNews = async() =>{
    if (this.state.page + 1 > Math.ceil(this.state.totalNews/12)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a5ba6f5c8574614998d3de4303e7028&page=${this.state.page + 1}&pageSize=12`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page:this.state.page + 1
      });
      console.log('Next Clicked', this.state.page)
     }    
  }
  render() {
    return (
      <div className="container">
      <h2 className='my-4'>All News</h2>
      <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3 my-2" key={element.url}>
                  <NewsItems title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imgUrl={element.urlToImage?element.urlToImage:"https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"} newsDetail={element.url}/>
                </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.prevNews}>&larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.nextNews}>Next &rarr; </button>
      </div>
    </div>

    );
  }
}

export default News;