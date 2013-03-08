##
## EXT:tt_news ###
plugin.tt_news.code = LIST

[globalVar = GP:tx_ttnews|tt_news > 0]
plugin.tt_news.code >
plugin.tt_news.code = SINGLE
[global]

plugin.tt_news{
  # dargestellte News ausschliesen
  excludeAlreadyDisplayedNews=0
  
  genericmarkers{
    /*
    title_tab1 = TEXT
    title_tab1{
      value = Product
      lang.de = Produkt
    }
    */
  }
  # Lightbox + Scrollable
  displaySingle{    
    caption_stdWrap.required = 1
    imageWrapIfAny = <div class="csc-textpic csc-textpic-intext-left-nowrap"><div class="csc-textpic-imagewrap"><div class="scrollable scrollable-textpic"><ul class="news-single-img items"> | </ul></div><div class="navi navi-scrollable"></div></div></div>
    image{
      wrap = <li class="item csc-textpic-image csc-textpic-firstcol" style="width:{$plugin.tt_news.singleMaxW}px;">|</li> || <li class="item csc-textpic-image" style="width:{$plugin.tt_news.singleMaxW}px;">|</li> || <li class="item csc-textpic-image csc-textpic-lastcol" style="width:{$plugin.tt_news.singleMaxW}px;">|</li>
      imageLinkWrap {
        #JSwindow = 0
        JSwindow.if.isFalse = {$styles.content.imgtext.linkWrap.lightboxEnabled}
        directImageLink = {$styles.content.imgtext.linkWrap.lightboxEnabled}
        linkParams.ATagParams.dataWrap = class="{$styles.content.imgtext.linkWrap.lightboxCssClass}" rel="{$styles.content.imgtext.linkWrap.lightboxRelAttribute}"
      	width = {$styles.content.imgtext.linkWrap.width}
      	height = {$styles.content.imgtext.linkWrap.height}
      }
    }
  }
  _LOCAL_LANG{
    default {
      more = Read more >
    }
    de {
      more = Weiterlesen >
    }
  }
