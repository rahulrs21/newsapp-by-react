import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  } 

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        page: 1,
        loading: true,
        totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News App`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bcf9840066f4fae95328d5d0f215f1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
   
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("Previous click"); 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bcf9840066f4fae95328d5d0f215f1f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
   
    this.setState({
      articles: parsedData.articles,
      page: this.state.page-1,
      loading: false
    })

    this.setState({
      page: this.state.page-1
    })

    this.updateNews();
  }

  handleNextClick = async () => {
    
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bcf9840066f4fae95328d5d0f215f1f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
     

      this.setState({
        articles: parsedData.articles,
        page: this.state.page+1,
        loading: false
      })
      
    }
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bcf9840066f4fae95328d5d0f215f1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     
    let data = await fetch(url);
    let parsedData = await data.json(); 
    console.log(parsedData);
   
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  };

  render() {
    return (
        <div className="container my-3">
            <h1 className="text-center my-3 text-white">Welcome to News App - <b>{this.capitalizeFirstLetter(this.props.category)}</b></h1>
            
            {this.state.loading && <Spinner />}
            
            
            <div className='bg-dark bg-gradient rounded py-1'  >
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
              >
              
              <div className="row mx-auto my-3" style={{width: 'auto', height: '80vh'}}>  
                  <div className='d-flex justify-content-between' >
                    {/* <p className='text-white'>Category: <b>{this.capitalizeFirstLetter(this.props.category)}</b></p>  
                    <p className='text-white'>Page: <b>{this.state.page} / {this.props.pageSize}</b></p>  */}
                  </div>
                  {this.state.articles.map((element) => {
                      return <div className='col-md-4 d-flex justify-content-evenly' key={element.url} >
                          <NewsItem title={element.title ? element.title.slice(0,45) : ""} description={element.description ? element.description.slice(0,88) : "The armed squad took over the security of Murmu, 64, early Wednesday morning"} imageURL={element.urlToImage} newsURL={element.url} author={element.author ? element.author : 'unknown'} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                      </div>
                  })}
                   
              </div>
              </InfiniteScroll>
            </div>

            {/* <div className='container d-flex justify-content-evenly my-5'>
                <button disabled={this.state.page <=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}

            

        </div>
    )
  }
}

export default News