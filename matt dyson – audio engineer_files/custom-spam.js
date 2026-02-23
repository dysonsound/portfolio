var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/* global pf */
/* global jQuery */
(function($, pf){

    $(document).ready(function() {
        onDocumentReady();
    });

    $(window).load(function() {
        onWindowLoad();
    });

    function onDocumentReady() {
        // fired when a form is changed from the inspector.
        if(pf.spam.gutenberg === 1){
            jQuery('body').delegate('.pirate-forms-maps-custom', 'addCustomSpam', function(){
                var i = 0;
                addCustomSpam(i++, jQuery(this));
            });
        }

        // for the front end.
        jQuery('.pirate-forms-maps-custom').each(function(i){
            addCustomSpam(i, jQuery(this));
        });
    }

    function onWindowLoad() {
        // fired when a saved form is loaded in gutenberg.
        if(pf.spam.gutenberg === 1){
            jQuery('.pirate-forms-maps-custom').each(function(i){
                addCustomSpam(i, jQuery(this));
            });
        }
    }

    function addCustomSpam(i, object){
        var $id = 'xobkcehc-' + i;
        object.empty().html(jQuery('<input id="' + $id + '" name="xobkcehc" type="' + 'xobkcehc'.split('').reverse().join('') + '" value="' + pf.spam.value + '"><label for="' + $id + '"><span>' + pf.spam.label + '</span></label>'));
    }
})(jQuery, pf);

}

/*
     FILE ARCHIVED ON 22:19:10 May 30, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:55:47 Feb 21, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.721
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.009
  esindex: 0.014
  cdx.remote: 49.004
  LoadShardBlock: 253.969 (3)
  PetaboxLoader3.datanode: 392.29 (5)
  load_resource: 219.451
  PetaboxLoader3.resolve: 42.801
  loaddict: 69.181
*/