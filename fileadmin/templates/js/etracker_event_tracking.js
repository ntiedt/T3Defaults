<!-- BEGIN etracker Tracklet 3.0 async --> 
var ET_Event = { 
  link: function() {  } 
} 

jQuery(function(j){
  j.each(j('.all a'), function(){
    if(j(this).attr('href')!==undefined){
      if(j(this).attr('href').indexOf('.pdf')!=-1){
        cur_href = j(this).attr('href');
        j(this).bind('mousedown', function(){
          etr_kategorie = 'PDF';
          etr_objekt = j(this).attr('href').substring(j(this).attr('href').lastIndexOf("/") + 1, j(this).attr('href').lastIndexOf("."));       
          etr_aktion = 'Download';
          etr_tag = document.URL;
          ET_Event.eventStart(etr_kategorie, etr_objekt+'.pdf', etr_aktion, etr_tag);
        });
      } else if(j(this).attr('href').indexOf('.zip')!=-1){
        cur_href = j(this).attr('href');
        j(this).bind('mousedown', function(){
          etr_kategorie = 'ZIP';
          etr_objekt = j(this).attr('href').substring(j(this).attr('href').lastIndexOf("/") + 1, j(this).attr('href').lastIndexOf(".")); 
          etr_aktion = 'Download';
          etr_tag = document.URL;
          ET_Event.eventStart(etr_kategorie, etr_objekt+'.zip', etr_aktion, etr_tag);
        });
      }
    }
  })
})
<!-- etracker Tracklet END --> 