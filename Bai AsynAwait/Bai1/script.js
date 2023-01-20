let imageData,
    keyWord;
let $ = document
    .getElementById
    .bind(document);
let keyAPI = 'OW32MmAEHypvCkn0H2aMByrOB5vIvRX6';
async function getData(keyWord, keyAPI) {
    try {
        let data = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${keyAPI}`);
        imageData = data.data.data;
    } catch (e) {
        window.confirm(e);
    }
}
$('formInput').addEventListener('reset',()=>$('root').innerHTML='');
$('formInput').addEventListener('submit', (e) => onSubmitForm(e));

async function onSubmitForm(e) {
    e.preventDefault();
    keyWord = $('inp').value;
    await getData(keyWord, keyAPI);
    try{
        displayImage(imageData);
    }
    catch(e){
        window.confirm('Không tìm thấy kết quả ' +e);
    }
}

displayImage = (imageData) => {
   let dataUrl = imageData.map(img => 
        img.images.fixed_height.url
    )
    for(let i =0; i<10;i++){
        $('root').innerHTML += `<img class="img-thumbnail mx-1 mb-2"
        // src="${dataUrl[i]}" >`
    }
}
