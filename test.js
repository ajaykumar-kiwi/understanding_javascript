async function getResult() {
  const data = [];
  var i = 0;
  while(i < 5) {;
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${i+1}`);
    const json = await result.json();
    data.push(json)

    i++;
  }
  console.log(data);

}

getResult();
