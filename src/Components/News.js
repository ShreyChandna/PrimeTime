import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country : "in",
    pageSize : 8,
    category : "general",
    apikey : process.env.REACT_APP_NEWS_API
  }
  static propTypes ={
    country :PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
    
      constructor()
        {
            super();
            this.state = {
            articles: [],
            loading : false,
            page :1
            }
        }
        async updateNews(){
          const url =`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({loading :true});
          let data=await fetch(url);
          let parsedData=await data.json();
          console.log(parsedData);
          this.setState({articles : parsedData.articles,
              totalResults:parsedData.totalResults,
              loading:false })
      }
        
       async componentDidMount(){
            let url =`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading :true});
            let data=await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData);
            this.setState({articles : parsedData.articles,
                totalResults:parsedData.totalResults,
                loading:false })
        }
        handlePrevious= async()=>{
           
          this.setState({page:this.state.page-1},
            ()=>{this.updateNews()}
          )};
        handleNext=async ()=>
        {   
            
            this.setState({page:this.state.page+1},
              ()=>{this.updateNews()}
              )};

    

  render() {
    return (
        
      <div className="container my-3" >
          <h1 className="text-center"  style={{margin:'30px'}}>NEWSPEDIA-TOP HEADLINES</h1>
        
          {this.state.loading && <Spinner />} 
             
          <div className="row"> 
          {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col md-4"  key={element.url}>
          <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
          </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
    
          <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} className="btn btn-dark">&larr; PREVIOUS </button>
          <button type="button" disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext} className="btn btn-dark"> &rarr; NEXT</button>
          </div>
          
        </div>
      
     
    )
  }
}

export default News
