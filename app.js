// Progression 1: create a function and fetch the api using axios
fetch("https://gnews.io/api/v4/top-headlines?token=c86dbea393fa85d9ca49ef022c6b7975&lang=en").then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata)
  let data1='';
  for(let i=0;i<10;i++){
    data1+=` <div class="card">
    <h4 class="heading">${completedata.articles[i].title}</h4>
    <img src=${completedata.articles[i].image} alt="" class="image">
    <p class="description">${completedata.articles[i].content}</p>
</div>`
  }
  document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
  console.log(err)
})