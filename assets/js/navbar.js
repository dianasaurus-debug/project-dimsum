$(function(){
    var current = location.pathname;
    $('.navbar .navbar-nav a').each(function(){
        var $this = $(this);
        if (current.indexOf($this.attr('href')) >= 0){
            $this.addClass('active');
        }
    })
})
