$(function(){

			/*swipe para menu*/
			$( document ).on( "swipeleft swiperight", "#principal", function( e ) {
		        // We check if there is no open panel on the page because otherwise
		        // a swipe to close the left panel would also open the right panel (and v.v.).
		        // We do this by checking the data that the framework stores on the page element (panel: open).
		        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
		            if ( e.type === "swipeleft" ) {
		                //$( "#panel_1" ).panel( "open" );
		            } else if ( e.type === "swiperight" ) {
		                $( "#panel_1" ).panel( "open" );
		            }
		        }
		    });
			//---------------
		
		$( "#autocomplete" ).on( "filterablebeforefilter", function ( e, data ) {

			/**/
			var ul = $(this);
			var criterio = $( "#autocomplete-input" ).val();

			if(criterio.length > 0){
							
				$.ajax({
	              url: 'http://vivedigitalsantander.com/pruebas_ecompetic/ecompetic_mobile/includes/int_DAO.php',
	              crossDomain: true,
	              type: 'GET',
	              dataType: 'jsonp',
	              jsonp: 'callback',//nombre de la variable get para reconocer la petición
	              data: "tipo=auto_c&criterio="+criterio,
	              beforeSend: function() {
	              	//--------------------------
	              	//abre loader
				    $.mobile.loading( "show", {
				            text: "cargando...",
				            textVisible: true
				    });
				    //--------------------------
				  },
	              error: function(xhr, status, error) {
	                  alert(" Error: --"+status+"-"+xhr.status);
	                  console.log(xhr.status);
	              },
	              success: function(jsonp) {
	              	 console.log(jsonp.mensaje[4]);

	                 //$("#respuesta").listview( "refresh" );
	                 /*
	                 $("#autocomplete").html("");

	                 $.each( jsonp.mensaje, function ( key, value ) {
		                    $("#autocomplete").append("<li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1><a href='http://" + value.web+ "' target='_blank'>" + value.nombre+ "</a></h1></li>");
							//console.log(key+"-"+value);
							console.log(value);

		             });*/

					
		                    /*$("#autocomplete").append("<li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1><a href='http://" + value.web+ "' target='_blank'>" + value.nombre+ "</a></h1></li>");*/
							//console.log(key+"-"+value);

							//console.log("en mensaje llave = "+key+" valor ="+value.label);
							//console.log("en mensaje llave = "+key+" valor ="+value.category);
							//console.log("en mensaje value = "+value);
							/*
							if(jsonp.mensaje[0].category == "Productos"){

								$("#autocomplete").append("<li><h1>Productos</h1></li>");

								$.each( jsonp.mensaje, function ( key, value ) {					
									
									if(value.category == "Productos"){

										$("#autocomplete").append("<li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1><a href='http://" +value.id+ "' target='_blank'>" + value.label+ "</a></h1></li>");
									}
									
								});
							}

							if(jsonp.mensaje[0].category == "Empresas"){

								$("#autocomplete").append("<li><h1>Empresas</h1></li>");

								$.each( jsonp.mensaje, function ( key, value ) {					
									
									if(value.category == "Empresas"){

										$("#autocomplete").append("<li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1><a href='http://" +value.id+ "' target='_blank'>" + value.label+ "</a></h1></li>");
									}
									
								});
							}*/

							$.each( jsonp.mensaje, function ( key, value ) {
								if(value.category == "Productos"){
									$("#autocomplete").append("<li id='c_prod' class='ul-listview'></li>");
									//<li><h1>Productos</h1></li>
									$("#c_prod").html("<li><h1>Productos</h1></li>");
								}
								if(value.category == "Empresas"){
									$("#autocomplete").append("<li id='c_emp' class='ul-listview'></li>");
									$("#c_emp").html("<li><h1>Empresas</h1></li>");
								}
								if(value.category == "Categorías"){
									$("#autocomplete").append("<li id='c_cat' class='ul-listview'></li>");
									$("#c_cat").html("<li><h1>Categorías</h1></li>");
								}

								if(value.category == "- - -"){
									$("#autocomplete").append("<li id='c_no' class='ul-listview'></li>");
									$("#c_no").html("<li><h1>- - -</h1></li>");
								}
							});

							$.each( jsonp.mensaje, function ( key, value ) {

								if(value.category == "Productos"){															
																				
									$("#c_prod").append("<a href='resultado.html?id=" +value.id+ "&categoria="+value.category+"' target='_self' data-transition='slidefade'><li 	class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1>" +value.label+ "</h1></li></a>");							
								}

								if(value.category == "Empresas"){
									
									$("#c_emp").append("<a href='resultado.html?id=" +value.id+ "&categoria="+value.category+"' target='_self'><li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1>" +value.label+ "</h1></li></a>");	
									
								}

								if(value.category == "Categorías"){
									
									$("#c_cat").append("<a href='resultado.html?id=" +value.id+ "&categoria="+value.category+"' target='_self'><li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1>" + value.label+ "</h1></li></a>");	
									
								}

								if(value.category == "- - -"){
									
									$("#c_no").append("<a href=''><li class='ui-btn ui-icon-navigation ui-btn-icon-right'> <h1>" + value.label+ "</h1></li></a>");	
									
								}

							});
							
							//cierra loader
							$.mobile.loading( "hide" );

	              }

				});//cierra ajax
			}else{
				console.log("criterio vacio");
				$("#autocomplete").html("");
			}

	    });

		$("#btn_directorio").click(function() {
				console.log("click!");
				location.href="directorio.html";
		});

		$("#p_loader").click(function(event) {
			/* Act on the event 
			var $this = $( this ),
		        theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
		        msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
		        textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
		        textonly = !!$this.jqmData( "textonly" );
		        html = $this.jqmData( "html" ) || "";
		    $.mobile.loading( "show", {
		            text: msgText,
		            textVisible: textVisible,
		            theme: theme,
		            textonly: textonly,
		            html: html
		    });*/

			//$.mobile.loading( "show");

			$.mobile.loading( "show", {
		            text: "cargando...",
		            textVisible: true
		    });
			//---------------------
		});

		$("#p_close").click(function(event) {
			/* Act on the event */
			$.mobile.loading( "hide" );
		});


				$("#btn_directorio").click(function(event) {
					/* Act on the event */
					location.href="directorio.html";
				});

				$("#btn_promociones").click(function(event) {
					/* Act on the event */
					location.href="promociones.html";
				});

	});