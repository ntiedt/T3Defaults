/* FUNCTION DEBUG */
// function dbg(what, value){
//   if(debug==1){
//     if(jQuery('#dialog_output').length<1){
//       jQuery('body').prepend('<div id="dialog_output" title="Output"><table></table></div>');
//     }
//     jQuery('#dialog_output table').append('<tr><td>'+what+': </td><td>'+value+'</td></tr>');
//   }
// }
jQuery(function(j){


//   j( '#output' ).button({
//     icons: {
//       secondary: 'ui-icon-circle-check'
//     }
//   }).click(function(e) {
// //     if(j('#bt_output').attr('aria-pressed')==true){
// //       dialog_output.dialog("option", "hide", "slow");
// //     }else{
//       dbg
//       j( "#dialog_output" ).dialog( "open" );
// //     }
//   });

    j( '#showgrid' ).button({
        text: true
    }).click(function() {

        if(j('#showgrid').is(':checked')){
            thegrid = j('<div id="layer_grid" class="container row" />');
            for( i=1; i <= (max_cols*2); i++ ){
                if(i % 2 !== 0){
                    thegrid.append('<div class="col span_1" />');
                }else{
                    thegrid.append('<div class="col spacer" />');
                }
            }
            j('.container:first').prepend(thegrid);
        }else{
            j('#layer_grid').remove();
        }
    });

    function outputWinDims(selectwidth){
        if(selectwidth){
            j( '#dialog_dimensions' ).find('.width').html(selectwidth);
        }else{
            j( '#dialog_dimensions' ).find('.width').html(j(window).width());
            j( '#dialog_dimensions' ).find('.height').html(j(window).height());
        }
    }
    j( '#debugwidth' ).button({
        text: true
    }).click(function() {
        j( '#dialog_dimensions' ).dialog({
            dialogClass: "dialog_dimensions",
            width: 'auto',
            autoOpen: false,
            closeOnEscape: false,
            resizable: false
        });

        if(j('#debugwidth').is(':checked')){
            j( '#dialog_dimensions' ).dialog( "close" );
            outputWinDims();
            j(window).bind("resize", outputWinDims);
            j( '#dialog_dimensions' ).dialog( "open" );
        }else{
            j( '#dialog_dimensions' ).dialog( "close" );
            j(window).unbind("resize", outputWinDims);
        }
        j( "select#windowwidth" ).selectmenu({
            change: function( event, ui ) {
                var breite = parseInt(ui.item.value);
                if(breite==0){
                    j('body .page').show();
                    j('.windowwidth-frame').remove();
                }else{
                    if(breite>j(window).width()){
                        alert(windowwidth_alert);
                        j('body .page').show();
                        j('.windowwidth-frame').remove();
                        outputWinDims();

                        j( "select#windowwidth" )
                            .val('0')
                            .selectmenu("refresh");

                    }else{
                        var iframe = '<iframe class="windowwidth-frame" src="'+document_url+'" style="width:'+breite+'px; height:'+j(window).height()+'px"></iframe>';
                        if(j('.windowwidth-frame').length<1){
                            j('body').append(iframe);
                        }else{
                            j('.windowwidth-frame').css('width',breite);
                        }
                        j('body .page').fadeOut();
                        outputWinDims(breite);
                    }
                }
                /*                if(ui.item.value<j(window).width()){
                 j('meta[name="viewport"]').attr('content', 'width='+ui.item.value);
                 }*/
                /*<meta id="testViewport" name="viewport" content="width = 380">
                 <meta name="viewport" content="width=device-width, initial-scale=1"/>*/
            }
        });
    });

//   j( '#colorpicker' ).button({
//     text: true
//   }).click(function() {
//   });
//
//   j( '#measure' ).button({
//     text: true
//   }).click(function() {
//   });

    j( '#mdebug' ).button({
        text: true
    }).click(function() {
        j( '#dialog_mdebug' ).dialog({
            dialogClass: "dialog_mdebug t3d_debug",
            width: 'auto',
            autoOpen: false,
            closeOnEscape: false,
            resizable: false,
            position: { my: 'center top', at: 'center top+40', of: window }
        });

        if(j('#mdebug').is(':checked')){
            j('body > .all').css('cursor','pointer');
            j('body > .all').bind('click', function(event){
                j( '#dialog_mdebug' ).dialog( "close" );
                j.debug(event.target);
                return false;
            });
            j( '#dialog_mdebug' ).dialog( "open" );
        }else{
            j( '#dialog_output' ).dialog( "close" );
            j( '#dialog_mdebug' ).dialog( "close" );
            j('body > .all').unbind('click');
            j('body > .all').css('cursor','auto');
        }
    });

    j( '#mdebug_overwrite' ).button({
        text: true
    }).click(function() {
    });

    j( '#print' ).button({
        text: false,
        icons: {
            primary: 'ui-icon-print'
        }
    }).click(function() {
        window.print();
    });

    j( '#help #select' ).button({
        icons: {
            secondary: 'ui-icon-triangle-1-s'
        }
    })
        .click(function() {
            var menu = j( this ).parent().next();
            if(menu.is(":hidden")){
                var menu = menu.show().position({
                    my: 'left top',
                    at: 'left bottom',
                    of: this
                });
            }else{
                menu.hide();
            }
            j( document ).one( 'click', function() {
                menu.hide();
            });

            return false;
        }).parent().next().hide().menu();

    j( '#toolbar' ).buttonset();


    j( '#help .debug_msg a' ).one( 'click', function() {
        j(this).attr('href', j(this).attr('href').replace('XXX',j(window).width()));
        j(this).attr('href', j(this).attr('href').replace('YYY',j(window).height()));
        j(this).attr('href', j(this).attr('href').replace('TOUCH',isTouch));
    })
})