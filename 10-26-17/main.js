  console.log("hello");

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
