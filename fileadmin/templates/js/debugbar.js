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

  j( '#toolbar' ).draggable();
  
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
  j( '#debugwidth' ).button({
    text: true
  }).click(function() {    
    if(j('#debugwidth').is(':checked')){
        j.debug(j(window).width());
    }else{
      j( '#dialog_output' ).dialog( "close" );
    }
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
      dialogClass: "dialog_mdebug",
      width: 'auto',
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      position: { my: 'center top', at: 'center top+40', of: window }
    });
    
    if(j('#mdebug').is(':checked')){
      j('body > *:first').css('cursor','pointer');
      j('body > *:first').bind('click', function(event){
        j( '#dialog_mdebug' ).dialog( "close" );
		  j.debug(event.target);
        return false;
      });
      j( '#dialog_mdebug' ).dialog( "open" );
    }else{
      j( '#dialog_output' ).dialog( "close" );
      j( '#dialog_mdebug' ).dialog( "close" );
      j('body > *:first').unbind('click');
      j('body > *:first').css('cursor','auto');
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
  
  
  j( '#help .debug_msg a' ).one( 'click', function() {
    j(this).attr('href', j(this).attr('href').replace('XXX',j(window).width()));
    j(this).attr('href', j(this).attr('href').replace('YYY',j(window).height()));
    j(this).attr('href', j(this).attr('href').replace('TOUCH',isTouch));
  })
})