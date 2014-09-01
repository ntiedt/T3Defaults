/**
 * Title:         Alert++ (jQuery Debugger Plugin)
 * Version:       1.3
 * Author:        Andrew Groff (andrew[DOT]p[DOT]groff[AT]gmail.com)
 * Date Created:  2009-10-14
 * Date Modified: 2014-01-27
 * URL:           http://andygroff.com/jquery-debugger-debugging-plugin/
 * Contributors:  Chris Weiss
 * Contributors:  Niels Tiedt
 */

(function($) {
    $.debug = function(variable, options) {
        // define defaults and override with options, if available
        // by extending the default settings, we don't modify the argument
        var settings = $.extend({
            divId: "dialog_output",
            cssScopeUI: "t3d_debug",
            divTitle: "Output",
            recursive: true
        }, options);

        var vars = {
            debugContainer: $('<div id="'+settings.divId+'" class="'+settings.cssScopeUI+'" title="'+settings.divTitle+'"><table></table></div>')
        }

        var object = variable;
        if(variable == undefined){
            object = this;
            settings.recursive = false;
        }
        printDebug(object);

        function typeOf(value) {
            var s = typeof value;
            if (s === 'object') {
                if (value) {
                    if (typeof value.length === 'number' &&
                        !(value.propertyIsEnumerable('length')) &&
                        typeof value.splice === 'function') {
                        s = 'array';
                    }
                } else {
                    s = 'null';
                }
            }
            return s;
        }


        function printDebug(obj){
            //create the div to display debuggable object
            createDebugDiv();
            //get object html
            var html = getObjectHtml(obj);
            //spacer
            var tr = '<tr><td colspan="2" class="spacer"></td></tr>';
            //set little div to object html
            $("#"+settings.divId+' table').append(html+tr);
        }

        function createDebugDiv(){
            if ($("#"+settings.divId).length == 0)
            {
                $('body').append(vars.debugContainer);
                if(jQuery.fn.dialog){
                  $("#"+settings.divId).dialog({
                    dialogClass: settings.divId,
                    autoOpen: true,
                    width: 'auto',
                    closeOnEscape: false,
                    position: { my: 'center top', at: 'center top+40', of: window }    
                  });
                }else{
                  $("#"+settings.divId).prependTo('body').css({
                    width: 'auto',
                    position: 'fixed',
                    zIndex: '99999',
                    top: 40,
                    left: 10,
                    padding: '10px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    boxShadow: '0 0 5px #ccc'
                  });
                }
            }
            else{
              if(jQuery.fn.dialog){
                $("#"+settings.divId).dialog( "open" );
              }
            }
        }

        function getObjectHtml(obj){
            var html = "";
            var br   = "<br />";
            //html += obj.innerHTML+br;
            if(obj.innerHTML != undefined){
                html += doHtmlElementHtml(obj);
                return html;
            }
            else if(typeof obj == "string" ){
                html += "<tr><td>String: </td><td>"+obj+'</td></tr>';
                return html;
            }
            else if(typeof obj == "number" ){
                html += "<tr><td>Number: </td><td>"+obj+'</td></tr>';
                return html;
            }
            else if(typeof obj == "boolean" ){
                html += "<tr><td>Boolean: </td><td>"+obj+'</td></tr>';
                return html;
            }
            else if(obj instanceof Function){
                html += formatFunction(obj);
            }
            for (var prop in obj) {
                if(prop != "prototype"){
          
                    if(obj[prop] instanceof Array && settings.recursive){
                        html += doArrayHtml(obj, prop);
                    }
                    else if(obj[prop] instanceof Function && settings.recursive){
                        html += doFunctionHtml(obj, prop);
                    }
                    else if(obj[prop] instanceof Object && settings.recursive){
                        html += doObjectHtml(obj, prop);
                    }
                    else{
                        html += "<span style=\"display:block;\">"+prop+": "+obj[prop]+"</span>";
                    }
                }
            }
            return html;
        }

        function doHtmlElementHtml(obj){
            var html = "";
            var currentElement = "";
            var desiredElements = new Array(
                "tagName",
                "className",
                "id",
                "title",
                "tabIndex",
                "align",
                "scrollWidth",
                "clientLeft",
                "clientHeight",
                "clientWidth",
                "clientTop",
                "innerHTML",
                "textContent"
                );
            for(var prop in desiredElements){
                currentElement = desiredElements[prop];
                html += "<tr><td>"+currentElement+":</td><td>"+obj[currentElement]+"</td></tr>";
            }
            return html;
        }

        function doArrayHtml(obj, prop){
            var id= getUniqueId(prop);
            return '<a href="javascript:void(0);" style="display:block;" onclick="$(\'#'+id+'\').toggle();">Array: '+
            prop+'...</a><div style="display:none;padding-left:15px;" id="'+id+
            '">'+getObjectHtml(obj[prop])+'</div>';
        }

        function doFunctionHtml(obj, prop){
            var id= getUniqueId(prop);
            return '<a href="javascript:void(0);" style="display:block;" onclick="$(\'#'+id+'\').toggle();">Function: '+
            prop+'...</a><div style="display:none;padding-left:15px;" id="'+id+
            '">'+formatFunction(obj[prop])+'</div>';
        }

        function doObjectHtml(obj, prop){
            var id= getUniqueId(prop);
            return '<a href="javascript:void(0);" style="display:block;" onclick="$(\'#'+id+'\').toggle();">Object: '+
            prop+'...</a><div style="display:none;padding-left:15px;" id="'+id+
            '">'+getObjectHtml(obj[prop])+'</div>';
        }

        function getUniqueId(property){
            var t = new Date();
            var randomnumber = Math.floor(Math.random()*110)
            return "div"+property+"-"+t.getTime()+randomnumber;
        }

        function formatFunction(str){
            return "<pre>"+str+"</pre>";
        }

    }
})(jQuery);

