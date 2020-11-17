import React, { Component }  from 'react';

import './App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import SingleCard from './components/singleCard/singleCard';
import Footer from './components/footer/footer';

const baseUrl='http://www.omdbapi.com';    
const authToken="499e294";

class app extends Component {
  constructor(props){
    super(props);
    //state defined - properties - movies(all) and four categories
    this.state={
      movies:[],
      recommended:[],
      upcoming:[],
      boxoffice:[],
      critics:[],
      showMovies:false, 
      movie:{},
      pageType:""
    }
  }
  //when component mounts
  componentDidMount=()=>{
    this.exploreMovies();
  }
  //array of search words - in a loop - get movies on all these search words
  //out of all movies got - randomly select movies for four categories
  exploreMovies=async()=>{     
      let arr=["boy", "girl", "man", "woman", "king", "queen", "dream", "play", "fire", "rain"];
      let apiResponse=[];
      for(let i=0; i<arr.length; i++){
        let searchTitle=arr[i];
        let temp=await this.getMovies(searchTitle);
        apiResponse.push(temp);                      
      }     
      console.log("apiResponse" , JSON.stringify(apiResponse));
      let a=apiResponse.reduce((arr, el)=>{
        return arr.concat(el)
    }, []);


      this.setState({
        pageType:"home",
        recommended:this.pickRandomly(a, 6),
        boxoffice:this.pickRandomly(a, 6),
        upcoming:this.pickRandomly(a, 6),
        critics:this.pickRandomly(a, 6),
        movies:a
      })
                  
  }
//function - to make api calls 
  getMovies = async (s)=>{      
    
    const api_call=await fetch(`${baseUrl}/?s=${s}&apikey=${authToken}`);
    const response = await api_call.json();
    
    let temp=response.Search;
    /*    
    let a=[...this.state.movies];    
    a.push(temp);    
    a=a.reduce((arr, el)=>{
      return arr.concat(el)
  }, []);
//console.log(a);
    this.setState({
      recommended:this.pickRandomly(a, 6),
      boxoffice:this.pickRandomly(a, 6),
      upcoming:this.pickRandomly(a, 6),
      critics:this.pickRandomly(a, 6),
      movies:a
    })
    */
   return temp;        
  }
//out of all  movies - randomly select movies and keep them exclusive
  pickRandomly=(arr, number)=>{
    let newArr=[];
    for(let i=0; i<number; i++){
      let index=Math.floor(Math.random()*arr.length);
      let temp=arr[index];
      //ensure exclusive
      if(newArr.indexOf(temp)=== -1){
        newArr.push(temp);
      } else {//if matches not to increase counter
          --i
      }      
    }
    console.log(newArr);
    return newArr;
  }

  showSingleMovie=async(id)=>{
    console.log(id);
    //this.baseUrl+"/?i="+singleMovieId+"&apikey="+this.authToken)
    const api_call=await fetch(`${baseUrl}/?i=${id}&apikey=${authToken}`);
    const response = await api_call.json();
    
    let temp=response;
    console.log(temp);
    this.setState({
      pageType:"single",
      movie:temp
    })  
  }

  backBtnHandler=()=>{
    this.setState({
      pageType:"home"
    })
  }
//render as per state updated
  render(){     
    let movies1=null;
    let movies2=null; 
    let movies3=null; 
    let movies4=null; 
    let singleMovie=null;        

    if(this.state.pageType==="home"){  
      movies1=this.state.recommended;
      movies2=this.state.upcoming;
      movies3=this.state.critics;
      movies4=this.state.boxoffice;      
      
      return(
        <div className="App">        
          <Header /> 
            <h2>Recommended For You</h2>               
            <div className="container">
              {movies1.map((movie, index) => 
                <Card poster={movie.Poster} 
                      id={movie.imdbID}
                      title={movie.Title}
                      key={index} 
                      year={movie.Year} 
                      click={()=>this.showSingleMovie(movie.imdbID)}
                      />)} 
                      
            </div>
            <h2>Upcoming Movies</h2>               
            <div className="container">
              {movies2.map((movie, index) => 
                <Card poster={movie.Poster} 
                      id={movie.imdbID}
                      title={movie.Title}
                      key={index} 
                      year={movie.Year} 
                      click={()=>this.showSingleMovie(movie.imdbID)}
                      />)} 
            </div>
            <h2>Critics Choice</h2>               
            <div className="container">
              {movies3.map((movie, index) => 
                <Card poster={movie.Poster} 
                      id={movie.imdbID}
                      title={movie.Title} 
                      key={index}
                      year={movie.Year} 
                      click={()=>this.showSingleMovie(movie.imdbID)}
                      />)} 
            </div>
            <h2>Box Office Hits</h2>               
            <div className="container">
              {movies4.map((movie, index) => 
                <Card poster={movie.Poster} 
                      id={movie.imdbID}
                      title={movie.Title} 
                      key={index}
                      year={movie.Year} 
                      click={()=>this.showSingleMovie(movie.imdbID)}
                      />)} 
            </div>
          <Footer />
        </div>)
    }
    else if(this.state.pageType==="single"){
      singleMovie=this.state.movie;
      return(
        <div className="App">        
          <Header />
          <SingleCard poster={singleMovie.Poster} 
                      id={singleMovie.imdbID}
                      title={singleMovie.Title}                      
                      year={singleMovie.Year} 
                      rating={singleMovie.imdbRating}
                      genre={singleMovie.Genre}
                      director={singleMovie.Director}
                      plot={singleMovie.Plot}
                      backBtnClick={this.backBtnHandler}
                      
                      />
            
          <Footer />        
        </div>
      )
    }
    
    return (
      <div className="App">        
        <Header />
        {movies1}
        {movies2}
        {movies3}
        {movies4}
        <Footer />        
      </div>
    );
  }  
}

export default app;
