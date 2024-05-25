import CardSlider from "./CardSlider";
import React from "react";

export default React.memo(function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return(
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)}></CardSlider>
      <CardSlider title="New Releases" data={getMoviesFromRange(10,20)}></CardSlider>
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20,30)}></CardSlider>
      <CardSlider title="Popular On Netflix" data={getMoviesFromRange(30,40)}></CardSlider>
      <CardSlider title="Action Movies" data={getMoviesFromRange(40,50)}></CardSlider>
      <CardSlider title="Epics" data={getMoviesFromRange(50,60)}></CardSlider>
    </div>
  )
}
)
