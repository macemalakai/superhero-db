

  console.log("js is running!");




  const getData = (name) => {
  let heroes = $('#heroes').val();

  const API_KEY = "acbfb7845bbc28b8014a8bdc6f96ee68";
  const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters?name=${heroes}`;


  axios.get('/api/marvel?name='+name)
  .then(data => {
    console.log(data)
    console.log($('.hero-info').children());
    $('.hero-info').children().each(function(){$(this).remove()})
    $('.hero-info').append($('<h1 class="hero-name">').text(data.data[0].name));
    if (data.data[0].description) {
      $('.hero-info').append($('<p class="hero-description">').text(data.data[0].description))
    } else {
    $('.hero-info').append($('<p class="hero-description">').text("No description yet available. Check back later for more information on this superhero!"))
  }
      $('.hero-info').append($('<img class="hero-img">').attr('src', data.data[0].thumbnail.path + "." + data.data[0].thumbnail.extension ));

    })


.catch((err) => {
  console.log(err);
})
}






// Document Ready
$(() => {

  $('#heroes').keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
    var heroName = $('#heroes').val()
    getData(heroName);
	}

});

$('.search-button').on('click', function(){
  var heroName = $('#heroes').val()
  getData(heroName);

})





// closing jQuery document here
});
