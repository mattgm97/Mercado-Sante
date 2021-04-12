$(document).ready(function () {


    fetch("/api/catalog_system/pub/category/tree/4/")
        .then(res => res.json())
        .then(response => {
            console.log(response);



            response.forEach(element => {
                let divtext = element.name;
                element.name = element.name.replace(/[\s/,&]+/g, '-');

                //desk
                $(".firstLayer-allcategories ul").append(`<li class="depto-${element.name}"><a href="${element.url}">${divtext}<i class="fa fa-angle-right"></i></a></li>`);
                // console.log("adding main");

                if (element.hasChildren) {
                    $(".deptonav").append(`
                    
                    <div class="col-sm-8 secondLayer secondLayer-${element.name} " id="${element.name}">
                    <ul class="">
                     </ul>
                </div>
                `);



                    //mobile
                    $(".sidenav").append(`<div style="display:block;border-top: solid 1px #333;"><span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span><button class="dropdown-btn" id="${element.name}"><i class="fa fa-angle-down"></i></button></div>
             <div class="dropdown-container" id="${element.name}"></div>`);


                    //Desktop
                    $(`.depto-${element.name}`).mouseenter(function () {
                        $(".secondLayer").hide();
                        $(`.secondLayer-${element.name}#${element.name}`).show()
                    });

                  /*  $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function () {
                        $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
                        $(`#deptos-list .deptonav .row .secondLayer`).hide();
                        $(`#deptos-list .deptonav .row .thirdLayer`).hide();
                    });*/


                    //Mobile
                    $(`.dropdown-btn#${element.name}`).toggle(() => {
                        // $(".dropdown-container").slideUp();
                        $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
                        $(`.dropdown-container#${element.name}`).slideDown()
                    }, () => {
                        $(`.dropdown-container#${element.name}`).slideUp()
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
                    })

                    element.children.sort((a, b) => a.name.localeCompare(b.name, 'pt', { ignorePunctuation: true }));
                    element.children.forEach((subs, index) => {
                        //  console.log("adding children");
                        //  console.log(subs)
                        let divtextsub = subs.name;
                        subs.name = subs.name.replace(/[\s/,&]+/g, '-');
                        //desktop
                        $(`.secondLayer-${element.name}  ul`).append(`<li  class="item-${subs.name}"><a href="${subs.url}">${divtextsub}</a></li>`);

                        if (!subs.hasChildren) {
                            $(`.dropdown-container#${element.name}`).append(`<div style="display:block;border-top: solid 1px #333;"><span class="depto-${element.name}"><a href="${subs.url}">${divtextsub}</a></span></div>`);
                            $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul .item-${subs.name}`).mouseenter(function () {
                                // $(`.depto-${element.name} .row .col-sm-4.secondLayer`).hide()
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer`).hide();
                            });
                        }


                       



                        //mobile


                    })

                    //Desktop











                } else {
                    //$(".sidenav").append(`<span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span>`)
                     //Desktop
                     $(`.depto-${element.name}`).mouseenter(function () {
                        $(".secondLayer").hide();
                        
                    });
                }
            });








        })


        $("#allcatopeners").mouseenter(function () {
            $("#allcategories").show();
            $("body").addClass("menu-ativo");
            
        });


    $(".vtexIdUI .modal-header .close").click(function () {
        window.location.href = '/';
    })

    //MUDAR TAMANHO DAS IMAGENS NA BARRA DE BUSCA




    $(".btn-open-menu-xs").click(() => {
        $("body").addClass("menu-ativo");
        $("#menu-mobile").attr('class', 'show-menu');
        $("#menu-mobile").show();

    })

    $("#menu-mobile .close-menu").click(() => {

        $("#menu-mobile").attr('class', 'hide-menu');
        setTimeout(() => { $("#menu-mobile").hide(); }, 480)

        $("body").removeClass("menu-ativo");

    })



    $(".dropdown-container").hide();


    $(".dropdown-btn#institucional").toggle(() => {
        $(".dropdown-container#suporte").hide();
        $(".dropdown-btn#institucional i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#institucional").slideDown()
    }, () => {
        $(".dropdown-container#institucional").slideUp()
        $(".dropdown-btn#institucional i").attr('class', 'fa fa-angle-down');
    })


    $(".deptonav").mouseleave(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })
    $("header").mouseleave(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })
    $(".header-container .header").mouseenter(() => { $(".deptonav").hide();$("body").removeClass("menu-ativo") })

    

});






setInterval(() => {

    const imgsLength = $(".ui-autocomplete .ui-menu-item").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-25-25/g, '-50-50');
        $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src", imgProduct);
    }


}, 1000)


setTimeout(()=>{
    //diminuir nome
    for(let i = 0; i < $(".prateleira .product-name").length; i++){
      let fullname = $($(".prateleira .product-name")[i]).text()
      let newName  = fullname.slice(0, 58);

      if(fullname.length > 58){
        $($(".prateleira .product-name a")[i]).text(`${newName}...`)
      }
     
  }


  //formatar porcentagem

  for(let i = 0; i < $(".prateleira .price .percentdiff").length; i++){
    let current = $($(".prateleira .price .percentdiff")[i]).text();
    let newporcent = current.split(",")[0] +"% OFF";
    $($(".prateleira .price .percentdiff")[i]).text(newporcent)

  }
      },1000)


setInterval(() => {

    const imgsLength = $("#mini-cart-admake .mini-cart-item .imagem").length;

    for (let i = 0; i < imgsLength; i++) {
        let imgProduct = $($("#mini-cart-admake .mini-cart-item .imagem img")[i]).attr("src");
        imgProduct = imgProduct.replace(/-55-55/g, '-90-90');
        $($("#mini-cart-admake .mini-cart-item .imagem img")[i]).attr("src", imgProduct);
    }
}, 1000)




