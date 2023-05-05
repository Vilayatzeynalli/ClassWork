
const api_url="https://northwind.vercel.app/api/orders"

let tBody=document.querySelector('tbody');

function getTableList(){
    tBody.innerHTML="";
fetch(`${api_url}`)
.then((response) => response.json())
.then((data) => {
data.forEach(element => {
const trElement=document.createElement('tr')
// tr.setAtribute("style")
trElement.innerHTML+=`
<td>${element.id}</td>
<td>${element.shipName}</td>
<td>${element.shipAddress.city}</td>
<th>${element.shipAddress.country}</td>
<td><button type="button" class="btn btn-danger " id=${element.id} onclick=deleteData(${element.id})>Delete</button></td>
`   
tBody.append(trElement)

})
})
.catch((err) => console.log(err));
};
getTableList();


function deleteData(id){
    fetch(`${api_url}/${id}`,{
        method: "DELETE",
    }).then(()=>{
        getTableList()
    });
}
