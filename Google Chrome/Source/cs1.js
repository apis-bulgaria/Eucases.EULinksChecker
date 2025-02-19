if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG='en';
var EUCASES_LANGS_NUMS = [];
EUCASES_LANGS_NUMS[1] = 'bg';
EUCASES_LANGS_NUMS[2] = 'de';
EUCASES_LANGS_NUMS[3] = 'fr';
EUCASES_LANGS_NUMS[4] = 'en';
EUCASES_LANGS_NUMS[5] = 'it';
EUCASES_LANGS_NUMS['bg'] = 1;
EUCASES_LANGS_NUMS['de'] = 2;
EUCASES_LANGS_NUMS['fr'] = 3;
EUCASES_LANGS_NUMS['en'] = 4;
EUCASES_LANGS_NUMS['it'] = 5;

var EUCASES_LANGS_WIN = [];
EUCASES_LANGS_WIN['bg'] = 1026;
EUCASES_LANGS_WIN['de'] = 1031;
EUCASES_LANGS_WIN['fr'] = 1036;
EUCASES_LANGS_WIN['en'] = 2057;
EUCASES_LANGS_WIN['it'] = 1040;

var EUCASES_TEXTS = [];
EUCASES_TEXTS['bg'] = [];
EUCASES_TEXTS['bg']['allDocs'] = 'Всички документи';
EUCASES_TEXTS['bg']['euLegislation'] = 'Европейско законодателство';
EUCASES_TEXTS['bg']['euCaseLaw'] = 'Европейска съдебна практика';
EUCASES_TEXTS['bg']['natLegislation'] = 'Национално законодателство';
EUCASES_TEXTS['bg']['natCaseLaw'] = 'Национална съдебна практика';
EUCASES_TEXTS['bg']['removeLink'] = 'Премахни линк';
EUCASES_TEXTS['bg']['processingLinksMessage'] = 'Провери за връзки...';
EUCASES_TEXTS['bg']['confirmCheckForLinks'] = 'EULinksChecker ще провери дали съществуват препратки към законодателството и съдебната практика на Европейския съюз и ще постави връзки към цитираните нормативни актове. Това може да отнеме известно време. Моля, потвърдете!';
EUCASES_TEXTS['bg']['confirmRemoveLinks'] = 'Моля, потвърдете изтриването на връзките, поставени от EULinksChecker.';
EUCASES_TEXTS['bg']['cMsgNoLinksSetByELCFound'] = 'Не са намерени връзки, поставени от EULinksChecker.';
EUCASES_TEXTS['bg']['cPlsSelLink'] = 'Моля, маркирайте текст с връзки, поставени от EULinksChecker.';
EUCASES_TEXTS['bg']['cPlzConfirmRmLnkSel'] = 'Връзките, поставени от EULinksChecker ще бъдат изтрити. Моля, потвърдете!';
EUCASES_TEXTS['bg']['cSuccess'] = 'Проверката за връзки приключи.';
EUCASES_TEXTS['bg']['msgLoading'] = 'Зареждане...';
EUCASES_TEXTS['bg']['msgErrorHintLoading'] = 'Грешка при зареждането! За повече информация: <a href="http://www.help.eucases.eu/ieaddin" target="_blank">www.help.eucases.eu/ieaddin</a>';
EUCASES_TEXTS['bg']['shortCite']='Кратък цитат';
EUCASES_TEXTS['bg']['fullCite']='Пълен цитат';

EUCASES_TEXTS['en'] = [];
EUCASES_TEXTS['en']['allDocs'] = 'All documents';
EUCASES_TEXTS['en']['euLegislation'] = 'EU legislation';
EUCASES_TEXTS['en']['euCaseLaw'] = 'EU case law';
EUCASES_TEXTS['en']['natLegislation'] = 'National legislation';
EUCASES_TEXTS['en']['natCaseLaw'] = 'National case law';
EUCASES_TEXTS['en']['removeLink'] = 'Remove link';
EUCASES_TEXTS['en']['processingLinksMessage'] = 'Check for links...';
EUCASES_TEXTS['en']['confirmCheckForLinks'] = 'EULinksChecker will check for existence of references to EU legislation and case law and will set links to the cited legal acts. This may take a while. Please, confirm!';
EUCASES_TEXTS['en']['confirmRemoveLinks'] = 'Please confirm the removal of links set by EULinksChecker.';
EUCASES_TEXTS['en']['cMsgNoLinksSetByELCFound'] = 'No links set by EULinksChecker have been found.';
EUCASES_TEXTS['en']['cPlsSelLink'] = 'Please select text with links set by EULinksChecker.';
EUCASES_TEXTS['en']['cPlzConfirmRmLnkSel'] = 'The links set by EULinksChecker will be removed. Please confirm!';
EUCASES_TEXTS['en']['cSuccess'] = 'Check for links completed.';
EUCASES_TEXTS['en']['msgLoading'] = 'Loading...';
EUCASES_TEXTS['en']['msgErrorHintLoading'] = 'Грешка при зареждането! За повече информация: <a href="http://www.help.eucases.eu/ieaddin" target="_blank">www.help.eucases.eu/ieaddin</a>';
EUCASES_TEXTS['en']['shortCite']='Short citation';
EUCASES_TEXTS['en']['fullCite']='Full citation';

EUCASES_TEXTS['de'] = [];
EUCASES_TEXTS['de']['allDocs'] = 'Alle Dokumente';
EUCASES_TEXTS['de']['euLegislation'] = 'EU-Gesetzgebung';
EUCASES_TEXTS['de']['euCaseLaw'] = 'EU-Rechtsprechung';
EUCASES_TEXTS['de']['natLegislation'] = 'Nationale Gesetzgebung';
EUCASES_TEXTS['de']['natCaseLaw'] = 'Nationale Rechtsprechung';
EUCASES_TEXTS['de']['removeLink'] = 'Link entfernen';
EUCASES_TEXTS['de']['processingLinksMessage'] = 'Überprüfen Sie für Links...';
EUCASES_TEXTS['de']['confirmCheckForLinks'] = 'EULinksChecker wird überprüfen ob Verweise auf EU-Gesetzgebung oder Rechtsprechung  vorhanden sind und wird Links zu den zitierten Rechtsakten einfügen. Dies kann eine Weile dauern. Bitte, bestätigen!';
EUCASES_TEXTS['de']['confirmRemoveLinks'] = 'Bitte bestätigen Sie die Entfernung von Links gesetzt von EULinksCheker.';
EUCASES_TEXTS['de']['cMsgNoLinksSetByELCFound'] = 'Keine Links vom EULinksChecker gefunden.';
EUCASES_TEXTS['de']['cPlsSelLink'] = 'Bitte, wählen Sie einen Text mit Links gesetzt vom EULinksChecker.';
EUCASES_TEXTS['de']['cPlzConfirmRmLnkSel'] = 'Die vom EULinksChecker gesetzten Links werden gelöscht. Bitte, bestätigen!';
EUCASES_TEXTS['de']['cSuccess'] = 'Überprüfung für Links abgeschlossen.';
EUCASES_TEXTS['de']['msgLoading'] = 'Loading...';
EUCASES_TEXTS['de']['msgErrorHintLoading'] = 'Грешка при зареждането! За повече информация: <a href="http://www.help.eucases.eu/ieaddin" target="_blank">www.help.eucases.eu/ieaddin</a>';
EUCASES_TEXTS['de']['shortCite']='Kurzes Zitat';
EUCASES_TEXTS['de']['fullCite']='Vollständiges Zitat';

EUCASES_TEXTS['fr'] = [];
EUCASES_TEXTS['fr']['allDocs'] = 'Tous les documents';
EUCASES_TEXTS['fr']['euLegislation'] = 'Législation de l\'UE';
EUCASES_TEXTS['fr']['euCaseLaw'] = 'Jurisprudence de l\'UE';
EUCASES_TEXTS['fr']['natLegislation'] = 'Législation nationale';
EUCASES_TEXTS['fr']['natCaseLaw'] = 'Jurisprudence nationale';
EUCASES_TEXTS['fr']['removeLink'] = 'Supprimer le lien';
EUCASES_TEXTS['fr']['processingLinksMessage'] = 'Vérifier les liens...';
EUCASES_TEXTS['fr']['confirmCheckForLinks'] = 'EULinksChecker vérifiera s’il existe des références menant vers la législation et la jurisprudence de l\'Union européenne et mettra des liens vers les dispositions cités. Cela peut prendre un certain temps.Veuillez  confirmer!';
EUCASES_TEXTS['fr']['confirmRemoveLinks'] = 'Veuillez confirmer la suppression des liens établis par EULinksChecker.';
EUCASES_TEXTS['fr']['cMsgNoLinksSetByELCFound'] = 'Aucun lien établi par EULinksChecker.';
EUCASES_TEXTS['fr']['cPlsSelLink'] = 'Veuillez sélectionner le texte avec des liens établis par EULinksChecker.';
EUCASES_TEXTS['fr']['cPlzConfirmRmLnkSel'] = 'Les liens établis par EULinksChecker seront supprimés. Veuillez confirmer!';
EUCASES_TEXTS['fr']['cSuccess'] = 'La vérification des liens est terminée.';
EUCASES_TEXTS['fr']['msgLoading'] = 'Loading...';
EUCASES_TEXTS['fr']['msgErrorHintLoading'] = 'Грешка при зареждането! За повече информация: <a href="http://www.help.eucases.eu/ieaddin" target="_blank">www.help.eucases.eu/ieaddin</a>';
EUCASES_TEXTS['fr']['shortCite']='Courte citation';
EUCASES_TEXTS['fr']['fullCite']='Citation complète';

EUCASES_TEXTS['it'] = [];
EUCASES_TEXTS['it']['allDocs'] = 'Tutti i documenti';
EUCASES_TEXTS['it']['euLegislation'] = 'Legislazione UE';
EUCASES_TEXTS['it']['euCaseLaw'] = 'Giurisprudenza dell\'UE';
EUCASES_TEXTS['it']['natLegislation'] = 'Legislazione Nazionale';
EUCASES_TEXTS['it']['natCaseLaw'] = 'Giurisprudenza nazionale';
EUCASES_TEXTS['it']['removeLink'] = 'Rimuovi collegamento';
EUCASES_TEXTS['it']['processingLinksMessage'] = 'Verificare la presenza di collegamenti...';
EUCASES_TEXTS['it']['confirmCheckForLinks'] = 'EULinksChecker verificherà la presenza di riferimenti alla legislazione e alla giurisprudenza dell\'UE e metterà collegamenti ai testi normativi citati. Questo potrebbe richiedere del tempo. Si prega di confermare!';
EUCASES_TEXTS['it']['confirmRemoveLinks'] = 'Si prega di confermare l\'eliminazione dеi collegamenti messi dal EULinksChecker.';
EUCASES_TEXTS['it']['cMsgNoLinksSetByELCFound'] = 'Nessun collegamento messo dal EULinksChecker e stato trovato.';
EUCASES_TEXTS['it']['cPlsSelLink'] = 'Si prega di selezionare testo con collegamenti messi dal EULinksChecker.';
EUCASES_TEXTS['it']['cPlzConfirmRmLnkSel'] = 'I collegamenti messi dal EULinksChecker saranno rimossi. Si prega di confermare!';
EUCASES_TEXTS['it']['cSuccess'] = 'Verificazione dei collegamenti compiuta.';
EUCASES_TEXTS['it']['msgLoading'] = 'Loading...';
EUCASES_TEXTS['it']['msgErrorHintLoading'] = 'Грешка при зареждането! За повече информация: <a href="http://www.help.eucases.eu/ieaddin" target="_blank">www.help.eucases.eu/ieaddin</a>';
EUCASES_TEXTS['it']['shortCite']='Citazione breve';
EUCASES_TEXTS['it']['fullCite']='Citazione completa';

function eucasesShowHint(caller, ev, celex, toPar, uiLangId, langId) {
    var rect = caller.getBoundingClientRect();

    // Generate hint element div
    var hintEl = document.createElement('div'); // document.getElementById(celex);
    hintEl.id = '#' + celex;
    document.body.appendChild(hintEl);
    // End of hint wrapper generation

    EUCASES_LAST_HINT_ELEMENT = hintEl;

    if (uiLangId == '') {
        uiLangId = 'en';
    }

    // Get hint with ajax request
    var ajaxLnk = '';
    if (toPar && toPar != '') {
        rf = /*'#' + */toPar;
        ajaxLnk = 'http://demo.eurocases.eu/api/Doc/ParHint/' + langId + '/' + EUCASES_LANGS_NUMS[uiLangId] + '/' + celex + '/' + rf;
    }
    else {
        ajaxLnk = 'http://demo.eurocases.eu/api/Doc/ParHint/' + langId + '/' + EUCASES_LANGS_NUMS[uiLangId] + '/' + celex;
    }
    //hintEl.innerHTML = '<span style="margin-left: 10px;">' + EUCASES_TEXTS[window.EUCASES_UI_LANG]['msgLoading'] + '</span>';

    //if (!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG='en';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            hintEl.innerHTML = xmlhttp.responseText;
        }
        else {
            hintEl.innerHTML = '<a href="' + caller.href + '" target="_blank">' + caller.href + '</a>'; //EUCASES_TEXTS[window.EUCASES_UI_LANG]['msgErrorHintLoading'];
        }
    }

    xmlhttp.open("GET", ajaxLnk, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	xmlhttp.setRequestHeader("Access-Control-Request-Method", "GET");
//	xmlhttp.setRequestHeader("Access-Control-Request-Headers", "*");
    //xmlhttp.setRequestHeader("UI-Language",window.EUCASES_UI_LANG);
    xmlhttp.send(document.body.innerHTML);
    // End of hint ajax

    if (hintEl.style.display != 'block') {
        with (hintEl.style) {
            zIndex = 1000;
            position = "absolute";
            display = 'block';

            left = ev.clientX + 10 + window.pageXOffset + 'px';
            top = ev.clientY + 10 + window.pageYOffset + 'px';

            padding = '10px';

            backgroundColor = 'white';
            borderWidth = '1px';
            borderStyle = 'solid';
            borderColor = 'gray';
        }

        function closeHint() {
            hintEl.style.display = 'none';
        }

        var intervalForHint = null;
        var closeHintInterval = function () {
            intervalForHint = setInterval(function () {
                closeHint();
                clearInterval(intervalForHint);
                // console.log('Function "closeHintInterval" is executed!' + intervalForHint);
            }, 500);
        };

        hintEl.onmouseover = function () { clearInterval(intervalForHint); };
        hintEl.onmouseout = closeHintInterval;
    }

    caller.onmouseout = closeHintInterval;
}

function eucasesShowContext(caller, ev, uiLang, celex, toPar, docLang) {
    ev.preventDefault();
    ev.stopPropagation();

    if (EUCASES_LAST_HINT_ELEMENT) {
        EUCASES_LAST_HINT_ELEMENT.style.display = "none";
    }

    EUCASES_CONTEXT_CALLER = caller;

    function hideUl() {
        var el = document.getElementById('eucasesTempContextMenu');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }

    function removeLnk() {
        EUCASES_CONTEXT_CALLER.outerHTML = EUCASES_CONTEXT_CALLER.outerHTML.replace(/<a.*?>/, '').replace(/<\/a>/, '');
    }

    function openLinkByDomain(domain) {
        var docnumber = '';
        var callerLinkSplitted = caller.href.split('/');

        window.open('http://demo.eurocases.eu/api/Doc/DocInLinks/'
            + domain + '/'
            + docLang + '/'
            + EUCASES_LANGS_NUMS[uiLang]
            + '/100/'
            + celex + '/'
            + toPar);
    }

    function openAllDocs() {
        openLinkByDomain('all');
    }

    function openEuLegislation() {
        openLinkByDomain('eul');
    }

    function openEuCaseLaw() {
        openLinkByDomain('eucl');
    }

    function openNatLegislation() {
        openLinkByDomain('natl');
    }

    function openNatCaseLaw() {
        openLinkByDomain('natcl');
    }
    function _shortCite(){
    	alert(EUCASES_TEXTS[uiLang]['shortCite'])
		}
    function _fullCite(){
    	alert(EUCASES_TEXTS[uiLang]['fullCite'])
		}

    var ul = null;
    if (!document.getElementById('eucasesTempContextMenu')) {
        ul = document.createElement('ul');

        // All documents
        var allDocs = document.createElement('li');
        allDocs.innerHTML = EUCASES_TEXTS[uiLang]['allDocs'];
        allDocs.onclick = openAllDocs;
        ul.appendChild(allDocs);
        // EU Legislation
        var euLegislation = document.createElement('li');
        euLegislation.innerHTML = EUCASES_TEXTS[uiLang]['euLegislation'];
        euLegislation.onclick = openEuLegislation;
        ul.appendChild(euLegislation);
        // EU case law
        var euCaseLaw = document.createElement('li');
        euCaseLaw.innerHTML = EUCASES_TEXTS[uiLang]['euCaseLaw']; //"EU case law";
        euCaseLaw.onclick = openEuCaseLaw;
        ul.appendChild(euCaseLaw);
        // National legislation
        var natLegislation = document.createElement('li');
        natLegislation.innerHTML = EUCASES_TEXTS[uiLang]['natLegislation'];//"National legislation";
        natLegislation.onclick = openNatLegislation;
        ul.appendChild(natLegislation);
        // National case law
        var natCaseLaw = document.createElement('li');
        natCaseLaw.innerHTML = EUCASES_TEXTS[uiLang]['natCaseLaw'];//"National case law";
        natCaseLaw.onclick = openNatCaseLaw;
        ul.appendChild(natCaseLaw);

        // Remove link
        var removeLink = document.createElement('li');
        removeLink.innerHTML = EUCASES_TEXTS[uiLang]['removeLink'];//"National case law";
        removeLink.onclick = removeLnk;
        ul.appendChild(removeLink);
        //ShortCite
        var shortCite = document.createElement('li');
        shortCite.innerHTML = EUCASES_TEXTS[uiLang]['shortCite'];//"shortCite";
        shortCite.onclick = _shortCite;
        ul.appendChild(shortCite);
        //FullCite
        var fullCite = document.createElement('li');
        fullCite.innerHTML = EUCASES_TEXTS[uiLang]['fullCite'];//"fullCite";
        fullCite.onclick = _fullCite;
        ul.appendChild(fullCite);

        ul.id = "eucasesTempContextMenu";
        if (document.body.addEventListener) {
            document.body.addEventListener('click', hideUl, false);
        }
        else {
            document.body.attachEvent('onclick', hideUl);
        }
        document.body.appendChild(ul);
    }
    else {
        ul = document.getElementById('eucasesTempContextMenu');
    }

    ul.style.left = ev.clientX + window.pageXOffset + 'px';
    ul.style.top = ev.clientY + window.pageYOffset + 'px';

    ul.style.display = 'block';
}

function eucasesRemoveLinksByClass(className) {
    links = document.getElementsByClassName(className);
    for (i = 0; i < links.length; i++) {
        links[i].outerHTML = links[i].outerHTML.replace(/<a.*?>/, '').replace(/<\/a>/, '');
        links = document.getElementsByClassName(className);
    }
}

function eucasesRemoveSpansByClass(className) {
    var links = document.getElementsByClassName(className);
    for (i = 0; i < links.length; i++) {
        links[i].outerHTML = links[i].outerHTML.replace(/<span.*?>/, '').replace(/<\/span>/, '');
        links = document.getElementsByClassName(className);
    }
}

function eucasesRemoveAllLinks() {
    //if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG='en';
    //if(confirm(EUCASES_TEXTS[window.EUCASES_UI_LANG]['confirmRemoveLinks'])) {
    //if(document.getElementsByClassName('eucases-term').length > 0 || document.getElementsByClassName('eucases-link').length > 0) {
    location.reload();
if(chrome)if(chrome.extension)if(chrome.extension.sendRequest)chrome.extension.sendRequest({action:'cLinksRemoved'},function(r){alert(r.cLinksRemoved)})
    //}
    //else {
    //    alert(EUCASES_TEXTS[window.EUCASES_UI_LANG]['cMsgNoLinksSetByELCFound']);
    //}
    //}
}

function replaceSelection(html, selectInserted) {
    var sel, range, fragment;

    if (typeof window.getSelection != "undefined") {
        // IE 9 and other non-IE browsers
        sel = window.getSelection();

        // Test that the Selection object contains at least one Range
        if (sel.getRangeAt && sel.rangeCount) {
            // Get the first Range (only Firefox supports more than one)
            range = window.getSelection().getRangeAt(0);
            range.deleteContents();

            // Create a DocumentFragment to insert and populate it with HTML
            // Need to test for the existence of range.createContextualFragment
            // because it's non-standard and IE 9 does not support it
            if (range.createContextualFragment) {
                fragment = range.createContextualFragment(html);
            } else {
                // In IE 9 we need to use innerHTML of a temporary element
                var div = document.createElement("div"), child;
                div.innerHTML = html;
                fragment = document.createDocumentFragment();
                while ((child = div.firstChild)) {
                    fragment.appendChild(child);
                }
            }
            var firstInsertedNode = fragment.firstChild;
            var lastInsertedNode = fragment.lastChild;
            range.insertNode(fragment);
            if (selectInserted) {
                if (firstInsertedNode) {
                    range.setStartBefore(firstInsertedNode);
                    range.setEndAfter(lastInsertedNode);
                }
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE 8 and below
        range = document.selection.createRange();
        range.pasteHTML(html);
    }
}
function replaceSelectionURIEncoded(a,b){
	replaceSelection(decodeURI(a),b)
}

function eucasesRemoveCurrentLink() {
    //var selection = window.getSelection();
    //if (!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG='en';
    //if (selection.rangeCount > 0) {
    //if (confirm(EUCASES_TEXTS[window.EUCASES_UI_LANG]['cPlzConfirmRmLnkSel'])) {
    //var range = selection.getRangeAt(0);
    //var clonedSelection = range.cloneContents();
    //var div = document.createElement('div');
    //div.appendChild(clonedSelection);
    //var newHtml = div.innerHTML.replace(/<span.*?>/g, '').replace(/<\/span>/g, '');
    //replaceSelection(newHtml);

    document.execCommand('unlink');
    //}
    //}
    //else {
    //    alert(EUCASES_TEXTS[window.EUCASES_UI_LANG]['cPlsSelLink']);
    //}

}
function eucasesShowProcessingMessage() {
	eucasesLoadingElement=document.createElement('div');
	//if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG='en';
	eucasesLoadingElement.innerHTML=EUCASES_TEXTS[window.EUCASES_UI_LANG]['processingLinksMessage'];
	with (eucasesLoadingElement.style) {
		position = 'fixed';
		top = '10px';
		left = '10px';
		zIndex = '1000';
		padding = '10px';
		paddingLeft = '20px';
		paddingRight = '20px';
		border = '5px solid grey';
		backgroundColor = 'white';
		fontSize = '16px';
		fontWeight = 'bold';
	}
	document.body.appendChild(eucasesLoadingElement);
}
////eucasesSetLinks();
function eucasesSetLinks(){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState===4&&xmlhttp.status===200){
			document.body.innerHTML=xmlhttp.responseText;
//try{
if(chrome)if(chrome.extension)if(chrome.extension.sendRequest)chrome.extension.sendRequest({action:'getUiLang'},function(r){
	//alert(r.res)
	if(r)if(r.res){AddScrHT('if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG="'+r.res+'";','VarsId');alert(r.cSuccess)}
})
//}catch(_){alert(_.message)}
			//
			InJ()//!
		}};
	if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG='en';//!
	xmlhttp.open('POST','http://techno.eucases.eu/FrontEndREST/api/Links/PutHtmlLinks/',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xmlhttp.setRequestHeader('UI-Language',window.EUCASES_UI_LANG);
	xmlhttp.setRequestHeader('Access-Control-Allow-Origin','*');
	xmlhttp.send(document.body.innerHTML)
	eucasesShowProcessingMessage()
}
//eucasesSetLinks();
function eucasesDownloadXml() {
    var form = document.createElement('form');
    form.action = 'http://techno.eucases.eu/FrontEndREST/api/Links/GenerateXmlFromDoubleEncoded';
    form.method = 'post';

    var inp = document.createElement('input');
    inp.type = 'text';
    inp.name = 'html';
    inp.value = encodeURI(document.body.outerHTML);
    form.appendChild(inp);

    var submit = document.createElement('input');
    submit.type = 'submit';
    form.appendChild(submit);

    document.body.appendChild(form);
    submit.click();

    document.body.removeChild(form);
}

function eucasesConceptShowContext(caller, ev, uiLang, docLang, xmlId) {
    ev.preventDefault();
    ev.stopPropagation();
    var lang = EUCASES_LANGS_NUMS[uiLang];

    EUCASES_CONCEPT_CONTEXT_CALLER = caller;

    function hideUlC() {
        var el = document.getElementById('eucasesTempConceptContextMenu');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }

    function removeTerm() {
        EUCASES_CONCEPT_CONTEXT_CALLER.outerHTML = EUCASES_CONCEPT_CONTEXT_CALLER.outerHTML.replace(/<span.*?>/, '').replace(/<\/span>/, '');
    }

    function openLinkByDomain(domain) {
        window.open('http://demo.eurocases.eu/api/Doc/SearchByXmlId/?xmlId=' + xmlId + '&domain=' + domain + '&langId=' + docLang + '&siteLangId=' + uiLang);
    }

    function openAllDocs() {
        openLinkByDomain('All');
    }

    function openEuLegislation() {
        openLinkByDomain('EuL');
    }

    function openEuCaseLaw() {
        openLinkByDomain('EuCL');
    }

    function openNatLegislation() {
        openLinkByDomain('NatL');
    }

    function openNatCaseLaw() {
        openLinkByDomain('NatCL');
    }
    function _shortCite(){
    	alert(EUCASES_TEXTS[lang]['shortCite'])
		}
    function _fullCite(){
    	alert(EUCASES_TEXTS[lang]['fullCite'])
		}

    var ul = null;
    if (!document.getElementById('eucasesTempConceptContextMenu')) {
        ul = document.createElement('ul');

        // All documents
        var allDocs = document.createElement('li');
        allDocs.innerHTML = EUCASES_TEXTS[lang]['allDocs'];
        allDocs.onclick = openAllDocs;
        ul.appendChild(allDocs);
        // EU Legislation
        var euLegislation = document.createElement('li');
        euLegislation.innerHTML = EUCASES_TEXTS[lang]['euLegislation'];
        euLegislation.onclick = openEuLegislation;
        ul.appendChild(euLegislation);
        // EU case law
        var euCaseLaw = document.createElement('li');
        euCaseLaw.innerHTML = EUCASES_TEXTS[lang]['euCaseLaw']; //"EU case law";
        euCaseLaw.onclick = openEuCaseLaw;
        ul.appendChild(euCaseLaw);
        // National legislation
        var natLegislation = document.createElement('li');
        natLegislation.innerHTML = EUCASES_TEXTS[lang]['natLegislation'];//"National legislation";
        natLegislation.onclick = openNatLegislation;
        ul.appendChild(natLegislation);
        // National case law
        var natCaseLaw = document.createElement('li');
        natCaseLaw.innerHTML = EUCASES_TEXTS[lang]['natCaseLaw'];//"National case law";
        natCaseLaw.onclick = openNatCaseLaw;
        ul.appendChild(natCaseLaw);

        // Remove link
        var removeLink = document.createElement('li');
        removeLink.innerHTML = EUCASES_TEXTS[lang]['removeLink'];//"National case law";
        removeLink.onclick = removeTerm;
        ul.appendChild(removeLink);
        //ShortCite
        var shortCite = document.createElement('li');
        shortCite.innerHTML = EUCASES_TEXTS[lang]['shortCite'];//"shortCite";
        shortCite.onclick = _shortCite;
        ul.appendChild(shortCite);
        //FullCite
        var fullCite = document.createElement('li');
        fullCite.innerHTML = EUCASES_TEXTS[lang]['fullCite'];//"fullCite";
        fullCite.onclick = _fullCite;
        ul.appendChild(fullCite);

        ul.id = "eucasesTempConceptContextMenu";
        if (document.body.addEventListener) {
            document.body.addEventListener('click', hideUlC, false);
        }
        else {
            document.body.attachEvent('onclick', hideUlC);
        }
        document.body.appendChild(ul);
    }
    else {
        ul = document.getElementById('eucasesTempConceptContextMenu');
    }

    ul.style.left = ev.clientX + window.pageXOffset + 'px';
    ul.style.top = ev.clientY + window.pageYOffset + 'px';

    ul.style.display = 'block';
}
//--------
function HG(u){
	var x=new XMLHttpRequest();
	var s='';
	x.open('GET',u,false);
	x.send(null);
	if(x.status===200)s=x.responseText;
	return s
}
function gH(){return document.getElementsByTagName('head')[0]||document.body||document.getElementsByTagName('body')[0]}
function AddScrHT(t,i){
	var e;
	if(i){
		e=document.getElementById(i);
		if(e)e.parentNode.removeChild(e)
	}
	e=gH();
	var s=document.createElement('script');
	if(i)s.id=i;
	s.type='text/javascript';
	s.text=t;
	e.appendChild(s)
}
function AddScrHTu(u,i){AddScrHT(HG(u),i)}
function AddCssH(i){
	var e;
	if(i){e=document.getElementById(i);if(e)e.parentNode.removeChild(e)}
	var h=gH(),s=document.createElement('style');
	if(i)s.id=i;
	s.type='text/css';
	var t=HG('http://techno.eucases.eu/FrontEndREST/api/Links/GetResourceFile?fileName=context-menuGG.css');
	s.text=t;
	h.appendChild(s)
}
function _GUIL(){if(chrome)if(chrome.extension)if(chrome.extension.sendRequest)chrome.extension.sendRequest({action:'getUiLang'},function(r){if(!r)return;if(!r.res)return;AddScrHT('if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG="'+r.res+'";','VarsId');if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG=r.res})}
function InJ(){
	if(window.__CS1_LOADED_)return;
	AddScrHT('window.__CS1_LOADED_=true;','__CS1_LOADED_');
	AddCssH('StyleId')
	AddScrHT('if(!window.EUCASES_UI_LANG)window.EUCASES_UI_LANG="en";','VarsId');
	AddScrHTu('http://techno.eucases.eu/FrontEndREST/api/Links/GetResourceFile?fileName=context-menuGG.js','CommonProcsId');
	_GUIL()
}
_GUIL();
InJ();