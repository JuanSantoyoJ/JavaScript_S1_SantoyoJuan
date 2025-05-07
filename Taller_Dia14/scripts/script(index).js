async function GetApi(){
    try{
        const API = await fetch('https://681a335b1ac11556350835ab.mockapi.io/data');
        const data = await API.json();
        console.log(data)
    }catch(error){
        console.log("Error", error);
    }
}
GetApi()