export class GlobalMethods {
    toggleMenu() {
        var Wdifference = (window.innerWidth) - (document.body.clientWidth)
         if( Wdifference > 0 ){
            document.body.style.paddingRight = Wdifference + 'px';
        }
        document.body.classList.toggle("open-sidemenu");
    }
    removeAll() {
        document.body.removeAttribute("style");
        document.body.classList.remove("open-sidemenu");
        document.body.classList.remove("search-toggle");
    }
}