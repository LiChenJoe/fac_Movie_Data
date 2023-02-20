let movieData = {
  "The Darjeeling Limited": {
    name: "The Darjeeling Limited",
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast:"Cast: Jason Schwartzman, Owen Wilson, Adrien Brody",
    runtime: "Length: 151",
    rating: "Rate:7.2",
    year: 2007,
  },
  "The Royal Tenenbaums": {
    name: "The Royal Tenenbaums",
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: "Rate:7.6",
    year: 2001,
    cast: "Cast: Gene Hackman, Gwnyeth Paltrow, Anjelica Huston",
    runtime: "Length: 170",
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    name: "Fantastic Mr. Fox",
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast:
      "Cast: George Clooney, Meryl Streep,Bill Murray, Jason Schwartzman",
    runtime: "Length: 147",
    rating: "Rate:7.9",
  },
  "The Grand Budapest Hotel": {
    rating: "Rate:8.1",
    runtime: "Length: 159",
    year: 2014,
    name: "The Grand Budapest Hotel",
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast:"Cast:Ralph Fiennes, F. Murray Abraham, Mathieu Amalric",
  },
};

const movieList = document.querySelector(".movieList");

  for (const key in movieData) {
    const newDiv = document.createElement("div");
    let nameBlock = document.createElement("div");
    const newH3Name = document.createElement("h3");
    const newH6Year = document.createElement("h6");
    const newH4Rating = document.createElement("h4");
    const new4RunTime = document.createElement("h4");
    const newPCast = document.createElement("p");
    const newPPlot = document.createElement("p");
    const movieInfo = movieData[key];
    
      movieList.appendChild(newDiv);
      newDiv.classList.add("createdCard");
      newDiv.appendChild(nameBlock);
      nameBlock.classList.add("nameYearBlock");
      nameBlock.appendChild(newH3Name);
      newH3Name.classList.add("newMovieName");
      nameBlock.appendChild(newH6Year);
      newH6Year.classList.add("newMovieYear");
      newDiv.appendChild(newH4Rating);
      newH4Rating.classList.add("newMovieRating");
      newDiv.appendChild(new4RunTime);
      newMovieRunTime.classList.add("newMovieRunTime");
      newDiv.appendChild(newPPlot);
      newPPlot.classList.add("newMoviePlot");
      newDiv.appendChild(newPCast);
      newPCast.classList.add("newMovieCast");

      newH3Name.innerHTML= movieInfo.name;
      newH6Year.innerHTML= movieInfo.year
      newH4Rating.innerHTML= movieInfo.rating;
      new4RunTime.innerHTML= movieInfo.runtime;
      newPPlot.innerHTML= movieInfo.plot;
      newPCast.innerHTML= movieInfo.cast;
  }
  
  