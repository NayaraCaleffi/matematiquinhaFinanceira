;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};

	var formTab = function() {

		$('.tab-menu a').on('click', function(event){
			var $this = $(this),
				data = $this.data('tab');

			$('.tab-menu li').removeClass('active');
			$this.closest('li').addClass('active')

			$('.tab .tab-content-inner').removeClass('active');
			$this.closest('.tab').find('.tab-content-inner[data-content="'+data+'"]').addClass('active');

			event.preventDefault();

		});

	};

	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 200, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){
		
		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});


		

	};

	

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	
	$(function(){
		mobileMenuOutsideClick();
		formTab();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		goToTop();
		loaderPage();
		counterWayPoint();
	});


}());

 
  
  
function calcula(form) {
    var e = form.cmbTipo;
    if(e!=null)
      var tipo = e.options[e.selectedIndex].value;
     
    var f = form.cmbTabela;
    var tabela = f.options[f.selectedIndex].value;

     var prest;                                          // Valor da prestação
     var pv      = form.valor.value;                       // Valor presente
     var i       = form.taxa.value / 100;                     // Taxa de Juro
     var np      = form.prestacoes.value;          // Numero de Prestações
     var entrada = form.entrada.value;          // Entrada

    var quantidadeParcelasPagas = form.parcelasPagas.value;

    if (tipo == 1) {                                       
       //1 Calcular valor de prestações
       
       if(tabela==1){
           //SAC
           prest = (pv/np) + (i*pv); 
           form.resposta.value = prest.toFixed(2);
  
       }else {
           //PRICE
           
            prest       = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
            form.resposta.value = prest.toFixed(2);
       }
       
       // alert("O valor da mensalidade é " + prest);
 
    }
    else if(tipo==2){
       // 2.  Calcular saldo devedor / a. Parcela atual paga;


        if(tabela==1){
           //SAC
           /**
           *Sd = (n-t)*a
           **/

           //Calcula o Valor da amortização que é constante na tabela SAC
            var amortizacao = pv/np;

            //Calcula o Saldo devedor
            saldoDevedor = (np-quantidadeParcelasPagas)*amortizacao;
            form.resposta.value = saldoDevedor.toFixed(2);

       }else {
            var saldoDevedor;     
           var quantidadeParcelasPagas = form.parcelasPagas.value;
           prest                       = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );            
          var n        = parseFloat(np-quantidadeParcelasPagas);
          var ind      = parseFloat(1+i);
          var base     = parseFloat(Math.pow(ind,n));
          var cima     = parseFloat((base-1));
          var baixo    = parseFloat((base*i));
          var fva      = parseFloat((cima/baixo));
          saldoDevedor = prest*fva
            form.resposta.value = saldoDevedor.toFixed(2);
        }
           

    }
    else if(tipo==3){
        // 2.  Calcular saldo devedor /b.   Parcela atual pendente;


        if(tabela==1){
           //SAC

           /**
           *Sd = (n-t)*a
           **/

           //Calcula o Valor da amortização que é constante na tabela SAC
            var amortizacao = pv/np;

            //Calcula o Saldo devedor
            saldoDevedor = (np-quantidadeParcelasPagas)*amortizacao;
            form.resposta.value = saldoDevedor.toFixed(2);

       }else {
           //PRICE
            var saldoDevedor;     
           var quantidadeParcelasPagas = form.parcelasPagas.value;
           prest                       = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );            
          var n        = parseFloat(np-quantidadeParcelasPagas);
          var ind      = parseFloat(1+i);
          var base     = parseFloat(Math.pow(ind,n));
          var cima     = parseFloat((base-1));
          var baixo    = parseFloat((base*i));
          var fva      = parseFloat((cima/baixo));
          saldoDevedor = prest*fva
            form.resposta.value = saldoDevedor.toFixed(2);
               }
    }
    else if(tipo==4){
        //3.    Calcular parcela de Juros em um mês especifico /a.  Calcular a primeira parcela
        if(tabela==1){
           //SAC
            parcelaJuros       = i*pv;
            form.resposta.value = parcelaJuros.toFixed(2);
       }else {
           //PRICE
            var parcelaJuros;                                          // Valor da prestação
            /*var pv      = form.valor.value;                       // Valor presente
            var i       = form.taxa.value / 1200;                     // Taxa de Juro
           //    var mes     = form.mes.value;
            //var tipo      = form.tipo.selectedIndex;                  // Numero de Anos Seleccionado
            var np      = form.prestacoes.value;          // Numero de Prestações
            var entrada = form.entrada.value;          // Entrada*/
            parcelaJuros       = i*pv//Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
            form.resposta.value = parcelaJuros.toFixed(2);
            //alert("O valor da mensalidade é " + prest);
        }
    }
    else if(tipo==5){
        ////3.    Calcular parcela de Juros em um mês especifico - b.   Calcular uma parcela corrente;       
       if(tabela==1){
           //SAC
            var amortizacao = pv/np;;
            var parcelaJuros = (np-quantidadeParcelasPagas+1)*i*  amortizacao;          
            form.resposta.value = parcelaJuros.toFixed(2);
       }else {
           //PRICE
                var parcelaJuros;                                          // Valor da prestação
                var restante, parcelaAmortizada;
                var a1;

                parcela     = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
                a1 = parcela-(i*pv);
                parcelaAmortizada =  a1*Math.pow((1+i), (quantidadeParcelasPagas-1));
                parcelaJuros  = parcela-parcelaAmortizada;
                form.resposta.value = parcelaJuros.toFixed(2);
        }
    }
    else if(tipo==6){
        //4.    Calcular parcela de amortização em um mês especifico; - a.  Calcular do início até hoje;  
       if(tabela==1){
           //SAC
             //Calcula o Valor da amortização que é constante na tabela SAC
            var amortizacao = pv/np;
            form.resposta.value = amortizacao;
       }else {
           //PRICE
            var parcelaJuros;                                          // Valor da prestação
                var restante, parcelaAmortizada;
                var a1;
                parcela     = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
                a1 = parcela-(i*pv);
                parcelaAmortizada =  a1*Math.pow((1+i), (quantidadeParcelasPagas-1));
           
            form.resposta.value = parcelaAmortizada.toFixed(2);
       }
    }
    else if(tipo==7){
        //4.    Calcular parcela de amortização em um mês especifico;  -  b.    Calcular em período especifico;
        var parcelaCalculo = form.parcelaCalculo.value;

        if(tabela==1){
           //SAC
            //Calcula o Valor da amortização que é constante na tabela SAC
            var amortizacao = (pv/np);
            form.resposta.value = amortizacao.toFixed(2);
       }else {
           //PRICE
               //PRICE
              var prest;        
              var parcelaJuros;  
                                                     // Valor da prestação
                var restante, parcelaAmortizada;
                var a1;
                parcela     = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
                a1 = parcela-(i*pv);
                parcelaAmortizada =  a1*Math.pow((1+i), (parcelaCalculo-1));
           
            form.resposta.value = parcelaAmortizada.toFixed(2);
        }
    }
    else if(tipo==8){
        //5.    Calcular valor das amortizações acumuladas; a.  Calcular do início até hoje;
           if(tabela==1){
                    //SAC
                    //Calcula o Valor da amortização que é constante na tabela SAC
                    var  amortizacaoAcumulada = (pv/np)*quantidadeParcelasPagas;
                    //amortizacaoAcumulada = amortizacaoAcumulada + amortizacao;
                    form.resposta.value = amortizacaoAcumulada;
                 }else {
                    //PRICE
                    var prest;        
                    var somaAmortizaca;
                     // Valor da prestação
                    prest       = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
                    somaAmortizacao = prest*(fvaPrice()-fvatPrice());
                    
                                                     
                    form.resposta.value = somaAmortizacao.toFixed(2);
                  //alert("O valor da mensalidade é " + prest);
          }

    }
    else if(tipo==9){
        //5.    Calcular valor das amortizações acumuladas;  -b.    Calcular em período especifico;
        var inicial = form.inicial.value;
        var fim = form.fim.value

        if(tabela==1){
           //SAC
                     //Calcula o Valor da amortização que é constante na tabela SAC
                    var  amortizacaoAcumulada = (pv/np)*(fim-inicial);
                    //amortizacaoAcumulada = amortizacaoAcumulada + amortizacao;
                    form.resposta.value = amortizacaoAcumulada.toFixed(2);
       }else {
           //PRICE
            var prest;        
                    var somaAmortizaca;
                     // Valor da prestação
                    prest       = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i );
                    somaAmortizacao = prest*(fvaPrice()-fvatPrice());
                    
                                                     
                    form.resposta.value = somaAmortizacao.toFixed(2);
        // alert("O valor da mensalidade é " + prest);
       }
     }
    else if(tipo==10){ ///Calculo de valor de juros acumulados até um determinado periodo
        if(tabela==1){
          //SAC


        }else{
          //PRICE
            var somaJuros;

            //somaJuros = r*(t-fva*(i*n))*fva*(i*n*t));
        }
    }
    else if(tipo==11){ ///Calculo de valor de juros acumulados entre periodo
        if(tabela==1){
          //SAC

            //form.resposta.value 
        }else{
          //PRICE
           var somaJuros;

            //somaJuros = r*(fva*(i*n-t)-fva*(i*n-(t+k));
            form.resposta.value  = somaJuros;
        }
    
    } else {                                               // ALD Automóvel
        var prest;                                         // Valor da prestação
        var vc = form.aldmontante.value;                   // Valor do carro
        var eix = form.aldentrada.selectedlndex;           // Entrada seleccionada
        var ei = form.aldentrada.options[eix].text;        // Entrada Inicial
        var pv = vc * (1-ei/100);                          // Valor do Empréstimo
        var i = form.aldjuro.value /1200;                  // Taxa de Juro
        var ix = form.aldnmeses.selectedlndex;             // Numero de Meses seleccionado
        var np = form.aldnmeses.options[ix].text;          // Numero de Prestações
 
        prest = Math.round((pv * (Math.pow(1+i,np)) ) / (Math.pow(1+i,np)-1)* i )
        form.aldmens.value = prest;
     }
}

///******PRICE*********/
function kPrice()
{
  var periodo = document.calcform.periodo.value;
  var k = document.calcform.periodok.value;
  var res = parseFloat(k-periodo);
  return res;
}

function fvaPrice()
{
  var parcelas = form.prestacoes.value;          // Numero de Prestações;
  var capital  = form.valor.value;                       // Valor presente
  var inicial  = form.inicial.value;
  var fim      = form.fim.value
  var periodo  = fim-inicial;
  var i        = form.taxa.value/100;                       // Valor presente
  var quantidadeParcelasPagas = form.parcelasPagas.value;

        
if(fim==0){
    fim = quantidadeParcelasPagas;
  }
  if(inicial==0){
    inicial= 0;
  }
  var n        = parseFloat(parcelas);
  var ind      = parseFloat(1+i);
  var base     = parseFloat(Math.pow(ind,n));
  var cima     = parseFloat((base-1));
  var baixo    = parseFloat((base*i));
  var res      = parseFloat((cima/baixo));
  
  return res;
}

function fvatPrice()
{
  var parcelas = form.prestacoes.value;          // Numero de Prestações;
  var capital  = form.valor.value;                       // Valor presente
  var inicial  = form.inicial.value;
  var fim      = form.fim.value
  var quantidadeParcelasPagas = form.parcelasPagas.value;

  if(fim==0){
    fim = quantidadeParcelasPagas;
  }
  if(inicial==0){
    inicial= 0;
  }
  var periodo  = fim-inicial;
  var i        = form.taxa.value/100;                       // Valor presente

  var t = parseFloat(parcelas);
  var p = parseFloat(periodo);
  var n = parseFloat(t-p);
  var ind = parseFloat(1+i);
  var base = parseFloat(Math.pow(ind,n));
  var cima = parseFloat((base-1));
  var baixo = parseFloat((base*i));
  var res = parseFloat((cima/baixo));
  
  return res; 
}

function fvatkPrice()
{
  var parcelas = document.calcform.parcelas.value;
  var taxa = document.calcform.taxa.value;
  var capital = document.calcform.capital.value;
  var periodo = document.calcform.periodo.value;
  var valork = document.calcform.periodok.value;
  
  var pk = parseFloat(valork);
  var i = parseFloat((taxa/100));
  var t = parseFloat(parcelas);
  var p = parseFloat((periodo));
  var k = parseFloat(pk-p);
  var faz = parseFloat((t-p));
  var n = parseFloat((faz-k));
  var ind = parseFloat(1+i);
  var base = parseFloat(Math.pow(ind,n));
  var cima = parseFloat((base-1));
  var baixo = parseFloat((base*i));
  var res = parseFloat((cima/baixo));
  
  return res; 
}

function frcPrice()
{
  var parcelas = document.calcform.parcelas.value;
  var taxa = document.calcform.taxa.value;
  var capital = document.calcform.capital.value;
  var periodo = document.calcform.periodo.value;

  var i = parseFloat((taxa/100));
  var n = parseFloat(parcelas);
  
  var ind = parseFloat(1+i);
  var base = parseFloat(Math.pow(ind,n));
  var baixo = parseFloat((base-1));
  var cima = parseFloat((base*i));
  var res = parseFloat((cima/baixo)); 
  
  return res; 
}

//Sistemas Price

function valorParcelaPrice()
{
  var parcelas = document.calcform.parcelas.value;
  var taxa = document.calcform.taxa.value;
  var capital = document.calcform.capital.value;
  var periodo = document.calcform.periodo.value;

  var dinheiro = parseFloat(capital);
  var divido = FRC();           
  var valparcela = (dinheiro*divido).toFixed(2);
  document.calcform.valorparcela.value = valparcela;
  return valparcela;
}
function saldoDevedorTPrice()
{
  var parcelas = document.calcform.parcelas.value;
  var taxa = document.calcform.taxa.value;
  var capital = document.calcform.capital.value;
  var periodo = document.calcform.periodo.value;
  
  var dinheiro = parseFloat(capital);
  var tempo = parseFloat(parcelas);
  var i = (parseFloat(taxa)/100);   
  var ind = (1+i);  
  var peratual = parseFloat(periodo);
  var ntmenos = parseFloat((tempo-peratual));
  
  var base = Math.pow(ind,ntmenos);
  var baixo = (base*i);
  var cima = (base-1);
  var divido = (cima/baixo);
  var valorparcela = ValorParcela();
  var saldodevedor = (valorparcela*(divido)).toFixed(2);
  document.calcform.saldodevedort.value = saldodevedor;
  return saldodevedor;
}
function saldoDevedorTmenosumPrice()
{
  var parcelas = document.calcform.parcelas.value;
  var taxa = document.calcform.taxa.value;
  var capital = document.calcform.capital.value;
  var periodo = document.calcform.periodo.value;  
  var dinheiro = parseFloat(capital);
  var tempo = parseFloat(parcelas);
  var i = (parseFloat(taxa)/100);   
  var ind = (1+i);  
  var peratual = parseFloat(periodo);

  var tmenosum = (tempo-(peratual-1));
  var devedor2 = Math.pow(ind,tmenosum);
  var cima2 = (devedor2-1);
  var baixo2 = (devedor2*i);
  var divido2 = (cima2/baixo2);
  var valorparcela = ValorParcela();
  var seila = parseFloat(valorparcela*(divido2)).toFixed(2);
  document.calcform.saldodevedort1.value = seila;
  return seila;
}
function jurosdeOrdemTPrice()
{
  var taxa = document.calcform.taxa.value;
  var i = (parseFloat(taxa)/100); 
  var seila = SaldoDevedorTmenosum();
  var jurost = (i*(seila)).toFixed(2);
  document.calcform.jurosordemt.value = jurost;
  var periodo = document.calcform.periodo.value;
  var t = parseFloat(parcelas);
  return t;
}
function primeiraAmortizacaoPrice()
{
  var capital = document.calcform.capital.value;
  var dinheiro = parseFloat(capital); 
  var taxa = document.calcform.taxa.value;
  var i = (parseFloat(taxa)/100); 
  var valorparcela = ValorParcela();
  var amortiza1 = (valorparcela-(i*dinheiro)).toFixed(2);
  document.calcform.primeiraamortizacao.value = amortiza1;  
  return amortiza1;
}
function valordaAmortizacaoemTPrice()
{
  var amortiza1 = PrimeiraAmortizacao();
  var periodo = document.calcform.periodo.value;
  var peratual = parseFloat(periodo);
  var taxa = document.calcform.taxa.value;
  var i = (parseFloat(taxa)/100); 
  var tempo = (peratual-1);
  var ind = (i+1);
  var base = Math.pow(ind,tempo);
  var amortizacao = (amortiza1*base).toFixed(2);
  document.calcform.amortizacaot.value = amortizacao;
}
function totalAmortizacaoPrice()
{
  var capital = document.calcform.capital.value;
  var dinheiro = parseFloat(capital);
  var saldodevedor = SaldoDevedorT();
  var amortizacaototal = (dinheiro-saldodevedor).toFixed(2);
  document.calcform.amortizacaott.value = amortizacaototal; 
  
}
function jurosAcumuladoPrice()
{
  var periodo = document.calcform.periodo.value;  
  var parcela = ValorParcela();
  var t = parseFloat(periodo);
  var fva = FVA();
  var fva1 = FVAT();
  var finall = parseFloat((t-fva));
  var finale = parseFloat((finall+fva1));
  
  var res = parseFloat((parcela*finale)).toFixed(2);  
  document.calcform.jurosacum.value = res;
  return res;
}


function amortizacaoEmTKPrice()
{
  
  var parcela = ValorParcela();
  var fvat = FVAT();
  var fvatk = FVATK();
  var meio = parseFloat((fvat-fvatk));
  var res = parseFloat((parcela*meio)).toFixed(2);  
  document.calcform.amortizacaott2.value = res;
  return res;
}

function jurosAcumuladoEmTKPrice()
{ 
  var parcela = ValorParcela();
  var k = K();
  var a = AmortizacaoEmTK();
  var res = parseFloat(((parcela*k)-a)).toFixed(2);
  document.calcform.jurosacum2.value = res;
  return res;
}

function calcularPrice() 
{
  AmortizacaoEmTK();
    JurosAcumuladoEmTK();
    ValorParcela();
    SaldoDevedorT();
    SaldoDevedorTmenosum();
    JurosdeOrdemT();
    PrimeiraAmortizacao();
    ValordaAmortizacaoemT()
    TotalAmortizacao();
    JurosAcumulado();
  

}   

/******SAC*******/

function valorKSac()
{
  var k = document.calcform.periodok.value;
  var t = document.calcform.periodo.value;
  var first = parseFloat(k);
  var tempo = parseFloat(t);
  var res = parseFloat((first-tempo));
  return res;
}

function valorAmortizacaoSac()
{
  var parcelas = document.calcform.parcelas.value;
  var taxa = document.calcform.taxa.value;
  var capital = document.calcform.capital.value;
  var periodo = document.calcform.periodo.value;
  
  var dinheiro = parseFloat(capital);
  var tempo = parseFloat(parcelas);
  var amortizacao = parseFloat((dinheiro/tempo)).toFixed(2);  
  document.calcform.valoramortizacao.value = amortizacao;
  return amortizacao;
}

function saldoDevedorTSac()
{
  var parcelas = document.calcform.parcelas.value;
  var periodo = document.calcform.periodo.value;
  var tempo = parseFloat(parcelas);
  var periodoatual = parseFloat(periodo);
  var amortizacao = ValorAmortizacao();
  
  var base = parseFloat((tempo-periodoatual));
  var res = parseFloat((amortizacao*base)).toFixed(2);
  document.calcform.saldodevedort.value = res;
  return res; 
}

function saldoDevedorTumSac()
{
  var parcelas = document.calcform.parcelas.value;
  var periodo = document.calcform.periodo.value;
  var tempo = parseFloat(parcelas);
  var periodoatual = parseFloat(periodo);
  var amortizacao = ValorAmortizacao();
  
  var base = parseFloat((periodoatual+1));
  var segundo = parseFloat((tempo-base));
  var res = parseFloat((amortizacao*segundo)).toFixed(2);
  document.calcform.saldodevedortum.value = res;
  return res; 
}

function valorDoJurosSac()
{
  var taxa = document.calcform.taxa.value;
  var i = parseFloat((taxa/100));
  var parcelas = SaldoDevedorTum();
  var res = parseFloat((i*parcelas)).toFixed(2);
  document.calcform.parcelajurosordemt.value = res;
  return res;
}

function valorPrestacaoOrdemTSac()
{
  var taxa = document.calcform.taxa.value;
  var parcelas = document.calcform.parcelas.value;
  var periodo = document.calcform.periodo.value;
  
  var tempo = parseFloat(parcelas);
  var periodoatual = parseFloat(periodo);
  var i = parseFloat((taxa/100));
  var amortizacao = ValorAmortizacao();
  
  
  var base = parseFloat(tempo-periodoatual);
  var base2 = parseFloat(base+1);
  var base3 = parseFloat(base2*i);
  var base4 = parseFloat(base3+1);
  var res = parseFloat((amortizacao*base4)).toFixed(2);
  document.calcform.prestacaoordemt.value = res;
  return res;   
}

function somaAmortizacoesTKSac()
{
  var periodok = document.calcform.periodok.value;
  var k = valorK();
  var parcela = ValorAmortizacao();
  var res = parseFloat((k*parcela)).toFixed(2);
  document.calcform.amortizacaotk.value = res;
  return res;
}

function jurosAcumuladoEmT()
{
  var taxa = document.calcform.taxa.value;
  var i = parseFloat((taxa/100)); 
  var periodo = document.calcform.periodo.value;    
  var t = parseFloat(periodo);
  var parcelas = document.calcform.parcelas.value;    
  var n = parseFloat(parcelas); 
  var meio = parseFloat(2*n);
  var meio2 = parseFloat(meio-t);
  var meio3 = parseFloat(meio2+1);
  var meio4 = parseFloat(meio3/2);
  var parcela = ValorAmortizacao();
  var fist = parseFloat(i*parcela);
  var fist2 = parseFloat(fist*t);
  
  var res = parseFloat((fist2*meio4)).toFixed(2);
  document.calcform.somajurost.value = res;
  return res; 
}

function jurosTKSac()
{
  var taxa = document.calcform.taxa.value;
  var i = parseFloat((taxa/100)); 
  var parcelas = document.calcform.parcelas.value;    
  var n = parseFloat((parcelas));
  var periodo = document.calcform.periodo.value;    
  var t = parseFloat((periodo));
  var a = ValorAmortizacao();
  var k = valorK();
  
  var comeco = parseFloat(((k-1)/2));
  var segundo = parseFloat(((n-t)-comeco));
  var terceiro = parseFloat((k*segundo));
  var res = parseFloat(((terceiro*a)*i)).toFixed(2);
  document.calcform.somajurostk.value = res;  
  
  return segundo;
}

function somaPrestacoesASac()
{
  var taxa = document.calcform.taxa.value;
  var i = parseFloat((taxa/100)); 
  var parcelas = document.calcform.parcelas.value;    
  var n = parseFloat((parcelas));
  var periodo = document.calcform.periodo.value;    
  var t = parseFloat((periodo));
  var a = ValorAmortizacao();

  var primeiro = parseFloat((2*n));
  var segundo = parseFloat((t+1));
  var terceiro = parseFloat((primeiro-segundo));
  var quarto = parseFloat((terceiro/2));
  var quinto = parseFloat((i*quarto));
  var sexto = parseFloat((quinto+1));
  var res = parseFloat(((sexto*t)*a)).toFixed(2);
  document.calcform.somaprestacaoa.value = res;
  
}

function somaPrestacoesTKSac()
{
  var tex = JurosTK();
  var tenta = parseFloat(tex);
  var taxa = document.calcform.taxa.value;
  var i = parseFloat((taxa/100)); 
  var parcelas = document.calcform.parcelas.value;    
  var n = parseFloat((parcelas));
  var periodo = document.calcform.periodo.value;    
  var t = parseFloat((periodo));
  var a = ValorAmortizacao(); 
  var k = valorK();
  
  var primeiro = parseFloat((tenta*i));
  var segundo = parseFloat((primeiro+1));
  var terceiro = parseFloat((k*segundo));
  var res = parseFloat((a*terceiro)).toFixed(2);
  document.calcform.somaprestacaotk.value = res;
  
  return res;
}

function decrescimoSac()
{
  var taxa = document.calcform.taxa.value;
  var i = parseFloat((taxa/100));   
  var a = ValorAmortizacao(); 
  
  var res = parseFloat((i*a)).toFixed(2);
  document.calcform.decrescimo.value = res;
  return res;
  
}

function calcularSac() 
{
    JurosTK();
    Decrescimo();
    SomaPrestacoesA();
    JurosAcumuladoEmT();
    SomaAmortizacoesTK();
    ValorAmortizacao();
    SaldoDevedorT();
    SaldoDevedorTum();
    ValorPrestacaoOrdemT();
    ValorDoJuros();
    SomaPrestacoesTK();
}   

