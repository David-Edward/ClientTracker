$(document).ready(() => {
    const $addNew = $('#prompt');
    const $menu = $('.data-div');
    const $addIt = $('.addit');
    const $nMind = $('.hide');
    const $mask = $('.mask');
    const $pButt = $('#prev-butt');
    const $pDiv = $('#prev-div')
    
    $addNew.on('click', () => {
        $menu.slideToggle(200);
        $addIt.toggleClass('hide');
        $nMind.toggleClass('hide');
    });
    
    $pButt.on('click', () => {
        $pDiv.removeClass('hide');
        $mask.removeClass('hide');
    });
    
    $mask.on('click', () => {
        $mask.addClass('hide');
        $pDiv.addClass('hide');
    });
});