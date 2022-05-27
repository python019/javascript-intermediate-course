// JavaScript

const odam = {
    ismi: 'A',
    familiyasi: 'B',
    yoshi: 25,
    kasbi: 'P',
    funksiya: function() {
        console.log(this.ismi + this.familiyasi)
    }
}

console.log(odam.funksiya())

odam.ismi = 'Ismi '

odam.metod = function() {
    console.log('YAngi metod')
}

console.log(odam)



