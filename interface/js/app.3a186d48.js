(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"0311":function(e,t,n){e.exports=n.p+"media/notification.4f11ec4b.wav"},"034f":function(e,t,n){"use strict";n("85ec")},"15a2":function(e){e.exports=JSON.parse('{"de":{"account":"Konto","active":"Aktiv","add":"Hinzufügen","add_new_user":"Neue Benutzer hinzufügen","admin":"Administrator","all":"Alle","all_notifications_removed":"Alle Benachrichtigungen wurden gelöscht","all_recordings_removed":"Alle Aufnahmen wurden gelöscht","apply":"Übernehmen","at_home":"Zu Hause","audio":"Audio","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_secret_access_key":"Secret Access Key","aws_region":"Region","aws_contingent_total":"Kontingent Total","aws_contingent_left":"Kontingent Übrig","aws_last_rekognition":"Letzte Rekognition","back":"Zurück","backup":"Backup","backup_and_restore":"Sichern & Wiederherstellen","backup_download":"Backup herunterladen","backup_restore":"Backup wiederherstellen","backup_restored":"Backup wurde wiederhergestellt","banner_text_motion":"Neue Bewegung entdeckt","banner_text_doorbell":"Türklingel wurde geläutet","base":"Basis","browse":"Durchsuchen","camera":"Kamera","cameras":"Kameras","camview":"CamView","cancel":"Abbrechen","cannot_change_pw":"Passwort kann nicht geändert werden","cannot_login":"Benutzername und/oder Passwort sind falsch","chat_id":"Chat ID","confidence":"Zuversichtlichkeit","config":"Konfiguration","darkmode":"Darkmode","dashboard":"Dashboard","database_resetted":"Datenbank wurde zurückgesetzt","doorbell":"Türklingel","drop_files_here":"Hierher ziehen","empty":"Leer","endpoints":"Endpunkte","error":"Fehler","exclude":"Ausschließen","favourite":"Favorit","favourites":"Favoriten","forgotpw_title":"Passwort vergessen?","forgotpw_content":"Wenn Sie ihr Passwort vergessen haben, können sie durch das Löschen der Datenbank oder Einspielen eines Backups diesen wieder herstellen.","general":"Allgemein","general_information":"Allgemeine Informationen","go_back":"Zurück","hide_banner_after_s":"Banner ausblenden nach (s)","label":"Label","labels":"Labels","last_notification":"Letzte Benachrichtigung","last_recording":"Letzte Aufnahme","livestream":"Livestream","master":"Meister","motion":"Bewegung","motion_message":"Bewegungsmitteilung","never":"Niemals","next":"Nächste","new_password":"Neues Passwort","new_password_verify":"Neues Passwort bestätigen","no_access":"Keine Zugriffsberechtigung","no_cameras":"Keine Kameras","no_file_selected":"Keine Datei ausgewählt","no_more_data":"Keine weiteren Daten","no_notifications":"Keine Benachrichtigungen","no_password_defined":"Kein Passwort definiert","no_permissionlevel_defined":"Zugangsberechtigung nicht definiert","no_registered_user":"Keine registrierte Benutzer","no_results":"Keine Ergebnisse","no_roomname_defined":"Kein Raumname definiert","no_username_defined":"Benutzername nicht definiert","notfound_message":"Sorry, die gesuchte Seite existiert nicht.","notification":"Benachrichtigung","notifications":"Benachrichtigungen","now":"Jetzt","old_password":"Altes Passwort","online":"Online","offline":"Offline","password":"Passwort","permissions":"Berechtigungen","permission_required":"Berechtigung erforderlich","prev":"Vorherige","profile":"Profil","recording_text":"Das @ wurde am % durch # aufgenommen.","recording_time":"Aufnahmezeit (s)","recording_type":"Aufnahmetyp","recording":"Aufnahme","recordings":"Aufnahmen","registered_user":"Registrierte Benutzer","rekognition":"Rekognition","remove":"Löschen","removed":"gelöscht","remove_after_d":"Löschen nach (t)","remove_after_h":"Löschen nach (std)","remove_all":"Alles löschen","reset":"Zurücksetzen","reset_confirm":"Zurücksetzen bestätigen","reset_confirm_text":"Nach dem Klicken auf \'Zurücksetzen\' werden alle gespeicherten Daten unwiederruflich gelöscht. Sind Sie sicher?","room":"Raum","rooms":"Räume","room_already_exists":"Raum existiert bereits","room_name":"Raum Name","save_as":"Speichern unter","select":"Auswählen","selected":"ausgewählt","settings":"Einstellungen","signin":"Einloggen","signout":"Ausloggen","signout_after":"Ausloggen nach","snapshot":"Bild","snapshot_timer":"Snapshot Timer","standard":"Standard","status":"Status","successfully_changed":"Erfolgreich geändert","successfully_created":"Erfolgreich erstellt","successfully_removed":"Erfolgreich gelöscht","telegram":"Telegram","themes":"Themen","token":"Token","type":"Typ","user":"Benutzer","username":"Benutzername","verification_not_successfull":"Verifikation nicht erfolgreich","video":"Video","video_resolution":"Video Auflösung","webhook":"Webhook","welcome_message":"Willkommen bei","welcome_submessage":"Das Webinteface für ihre RTSP fähigen Kameras"}}')},"365ce":function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r),a=o.a.create({baseURL:location.origin+"/api"});a.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("user"));return t&&t.access_token&&(e.headers["Authorization"]="Bearer ".concat(t.access_token)),Promise.resolve(e)}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)})),t["a"]=a},3914:function(e,t,n){},"4c1e":function(e){e.exports=JSON.parse('{"nl":{"account":"Account","active":"Actief","add":"Toevoegen","add_new_user":"Nieuwe gebruikers toevoegen","admin":"Administrator","all":"All","all_notifications_removed":"Alle meldingen zijn verwijderd","all_recordings_removed":"Alle opnames zijn gewist","apply":"Overnemen","at_home":"Thuis","audio":"Audio","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_secret_access_key":"Secret Access Key","aws_region":"Region","aws_contingent_total":"Contingent Total","aws_contingent_left":"Contingent Übrig","aws_last_rekognition":"Last Rekognition","back":"Terug","backup":"Backup","backup_and_restore":"Back-up & Herstel","backup_download":"Download Backup","backup_restore":"Restore Backup","backup_restored":"Backup restored","banner_text_motion":"Nieuwe beweging gedetecteerd","banner_text_doorbell":"Deurbel afgegaan","base":"Basis","browse":"Bladeren","camera":"Camera","cameras":"Camera\'s","camview":"CamView","cancel":"Annuleren","cannot_change_pw":"Wachtwoord kan niet worden gewijzigd","cannot_login":"Gebruikersnaam en/of wachtwoord zijn onjuist","confidence":"Confidence","config":"Config","darkmode":"Darkmode","dashboard":"Dashboard","database_resetted":"Database werd gereset","doorbell":"Deurbel","drop_files_here":"Drop files here","empty":"Empty","endpoints":"Endpunkte","error":"Fout","exclude":"Exclusief","favourite":"Favorit","favourites":"Favoriten","forgotpw_title":"Wachtwoord vergeten?","forgotpw_content":"Als u uw wachtwoord bent vergeten, kunt u het herstellen door de database te wissen of een back-up te importeren.","general":"Algemeen","general_information":"Algemene informatie","go_back":"Terug","hide_banner_after_s":"","label":"Label","labels":"Labels","last_notification":"Laatste kennisgeving","last_recording":"Laatste opname","livestream":"Livestream","master":"Meester","motion":"Beweging","motion_message":"Kennisgeving van beweging","never":"Never","next":"Volgende","new_password":"Nieuw paswoord","new_password_verify":"Bevestig nieuw wachtwoord","no_access":"Geen toegangsautorisatie","no_cameras":"Geen camera\'s","no_file_selected":"No file selected","no_registered_user":"No registered user","no_more_data":"No more dara","no_notifications":"Geen meldingen","no_password_defined":"Geen wachtwoord gedefinieerd","no_permissionlevel_defined":"Toegangsbevoegdheid niet gedefinieerd","no_results":"No results","no_roomname_defined":"Geen kamernaam gedefinieerd","no_username_defined":"Gebruikersnaam niet gedefinieerd","notfound_message":"Sorry, de pagina die u zoekt bestaat niet.","notification":"Kennisgeving","notifications":"Kennisgevingen","now":"Now","old_password":"Oud paswoord","online":"Online","offline":"Offline","password":"Wachtwoord","permissions":"Machtigingen","permission_required":"Toestemming nodig","prev":"Vorige","profile":"Profile","recording_text":"De @ werd genomen op % door een #.","recording_time":"Opnametijd (s)","recording_type":"Opnametype","recording":"Opname","recordings":"Opnames","registered_user":"Geregistreerde gebruikers","rekognition":"Rekognition","remove":"Wissen","removed":"verwijderd","remove_after":"Schrappen na (d)","remove_after_h":"Schrappen na (h)","remove_all":"Alles wissen","reset":"Reset","reset_confirm":"Bevestig reset","reset_confirm_text":"Na het klikken op \'Reset\' zullen alle opgeslagen gegevens onherroepelijk worden gewist. Ben je zeker?","room":"Kamer","rooms":"Kamers","room_already_exists":"Kamer bestaat al","room_name":"Kamernaam","save_as":"Opslaan als","select":"Auswählen","selected":"selected","settings":"Instellingen","signin":"Inloggen","signout":"Uitloggen","signout_after":"Uitloggen na","snapshot":"Snapshot","snapshot_timer":"Snapshot Timer","standard":"Standaard","status":"Status","successfully_changed":"Met succes veranderd","successfully_created":"Succesvol gemaakt","successfully_removed":"Succesvol verwijderd","telegram":"Telegram","themes":"Themes","type":"Type","user":"Gebruiker","username":"Gebruikersnaam","verification_not_successfull":"Verificatie niet succesvol","video":"Video","video_resolution":"Video Resolutie","webhook":"Webhook","welcome_message":"Welkom bij","welcome_submessage":"De webinterface voor uw RTSP-camera\'s"}}')},"4c86":function(e){e.exports=JSON.parse('{"en":{"account":"Account","active":"Active","add":"Add","add_new_user":"Add new user","admin":"Administrator","all":"All","all_notifications_removed":"All notifications were removed","all_recordings_removed":"All recordings were removed","apply":"Apply","at_home":"At Home","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_secret_access_key":"Secret Access Key","aws_region":"Region","aws_contingent_total":"Contingent Total","aws_contingent_left":"Contingent Left","aws_last_rekognition":"Last Rekognition","audio":"Audio","back":"Back","backup":"Backup","backup_and_restore":"Backup & Restore","backup_download":"Download Backup","backup_restore":"Restore Backup","backup_restored":"Backup restored","banner_text_motion":"New motion detected","banner_text_doorbell":"Doorbel was triggered","base":"Base","browse":"Browse","camera":"Camera","cameras":"Cameras","camview":"CamView","cancel":"Cancel","cannot_change_pw":"Can not change password","cannot_login":"Username and/or password are incorrect","confidence":"Confidence","config":"Config","darkmode":"Darkmode","dashboard":"Dashboard","database_resetted":"Database resetted","doorbell":"Doorbell","drop_files_here":"Drop files here","empty":"Empty","endpoints":"Endpoints","error":"Error","exclude":"Exclude","favourite":"Favourite","favourites":"Favourites","forgotpw_title":"Forgot password?","forgotpw_content":"If you have forgotten your password, you can restore it by deleting the database or importing a backup.","general":"General","general_information":"General Information","go_back":"Back","hide_banner_after_s":"Verberg banner na (s)","label":"Label","labels":"Labels","last_notification":"Last notification","last_recording":"Last recording","livestream":"Livestream","master":"Master","motion":"Motion","motion_message":"Motion message","never":"Never","next":"Next","new_password":"New password","new_password_verify":"Verify new password","no_access":"No access permission","no_cameras":"No cameras","no_file_selected":"No file selected","no_more_data":"No more dara","no_notifications":"No notifications","no_password_defined":"No password defined","no_permissionlevel_defined":"No permission level defined","no_registered_user":"No registered user","no_results":"No results","no_roomname_defined":"No room name defined","no_username_defined":"No username defined","notfound_message":"Sorry, the page you\'re looking for doesn\'t exist.","notification":"Notification","notifications":"Notifications","now":"Now","old_password":"Old Password","online":"Online","offline":"Offline","password":"Password","permissions":"Permissions","permission_required":"Permission required","prev":"Previous","profile":"Profile","recording_text":"The @ was taken on % by a #.","recording_time":"Recording time (s)","recording_type":"Recording type","recording":"Recording","recordings":"Recordings","registered_user":"Registered User","rekognition":"Rekognition","remove":"Remove","removed":"removed","remove_after_d":"Remove after (d)","remove_after_h":"Remove after (h)","remove_all":"Remove all","reset":"Reset","reset_confirm":"Confirm reset","reset_confirm_text":"After clicking \'Reset\' all stored data will be irrevocably deleted. Are you sure?","room":"Room","rooms":"Rooms","room_already_exists":"Room already exists","room_name":"Room Name","save_as":"Save as","select":"Select","selected":"selected","settings":"Settings","signin":"Sign in","signout":"Sign out","signout_after":"Sign out after","snapshot":"Snapshot","snapshot_timer":"Snapshot Timer","standard":"Standard","status":"State","successfully_changed":"Successfully changed","successfully_created":"Successfully created","successfully_removed":"Successfully removed","telegram":"Telegram","themes":"Themes","typ":"Typ","user":"User","username":"Username","verification_not_successfull":"Verification not successfull","video":"Video","video_resolution":"Video Resolution","webhook":"Webhook","welcome_message":"Welcome to","welcome_submessage":"The web interface for your RTSP capable cameras"}}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-100vh",attrs:{id:"app"}},["login"!==e.$route.meta.name?r("button",{staticClass:"add-button",staticStyle:{display:"none"}},[e._v("Add to home screen")]):e._e(),"login"!==e.$route.meta.name&&e.checkLevel("notifications:access")?r("audio",{attrs:{id:"soundFx"}},[r("source",{attrs:{src:n("0311")}})]):e._e(),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1),r("CoolLightBox",{attrs:{items:e.images,index:e.index,closeOnClickOutsideMobile:!0,useZoomBar:!0,zIndex:99999},on:{close:e.closeHandler}})],1)},a=[],s=n("1da1"),i=(n("96cf"),n("d3b7"),n("99af"),n("b0c0"),n("5547")),c=(n("2223"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-link",{staticClass:"notification",on:{click:function(t){return e.$emit("click")}}},[n("span",{staticClass:"before"}),n("span",{staticClass:"after"}),n("header",[n("h2",[e._v(e._s(e.headerTxt))]),n("span",{staticClass:"timestamp"},[e._v(e._s(e.timeTxt))])]),n("div",{staticClass:"content"},[n("span",{staticClass:"sender"},[e._v(e._s(e.notification.camera))]),n("span",{staticClass:"message"},[e._v(e._s(e.message))]),n("span",{staticClass:"more"},[e._v(e._s(e.notification.room))])])])}),u=[],l={name:"NotificationBanner",props:{notification:{type:Object,required:!0},headerTxt:{type:String,default:"Notifications"},timeTxt:{type:String,default:"Now"},triggerTxt:{type:String,default:"Motion"}},data:function(){return{message:""}},created:function(){this.message="".concat(this.triggerTxt," - ").concat(this.notification.time)}},d=l,m=(n("8726"),n("2877")),g=Object(m["a"])(d,c,u,!1,null,null,null),f=g.exports,p=function(e){return new Promise((function(t){return setTimeout(t,e)}))},h={components:{CoolLightBox:i["a"]},data:function(){return{id:"",images:[],index:null}},computed:{currentUser:function(){return this.$store.state.auth.user},uiConfig:function(){return this.$store.state.config.ui}},sockets:{notification:function(e){var t=this;this.id=e.id,e.recordStoring&&(this.images=[{title:"".concat(e.camera," - ").concat(e.time),src:"Video"===e.recordType?"/files/".concat(e.name,"@2.jpeg"):"/files/".concat(e.fileName),thumb:"Video"===e.recordType?"/files/".concat(e.name,"@2.jpeg"):"/files/".concat(e.fileName)}]);var n={component:f,props:{headerTxt:this.$t("notifications"),timeTxt:this.$t("now"),triggerTxt:"motion"===e.trigger?this.$t("motion"):this.$t("doorbell"),notification:e},listeners:{click:function(){t.index=e.recordStoring?0:null}}};this.$toast.info(n,{id:this.id,containerClassName:"notification-container",toastClassName:"notification-toast"})}},created:function(){this.$store.dispatch("config/loadConfig")},mounted:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=document.querySelector("#preloader"),!t){e.next=6;break}return t.classList.add("preloader-hide"),e.next=5,p(200);case 5:t.remove();case 6:case"end":return e.stop()}}),e)})))()},methods:{closeHandler:function(){this.index=null,this.$toast.dismiss(this.id),this.id=""}}},b=h,v=(n("034f"),Object(m["a"])(b,o,a,!1,null,null,null)),_=v.exports,w=(n("3ca3"),n("ddb0"),n("caad"),n("2532"),n("8c4f")),k=n("2f62"),y=n("5530"),x=n("365ce"),S="/auth",A="login",N="logout",j="check",O=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].get("".concat(S,"/").concat(j));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].post("".concat(S,"/").concat(A),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].post("".concat(S,"/").concat(N));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=n("8e27"),C=Object(z["io"])(window.location.host,{autoConnect:!1}),B=n("d4ec"),P=n("bee2"),T=(n("ac1f"),n("1276"),n("5319"),n("a15b"),n("d81d"),n("fb6a"),n("25f0"),function(e){var t=e.split(".")[1],n=t.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)}),q=function(){function e(){Object(B["a"])(this,e)}return Object(P["a"])(e,[{key:"serialize",value:function(e){if(!e)return null;var t=T(e.access_token);return Object(y["a"])({id:t.id,username:t.username,sessionTimer:t.sessionTimer,permissionLevel:t.permissionLevel,photo:t.photo},e)}}]),e}(),I=new q,D=JSON.parse(localStorage.getItem("user")),E=localStorage.getItem("userImg"),K=I.serialize(D),V=D?{status:{loggedIn:!0},user:Object(y["a"])(Object(y["a"])({},K),{},{photo:E||K.photo})}:{status:{loggedIn:!1},user:null},F=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager.getSubscription().then((function(e){e&&e.unsubscribe()}))}))},W={namespaced:!0,state:V,actions:{login:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,R(t);case 4:return o=n.sent,r("loginSuccess",o.data),n.abrupt("return",Promise.resolve());case 9:return n.prev=9,n.t0=n["catch"](1),r("loginFailure"),n.abrupt("return",Promise.reject(n.t0));case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},logout:function(e){var t=e.commit;L(),t("logout")},updateUserImg:function(e,t){var n=e.commit;n("updateImg",t)}},mutations:{loginSuccess:function(e,t){localStorage.setItem("user",JSON.stringify(t)),e.status.loggedIn=!0,e.user=I.serialize(t)},loginFailure:function(e){localStorage.removeItem("user"),localStorage.removeItem("userImg"),localStorage.removeItem("lastPage"),e.status.loggedIn=!1,e.user=null,C.close(),F()},logout:function(e){localStorage.removeItem("user"),localStorage.removeItem("userImg"),localStorage.removeItem("lastPage"),e.status.loggedIn=!1,e.user=null,C.close(),F()},updateImg:function(e,t){localStorage.setItem("userImg",t),e.user.photo=t}},getters:{loggedIn:function(e){return e.status.loggedIn},user:function(e){return e.user}}},$=JSON.parse(localStorage.getItem("camview-layout")),U={layout:$||[]},J={namespaced:!0,state:U,actions:{updateElements:function(e,t){var n=e.commit;return n("updateElements",t),$}},mutations:{updateElements:function(e,t){localStorage.setItem("camview-layout",JSON.stringify(t)),e.layout=t}}},M=n("a925"),G={af:"af",sq:"sq",ar:"ar","ar-dz":"ar","ar-bh":"ar","ar-eg":"ar","ar-iq":"ar","ar-jo":"ar","ar-kw":"ar","ar-lb":"ar","ar-ly":"ar","ar-ma":"ar","ar-om":"ar","ar-qa":"ar","ar-sa":"ar","ar-sy":"ar","ar-tn":"ar","ar-ae":"ar","ar-ye":"ar",hy:"hy",as:"as",ast:"at",az:"az",eu:"eu",be:"be",bn:"bn",bs:"bs",br:"br",bg:"bg",my:"my",ca:"ca",ch:"ch",ce:"ce",zh:"zh","zh-hk":"zh","zh-cn":"zh","zh-sg":"zh","zh-tw":"zh",cv:"cv",co:"co",cr:"cr",hr:"hr",cs:"cs",da:"da",nl:"nl","nl-be":"nl",en:"en","en-au":"en","en-bz":"en","en-ca":"en","en-ie":"en","en-jm":"en","en-nz":"en","en-ph":"en","en-za":"en","en-tt":"en","en-gb":"en","en-us":"en","en-zw":"en",eo:"eo",et:"et",fo:"fo",fa:"fa",fj:"fj",fi:"fi",fr:"fr","fr-be":"fr","fr-ca":"fr","fr-fr":"fr","fr-lu":"fr","fr-mc":"fr","fr-ch":"fr",fy:"fy",fur:"fu",gd:"gd","gd-ie":"gd",gl:"gl",ka:"ka",de:"de","de-at":"de","de-de":"de","de-li":"de","de-lu":"de","de-ch":"de",el:"el",gu:"gu",ht:"ht",he:"he",hi:"hi",hu:"hu",is:"is",id:"id",iu:"iu",ga:"ga",it:"it","it-ch":"it",ja:"ja",kn:"kn",ks:"ks",kk:"kk",km:"km",ky:"ky",tlh:"tl",ko:"ko","ko-kp":"ko","ko-kr":"ko",la:"la",lv:"lv",lt:"lt",lb:"lb",mk:"mk",ms:"ms",ml:"ml",mt:"mt",mi:"mi",mr:"mr",mo:"mo",nv:"nv",ng:"ng",ne:"ne",no:"no",nb:"nb",nn:"nn",oc:"oc",or:"or",om:"om","fa-ir":"fa",pl:"pl",pt:"pt","pt-br":"pt",pa:"pa","pa-in":"pa","pa-pk":"pa",qu:"qu",rm:"rm",ro:"ro","ro-mo":"ro",ru:"ru","ru-mo":"ru",sz:"sz",sg:"sg",sa:"sa",sc:"sc",sd:"sd",si:"si",sr:"sr",sk:"sk",sl:"sl",so:"so",sb:"sb",es:"es","es-ar":"es","es-bo":"es","es-cl":"es","es-co":"es","es-cr":"es","es-do":"es","es-ec":"es","es-sv":"es","es-gt":"es","es-hn":"es","es-mx":"es","es-ni":"es","es-pa":"es","es-py":"es","es-pe":"es","es-pr":"es","es-es":"es","es-uy":"es","es-ve":"es",sx:"sx",sw:"sw",sv:"sv","sv-fi":"sv","sv-sv":"sv",ta:"ta",tt:"tt",te:"te",th:"th",tig:"ti",ts:"ts",tn:"tn",tr:"tr",tk:"tk",uk:"uk",hsb:"hs",ur:"ur",ve:"ve",vi:"vi",vo:"vo",wa:"wa",cy:"cy",xh:"xh",ji:"ji",zu:"zu"},H=G,Z=function(e){switch(e){case"de":case"nl":return e;default:return"en"}},Q=function(e){return e&&""!==e||!window.navigator||!window.navigator.language?Z(e&&""!==e?H[e.toLowerCase()]:"en"):Z(H[window.navigator.language.toLowerCase()])},X=function(e){return n("a537")("./".concat(Q(e),".json"))},Y=Q();r["default"].use(M["a"]);var ee=new M["a"]({locale:Y,messages:X(Y)}),te="/config",ne=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].get("".concat(te).concat(t||""));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re={ui:!1},oe={namespaced:!0,state:re,actions:{loadConfig:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,ne("?target=ui");case 4:r=t.sent,n("saveConfig",r.data),n("setTheme",r.data.theme),n("setLang",r.data.language),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},mutations:{saveConfig:function(e,t){e.ui=Object(y["a"])(Object(y["a"])({},t),{},{currentLanguage:ee.locale})},setLang:function(e,t){if(t&&"auto"!==t){if(t=Z(t),t in ee.messages)ee.locale=t;else{var n=X(t);ee.setLocaleMessage(t,n[t]),ee.locale=t}e.ui.currentLanguage=t}},setTheme:function(e,t){var n=["light-pink","light-blue","light-yellow","light-green","light-gray","dark-pink","dark-blue","dark-yellow","dark-green","dark-gray"];if(n.includes(t)){var r=t.split("-")[0],o=t.split("-")[1];document.documentElement.dataset.theme=r,document.documentElement.dataset.themeColor=o,localStorage.setItem("theme",r),localStorage.setItem("theme-color",o)}}},getters:{getConfig:function(e){return e.ui}}},ae=JSON.parse(localStorage.getItem("dashboard-layout")),se={layout:ae||[]},ie={namespaced:!0,state:se,actions:{updateElements:function(e,t){var n=e.commit;return n("updateElements",t),ae}},mutations:{updateElements:function(e,t){localStorage.setItem("dashboard-layout",JSON.stringify(t)),e.layout=t}}},ce={size:0},ue={namespaced:!0,state:ce,actions:{socket_notification:function(e){var t=e.commit,n=document.querySelector("#soundFx");n&&n.play(),t("increaseNotifications")},socket_notificationSize:function(e,t){var n=e.commit;n("updateNotifications",t)},socket_removeNotification:function(e){var t=e.commit;t("decreaseNotifications")},decrease:function(e){var t=e.commit;t("decreaseNotifications")},removeAll:function(e){var t=e.commit;t("updateNotifications",0)}},mutations:{decreaseNotifications:function(e){e.size--},increaseNotifications:function(e){e.size++},updateNotifications:function(e,t){e.size=t}},getters:{getSize:function(e){return e.size}}};r["default"].use(k["a"]);var le=new k["a"].Store({state:{},mutations:{},actions:{},modules:{auth:W,camview:J,config:oe,dashboard:ie,notifications:ue}}),de=le;r["default"].use(w["a"]);var me=[{path:"*",component:function(){return n.e("404").then(n.bind(null,"9fa8"))}},{path:"/",name:"Login",meta:{name:"login",requiresAuth:!1,requiredLevel:[]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vee-validate"),n.e("login")]).then(n.bind(null,"ede4"))}},{path:"/dashboard",name:"Dashboard",meta:{name:"dashboard",requiresAuth:!0,requiredLevel:["dashboard:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.-cycjimmy"),n.e("dashboard")]).then(n.bind(null,"5c3a"))}},{path:"/cameras",name:"Cameras",meta:{name:"cameras",requiresAuth:!0,requiredLevel:["cameras:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.-cycjimmy"),n.e("cameras")]).then(n.bind(null,"34b7"))}},{path:"/cameras/:name",name:"Camera",meta:{name:"camera",requiresAuth:!0,requiredLevel:["cameras:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.-cycjimmy"),n.e("camera")]).then(n.bind(null,"301e"))}},{path:"/recordings",name:"Recordings",meta:{name:"recordings",requiresAuth:!0,requiredLevel:["recordings:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("recordings")]).then(n.bind(null,"d0be"))}},{path:"/notifications",name:"Notifications",meta:{name:"dashboard",requiresAuth:!0,requiredLevel:["notifications:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("notifications")]).then(n.bind(null,"e975"))}},{path:"/camview",name:"CamView",meta:{name:"dashboard",requiresAuth:!0,requiredLevel:["camview:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.-cycjimmy"),n.e("camview")]).then(n.bind(null,"4fe7"))}},{path:"/settings",redirect:"/settings/profile",name:"Settings",meta:{name:"dashboard",requiresAuth:!0,requiredLevel:["settings:access"]},component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"ee09"))},children:[{path:"profile",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"c37e"))},meta:{name:"profile",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:profile:access"]}},{path:"general",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"05ec"))},meta:{name:"general",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:general:access"]}},{path:"dashboard",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"d6e6"))},meta:{name:"dashboard",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:dashboard:access"]}},{path:"cameras",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"2ed7"))},meta:{name:"cameras",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:cameras:access"]}},{path:"recordings",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"d37d"))},meta:{name:"recordings",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:recordings:access"]}},{path:"notifications",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"c4e0"))},meta:{name:"notifications",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:notifications:access"]}},{path:"camview",component:function(){return Promise.all([n.e("mod.bootstrap-vue"),n.e("mod.core-js"),n.e("mod.-babel"),n.e("mod.vue-multiselect"),n.e("settings")]).then(n.bind(null,"e15f"))},meta:{name:"camview",transitionName:"slide",requiresAuth:!0,requiredLevel:["settings:camview:access"]}}]}],ge=new w["a"]({mode:"history",base:"/",routes:me,scrollBehavior:function(){return new Promise((function(e){setTimeout((function(){e({x:0,y:0,behavior:"smooth"})}),500)}))}});ge.beforeEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=de.getters["auth/user"],!o||!o.access_token){e.next=22;break}return e.prev=2,e.next=5,O();case 5:if(C.open(),!(t.meta.requiredLevel.length>0)){e.next=11;break}if(a=o.permissionLevel.some((function(e){return t.meta.requiredLevel.includes(e)||"admin"===e})),a){e.next=11;break}return We.$toast.error("".concat(We.$t(t.meta.name),": ").concat(We.$t("permission_required"))),e.abrupt("return",r(!1));case 11:s=localStorage.getItem("lastPage"),i=Boolean("login"===t.meta.name&&s),i?r({path:s}):r(),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](2),de.dispatch("auth/logout"),r("/");case 20:e.next=23;break;case 22:"login"!==t.meta.name?r("/"):r();case 23:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,n,r){return e.apply(this,arguments)}}()),ge.afterEach((function(e){"login"!==e.meta.name&&localStorage.setItem("lastPage",e.path)}));var fe=ge,pe=(n("38cf"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("9483")),he="/subscribe",be=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].get(he);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].post(he,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function _e(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),o=new Uint8Array(r.length),a=0;a<r.length;++a)o[a]=r.charCodeAt(a);return o}Object(pe["a"])("".concat("/","service-worker.js"),{registrationOptions:{scope:"./"},ready:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,s,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),r=document.querySelector(".add-button"),r&&window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),n=e,r.style.display="block",r.addEventListener("click",(function(){r.style.display="none",n.prompt(),n.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),n=null}))}))})),!("PushManager"in window)||"denied"===Notification.permission){t.next=30;break}return t.next=6,e.pushManager.getSubscription();case 6:if(o=t.sent,a=!(null===o),s=!1,i=JSON.parse(JSON.stringify(de.getters["auth/user"])),!(i&&i.access_token&&i.permissionLevel.some((function(e){return"recordings:access"===e||"admin"===e})))){t.next=29;break}return t.next=13,be();case 13:if(c=t.sent,a&&!c.data.subscription?(o.unsubscribe(),s=!0):a||(s=!0),!s){t.next=27;break}return t.prev=16,t.next=19,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_e(c.data.publicKey)});case 19:return u=t.sent,t.next=22,ve(u);case 22:t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](16),console.log("Can not subscribe user!",t.t0);case 27:t.next=30;break;case 29:a&&o.unsubscribe();case 30:case"end":return t.stop()}}),t,null,[[16,24]])})))()},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),e.update()},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("5aea");var we,ke={methods:{checkLevel:function(e){if(!e)return!1;Array.isArray(e)||(e=[e]);var t=de.getters["auth/user"];return!!t&&(t&&e.every((function(e){return t.permissionLevel.includes(e)||t.permissionLevel.includes("admin")})))}}},ye=n("f5af"),xe=n.n(ye),Se=(n("e829"),n("7049")),Ae=n("a7e2"),Ne=n("ccac"),je=n("b1fc"),Oe=n("cbd0"),Re=n("44d4"),Le=n("b720"),ze=n("dbbe"),Ce=n("13ce"),Be=n("f9bc"),Pe=n("f7ca"),Te=n("b519"),qe=(n("ab8b"),n("2dd8"),n("6c42")),Ie=n("ade3"),De={position:"bottom-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1},Ee={position:"top-center",timeout:5e3,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:!1,icon:!1,rtl:!1,closeOnClick:!1},Ke={transition:"Vue-Toastification__bounce",maxToasts:1,newestOnTop:!0,toastDefaults:(we={},Object(Ie["a"])(we,qe["a"].DEFAULT,De),Object(Ie["a"])(we,qe["a"].ERROR,De),Object(Ie["a"])(we,qe["a"].INFO,Ee),Object(Ie["a"])(we,qe["a"].SUCCESS,De),Object(Ie["a"])(we,qe["a"].WARNING,De),we)},Ve=(n("da96"),n("f87c"));r["default"].mixin(ke),r["default"].use(Se["a"]),r["default"].use(Ae["a"]),r["default"].use(Ne["a"]),r["default"].use(je["a"]),r["default"].use(Oe["a"]),r["default"].use(Re["a"]),r["default"].use(Le["a"]),r["default"].use(ze["a"]),r["default"].use(Ce["a"]),r["default"].use(Be["a"]),r["default"].use(Pe["a"]),r["default"].use(Te["a"]),r["default"].use(qe["b"],Ke),r["default"].use(Ve["a"],C,{store:de}),r["default"].config.productionTip=!1;var Fe=new r["default"]({router:fe,store:de,i18n:ee,created:function(){xe.a.init({offset:0})},render:function(e){return e(_)}}).$mount("#app"),We=t["default"]=Fe},"5aea":function(e,t,n){},"85ec":function(e,t,n){},8726:function(e,t,n){"use strict";n("3914")},a537:function(e,t,n){var r={"./de.json":"15a2","./en.json":"4c86","./nl.json":"4c1e"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="a537"}},[[0,"runtime","mod.bootstrap-vue","mod.core-js","mod.-babel","mod.axios","mod.engine.io-client","mod.socket.io-client","mod.engine.io-parser","mod.aos","mod.vue-cool-lightbox","mod.vue-toastification","mod.socket.io-parser","mod.debug","mod.bootstrap","mod.backo2","mod.base64-arraybuffer","mod.base64-js","mod.body-scroll-lock","mod.buffer","mod.component-emitter","mod.has-cors","mod.ieee754","mod.isarray","mod.ms","mod.node-libs-browser","mod.parseqs","mod.parseuri","mod.path-browserify","mod.popper.js","mod.regenerator-runtime","mod.register-service-worker","mod.vue-functional-data-merge","mod.vue-i18n","mod.vue-loader","mod.vue-router","mod.vue-socket.io-extended","mod.vue","mod.vuex","mod.webpack","mod.yeast"]]]);