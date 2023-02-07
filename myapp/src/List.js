import React from "react";
import Movie from "./Movie";

export class List extends React.Component{
    render(){
        return (
            <>
                <Movie title="Game of Thrones" rating={<p>5</p>} description="Action Movie"/>
                <Movie title="Titanic" rating={10} description="Romance"/>
            </>
        );
    }
}

