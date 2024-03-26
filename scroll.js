class Scroll {
    constructor({ nav, top, unit, bottom }) {
        this.nav = document.querySelector(nav);
        this.top = top ?? 100
        this.bottom = bottom ?? 100
        this.unit = unit || '%'
        
        // this.nav.style = `position:fixed;
        //     top:0px;
        //     transition:1s`

        //     this.nav.style = `position:fixed;
        //     bottom:0px;
        //     transition:1s`
         
        window.addEventListener('scroll',()=>{
        //  console.log(scrollY);
   if (scrollY > 600) {
        this.nav.style = `position:fixed;
        //     bottom:${this.scrollUnit1()}px;
        //     transition:1s`
   }else{
    this.nav.style = "" 
   }
    }
    )
    
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.top
        } else {
            return (window.innerHeight / 100)*this.top - this.nav.clientHeight
        }
    }
    scrollUnit1() {
        if (this.unit == 'px') {
            return this.bottom
        } else {
            return (window.innerHeight / 100)*this.bottom - this.nav.clientHeight
        }
    }
}
new Scroll({
    nav: ".header__nav",
    top: 100,
    unit: '%',
    bottom:100
})
// class Text  {
//     constructor({el}){
//         this.el = document.querySelector(el);
//         this.text = this.el.innerHTML
//         this.el.innerHTML = ""
//         console.log(this.text);
//        window.addEventListener('mouseover',()=>{
//        for (let i = 0; i < this.text.length; i++) {
//          this.text[i].style.color = red
//        }
//        })
//     }
// }
// new Text({
//     el: ".header__content h1"
// })
// new mouseMove extends Scroll