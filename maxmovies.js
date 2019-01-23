
class Movie {

    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getStartTime() {
        this.startTime;
    }

    getEndTime() {
        this.endTime;
    }

}

let movies = new Array();

let m = new Movie(0600, 0700);

movies.push(m);
m = new Movie(0900, 1100);
movies.push(m);

m = new Movie(1200, 1300);
movies.push(m);

m = new Movie(1400, 1500);
movies.push(m);

m = new Movie(1100, 1400);
movies.push(m);

m = new Movie(1700, 1900);
movies.push(m);

m = new Movie(1700, 1800);
movies.push(m);

// let startMovieTime = 0;
// let endMoviewTime = 0;
// movies.map(m => {
//     startMovieTime = Math.min(startMovieTime, m.getStartTime);
//     console.log('start time ', startMovieTime);
//     endMoviewTime = Math.max(endMoviewTime, m.getEndTime);
//     console.log(' end time ', endMoviewTime);
// })

//let maxtime = endMoviewTime - startMovieTime;
//console.log(maxtime);
movies.sort((f, s) => {
    f.getEndTime - s.getEndTime;
})

let count = 0;
let previousStart = movies[0].getEndTime;
movies.map(m => {

   
if( previousStart < m.getStartTime){
    count++;
}    
})
console.log(' no of  movies ',count);

//console.log(movies);


