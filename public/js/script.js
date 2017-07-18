

  console.log("js is running!");




const getData = (name) => {
  let heroes = $('#heroes').val();

  const API_KEY = "acbfb7845bbc28b8014a8bdc6f96ee68";
  const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters?name=${heroes}`;


  axios.get('/api/marvel?name='+name)
  .then(data => {
    console.log(data)
    console.log($('.sidebar').children());
    $('.sidebar').children().each(function(){$(this).remove()})
    $('.sidebar').append($('<h1>').text(data.data[0].name))
    .append($('<img>').attr('src', data.data[0].thumbnail.path + "." + data.data[0].thumbnail.extension ))
})
.catch((err) => {
  console.log(err);
})
}






// Document Ready
$(() => {

$('#hero-button').on('click', function(){
  var heroName = $('#heroes').val()
  getData(heroName);

})





// closing jQuery document here
});
