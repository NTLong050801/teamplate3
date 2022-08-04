slideIndex = 0;
// showSlides()
function showSlides() {
let slides = document.getElementsByClassName("slide-show");
slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
 margin = '-'+slideIndex*20+'%';
$('.s1').css('margin-left',margin)
setTimeout(showSlides, 5000); 
}
$('.view_more').click(function(){
     $('.overview__item').css('max-height','100%')
        $(this).css('display','none')
})
checkbox = 0;
$('.derpartment ul li:first-child .check_box').click(function(e){
    checkClick = $(this).attr('checkClick');
    if($(this).prop("checked") == true){
        $('.'+checkClick  +' li .check-dpm .check_box').each(function(){
            $(this).prop("checked",true)
            $(this).css(" background-color","red")
        })
    }else{
        $('.'+checkClick  +' li .check-dpm .check_box').each(function(){
            $(this).prop("checked",false)
        })
    }
    
   
})
$(window).scroll(function () {
    if ($(this).scrollTop() < 10) {
      $('.uptop').hide('slow');
    } else {
      $('.uptop').show('slow');
    }
  });