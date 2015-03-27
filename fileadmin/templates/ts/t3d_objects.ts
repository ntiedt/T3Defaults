###
### Objects ###

#----------------------------------------------------------- OBJ_LOGO-BEGIN
tmp.obj_logo = IMAGE
tmp.obj_logo {
    file = {$t3d_pfade.tmpls}image/{$t3d_basis.obj_logo}
    stdWrap.typolink.parameter = {$t3d_basis.rootpageID}
}

#----------------------------------------------------------- OBJ_LOGO-END

#----------------------------------------------------------- OBJ_CLAIM-BEGIN
tmp.obj_claim = COA
tmp.obj_claim {
    10 = RECORDS
    10 {
        source = {$t3d_seitentitel.basisTemplateId}
        tables = sys_template
        conf.sys_template >
        conf.sys_template = TEXT
        conf.sys_template.field = description
    }
}

#----------------------------------------------------------- OBJ_CLAIM-END

#----------------------------------------------------------- OBJ_SLIDER-BEGIN
tmp.obj_slider = COA
tmp.obj_slider {
    10 = FILES
    10 {
        references {
            table = pages
            data = levelmedia:-1, slide
            treatIdAsReference = 1
        }

        sorting = sorting_foreign

        stdWrap {
            wrap = <ul>|</ul>
        }

        renderObj = COA
        renderObj {
            10 = IMAGE
            10 {
                stdWrap {
                    wrap = <li>|</li>
                    typolink {
                        wrap = |<span class="description">{file:current:description}</span>
                        wrap.insertData = 1
                        ATagBeforeWrap = 1
                        parameter.data = file:current:link
                    }
                }

                file {
                    import {
                        data = file:current:publicUrl
                    }

                    width = {$page.maxW}
                    height = {$page.maxH}
                }

                titleText.data = file:current:title
                altText.data = file:current:alternative
            }
        }
    }
}

#----------------------------------------------------------- OBJ_SLIDER-END

#----------------------------------------------------------- OBJ_SEARCH-BEGIN
tmp.obj_search = COA
tmp.obj_search {
    10 < plugin.tx_indexedsearch
    10 {
        templateFile = {$t3d_pfade.tmpls}html/ext_indexed_search_mini.html
        search.targetPid >
        search.targetPid = {$t3d_basis.searchpageID}
    }
}

#----------------------------------------------------------- OBJ_SEARCH-END

#----------------------------------------------------------- OBJ_COPYRIGHT-BEGIN
tmp.obj_copyright = COA
tmp.obj_copyright {
    10 = TEXT
    10.data = date:U
    10.strftime = %Y
    10.wrap = �&nbsp;|&nbsp;
    20 < temp.pageTitle
}

#----------------------------------------------------------- OBJ_COPYRIGHT-END

#----------------------------------------------------------- OBJ_ADDRESS-BEGIN
tmp.obj_address = COA
tmp.obj_address {
    10 = CONTENT
    10 {
        table = tt_content
        select {
            pidInList = {$t3d_basis.adresspageID}
        }
    }
}

#----------------------------------------------------------- OBJ_ADDRESS-END

#----------------------------------------------------------- OBJS-BEGIN
tmp.objs = COA
tmp.objs {

}

#----------------------------------------------------------- OBJS-END

#----------------------------------------------------------- OBJ-INCLUDES-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_objects}]
    lib.obj_logo < tmp.obj_logo
    lib.obj_claim < tmp.obj_claim
    lib.obj_slider < tmp.obj_slider
    lib.obj_search < tmp.obj_search
    lib.obj_copyright < tmp.obj_copyright
    lib.obj_address < tmp.obj_address
    lib.objs < tmp.objs
[global]

#----------------------------------------------------------- OBJ-INCLUDES-END