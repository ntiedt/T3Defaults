/**
 * Title:         TYPO3 Defaults - webanalytic - Event Tracker
 * Version:       0.3
 * Author:        Niels Tiedt (nt[AT]typo3-coders.org)
 * Date Created:  2013-11-28
 * Date Modified: 2014-07-10
 * URL:
 * Contributors:
 */

(function ($) {
    $.fn.t3d_webanalytic_event_tracking = function (options) {
        var defaults = {
            config_baseurl: '',
            etracker_eventtracker: 1,
            google_analytics_eventtracker: 1,
            debug: 0,
            types: {
                mail: 'Mail',         // E-Mail
                external: 'External',     // External Link
                internal: 'Internal',     // Internal Link
                /* VIEW: Text,- Tabellen,- Präsentationsdokument */
                csv: 'View',         // Komma getrennte Werte Datei (Excel)
                doc: 'View',         // Microsoft Word Dokument
                docx: 'View',         // Microsoft Word Dokument im Open XML Format
                odp: 'View',         // OpenDocument Präsentation
                ods: 'View',         // OpenDocument Tabellendokument
                odt: 'View',         // OpenDocument Textdokument
                pdf: 'View',         // Portable Document Format
                ppt: 'View',         // Microsoft Powerpoint
                pptx: 'View',         // Microsoft Powerpoint im Open XML Format
                rtf: 'View',         // Rich Text Format
                sxw: 'View',         // OpenOffice Tabellendokument
                sxw: 'View',         // OpenOffice Textdokument
                txt: 'View',         // Textdokument
                xls: 'View',         // Microsoft Excel
                xlsx: 'View',         // Microsoft Excel im Open XML Format
                xml: 'View',         // Extensible Markup Language
                /* DOWNLOAD: Archive */
                '7z': 'Download',     // 7-Zip Komprimiertes Archiv
                ace: 'Download',     // Komprimiertes Archiv
                arc: 'Download',     // Komprimiertes Archiv
                arj: 'Download',     // Komprimiertes Archiv
                cab: 'Download',     // Kabinet Datei (Komprimiertes Archiv)
                exe: 'Download',     // Executable (Ausführbare Datei)
                gtar: 'Download',     // Komprimiertes Archiv (GNU tar)
                gz: 'Download',     // Komprimiertes Archiv (GNU Zip)
                gzip: 'Download',     // Komprimiertes Archiv (GNU Zip)
                iso: 'Download',     // CD Image
                jar: 'Download',     // Java Archive File / Executable (Ausführbare) JAR Datei
                lha: 'Download',     // Komprimiertes Archiv
                lhz: 'Download',     // Komprimiertes Archiv
                rar: 'Download',     // Komprimiertes Archiv
                tar: 'Download',     // Komprimiertes Archiv (Linux)
                tgz: 'Download',     // Komprimiertes Archiv (Linux)
                zip: 'Download'      // Komprimiertes Archiv
            },
            e_cat: '',
            e_action: '',
            e_label: '',
            e_pageurl: document.URL
        };
        var settings = $.extend({}, defaults, options);
        return this.each(function () {
            // BEGIN
            if ((!$(this).attr('href')) || ($(this).attr('href') == '') || ($(this).attr('href') == 'javascript:;') || ($(this).attr('href') == '#')) {
                return;
            }
            var link = $(this);
            var href = link.attr('href');
            var target = link.attr('target');
            var text = link.text();
            var next = false;

            var linkTrack = function () {
                if (settings.etracker_eventtracker == 1) {
                    link.bind('mousedown', function () {
                        ET_Event.eventStart(settings.e_cat, settings.e_label, settings.e_action, settings.e_pageurl);
                    });
                }
                if (settings.google_analytics_eventtracker == 1) {
                    link.bind('mousedown', function () {
                        _gaq.push(['_trackEvent', settings.e_cat, settings.e_action, settings.e_label]);
                    });
                }
            }
            if (settings.debug == 1) {
                debug(settings);
            }

            // E-Mail
            if (href.indexOf('@') != -1) {
                settings.e_cat = 'mail';
                settings.e_action = settings.types.mail;
                settings.e_label = (href.indexOf('mailto:') != -1) ? href.replace('mailto:', '') : href;
                linkTrack();
                return true;
            } else {
                // View / Download
                $.each(settings.types, function (cat, action) {
                    if (href.indexOf('.' + cat) != -1) {
                        settings.e_cat = cat;
                        settings.e_action = action;
                        settings.e_label = href.substring(href.lastIndexOf('/') + 1);
                        linkTrack();
                        next = true;
                        return false;
                    }
                });
                if (next) {
                    return true;
                } else {
                    if (href.indexOf('/') != -1) {
                        if ((href.lastIndexOf('/') + 1) == href.length) {
                            settings.e_label = href;
                        } else {
                            settings.e_label = href.substring(href.lastIndexOf('/') + 1);
                        }
                    }
                    // Interner Link
                    if ((href.indexOf('http') != -1) && (href.indexOf(settings.config_baseurl) != -1)) {
                        settings.e_cat = 'internal';
                        settings.e_action = settings.types.internal;
                        linkTrack();
                        return true;
                        // Externer Link
                    } else {
                        settings.e_cat = 'external';
                        settings.e_action = settings.types.external;
                        linkTrack();
                        return true;
                    }
                }
            }
            // END
        });
    };

    var debug = function (settings) {
        if (window.console && window.console.log) {
            $.each(settings, function (name, value) {
                window.console.log(name + ': ' + value);
            });
        } else if ($.debug) {
            $.each(settings, function (name, value) {
                $.debug(value);
            });
        } else {
            if ($('.debug.t3d_webanalytic_event_tracking').length < 1) {
                $('body').prepend('<div class="debug t3d_webanalytic_event_tracking"></div>');
                $('.debug.t3d_webanalytic_event_tracking').css({
                    width: 'auto',
                    position: 'fixed',
                    top: 40,
                    right: 10,
                    padding: '10px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    boxShadow: '0 0 5px #ccc'
                });
            }
            $.each(settings, function (name, value) {
                $('.debug.t3d_webanalytic_event_tracking').append(name + ': ' + value + '<br>');
            });
        }
    }
})(jQuery);

