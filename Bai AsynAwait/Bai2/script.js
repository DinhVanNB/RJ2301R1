let dataResult;
let keyAPI ='7eb233db871286712aa08aa9c62ef0b8';
let cityId ;
let $ = document.querySelector.bind(document);

if (localStorage.length == 0) {
    localStorage.setItem('ListCity', JSON.stringify(dataCity))
}

let listCity = JSON.parse(localStorage.getItem('ListCity'));
listCity.map(city=>{
    $('#myUL').innerHTML += ` <li id="id${city.id}" onclick="onClickValue(${city.id})">${city.name}</li>`
})

async function getDataWeather() {
    try {
        let getData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&lang=vi&units=metric&APPID=${keyAPI}`);
        dataResult = getData.data;
    } catch (e) {
        window.confirm('Bạn hãy gõ đúng tên tỉnh thành hoặc chọn theo gợi ý tên tỉnh ' +' '+'\nMã lỗi: '+ e);
    };

}
function onSearchCity() {
    $("#myUL").classList.toggle("show");
    let filter, li, txtValue;
    filter = $('#myInput').value.toUpperCase();
    li = $("#myUL").getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        txtValue = li[i].outerText || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
async function onSubmitSearch(e) {
    $('#divResultSearch').innerHTML =''
    e.preventDefault();
    if(!cityId){
       listCity.map(city=>{
            if(city.name.toUpperCase()==$('#myInput').value.toUpperCase()){
                cityId =city.id
            }
       }) 
    };
   await getDataWeather();
   displayResultSearch();
   $("#myUL").classList.remove("show");
   cityId=0;
}

 onClickValue =(id) =>{
    cityId =id;
    $('#myInput').value = $(`#id${id}`).outerText;
    $("#myUL").classList.remove("show");
}

displayResultSearch= ()=>{
    $('#divResultSearch').innerHTML += ` <div style="font-size: medium; font-weight: bold; margin-bottom: 0px;">${dataResult.name}</div>
    <div >
        <div  title="Titel">
            <img height="45" width="45"
                style="border: medium none; width: 45px; height: 45px; background: url(&quot;http://openweathermap.org/img/w/${dataResult.weather[0].icon}.png&quot;) repeat scroll 0% 0% transparent;"
                alt="title" src="http://openweathermap.org/images/transparent.png">
        </div>
        <div >
            <div style="display: block;  font-size: medium; font-weight: bold; padding: 0pt 3pt;"
                title="Current Temperature">${dataResult.main.temp}°C</div>
            <div style="display: block; width: 85px; overflow: visible;"></div>
        </div>
    </div>
    <div style=" font-size: small;">Clouds: ${dataResult.clouds.all}%</div>
    <div style="  color: gray; font-size: x-small;">Humidity: ${dataResult.main.humidity}%</div>
    <div style=" color: gray; font-size: x-small;">Wind: ${dataResult.wind.speed} m/s</div>
    <div style="  color: gray; font-size: x-small;">Pressure: ${dataResult.main.pressure}hpa</div>`
}

