$('.owl-carousel').owlCarousel({
    loop:true, // Efeito de Loop, colocando false ele só deixa ir para um lado
    margin:10, // margin entre um e outro
    nav:false, // fica uma setinha pra dar next
    responsive:{ // Isso aqui é a quantidade de item por tamanho de tela
        0:{
            items:2 // minimo 1
        },
        400:{
            items:3 // 600px 3
        },
        600:{
            items:4 // 600px 3
        },
        800:{
            items:5 
        },
        1000:{
            items:7 // 1000px 5
        },
        1200:{
            items:8 // 1000px 5
        }

    }
})