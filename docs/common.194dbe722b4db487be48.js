(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{226:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var n=i(5917),o=(()=>(function(t){t["Autom\xf3vil"]="directions_car",t.Bicicleta="directions_bike",t["A pie"]="directions_walk",t.Correr="directions_run",t.Motocicleta="two_wheeler"}(o||(o={})),o))(),c=i(7716),a=i(3224),r=i(4655),s=i(7556),l=i(8583),u=i(3738),d=i(6627),p=i(1095);function m(t,e){1&t&&(c.TgZ(0,"div",2),c.TgZ(1,"h1"),c._uU(2,"Ups, no hay actividades disponibles"),c.qZA(),c.TgZ(3,"h2"),c.TgZ(4,"a",3),c._uU(5,"Organicemos una!"),c.qZA(),c.qZA(),c.qZA())}function g(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",12),c.NdJ("click",function(){c.CHM(t);const e=c.oxw(2).$implicit;return c.oxw().eliminar(e.uid)}),c.TgZ(1,"mat-icon"),c._uU(2,"delete"),c.qZA(),c.qZA()}}function h(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",13),c.NdJ("click",function(){c.CHM(t);const e=c.oxw(2).$implicit;return c.oxw().navigate(e.uid)}),c.TgZ(1,"mat-icon"),c._uU(2),c.qZA(),c._uU(3),c.qZA()}if(2&t){const t=c.oxw(2).$implicit,e=c.oxw();c.Q6J("disabled",t.participants.includes(e.loggedUserName)),c.xp6(2),c.Oqu(t.participants.includes(e.loggedUserName)?"check":"add"),c.xp6(1),c.hij(" ",t.participants.includes(e.loggedUserName)?"Participando":"Participar"," ")}}function f(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",14),c.NdJ("click",function(){c.CHM(t);const e=c.oxw(2).$implicit;return c.oxw().navigate(e.uid)}),c.TgZ(1,"mat-icon"),c._uU(2,"edit"),c.qZA(),c._uU(3," Editar "),c.qZA()}}const v=function(t){return{"justify-content":t}};function Z(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"mat-card"),c.TgZ(1,"mat-card-header",5),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit;return c.oxw().navigate(e.uid)}),c.TgZ(2,"mat-card-title"),c.TgZ(3,"mat-icon"),c._uU(4),c.qZA(),c._uU(5),c.qZA(),c.TgZ(6,"mat-card-subtitle"),c.TgZ(7,"mat-icon"),c._uU(8,"person"),c.qZA(),c._uU(9),c.qZA(),c.TgZ(10,"mat-card-subtitle",6),c.TgZ(11,"div",7),c.TgZ(12,"mat-icon"),c._uU(13,"event"),c.qZA(),c._uU(14),c.ALo(15,"date"),c.qZA(),c.TgZ(16,"div",7),c.TgZ(17,"mat-icon"),c._uU(18,"schedule"),c.qZA(),c._uU(19),c.qZA(),c.qZA(),c._UZ(20,"mat-card-subtitle"),c.qZA(),c.TgZ(21,"mat-card-content"),c._uU(22),c.qZA(),c.TgZ(23,"mat-card-actions",8),c.YNc(24,g,3,0,"button",9),c.YNc(25,h,4,3,"button",10),c.YNc(26,f,4,0,"button",11),c.qZA(),c.qZA()}if(2&t){const t=c.oxw().$implicit,e=c.oxw();c.xp6(4),c.Oqu(e.ICONS[t.meanOfTransportation.toString()]),c.xp6(1),c.hij(" ",t.title," "),c.xp6(4),c.hij(" ",t.creators," "),c.xp6(5),c.hij(" ",c.lcZ(15,10,t.startDate)," "),c.xp6(5),c.hij(" ",t.startTime," "),c.xp6(3),c.hij(" ",t.description," "),c.xp6(1),c.Q6J("ngStyle",c.VKq(12,v,t.isOwner?"space-between":"flex-end")),c.xp6(1),c.Q6J("ngIf",t.isOwner),c.xp6(1),c.Q6J("ngIf",!t.creators.includes(e.loggedUserName)),c.xp6(1),c.Q6J("ngIf",t.creators.includes(e.loggedUserName))}}function w(t,e){if(1&t&&(c.ynx(0),c.YNc(1,Z,27,14,"mat-card",4),c.BQk()),2&t){const t=e.$implicit;c.xp6(1),c.Q6J("ngIf",t.isActive)}}let _=(()=>{class t{constructor(t,e,i){this.activitiesService=t,this.router=e,this.authService=i,this.ICONS=o,this.activitiesLoaded$=(0,n.of)(!0),this.loggedUserName=i.getLoggedUser()}ngOnInit(){this._activitiesSubscription=this.activitiesService.getAll().subscribe(t=>{this.activities=t,this.sortActivities(),this.activitiesLoaded$=(0,n.of)(0===t.length),this.checkOwner(),this.checkExipired()})}checkExipired(){this.activities.forEach(t=>{t.isActive=new Date(t.startDate).toLocaleDateString()>=(new Date).toLocaleDateString()})}sortActivities(){this.activities.sort((t,e)=>t.startDate<e.startDate?-1:1)}checkOwner(){this.activities.forEach(t=>{t.isOwner=t.creators.includes(this.loggedUserName)})}eliminar(t){this.activitiesService.delete(t).subscribe(()=>{window.location.reload()})}ngOnDestroy(){this._activitiesSubscription.unsubscribe()}navigate(t){this.router.navigate(["actividad/ver",t])}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(a._),c.Y36(r.F0),c.Y36(s.e))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-participar"]],decls:3,vars:4,consts:[["class","m-5",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"m-5"],["routerLink","/actividad/organizar"],[4,"ngIf"],[3,"click"],[1,"when"],[1,"icon-time"],[3,"ngStyle"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(c.YNc(0,m,6,0,"div",0),c.ALo(1,"async"),c.YNc(2,w,2,1,"ng-container",1)),2&t&&(c.Q6J("ngIf",c.lcZ(1,2,e.activitiesLoaded$)),c.xp6(2),c.Q6J("ngForOf",e.activities))},directives:[l.O5,l.sg,r.yS,u.a8,u.dk,u.n5,d.Hw,u.$j,u.dn,u.hq,l.PC,p.lW],pipes:[l.Ov,l.uU],styles:["mat-card[_ngcontent-%COMP%]{margin:2vw}mat-card-actions[_ngcontent-%COMP%]{flex-direction:row}mat-card-actions[_ngcontent-%COMP%], mat-card-subtitle.when[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.icon-time[_ngcontent-%COMP%]{align-content:space-around}.empty[_ngcontent-%COMP%], .icon-time[_ngcontent-%COMP%]{display:flex;align-items:center}.empty[_ngcontent-%COMP%]{flex-direction:column}"]}),t})()},982:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ContactosModule:()=>I});var n=i(8583),o=i(2341),c=i(3679),a=i(4655),r=i(7716),s=i(7556),l=i(1841);let u=(()=>{class t{constructor(t){this.http=t,this._controllerName="users"}get(t){return this.http.get(`${this._controllerName}/${t}/contacts`)}add(t,e){return this.http.post(`${this._controllerName}/${t}/contacts`,{email:e})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(l.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e){this.authService=t,this.contactosService=e}resolve(t,e){const i=this.authService.getUserId();return this.contactosService.get(i)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(s.e),r.LFG(u))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=i(3071);let m=(()=>{class t{constructor(t){this.usuariosService=t}resolve(t,e){return this.usuariosService.getAll()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(p.K))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=i(9761),h=i(8002),f=i(6332),v=i(3738),Z=i(8295),w=i(9983),_=i(1554),A=i(1095),C=i(6627),x=i(2789),b=i(2458),O=i(1436);function U(t,e){if(1&t&&(r.TgZ(0,"mat-option",16),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.Q6J("value",t.email),r.xp6(1),r.AsE(" ",t.name," ",t.surname," ")}}function q(t,e){1&t&&r._UZ(0,"th",17)}function y(t,e){if(1&t&&(r.TgZ(0,"td",18),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.AsE(" ",t.name," ",t.surname,"")}}function T(t,e){1&t&&r._UZ(0,"th",17)}function N(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",19),r.TgZ(1,"button",20),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().remove(e)}),r.TgZ(2,"mat-icon"),r._uU(3,"delete"),r.qZA(),r.qZA(),r.qZA()}}function k(t,e){1&t&&r._UZ(0,"tr",21)}const S=[{path:"contactos",component:(()=>{class t{constructor(t,e,i){this.route=t,this.contactosService=e,this.authService=i,this.displayedColumns=["nombreApellido","acciones"],this.myControl=new c.NI}ngOnInit(){this._userId=this.route.snapshot.params.id,this.users=this.route.snapshot.data[f.p.USUARIOS].users,this.contacts=this.route.snapshot.data[f.p.CONTACTOS].contacts.filter(t=>null!==t),this.filteredOptions=this.myControl.valueChanges.pipe((0,g.O)(""),(0,h.U)(t=>this._filter(t)))}_filter(t){const e=t.toLowerCase();return this.users.filter(t=>t.name.toLowerCase().includes(e))}onSelectionChange(t){this.selectedOption=t.option.value}agregarContacto(){this.contactosService.add(this.authService.getUserId(),this.selectedOption).subscribe(()=>{this.getContacts(),window.location.reload()})}remove(t){let e=[];this.contacts.forEach(i=>{i.email!==t.email&&e.push(i)}),this.contacts=e}getContacts(){this.contactosService.get(this._userId).subscribe(t=>this.contacts=t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.gz),r.Y36(u),r.Y36(s.e))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-agregar"]],decls:25,vars:7,consts:[[1,"row","justify-content-center","padding-top-15","padding-left-50","example-card","padding-bottom"],[1,"example-card"],[1,"example-form"],["appearance","fill",1,"example-full-width"],["type","text","matInput","","placeholder","Nombre",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["type","button","mat-icon-button","",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nombreApellido"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","acciones"],["mat-cell","","class","header-align-right",4,"matCellDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"header-align-right"],["matTooltip","Eliminar","mat-icon-button","",3,"click"],["mat-row",""]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h1"),r._uU(2,"Agregar usuario frecuente"),r.qZA(),r.TgZ(3,"mat-card",1),r.TgZ(4,"form",2),r.TgZ(5,"mat-form-field",3),r._UZ(6,"input",4),r.TgZ(7,"mat-autocomplete",5,6),r.NdJ("optionSelected",function(t){return e.onSelectionChange(t)}),r.YNc(9,U,2,3,"mat-option",7),r.ALo(10,"async"),r.qZA(),r.qZA(),r.TgZ(11,"button",8),r.NdJ("click",function(){return e.agregarContacto()}),r.TgZ(12,"mat-icon"),r._uU(13,"add"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(14,"h2"),r._uU(15,"Mis usuarios frecuentes"),r.qZA(),r.TgZ(16,"mat-card",1),r.TgZ(17,"table",9),r.ynx(18,10),r.YNc(19,q,1,0,"th",11),r.YNc(20,y,2,2,"td",12),r.BQk(),r.ynx(21,13),r.YNc(22,T,1,0,"th",11),r.YNc(23,N,4,0,"td",14),r.BQk(),r.YNc(24,k,1,0,"tr",15),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.MAs(8);r.xp6(6),r.Q6J("formControl",e.myControl)("matAutocomplete",t),r.xp6(3),r.Q6J("ngForOf",r.lcZ(10,5,e.filteredOptions)),r.xp6(8),r.Q6J("dataSource",e.contacts),r.xp6(7),r.Q6J("matRowDefColumns",e.displayedColumns)}},directives:[v.a8,c._Y,c.JL,Z.KE,w.Nt,c.Fj,_.ZL,c.JJ,c.oH,_.XC,n.sg,A.lW,C.Hw,x.BZ,x.w1,x.fO,x.Dz,x.nj,b.ey,x.ge,x.ev,O.gM,x.Gk],pipes:[n.Ov],styles:["table[_ngcontent-%COMP%]{width:100%}.header-align-right[_ngcontent-%COMP%]{display:flex;padding:21px 0;justify-content:flex-end}.example-card[_ngcontent-%COMP%]{max-width:90vw}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:4vh}@media only screen and (max-width: 768px) and (max-height: 882px){table[_ngcontent-%COMP%]{width:80vw}.header-align-right[_ngcontent-%COMP%]{display:flex;padding:21px 0;justify-content:flex-end}.example-card[_ngcontent-%COMP%]{width:100vw}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:4vh}}"]}),t})(),resolve:{ContactsResolver:d,UsersResolver:m}}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.Bz.forChild(S)],a.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,M,o.q,c.UX]]}),t})()},3224:(t,e,i)=>{"use strict";i.d(e,{_:()=>a});var n=i(8002),o=i(7716),c=i(1841);let a=(()=>{class t{constructor(t){this.httpClient=t,this._controllerName="activities"}getAll(){return this.httpClient.get(this._controllerName).pipe((0,n.U)(t=>t.activities))}get(t){return this.httpClient.get(`${this._controllerName}/${t}`)}save(t){return this.httpClient.post(`${this._controllerName}`,t).pipe((0,n.U)(t=>t.title))}update(t){return this.httpClient.patch(`${this._controllerName}/${t.uid}`,t)}delete(t){return this.httpClient.delete(`${this._controllerName}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(c.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);