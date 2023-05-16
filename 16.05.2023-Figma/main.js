const BASE_URL = "https://restcountries.com/v2/all";
const row = document.querySelector(".row");
const inputSearch=document.querySelector(".search");



async function allData(elem) {
  row.innerHTML = ""
  elem.forEach((element) => {
    row.innerHTML += `
    <div class="col col-3" style="width: 18rem;">
    <a href="">
    <div class="card" style="width: 18rem;">
    <img src="${element.flags.svg}" alt="">
     <div class="card-body">
       <h5 class="card-title">${element.name}</h5>
       <p class="card-text">${element.population}</p>
       <p class="card-text">${element.region}</p>
       <p class="card-text">${element.capital}</p>
     </div> </div>
     </a>
  
   </div>
    `;
  });
}
axios(BASE_URL).then((res) => allData(res.data));


inputSearch.addEventListener("input",function(){
    // filteredData=Arr
    axios(BASE_URL).then((res) => {
  let filteredData=res.data.filter((item)=>
    item.name
    .toLocaleLowerCase()
    .includes(inputSearch.value.toLocaleLowerCase()),
    )
    console.log(filteredData);
    allData(filteredData);
    });
});
