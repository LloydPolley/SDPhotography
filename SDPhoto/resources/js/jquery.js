
// Photo gallery code
var count = 2;
var bigger6 = true;


//Code for cycling through photo gallery text and images, with an if statement for deciding which set of images to load

function imageNumber(){
  if(count >= 2){
    count = 1;
  } else {
    count++;
  }
}

function titleMethod(){
  if(  $('#text-header').text() === "Wedding Photography"){
    $('#text-header').text("Pet Photography");    
  } else{
    $('#text-header').text("Wedding Photography");
  }
}

if(window.innerWidth > 600){
  setInterval(function() { 
    $('#header').css('background-image', 'url("resources/css/img/'+ count + '.jpg")');
    titleMethod();
    imageNumber();   
  },  5000);
  
} else{
  setInterval(function() { 
    $('#header').css('background-image', 'url("resources/css/img/small'+ count + '.jpg")');
    titleMethod();
    imageNumber();
        
  },  5000);
}







// Next three methods are for displaying photos for relevant sections


$('#pet-photo-link').click(petF);
$('#show-pets').click(petF);
$('#pet-nav').click(petF);

$('#wedding-nav').click(weddingF);
$('#wedding-photo-link').click(weddingF);
$('#show-weddings').click(weddingF);

$('#people-photo-link').click(peopleF);
$('#show-people').click(peopleF);

function scrollTo(destination){
  $('html, body').animate({
    scrollTop: $(".photo-flex-section").offset().top
}, 1000);
}


function petF(){
  console.log($('#pet-sub').css('display'));
	
	if($('#pet-sub').css('display') == "none"){

		$('#pet-sub').css('display', 'block');
		$('#wedding-sub').css('display', 'none');
    $('#people-sub').css('display', 'none');
    
  }

  scrollTo();
  
}

function weddingF(){
  console.log($('#wedding-sub').css('display'));
	
	if($('#wedding-sub').css('display') == "none"){

		$('#pet-sub').css('display', 'none');
		$('#wedding-sub').css('display', 'block');
		$('#people-sub').css('display', 'none');
  }
    
  scrollTo();
};


function peopleF(){
  console.log($('#people-sub').css('display'));
	
	if($('#people-sub').css('display') == "none"){

		$('#pet-sub').css('display', 'none');
		$('#wedding-sub').css('display', 'none');
		$('#people-sub').css('display', 'block');
  }
  scrollTo();
};



