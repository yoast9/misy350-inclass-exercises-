  /*console.log("hello");

  // array

  let bucket_list = ["learn to fly","skydive","travel everywhere", 788];
  console.log(bucket_list.list);

for(let z=0; z<bucket_list.length;z++){
  console.log("-" + bucket_list[z]);
}

  // nested for loop
  let movie_list1 = [
    "1movie",
    "2movie",
    "3movie"
  ];

  let movie_list2 = [
    "12movie",
    "24movie",
    "2movie",
    "6movie",
    "3movie"
  ];

  for (let i=0; i<movie_list1.length;i++) {
    for (let j=0; i<movie_list2.length;j++){
      if(movie_list1[i] == movie_list2[j]){
        console.log(movie_list1[i]);
      }
    }
  }


  //iterator

  movie_list1.forEach(movie => console.log(">>" + movie));
  let new_movie_list = movie_list2.filter(movie => movie.slice(0,1) != "2");
  */

  // multi-dimentional array
  let top_movies = [
    ["The Shawshank Redemption", 1994, "Drama"],
    ["The Godfather", 1972, "Crime"],
    ["The Godfather: Part II", 1974, "Crime"],
    ["The Dark Knight", 2008, "Action"],
    ["12 Angry Men", 1957, "Drama"]
  ];
//let genre = top_movies[]

  // write a for loop to output movie names
  for (i = 0; i < top_movies.length; i++) {
    console.log(top_movies[i][0]);
  }




  // use Iterator and Arrow function
  // to loop over the array to out names with *** prefix
  let prefix_names = top_movies.forEach(movie => console.log("*** " + movie[0]));



  // Use Iterator and Arrow functions, .filter()
  // to output the name and genre of movies after 1990
let twentieth_century = top_movies.filter(movie => movie.slice(1,2) > 1990);
    for (let i = 0; i < twentieth_century.length; i++) {
      console.log('>>> ' + twentieth_century[i][0] + "," + twentieth_century[i][2]);
    }




  // change genre category for either "Crime" or "Drame"
  // to "Crime, Drama" using .map() and output the result
  // see https://www.w3schools.com/jsref/jsref_map.asp
top_movies.forEach(movie => {let newGenre = movie.map(function type (movie) {
  if (movie === "Crime") {
    return "Crime, Drama";
  }
  else if (movie === "Drama") {
    return "Crime, Drama";
  }
  console.log(this.movie);
}

)})






  // add code to calculate the number of years to become a millinaire
  // with initial deposit of 10000 and 0.06 interest rate
function howLong(invest,rate) {
  let interest = invest * rate;
  let total = invest + interest;
  let years = 1000000/total;


console.log( years + " Years to Millinaire");
}
howLong(10000,.06);








  // add player objects and output results according to lecture slides
let player1 = {
  name: "Stephen Curry",
  dob: "March 14, 1988",
  height: 1.91,
  weight:86,
  shoot(){
    return "3-pointer";
  }
};

let player2 = {
  name: "LeBron James",
  dob: "December 30, 1984",
  height: 2.03,
  weight:118,
  shoot(){
    return "dunk";
  }
};

console.log(player1.name);
console.log(player2.name);
console.log(player2.weight - player1.weight);
console.log(player1.shoot());
console.log(player2.shoot());
console.log(player2.name + " is " + player2.height + " m and" + player2.weight + "kg" );
player2.draft_year = 2003;
console.log(player2.draft_year);
