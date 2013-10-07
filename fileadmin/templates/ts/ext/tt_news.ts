##
## EXT:tt_news ###


###
# This is the default TS-setup for the new tt_news standard html template: EXT:tt_news/pi/res/tt_news_v3_template.html
#
# (see Section Reference in the manual for more options & parameters)
#
# tt_news v 3.0.0
###

# Includes the newsLib:
includeLibs.ts_news = EXT:tt_news/pi/class.tx_ttnews.php

# Fix for TYPO3 4.6:
tt_content.list.20.9 = CASE
tt_content.list.20.9 {
    key.field = layout
    0 = < plugin.tt_news
}


plugin.tt_news = USER
plugin.tt_news {
  genericmarkers{
    data = uid
    cat_class = COA
    cat_class{
      10 = CONTENT
      10{
      	table = tt_news_cat
      	select {
      		pidInList = 296
          recursive = 5
          join = tt_news_cat_mm ON (tt_news_cat.uid = tt_news_cat_mm.uid_foreign) INNER JOIN tt_news ON (tt_news.uid = tt_news_cat_mm.uid_local)
      		selectFields = tt_news.image, tt_news.title, tt_news.bodytext, tt_news.deleted, tt_news.hidden, tt_news.uid, tt_news_cat.single_pid, tt_news_cat_mm.uid_foreign, tt_news_cat.title AS cat_title
          #orderBy = sorting
  		    where = tt_news.deleted=0 AND tt_news.hidden=0 AND tt_news.sys_language_uid=0
      		andWhere.cObject = COA
          andWhere.cObject{
            10 = TEXT
            10{
              wrap = (tt_news.uid = |)
              #data = GP:tx_ttnews|tt_news
              field = uid
            }
          }
      	}
      	renderObj = COA
      	renderObj {
          20 = TEXT
          20{
            noTrimWrap = || | 
            field = cat_title
            case = lower
            replacement{
              10{
                search.char = 32
                replace =
              }
            }
          }
        }
      }
    }
    more_link = COA
    more_link{
  	  10 = TEXT
  	  10.value = Details
  	  10.wrap = <span class="news-list-morelink">|</span>
    }
    list_header = COA
    list_header{
      wrap = <div class="row container bg-4">|</div>
  	  10 = TEXT
  	  10{
        wrap = <h2 class="color-3 size-5 font-2">|</h2>
        value = Aktuelle Wohnprojekte
        case = upper
      }
      /*
      <div class="col-1 col span_6">
        ###NEWS_TYP###
        <h3>###NEWS_TITLE###</h3>
        <p class="">###NEWS_PREIS###</p>
      </div>
      */
    }
    title = COA
    title{
  	  10 = TEXT
  	  10{
        field = title
        split{
          token =|
          returnKey = 0
        }
      }
    }
    price = COA
    price{
      wrap = <p class="news-list-price">|</p>
  	  10 = TEXT
  	  10{
        field = title
        split{
          token =|
          returnKey = 1
        }
      }
    }
  }

  # stdWrap for the complete plugin output
  stdWrap.wrap =

  # template file
  templateFile = {$plugin.tt_news.file.templateFile}

  # page(s) where the news articles are stored -> "Starting point"
  pid_list = {$plugin.tt_news.pid_list}

  # extend "pid_list" by the number of recursive levels.
  recursive = {$plugin.tt_news.recursive}

  # ignore "pid_list" and "recursive". This saves a lot of processing time in huge pagetrees, but it has the disadvantage that the "enable fields" (hidden, start, stop ...) of the pages with news are ignored, too.
  dontUsePidList = 0

  # exclude news from display in a plugin, if they've been displayed already by another plugin on the same page.
  excludeAlreadyDisplayedNews = 0


  # page for the Single view
  singlePid.data = TSFE:id
  #singlePid = {$plugin.tt_news.singlePid}


  # decides which template part is taken for displaying news
  code =

  # maximum number of news all lists but latest
  limit = {$plugin.tt_news.limit}

  # maximum number of news in "latest"
  latestLimit = {$plugin.tt_news.latestLimit}

  # page where the "back to list" link in single view links to
  backPid = {$plugin.tt_news.backPid}

  # don't add plugin GETvars to the singleview link
  dontUseBackPid = 1

  # enable optionSplit for parameters in displayList and displayLatest
  enableOptionSplit = 1

  # int/optionSplit of the template part number(s)
  altLayoutsOptionSplit =

  # number of alternating template parts (is ignored if altLayoutsOptionSplit is set)
  alternatingLayouts =

  # typolink configuration for news with type "internal link" or "external URL"
  pageTypoLink.parameter.current = 1


  # allow news plugins to be cached
  allowCaching = {$plugin.tt_news.allowCaching}

  ignoreEnableFields {
    starttime = 0
    endtime = 0
  }

  /********************************************************************************
   *    SINGLE news settings:
   */

  # divide the singleview to multiple pages
  useMultiPageSingleView = {$plugin.tt_news.useMultiPageSingleView}

  # insert pagebreaks to the singleview after a certain number of words
  maxWordsInSingleView = 0

  appendSViewPBtoContent = 0
  useParagraphAsPagebreak = 0

  displaySingle {
    age_stdWrap.age = 1
    age_stdWrap.wrap = |<br />
    textNewsAge_stdWrap.wrap =
    date_stdWrap.strftime= %d.%m.%Y
    time_stdWrap.strftime= %H:%M
    title_stdWrap.wrap =

    author_stdWrap.typolink.parameter.field = author_email
    author_stdWrap.wrap = |<br />
    preAuthor_stdWrap.noTrimWrap = || |
    author_stdWrap.required = 1

    category_stdWrap.wrap = |<br />
    email_stdWrap.setContentToCurrent = 1
    email_stdWrap.typolink.parameter.current = 1

	subheader_stdWrap {
	  wrap = <h2>|</h2>
      trim = 1
      required = 1
      parseFunc < lib.parseFunc_RTE
      parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag >
    }

    content_stdWrap.parseFunc < lib.parseFunc_RTE
    content_stdWrap.parseFunc.nonTypoTagStdWrap.encapsLines.addAttributes.P >


    # stdWrap for "additional info" (links, files, related news)
    addInfo_stdWrap.wrap = <div class="news-single-additional-info"> | </div>

    links_stdWrap.wrap = <dl class="news-single-links">|</dl>
    linksHeader_stdWrap.wrap = <dt>|</dt>
    linksItem_stdWrap >
    linksItem_stdWrap {
      parseFunc < lib.parseFunc_RTE
      parseFunc.nonTypoTagStdWrap.encapsLines {
        nonWrappedTag >
        innerStdWrap_all.wrap = <dd>|</dd>
      }
    }

    nextPrevRecSortingField = datetime
    reversePrevNextOrder = 0

    showTitleAsPrevNextLink = {$plugin.tt_news.showTitleAsPrevNextLink}
    
    prevLinkTitle_stdWrap.wrap =
    prevLinkLabel_stdWrap.wrap = &lt;&nbsp;|
    prevLink_stdWrap.wrap =

    nextLinkTitle_stdWrap.wrap =
    nextLinkLabel_stdWrap.wrap = |&nbsp;&gt;
    nextLink_stdWrap.wrap = <div style="float:right;">|</div>


    imageCount = 10
    imgAltTextField = imagecaption
    imageWrapIfAny = <div class="csc-textpic csc-textpic-intext-left-nowrap"><div class="csc-textpic-imagewrap"><div class="scrollable scrollable-textpic"><ul class="news-single-img items"> | </ul></div><div class="navi navi-scrollable"></div></div></div>
    imageMarkerOptionSplit =

    caption_stdWrap {
      trim = 1
      required = 1
      wrap =
      dataWrap = <p class="news-single-imgcaption" style="width:{TSFE:lastImageInfo|0}px;">|</p>
    }

  }


  displaySingle.image {
  
    file.maxW = {$plugin.tt_news.singleMaxW}
    file.maxH = {$plugin.tt_news.singleMaxH}

#   altText = TEXT
#	altText {
#		field = imagealttext
#		stripHtml = 1
#		split.token.char = 10
#		split.token.if.isTrue = {$styles.content.imgtext.imageTextSplit}
#		split.returnKey.data = register : IMAGE_NUM_CURRENT
#	}

#	titleText < .altText
#	titleText.field = imagetitletext


    wrap = <li class="item csc-textpic-image csc-textpic-firstcol" style="width:{$plugin.tt_news.singleMaxW}px;">|</li> || <li class="item csc-textpic-image" style="width:{$plugin.tt_news.singleMaxW}px;">|</li> || <li class="item csc-textpic-image csc-textpic-lastcol" style="width:{$plugin.tt_news.singleMaxW}px;">|</li>
    imageLinkWrap = 1
    imageLinkWrap {
      enable = 1
      bodyTag = <body bgColor="#ffffff" style="margin:0;">
      wrap = <a href="javascript:close();"> | </a>
      directImageLink = {$styles.content.imgtext.linkWrap.lightboxEnabled}
      linkParams.ATagParams.dataWrap = class="{$styles.content.imgtext.linkWrap.lightboxCssClass}" rel="{$styles.content.imgtext.linkWrap.lightboxRelAttribute}"
    	width = {$styles.content.imgtext.linkWrap.width}
    	height = {$styles.content.imgtext.linkWrap.height}
      JSwindow = 1
      JSwindow.newWindow = 1
      JSwindow.expand = 0,0
      JSwindow.if.isFalse = {$styles.content.imgtext.linkWrap.lightboxEnabled}
    }
  }





  /********************************************************************************
   *    LIST news settings:
   */

  displayList {
    age_stdWrap.age = 1
    textNewsAge_stdWrap.wrap =
    date_stdWrap.strftime= %d.%m.%Y
    time_stdWrap.strftime= %H:%M

    # Don't display caption in List view
    caption_stdWrap.if.directReturn = 0

    title_stdWrap.wrap =


	subheader_stdWrap {
      stripHtml = 1
      crop = 230 | ... | 1    

	  # the "more" link is directly appended to the subheader
	  append = TEXT
	  append.data = LLL:fileadmin/templates/ts/ext/locallang/tt_news.xml:more
	  append.wrap = <span class="news-list-morelink color-8">|</span>
	  # display the "more" link only if the field bodytext contains something
	  #append.if.isTrue.field = bodytext

	  outerWrap = <p class="news-list-subheader">|</p>
      ifEmpty.field = bodytext
	}


    author_stdWrap.wrap =
    preAuthor_stdWrap.noTrimWrap = || |
    imageCount=1
    imageWrapIfAny =

    category_stdWrap.wrap = <div class="news-list-category"> | </div>
    imgAltTextField = imagecaption

    linkTitleField = title
    linkTitleField.wrap =
    linkAltField = short
    linkAltField.wrap =
    
    listImageMode = {$plugin.tt_news.listImageMode}
  }
  displayList.image {
    file.maxW = {$plugin.tt_news.listMaxW}
    file.maxH = {$plugin.tt_news.listMaxH}
    params = class="border-1"
    imageLinkWrap = 1

    # stdWrap which is used when there's no image at all
    noImage_stdWrap.wrap =
  }









  /********************************************************************************
   *    LATEST news settings:
   */

  # if set, a LATEST plugin changes its contents when a category is selected in the category menu
  latestWithCatSelector = 0
  # display archived news in LATEST
  displayArchivedInLatest = 0

  displayLatest {
    age_stdWrap.age = 1
    date_stdWrap.strftime= %d.%m.%Y
    time_stdWrap.strftime= %H:%M
    caption_stdWrap.if.directReturn = 0
    subheader_stdWrap {
      stripHtml = 1
      crop = 100 | ... | 1
      ifEmpty.field = bodytext
      outerWrap = <p>|</p>
    }
    imageCount = 1
    imgAltTextField = imagecaption
    imageWrapIfAny =
    category_stdWrap.wrap = <div class="news-latest-category"> | </div>
    categoryItem_stdWrap.wrap =

    linkTitleField = title
    linkTitleField.wrap =
    linkAltField = short
    linkAltField.wrap =
    
    latestImageMode = {$plugin.tt_news.latestImageMode}
 
  }
  displayLatest.image {
    file.maxW = {$plugin.tt_news.latestMaxW}
    file.maxH = {$plugin.tt_news.latestMaxH}
    imageLinkWrap = 1

    stdWrap.spaceAfter = 0
  }








  /********************************************************************************
   *    Pagebrowser settings:
   */

  # use the extended pagebrowser
  usePiBasePagebrowser = 1

  pageBrowser {
    maxPages = 7
    showResultCount = 1
    showPBrowserText = 0
    dontLinkActivePage = 1

    showFirstLast = 1
    pagefloat = center
    showRange = 1
    hscText = 1

    showResultsNumbersWrap = |
    browseBoxWrap = <div class="news-list-browse">|</div>
    showResultsWrap = <div class="showResultsWrap">|</div>
    browseLinksWrap = <div class="browseLinksWrap">|</div>
    disabledLinkWrap = <span class="disabledLinkWrap">|</span>
    inactiveLinkWrap = |
    activeLinkWrap = <span class="activeLinkWrap">|</span>
    activeLinkWrap.stdWrap.wrap = <span class="activeLinkWrap">|</span>


  }


  singleViewPageBrowser {
    maxPages = 10
    showResultCount = 0
    showPBrowserText = 0
    dontLinkActivePage = 1

    showFirstLast = 1
    pagefloat = center
    showRange = 0
    hscText = 1

    showResultsNumbersWrap = |
    browseBoxWrap = <div class="news-single-browse">|</div>
    showResultsWrap = <div class="showResultsWrap">|</div>
    browseLinksWrap = <div class="browseLinksWrap">|</div>
    disabledLinkWrap = <span class="disabledLinkWrap">|</span>
    inactiveLinkWrap = |
    activeLinkWrap = <span class="activeLinkWrap">|</span>
    activeLinkWrap.stdWrap.wrap = <span class="activeLinkWrap">|</span>


  }
  

  /********************************************************************************
   *    settings for categories:
   */


  # Configures how news are selected by category:
  # 2 = Show news which have all selected categories assigned (AND)
  # 1 = Show news which have at least one of the selected categories assigned (OR)
  # 0 = Show all. Don't care about category selections
  # -1 = Show news which not have all of the selected categories assigned (AND)
  # -2 = Show news which have none of the selected categories assigned (OR)
  categoryMode = 0

  # show only news with selected categories
  categorySelection =

  # extend categorySelection by subcategories
  useSubCategories = {$plugin.tt_news.useSubCategories}

  # disables "useSubCategories" for plugins with categoryMode = 2
  ignoreUseSubcategoriesForAndSelection = 1

  # display subcategories of assigned categories in news articles
  displaySubCategories = {$plugin.tt_news.displaySubCategories}

  # show a list of news belonging to the same category in single view
  showRelatedNewsByCategory = {$plugin.tt_news.showRelatedNewsByCategory}

  # use singlePid from category record instead of global singlePid
  useSPidFromCategory = {$plugin.tt_news.useSPidFromCategory}

  # go up in the category "rootline" until a singlePid has been found
  useSPidFromCategoryRecusive = 1

  # divider for categories in news articles
  categoryDivider = ,

  # stdWrap for the category divider
  categoryDivider_stdWrap.noTrimWrap = || |

  # Category Text mode: posible values are: 0 = don't display, 1 = display but no link, 2 = link to category shortcut, 3 = act as category selector.
  catTextMode = {$plugin.tt_news.catTextMode}
  # Category Image mode: same values as catTextMode.
  catImageMode = {$plugin.tt_news.catImageMode}

  # maximum width for category images
  catImageMaxWidth = 25

  # maximum heihgt for category images
  catImageMaxHeight = 25

  # maximum number of displayed category images in a news article
  maxCatImages = 10

  # maximum number of displayed category titles in a news article
  maxCatTexts = 10

  # order categories by this field.
  catOrderBy = 



  /********************************************************************************
   *    setting for the category menu (CATMENU):
   */

  # page where the category menu links point to. If not set the current page is taken.
  catSelectorTargetPid =

  # if set, the currently selected archive period (year & month) is added to the catmenu links (requires useHRDates=1)
  catmenuWithArchiveParams = {$plugin.tt_news.catmenuWithArchiveParams}

  displayCatMenu {
    # list of page IDs where the categories for the menu are stored (overrides GRSP if given)
    catPidList =
    # extend "catPidList" by the number of recursive levels
    recursive =

    # catmenu rendermode:
    # nestedWraps = make a catmenu with nested wraps
    # tree = use TYPO3 class treeview to build an expandable menu
    # ajaxtree = expandable menu with ajax (requires TYPO3 >= 4.1)

    mode = {$plugin.tt_news.displayCatMenu.mode}

    # include prototype js library (required for catmenu mode "ajaxtree")
    includePrototypeJS = 1
    
    
    showNewsCountForCategories = {$plugin.tt_news.displayCatMenu.showNewsCountForCategories}

    # enable expand/collapse for the category menu
    expandable = {$plugin.tt_news.displayCatMenu.expandable}
    # completely expand the category menu on first load
    expandAll = {$plugin.tt_news.displayCatMenu.expandAll}
    # keep the first level of the category menu expanded
    expandFirst = {$plugin.tt_news.displayCatMenu.expandFirst}

    # stdWrap for the complete category menu
    catmenu_stdWrap.wrap = <div class="news-catmenu">|</div>

     # stdWrap for the category menu header in "nestedWraps" mode
    catmenuHeader_stdWrap.wrap = <p class="news-catmenu-header">|</p>

    # which icons to use for the category menu
    # 1 = icon from cat record
    # 2 = own icons
    # 0 = default icon
    # -1 = no icon
    catmenuIconMode = {$plugin.tt_news.displayCatMenu.catmenuIconMode}

    # if "catmenuIconMode" = "2" all catmenu images (join, line ...) are expected in this path (relative)
    catmenuIconPath =

    # icon for all categories if "catmenuIconMode" = 2
    catmenuIconFile = EXT:tt_news/res/arrow.gif


    catmenuIconFile {
      # icon size for "catmenuIconMode" 1 & 2
      width = 18
      height = 16
    }

    # disables the "root" icon of the category tree
    catmenuNoRootIcon = {$plugin.tt_news.displayCatMenu.catmenuNoRootIcon}

    # insert the category description as title attribute in catmenu links
    insertDescrAsTitle = 1

    # userdefined root icon
    catmenuRootIconFile =


    catmenuRootIconFile {
      # size of userdefined root icon
      width = 18
      height = 16
    }

    # wraps for active category links in the tree (only in mode "nestedWraps")
    catmenuItem_ACT_stdWrap.wrap = <div class="news-catmenu-ACT">|</div>

    # wraps for inactive category links in the tree (only in mode "nestedWraps")
    catmenuItem_NO_stdWrap.wrap = <div class="news-catmenu-NO">|</div>

    # wraps for each menu level (only in mode "nestedWraps")
    catmenuLevel1_stdWrap.wrap = <div class="level1">|</div>
    catmenuLevel2_stdWrap.wrap = <div class="level2">|</div>
    catmenuLevel3_stdWrap.wrap = <div class="level3">|</div>
    catmenuLevel4_stdWrap.wrap = <div class="level4">|</div>
  }






  # settings for the category rootline
  catRootline {
    # render the category rootline to the marker ###NEWS_CATEGORY_ROOTLINE###
  	showCatRootline = {$plugin.tt_news.showCatRootline}

  	# stdWrap for the category rootline
  	catRootline_stdWrap.wrap = <div class="news-catRootline">|</div>

	# link the category title to the page which is configured as category shortcut
	linkTitles = 1

	# stdWrap for a single category title in the category rootline
	title_stdWrap.wrap =

	# divider for category titles in the category rootline
	divider = &nbsp;&gt;&nbsp;
  }




  /********************************************************************************
   *    Archive settings (AMENU):
   */


  archiveMode = {$plugin.tt_news.archiveMode}
  archive = 0 
  emptyArchListAtStart = 0 

  # This enables the use of the GETvars "year" and "month" for the archive links instead of "pS", "pL" and "arc".
  useHRDates = {$plugin.tt_news.useHRDates}

  # add "year", "month" and "day" to links pointing to the single view
  useHRDatesSingle = 0

  # add only "year" and "month" to links pointing to the single view
  useHRDatesSingleWithoutDay = 0


  # page id for the archive link in "LATEST" template
  archiveTypoLink.parameter = {$plugin.tt_news.archiveTypoLink.parameter}

  # If this is set, elements are automatically in the archive, after the given number of days has passed.
  datetimeDaysToArchive = {$plugin.tt_news.datetimeDaysToArchive}

  # If this is set, the archive-menu selects news by their archivedate - otherwise by their datetime.
  enableArchiveDate = {$plugin.tt_news.enableArchiveDate}


  # start date for the archive menu (php strtotime() syntax. e.g.: 1.1.2002, -3 months, -10 years, now
  amenuStart = {$plugin.tt_news.amenuStart}

  # end date for the archive menu (php strtotime() syntax. e.g.: 1.1.2002, -3 months, -10 years, now
  amenuEnd = {$plugin.tt_news.amenuEnd}

  # if set, newer archive menu items are displayed first
  reverseAMenu = 1

  # don't display empty periods in archive menu
  archiveMenuNoEmpty = 1

  # news with zero datetime will cause the amenu to search all periods starting from 1970. Disabling this is not recommanded.
  ignoreNewsWithoutDatetimeInAmenu = 1

  # never add the currently selected categories to archive links
  disableCategoriesInAmenuLinks = 0

  # if set, the archive menu changes its contents when a category is selected in the category menu and the currently selected category is added to the amenu links
  amenuWithCatSelector = {$plugin.tt_news.amenuWithCatSelector}

  # divide the archive menu to yearly periods
  showYearHeadersInAmenu = 1

  # stdWrap for the year in the archive menu
  archiveYear_stdWrap.wrap = <li class="news-amenu-item-year">|</li>

  # CObject for a single archive menu item
  archiveTitleCObject = COA
  archiveTitleCObject {
    10 = TEXT
    10 {
       field = start
       strftime = %B %Y
       wrap =
     }
  }

  # content which is filled to the marker ###ARCHIVE_ACTIVE### for the selected archive period
  archiveActiveMarkerContent = class="amenu-act"





  /********************************************************************************
   *    Settings for attached files:
   */

  newsFiles_stdWrap.wrap = <dl class="news-single-files">|</dl>
  newsFilesHeader_stdWrap.wrap = <dt>|</dt>
  newsFiles {
    path = uploads/media/
    icon = 1
    size = 1
    size.bytes = 1
    jumpurl = 0
    stdWrap.wrap = <dd>|</dd>
  }













  /********************************************************************************
   *    Settings for Related News:
   */



  # automagically display the source article as related in the related article
  useBidirectionalRelations = {$plugin.tt_news.useBidirectionalRelations}

  # display pages as related news
  usePagesRelations = {$plugin.tt_news.usePagesRelations}

  # stdWrap for the list of related news and the relatedHeader

  related_stdWrap.wrap =  <dl class="news-single-related">|</dl>
  # stdWrap for the relatedHeader
  relatedHeader_stdWrap.wrap = <dt>|</dt>

  # icon for related news
  tmp.5 = IMAGE
  tmp.5 {
    file = EXT:tt_news/ext_icon.gif
    file.width = 18
    file.height = 16
    wrap = | &nbsp;
  }

  # end-wrap for the getRelated objects
  tmp.20 = TEXT
  tmp.20 {
    field = datetime
    strftime = %d.%m.%Y %H:%M
    wrap = &nbsp;-&nbsp; |
  }

  # CObject for a single related item
  getRelatedCObject = COA
  getRelatedCObject {
    groupBy =
    orderBy = datetime desc

    10 = CASE
    10.key.field = type
    # settings for 'normal' related news
    10.default = COA
      10.default {
        wrap = <dd> | </dd>
        5 < plugin.tt_news.tmp.5
        10 = TEXT
        10.field = title
        10.typolink.parameter = {$plugin.tt_news.singlePid}
        10.typolink.additionalParams.data=register:newsAddParams
        10.typolink.useCacheHash = 1
        20 < plugin.tt_news.tmp.20
      }
	# settings for related news, that point to internal pages
    10.1 = COA
    10.1 {
      wrap = <dd> | </dd>
      5 < plugin.tt_news.tmp.5
      5.file=EXT:tt_news/res/tt_news_article.gif
      10 = TEXT
      10.field = title
      10.typolink.parameter.field = page
      20 < plugin.tt_news.tmp.20
    }
    # settings for related news, that point to external URLs
    10.2 = COA
    10.2 {
      wrap = <dd> | </dd>
      5 < plugin.tt_news.tmp.5
      5.file=EXT:tt_news/res/tt_news_exturl.gif
      10 = TEXT
      10.field = title
      10.typolink.parameter.field = ext_url
      20 < plugin.tt_news.tmp.20
    }
  }




  
  displayRelated {
    noPageBrowser = 1
    limit = 15
    

    noNewsToListMsg_stdWrap.wrap = 
    displayList {
	   age_stdWrap.age = 1
	    date_stdWrap.strftime= %d.%m.%Y
	    time_stdWrap.strftime= %H:%M
	    caption_stdWrap.if.directReturn = 0
	    subheader_stdWrap {
	      stripHtml = 1
	      crop = 100 | ... | 1
	      ifEmpty.field = bodytext
	      outerWrap = <p>|</p>
	    }
	    imageCount = 1
	    imgAltTextField = imagecaption
	    imageWrapIfAny =
	    category_stdWrap.wrap = <div class="news-latest-category"> | </div>
	    categoryItem_stdWrap.wrap =
	
	    linkTitleField = title
	    linkTitleField.wrap =
	    linkAltField = short
	    linkAltField.wrap =
	    
	    latestImageMode = {$plugin.tt_news.latestImageMode}
	 
	  }
	  displayList.image {
	    file.maxW = {$plugin.tt_news.latestMaxW}
	    file.maxH = {$plugin.tt_news.latestMaxH}
	    imageLinkWrap = 1
	
	    stdWrap.spaceAfter = 0
	  }
  }






  /********************************************************************************
   *    other settings:
   */

  userFunc = tx_ttnews->main_news



  # Example for overriding values from locallang.php with other values
  _LOCAL_LANG {
    de{
      noNewsToListMsg =
      more = Weiterlesen >
      backToList = < Zurück zur Übersicht
    } 
    en{
      noNewsToListMsg = 
      more = Read more >
      backToList = < Back to overview
    }
  }

  # Alters behavior of tt_news to be compatible with certain previous versions. See manual for details.
  compatVersion = 3.0.0


  # stdWrap for the list of related news by category
  relatedByCategory_stdWrap.wrap =  <dl class="news-single-related">|</dl>
  relatedByCategoryHeader_stdWrap.wrap = <dt>|</dt>
  # globalwrap 2 is used to wrap the list of related news by category
  wrap2.wrap = <dd>|</dd>
  
  
  relNewsByCategory {
    code = list
    categoryMode = 1
    noPageBrowser = 1
    limit = 15

    noNewsToListMsg_stdWrap.wrap = 
    displayList {
      time_stdWrap.strftime= %H:%M
      date_stdWrap.strftime= %d.%m.%Y
      title_stdWrap.crop = 55|...
    }
    _LOCAL_LANG {
      de.noNewsToListMsg = 
      en.noNewsToListMsg = 
    }

    altMainMarkers.TEMPLATE_LIST = TEMPLATE_CAT_RELATED
    altMainMarkers.TEMPLATE_LIST.wrap = ### | ###

  }



  # target page for the search form
  searchPid =
  # show only the search form when the search is displayed without searching anything
  emptySearchAtStart = 1

  # parse the 'back to list' link through htmlspecialchars()
  hscBackLink = 1

  # substitute pagetitle in single view with title of news article
  substitutePagetitle = 1

  # validate some configuration values and display a message if errors have been found
  enableConfigValidation = 1

  # stdWrap for the "no news to list" message
  noNewsToListMsg_stdWrap.wrap = <p>|</p>
  # stdWrap for the "no archive items" message
  archiveEmptyMsg_stdWrap.wrap =
  # stdWrap for the "no search results" message
  searchEmptyMsg_stdWrap.wrap =
  # stdWrap for the "no news ID" message
  noNewsIdMsg_stdWrap.wrap =

  # stdWrap for the version preview message
  versionPreviewMessage_stdWrap.wrap = <div style="border:2px solid red;padding:10px;margin:10px 0px 10px 0px;"><img src="t3lib/gfx/icon_note.gif" class="absmiddle" alt="" height="16" width="18">&nbsp;<strong>|</strong></div>
  versionPreviewMessageLinkToOriginal_stdWrap.wrap = &nbsp;<span style="font-weight:normal;">|</span>



  # render language label of current article to the marker ###NEWS_LANGUAGE###
  showLangLabels = 0

  # render language flag of current article to the marker ###NEWS_LANGUAGE### (appended to lang label)
  showFlags = 0

  # label for the default language (language uid = 0)
  defLangLabel = English

  # flag for the default language (language uid = 0)
  defLangImage = uk.gif

  # path/prefix for flag images
  flagPath = media/flags/flag_

  flagImage {
  	# flag image configuration
    file.maxW = 16
  }

  # Rendering of news items. re-use the RTE parseFunc configuration for normal content
  # general_stdWrap {
  #   parseFunc < tt_content.text.20.parseFunc
  # }

}





# This enables the "insert records" element and the TypoScript RECORDS object item to display news
tt_news >
tt_news = < plugin.tt_news
tt_news.displayCurrentRecord = 1



[globalVar = LIT:1 = {$plugin.tt_news.noIconsInRelatedNews}]
	plugin.tt_news.getRelatedCObject.10.default.5 >
	plugin.tt_news.getRelatedCObject.10.1.5 >
	plugin.tt_news.getRelatedCObject.10.2.5 >
[global]

[globalVar = LIT:year = {$plugin.tt_news.archiveMode}]
    plugin.tt_news.archiveTitleCObject.10.strftime = %Y
   
[global]

[globalVar = LIT:quarter = {$plugin.tt_news.archiveMode}]
    plugin.tt_news.archiveTitleCObject >
    plugin.tt_news.archiveTitleCObject = COA
    plugin.tt_news.archiveTitleCObject {
      10 = COA
      10 {
        10= TEXT
        10 {
          field = start
          strftime = %b -&nbsp;
          wrap = 
        }
        11 = TEXT
        11 {
          field = stop
          strftime = %b %Y
          wrap = 
        }
      }
    }

[global]

plugin.tt_news.code = LIST

[globalVar = GP:tx_ttnews|tt_news > 0]
plugin.tt_news.code >
plugin.tt_news.code = SINGLE
[global]

###
# These are the default CSS Styles for the new tt_news standard template: EXT:tt_news/pi/tt_news_v2_template.html
##

plugin.tt_news {
#}
	_CSS_DEFAULT_STYLE >
	_CSS_DEFAULT_STYLE (



.news-single-rightbox,
.news-single-imgcaption,
.news-latest-date,
.news-latest-morelink,
.news-latest-category,
.news-list-category,
.news-list-author,
.news-list-imgcaption,
.news-list-date,
.news-list-browse,
.news-amenu-container,
.news-catmenu  {
	font-size:10px;
}



/*-----------------------------------  clearer  -----------------------------------*/
/* prevent floated images from overlapping the div-containers they are wrapped in  */

.news-latest-container HR.clearer,
.news-list-container HR.clearer,
.news-list2-container HR.clearer,
.news-list3-container HR.clearer,
.news-single-item HR.cl-left
 {
	clear:right;
	height:1px;
	border:none;
	padding:0;
	margin:0;
  background-color: #cecece;
}
.news-single-item HR.cl-right
 {
	clear:both;
	height:1px;
	border:none;
	padding:0;
	margin:0;
  background-color: #cecece;
}
.news-list2-container HR.clearer,
.news-list3-container HR.clearer {
	clear:both;
}

.news-single-item HR.cl-left {
	clear:left;
}

/*-----------------------------------  tt_news LATEST view  -----------------------------------*/

.news-latest-container {
	padding:10px;
}

.news-latest-gotoarchive {
	padding:3px;
	margin:3px;
	background-color:#f3f3f3;
}


.news-latest-container H2 {
  padding: 0 0 2px 0;
  margin:0;
}

.news-latest-item {
	padding:3px;
	margin:0;
}

.news-latest-item IMG {

	margin: 0 5px 5px 0;
	float:left;
	border: none;
}
.news-latest-category IMG {
	float: none;
	border:none;
	margin:0px;
}




.news-latest-item > p {
	margin:0;
	padding:0;
}




/*--------------------------------- tt_news LIST view  -----------------------------------*/
.news-list-container {
  padding: 1em 0 0;

}
.news-list-item {
	padding: 0 0 1em 0;
}
.news-list-item.hidden {
	/*display: none;*/
}
.news-list-item.visible {
	/*display: block;*/
}

.news-list-container H2 {
	margin: 0px;
}

.news-list-date {
	float: right;
	display:block;
	padding-left:10px;
  font-size: 1em;
}

.news-list-imgcaption {
	padding:3px 3px 0 0;

}

.news-list-container IMG {
  padding: 0.5em;

}

.news-list-category IMG {
	float: none;
	border:none;
	margin:0px;
}

.news-list-subheader  {
  font-weight: normal;
  font-family: 'Arimo', sans-serif;
}

.news-list-morelink  {
  clear: both;
  float: right;
  padding: 1em 0;
  font-family: 'NeoTechStd-Medium', sans-serif;
}



	/*---------------------------------  LIST2 / 3 ---------------------------------*/

.news-list2-container,
.news-list3-container {
	padding: 0 0 10px 0;
}


.news-list2-container,
.news-list3-container {
	background:#e5e5e5;
}

.news-list3-item,
.list2-subdiv-hdr {
	background:#f1f1f1;
}
.news-list2-container .hdr-left,
.news-list2-container .hdr-right,
.news-list3-container .list3-left,
.news-list3-container .list3-right {
	width:48%;
	float:left;
	padding:5px;
}

.news-list2-container .sub-left,
.news-list2-container .sub-middle,
.news-list2-container .sub-right {
	width:31%;
	float:left;
	padding:5px;
}

.news-list3-item {
	padding:5px;
}

.news-list3-item,
.list3-subdiv,
.list2-subdiv {
	border-top:5px solid #fff;
}


.news-list2-container IMG {
	float: right;
	margin:0 2px 5px 5px;
	border: none;

}
.news-list3-container IMG {
	float: left;
	margin:0 5px 5px 2px;
	border: none;

}



	/*---------------------------------  tt_news Page-Browser ---------------------------------*/

.news-list-browse {
	text-align:center;
	margin-bottom:20px;
}

.activeLinkWrap {
	font-weight:bold;
}
.disabledLinkWrap {
	color: #999;
}
.disabledLinkWrap,
.browseLinksWrap a,
.activeLinkWrap {
	padding:0 1px;
}

	/*--------------------------------- tt_news SINGLE view  ---------------------------------*/


.news-single-item {
	padding:5px;
	margin-bottom:5px;


}
.news-single-item .csc-textpic-imagewrap{
	margin-right: 2em !important;
}

.news-single-img {
	float: right;
	margin: 1.5em 0 0 0;
	padding:0;
}

.news-single-img img {
	border:none;
}

.news-single-imgcaption {
	padding: 1px 0 3px 0;
	margin:0;
}

.news-single-rightbox {
	float: right;
	width:160px;
	text-align:right;
	clear:both;
}
.news-single-backlink {
	padding: 0;
}
.news-single-backlink a{
	padding: 1em 0 0.5em 0;
    display: block;
    text-align: right;
    width: 100%;
  color: #006FB9;
}

.news-single-content{
	margin: 1.5em 0 0 0;
}

.news-single-additional-info {
	margin-top: 15px;
	padding:3px;
	clear:both;
}

.news-single-related,
.news-single-files,
.news-single-links  {
	margin: 0;
	margin-bottom: 3px;
	padding: 3px;
}

.news-single-related DD,
.news-single-links DD,
.news-single-files DD {
	margin-left: 20px;
}

.news-single-related DT,
.news-single-links DT,
.news-single-files DT {
	font-weight: bold;
	margin-left: 5px;
}

.news-single-files DD A {
	padding:0 3px;
}


	/*--------------------------------- SINGLE2  ---------------------------------*/


.sv-img-big img,
.sv-img-small img {
	border:none;
}

.sv-img-big {
	float: right;
	padding: 10px 0 2px 10px;
}
.sv-img-small-wrapper {
	padding:15px 0;
}
.sv-img-small {
	float: left;
	padding: 0 10px 10px 0;
}


/*--------------------------------- tt_news Archivemenu (AMENU) --------------------------------- */
.news-amenu-container {
	width:165px;
    padding:0;
    margin-left:10px;
}
.news-amenu-container LI {
	padding-bottom:1px;

}
.news-amenu-container LI:hover {
	background-color: #f3f3f3;

}

.news-amenu-container UL {
    padding:0;
    margin:0;
	margin-top:5px;

	list-style-type: none;
}

.news-amenu-item-year {
	font-weight: bold;
    margin-top:10px;
	padding: 2px;
	background-color: #f3f3f3;

}


.amenu-act {
	background:#fff;
	font-weight:bold;
}

/*--------------------------------- tt_news Categorymenu (CATMENU) --------------------------------- */

.news-catmenu  {
	padding:10px;

}

ul.tree {
	list-style: none;
	margin: 0;
	padding: 0;
	clear: both;
}

ul.tree A {
	text-decoration: none;
}

ul.tree A.pm {
	cursor: pointer;
}

ul.tree img {
  width: auto;
	vertical-align: middle;
}

ul.tree ul {
	list-style: none;
	margin: 0;
	padding: 0;
	padding-left: 17px;
}

ul.tree ul li {
	list-style: none;
	margin: 0;
	padding: 0;
	line-height: 10px;
	white-space: nowrap;
}

ul.tree ul li.expanded ul {
	background: transparent url('../typo3/gfx/ol/line.gif') repeat-y top left;
}

ul.tree ul li.last > ul {
	background: none;
}

ul.tree li.active, ul.tree ul li.active {
	background-color: #ebebeb !important;
}

ul.tree li.active ul, ul.tree ul li.active ul {
	background-color: #f7f3ef;
}






/*  Styles for catmenu mode "nestedWraps" */
.level1 {
	padding:1px;
	padding-left:10px;
	background-color:#ebf8bf;
	border-left:1px solid #666;
	border-top:1px solid #666;
}
.level2 {
	padding:1px;
	padding-left:10px;
	background-color:#ddf393;
	border-left:1px solid #666;
}
.level3 {
	padding:1px;
	padding-left:10px;
	background-color:#cae46e;
	border-left:1px solid #666;
	border-top:1px solid #666;

}
.level4 {
	padding:1px;
	padding-left:10px;
	background-color:#b0cb51;
	border-left:1px solid #666;
}


	)

}