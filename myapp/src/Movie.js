import React from "react";
// Import here
import MovieDetails from './MovieDetails.js';

export default class Movie extends React.Component{
    render(){
        return (
        <>
        <p>{this.props.title}</p>
        <MovieDetails rating={this.props.rating} description={this.props.description} />       
        </>);
    }
}

// 1 - Import 
// 2 - Replace
// 3 - Assign props