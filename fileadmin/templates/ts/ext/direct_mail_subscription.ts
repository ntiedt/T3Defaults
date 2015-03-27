includeLibs.directmailsubscribe = EXT:direct_mail_subscription/pi/class.dmailsubscribe.php
plugin.feadmin.dmailsubscription >
plugin.feadmin.dmailsubscription = USER_INT
plugin.feadmin.dmailsubscription {
    userFunc = user_feAdmin->init
    includeLibs = EXT:direct_mail_subscription/fe_adminLib.inc

    templateFile = fileadmin/templates/html/ext_direct_mail_subscription_de.html

    cObjects {
        CATLIST = USER
        CATLIST.userFunc = user_dmailsubscribe->makeCheckboxes
        CATLIST {
            templateFile = {$plugin.feadmin.dmailsubscription.file.templateFile}
            pid = {$plugin.feadmin.dmailsubscription.pid}
            hideNonTranslatedCategories = 0
        }
    }

    # Global wraps
    wrap1.wrap = {$plugin.feadmin.dmailsubscription.wrap1}
    wrap2.wrap = {$plugin.feadmin.dmailsubscription.wrap2}
    color1.wrap = {$plugin.feadmin.dmailsubscription.color1}
    color2.wrap = {$plugin.feadmin.dmailsubscription.color2}
    color3.wrap = {$plugin.feadmin.dmailsubscription.color3}

    // Tables + Commands
    table = tt_address

    // Info-mail setup
    setfixed = 1
    setfixed {
        approve {
            _FIELDLIST = uid
            hidden = 0
        }

        DELETE = 1
        DELETE._FIELDLIST = uid
    }

    delete = 1

    defaultCmd = create

    // Info-mail setup
    infomail = 1
    infomail {
        default {
            label = FORGOTPASSWORD
        }

        required = captcha, email
        fields = captcha, email
    }

    // Edit setup
    edit = 1
    edit {
        fields = gender, first_name, last_name, company, email, module_sys_dmail_category, module_sys_dmail_html, captcha
        required = gender, first_name, last_name, company, email, captcha
        evalValues.email = uniqueLocal, email
        userFunc_afterSave = user_dmailsubscribe->saveRecord
    }

    // Create setup
    create = 1
    create {
        userFunc_afterSave = user_dmailsubscribe->saveRecord
        preview = 0
        // add captcha, if you use captcha
        fields = gender, first_name, last_name, company, hidden, email, module_sys_dmail_category, module_sys_dmail_html
        required = gender, first_name, last_name, company, email

        noSpecialLoginForm = 1
        # Initially hide the user until he approves!
        overrideValues.hidden = 1
        evalValues.email = uniqueLocal, email
        defaultValues.module_sys_dmail_html = 1
    }

    authcodeFields = uid
    authcodeFields.addKey =
    authcodeFields.addDate =

    evalErrors.email.uniqueLocal = Apparently you're already registered with this email address!
    evalErrors.email.email = This is not a proper email address!
    evalErrors.captcha.captcha = Captcha code is not correct.

    parseValues.module_sys_dmail_category = checkArray,setEmptyIfAbsent
    parseValues.module_sys_dmail_html = setEmptyIfAbsent

    pid = {$plugin.feadmin.dmailsubscription.pid}
    //always search recursively
    pidRecursive = 1

    email.from = {$plugin.feadmin.dmailsubscription.email}
    email.fromName = {$plugin.feadmin.dmailsubscription.emailName}
    email.admin = {$plugin.feadmin.dmailsubscription.email}
    email.field = email
}

tt_content.list.20 {
    21 = CASE
    21.key.field = layout
    21.0 =< plugin.feadmin.dmailsubscription
}