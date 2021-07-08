setTimeout(()=>{
$(".prateleira .btn-add-buy-button-asynchronous").text("ADICIONAR AO CARRINHO")
}, 1500);




$(document).on('click', '.qtd-shelf .btn', function () {
    var $this = $(this);
    var $qtd = $(this).parent().parent().find('.qtd');
    var valor = parseInt($qtd.val());
    if ($this.hasClass('btn-mais')) {
        $qtd.val(valor + 1);
    } else if ($this.hasClass('btn-menos')) {
        if (valor > 1) {
            $qtd.val(valor - 1);
        }
    }
});

$(".prateleira .link-dinamico").on("click", function(e){
    e.preventDefault();

     let qtd = $(this).parent().parent().find('.qtd-wrapper .qtd-shelf .qtd').val();
    let urlbuilder = $(this).parent().parent().find(".btn-not-clicked").attr('href');
    urlbuilder = urlbuilder.replace(/qty=1/g, `qty=${qtd}`)
    $(this).attr('href', urlbuilder)
    console.log(urlbuilder)
    let sku = (urlbuilder.split("sku" + '=')[1] || '').split('&')[0];
    let seller = (urlbuilder.split("seller" + '=')[1] || '').split('&')[0];
    let item = {
        id: parseInt(sku),
        quantity: qtd,
        seller: seller
    }
    console.log(item)

    insertProductOnCart(item);
})