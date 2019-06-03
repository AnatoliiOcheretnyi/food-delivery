jQuery(document).ready(function () {
    var showPerPage = 10; 
    var numberOfItems = $('slot').children().size();
    var numberOfPages = Math.ceil(numberOfItems/showPerPage);
    
    $('#currentPage').val(0);
    $('#showPerPage').val(showPerPage);
    
    var navigationHTML = '<a class="previousLink" href="javascript:previous();">Prev</a>';
    var currentLink = 0;
    while(numberOfPages > currentLink){
        navigationHTML += '<a class="pageLink" href="javascript:toPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a>';
        currentLink++;
    }
    navigationHTML += '<a class="nextLink" href="javascript:next();">Next</a>';
    
    $('#pageNavigation').html(navigationHTML);
    $('#pageNavigation .pageLink:first').addClass('activePage');
    $('slot').children().css('display', 'none');
    $('slot').children().slice(0, showPerPage).css('display', 'block');
});

function previous(){
    newPage = parseInt($('#currentPage').val()) - 1;
    if($('.activePage').prev('.pageLink').length==true){
        toPage(newPage);
    }
}

function next(){
    newPage = parseInt($('#currentPage').val()) + 1;
    if($('.activePage').next('.pageLink').length==true){
        toPage(newPage);
    }
}

function toPage(pageNum){
    var showPerPage = parseInt($('#showPerPage').val());
    startFrom = pageNum * showPerPage;
    endOn = startFrom + showPerPage;
    $('slot').children().css('display', 'none').slice(startFrom, endOn).css('display', 'block');
    $('.pageLink[longdesc=' + pageNum +']').addClass('activePage').siblings('.activePage').removeClass('activePage');
    $('#currentPage').val(pageNum);
}