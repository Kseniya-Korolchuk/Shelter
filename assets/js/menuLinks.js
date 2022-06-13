export default function menuLinks() {
    const menuLinks = document.querySelectorAll('.nav__link');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if(!event.target.classList.contains('active')) {
                removeClass(menuLinks, 'active');
                event.target.classList.add('active');
            }
        })
    })

    function removeClass(collection, className) {
        collection.forEach(item => item.classList.remove(className));
    } 
}