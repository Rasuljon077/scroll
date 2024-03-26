class Typing {
constructor({el,interval,delay}){
    this.el = document.querySelector(el);
    this.interval = interval ?? 400
    this.delay = delay ?? 1000
    this.text = this.el.innerHTML
    // console.log(this.text);
    this.el.innerHTML = ""
   setTimeout(() => {
    this.write()
   }, this.delay);
}
write(i=0){
    this.el.innerHTML += this.text[i]
    i++
    if (this.text.length > i) {
        setTimeout(() => {
            this.write(i)
        }, this.interval);
    }
}
  
}

new Typing ({
    el: ".header__content h1",
    interval: 289,
    delay:1000
})
new Typing ({
    el: ".header__content p",
    interval: 289,
    delay:300
})
// new Typing ({
//     el: ".header__content p",
//     interval: 300,
//     delay:300
// })
// new Typing ({
//     el: ".info__scroll h2",
//     interval: 150,
//     delay:1500
// })
// new Typing ({
//     el: ".info__scroll p",
//     interval: 80,
//     delay:1000
// })

