

let time = new Timer({
  min:0,
  sec:5
});

time.start((min,sec) => console.log(min+':'+sec));