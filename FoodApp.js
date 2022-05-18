

function select(){
    document.querySelector("img").src=""
    document.getElementById("display").innerHTML=""
let GetValue=document.getElementById("select").value
// console.log(GetValue)
fetching_data(GetValue)


}


 async function fetching_data(value){

        try{
            let raw=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
            let orgi=await raw.json()
 
            display_data(orgi.meals)
        }
        catch(error){
            console.log(error)
        }

    
    }

    function display_data(data){
        data.forEach(ele => {
            
            let box=document.createElement("div")

            let image=document.createElement("img")
            image.setAttribute("id","imgg")
            image.src=ele.strMealThumb

            let p1=document.createElement("p")
            p1.innerHTML=`<b>${ele.strMeal}</b>`

            box.append(image,p1)
            document.getElementById("display").append(box)
        });
    }


