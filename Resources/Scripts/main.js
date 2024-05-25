
const welcomeStartupXP=$('.welcome');
const welcomeMenuDOS=$('.welcome-menu');

// Start it up
function clickTradicional() {
    console.log('tradicional');
    
}
function clickModerno() {
    console.log('moderno');
    welcomeMenuDOS.addClass('exitLoading');
    welcomeStartupXP.removeClass('hidden');
    setTimeout(function() {
        welcomeMenuDOS.remove();
    }, 1500); 
    startupXP();
}
function startupXP() {
    setTimeout(function() {
        welcomeStartupXP.addClass('exitLoading');     
        setTimeout(function() {
            welcomeStartupXP.remove();
        }, 1500);
    }, 6000);
}
$(function() {
   
    const thanks = $('.contact-gratitude');
    const menu = $('.main-menu');

    setTimeout(function() {
        menu.removeAttr('hidden');
        menu.addClass('shadow-animation');
        setTimeout(function() {
            thanks.removeClass('hidden');
            thanks.addClass('shadow-animation');
        },1000);
    }, 15000);
});