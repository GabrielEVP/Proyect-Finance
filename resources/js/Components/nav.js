document.getElementById('toggleSidebarMobile').addEventListener('click', function () {
    document.querySelector('#toggleSidebarMobileHamburger').classList.toggle('hidden');
    document.querySelector('#toggleSidebarMobileClose').classList.toggle('hidden');
    document.querySelector('#sidebar').classList.toggle('hidden');
});

document.getElementById('button-arrow-profile').addEventListener('click', function () {
    document.querySelector('#arrow-open').classList.toggle('hidden');
    document.querySelector('#arrow-close').classList.toggle('hidden');
    document.querySelector('#side-menu-profile').classList.toggle('hidden');
});
