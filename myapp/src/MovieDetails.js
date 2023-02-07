import React from "react";

// export default class MovieDetails extends React.Component{
//     render(){
//         return (
//         <>
//         <p>{this.props.rating}</p>
//         <p>{this.props.description}</p>
//         </>);
//     }
// }

function MovieDetails(props) {
    return (
         <>
         <p>{props.rating}</p>
         <p>{props.description}</p>
         </> 
    );
}

export default MovieDetails;
