

// Start it up
function clickTradicional() {
    console.log('tradicional');
    
}
function clickModerno() {
    console.log('moderno');
    
}
function startupXP() {
    setTimeout(function() {
        welcomeLoading.addClass('exitLoading');     
        setTimeout(function() {
            welcomeLoading.remove();
        }, 1000);
    }, 3000);
}
$(function() {
   
    const thanks = $('.contact-gratitude');
    const menu = $('.main-menu');
    setTimeout(function() {
        console.log('moderno');
        menu.removeAttr('hidden');
        
    }, 4000);
});