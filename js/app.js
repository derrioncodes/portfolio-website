const openMobileBtn = document.querySelector('.open-mobile-menu-btn');
const closeMobileBtn = document.querySelector('.close-mobile-menu-btn');
const mobileContainer = document.querySelector('.mobile-nav_container');
const mobileNavListItem1 = document.querySelector('.mobile-nav-list-item1');
const mobileNavListItem2 = document.querySelector('.mobile-nav-list-item2');
const mobileNavListItem3 = document.querySelector('.mobile-nav-list-item3');





openMobileBtn.addEventListener('click', () => {
 mobileContainer.classList.add('active');
})


closeMobileBtn.addEventListener('click', () => {
    mobileContainer.classList.remove('active');
})

window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 600 ){
        mobileContainer.classList.remove('active');
    }
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
})

mobileNavListItem1.addEventListener('click', () => {
    console.log('hey');
    mobileContainer.classList.remove('active');
})

mobileNavListItem2.addEventListener('click', () => {
    console.log('hey');
    mobileContainer.classList.remove('active');
})

mobileNavListItem3.addEventListener('click', () => {
    console.log('hey');
    mobileContainer.classList.remove('active');
})



