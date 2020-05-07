$(function(){
  $('.navbar a, footer a').on('click', function(event){
    event.preventDefault();
    var hash = this.hash;

    $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
  });

  $('#myNavbar a').on('click', function(){
    $('#myNavbar').collapse("hide");
  });
});


/*$(function(){
    $('ul.nav.navbar-nav li a').on("click", function(){
      $('#myNavbar').slideUp();
      $('#myNavbar').show();

    });
  });

$(function(){
  $('.navbar-toggle').on('click', function(){
    $('.nav navbar-nav').slideToggle();
  });
});*/



/*
$(function(){
  $('.nav li a').on('click', function(){
    $('.nav navbar-nav').slideUp();
  });
});

$(function(){
  $('.navbar-collapse li a').on('click', function(){
    $('.nav navbar-nav').slideUp();
  });
});

$(function(){
  $('.navbar-toggle').on('click', function(){
    $('.nav navbar-nav').slideDown();
  });
});

@media (max-width:768px){
  .timeline:before{
  left: 30px;
}
  $('.timeline-panel-container').addClass(.timeline-panel-container-inverted);
}
$(function(){
  $('.navbar-collapse li a').on('click', function(){
    $('.navbar-collapse').slideUp(),
    $('.navbar-toggle').(),
  });
});

*/
