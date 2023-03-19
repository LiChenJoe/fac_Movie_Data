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

let movieInfo = Object.values(movieData);
let movieEntries = Object.entries(movieData);
let sortingSelcect = document.querySelector("#sorting");



const movieList = document.querySelector(".movieList");
renderingMovieList(movieInfo);


function renderingMovieList(a){
  movieList.innerHTML="";
  console.log(movieInfo.length);
  for (let i=0; i<a.length; i++) {
    const newDiv = document.createElement("div");
    const nameBlock = document.createElement("div");
    const newH3Name = document.createElement("h3");
    const newH6Year = document.createElement("h6");
    const newH4Rating = document.createElement("h4");
    const new4RunTime = document.createElement("h4");
    const newPCast = document.createElement("p");
    const newPPlot = document.createElement("p");
    
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
      newDiv.appendChild(newPCast);
      newPCast.classList.add("newMovieCast");
      newDiv.appendChild(newPPlot);
      newPPlot.classList.add("newMoviePlot");

      newH3Name.innerHTML= movieInfo[i].name;
      newH6Year.innerHTML= movieInfo[i].year;
      newH4Rating.innerHTML= movieInfo[i].rating;
      new4RunTime.innerHTML= movieInfo[i].runtime;
      newPCast.innerHTML= movieInfo[i].cast;
      newPPlot.innerHTML= movieInfo[i].plot;
      
  }
}
  
  let movieForm = document.querySelector("#newMovie");

  movieForm.addEventListener("submit", (e) => {
    
    e.preventDefault();
      let newMovieName = document.querySelector("#newMovieName").value;
      let newMovieYear = document.querySelector("#newMovieYear").value;
      let newMovieRating = "Rate:" + document.querySelector("#newMovieRating").value;
      let newMovieRunTime = "Length:" + document.querySelector("#newMovieRunTime").value;
      let newMovieCast = "Cast: " + document.querySelector("#newMovieCast").value;
      let newMoviePlot = "Plot: " + document.querySelector("#newMoviePlot").value;
      let newMovie = {name:newMovieName, year:newMovieYear, rating:newMovieRating, runtime:newMovieRunTime, cast:newMovieCast, plot:newMoviePlot};
      movieInfo.push(newMovie);
      /*let newMovieCard = Object.values(newMovie);*/
      /* console.log(movieInfo.length);
      if (movieInfo.length>2) {
        for (let j=0; j<movieInfo.length; j++){
            movieInfo.shift();
            console.log(movieInfo.length);
            console.log(j);
          } 
      } else if (movieInfo.length==2) {
        movieInfo.shift();
        console.log(movieInfo.length);
        console.log(movieInfo);
      } */
      document.querySelector("#newMovieName").value= "";
      document.querySelector("#newMovieYear").value= "";
      document.querySelector("#newMovieRating").value= "";
      document.querySelector("#newMovieRunTime").value= "";
      document.querySelector("#newMovieCast").value= "";
      document.querySelector("#newMoviePlot").value= "";
      console.log(movieInfo);
    sortingFunction();
      
  });

  sortingSelcect.addEventListener("change",sortingFunction);
  
  
  function sortingFunction() {
  let currentSorting = sortingSelcect.options[sortingSelcect.selectedIndex];
  console.log(currentSorting);
  if (currentSorting.value === "realeaseYear") {
      movieInfo.sort(sortingYear);
    } else if (currentSorting.value === "rating"){
      movieInfo.sort(sortingRating);
    } else if (currentSorting.value === "runtime"){
      movieInfo.sort(sortingRuntime);
    }
    console.log(movieInfo);
    renderingMovieList(movieInfo);
  }

  function sortingYear(a, b) {
    if (a.year > b.year) {
        return 1;
    } else if (b.year > a.year) {
        return -1;
    } else {
        return 0;
    }
}

function sortingRating(a, b) {
  if (a.rating > b.rating) {
      return -1;
  } else if (b.rating > a.rating) {
      return 1;
  } else {
      return 0;
  }
}

function sortingRuntime(a, b) {
  if (a.runtime > b.runtime) {
      return 1;
  } else if (b.runtime > a.runtime) {
      return -1;
  } else {
      return 0;
  }
}