###
### Basis-Definitionen ###

# Include following tag without # in the typoscript setup section of your root template
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/basis_setup.ts">

##
## Setup ###

#----------------------------------------------------------- CONFIG-BEGIN
config {
    doctype = xhtml_trans
    htmlTag_langKey = {$t3d_config.locale_all}
    xhtml_cleaning = all
    removeDefaultJS = external
    doctypeSwitch = 1

    ## 1. Sprache Deutsch
    sys_language_uid = 0
    language = {$t3d_config.language}
    locale_all = {$t3d_config.locale_all}
    sys_language_mode = content_fallback
    sys_language_overlay = hideNonTranslated
    # Setting up the language variable "L" to be passed along with links
    linkVars = L(0-11), debug
    uniqueLinkVars = 1

    index_enable = 1

    baseURL = {$t3d_config.baseURL}
    tx_realurl_enable = {$t3d_config.tx_realurl_enable}

    metaCharset = utf-8
    additionalHeaders = Content-Type:text/html;charset=utf-8

    spamProtectEmailAddresses = {$t3d_config.spamProtectEmailAddresses}
    spamProtectEmailAddresses_atSubst = {$t3d_config.spamProtectEmailAddresses_atSubst}

    concatenateJs = {$t3d_cache.concatenateJs}
    concatenateCss = {$t3d_cache.concatenateCss}
    compressJs = {$t3d_cache.compressJs}
    compressCss = {$t3d_cache.compressCss}

    cache_period = {$t3d_cache.period}
    cache_clearAtMidnight = {$t3d_cache.clearAtMidnight}
}

#----------------------------------------------------------- CONFIG-END

#------------------------------------------------------------ CONFIG-DEBUG-BEGIN
[globalVar = GP:debug=1]
    config {
        spamProtectEmailAddresses = 0
    }
[global]

#------------------------------------------------------------ CONFIG-DEBUG-END

#----------------------------------------------------------- EXT-INDEXEDSEARCH-LANG-BEGIN
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0
#----------------------------------------------------------- EXT-INDEXEDSEARCH-LANG-END

#----------------------------------------------------------- CONFIG-LANGUAGE-BEGIN
[globalVar = GP:L = 1]
    config.sys_language_uid = 1
    config.language = {$t3d_config.language_2}
    config.locale_all = {$t3d_config.locale_all_2}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_2}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 1
[global]

[globalVar = GP:L = 2]
    config.sys_language_uid = 2
    config.language = {$t3d_config.language_3}
    config.locale_all = {$t3d_config.locale_all_3}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_3}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 2
[global]

[globalVar = GP:L = 3]
    config.sys_language_uid = 3
    config.language = {$t3d_config.language_4}
    config.locale_all = {$t3d_config.locale_all_4}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_4}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 3
[global]

[globalVar = GP:L = 4]
    config.sys_language_uid = 4
    config.language = {$t3d_config.language_5}
    config.locale_all = {$t3d_config.locale_all_5}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_5}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 4
[global]

[globalVar = GP:L = 5]
    config.sys_language_uid = 5
    config.language = {$t3d_config.language_6}
    config.locale_all = {$t3d_config.locale_all_6}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_6}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 5
[global]

[globalVar = GP:L = 6]
    config.sys_language_uid = 6
    config.language = {$t3d_config.language_7}
    config.locale_all = {$t3d_config.locale_all_7}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_7}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 6
[global]

[globalVar = GP:L = 7]
    config.sys_language_uid = 7
    config.language = {$t3d_config.language_8}
    config.locale_all = {$t3d_config.locale_all_8}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_8}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 7
[global]

[globalVar = GP:L = 8]
    config.sys_language_uid = 8
    config.language = {$t3d_config.language_9}
    config.locale_all = {$t3d_config.locale_all_9}
    config.htmlTag_langKey = {$t3d_config.htmlTag_langKey_9}
    #----------------------------- EXT-INDEXEDSEARCH-_DEFAULT_PI_VARS
    plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 8
[global]

#------------------------------------------------------------ CONFIG-LANGUAGE-END

#----------------------------------------------------------- CONFIG-BE-USER-BEGIN
[globalVar = TSFE : beUserLogin > 0]
    config {
        no_cache = {$t3d_cache.no_cache}
        tx_realurl_enable = 0
        concatenateJs = 0
        concatenateCss = 0
        compressJs = 0
        compressCss = 0
    }
[global]

#----------------------------------------------------------- CONFIG-BE-USER-END

#----------------------------------------------------------- EXTERNAL-TS-SCRIPT-FILE-INCLUDE-BEGIN
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/t3d_includes.ts">
#----------------------------------------------------------- EXTERNAL-TS-SCRIPT-FILE-INCLUDE-END
