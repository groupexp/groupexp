(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{226:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var n=i(5917),c=(()=>(function(t){t["Autom\xf3vil"]="directions_car",t.Bicicleta="directions_bike",t["A pie"]="directions_walk",t.Correr="directions_run",t.Motocicleta="two_wheeler"}(c||(c={})),c))(),o=i(7716),a=i(3224),r=i(4655),s=i(8060),l=i(8583),u=i(3738),d=i(6627),p=i(1095);function m(t,e){1&t&&(o.TgZ(0,"div",2),o.TgZ(1,"h1"),o._uU(2,"Ups, no hay actividades disponibles"),o.qZA(),o.TgZ(3,"h2"),o.TgZ(4,"a",3),o._uU(5,"Organicemos una!"),o.qZA(),o.qZA(),o.qZA())}function h(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",11),o.NdJ("click",function(){o.CHM(t);const e=o.oxw().$implicit;return o.oxw().eliminar(e.uid)}),o.TgZ(1,"mat-icon"),o._uU(2,"delete"),o.qZA(),o.qZA()}}function g(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",12),o.NdJ("click",function(){o.CHM(t);const e=o.oxw().$implicit;return o.oxw().navigate(e.uid)}),o.TgZ(1,"mat-icon"),o._uU(2),o.qZA(),o._uU(3),o.qZA()}if(2&t){const t=o.oxw().$implicit,e=o.oxw();o.Q6J("disabled",e.checkParticipant(t)),o.xp6(2),o.Oqu(e.checkParticipant(t)?"check":"add"),o.xp6(1),o.hij(" ",e.checkParticipant(t)?"Participando":"Participar"," ")}}function f(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",13),o.NdJ("click",function(){o.CHM(t);const e=o.oxw().$implicit;return o.oxw().navigate(e.uid)}),o.TgZ(1,"mat-icon"),o._uU(2,"edit"),o.qZA(),o._uU(3," Editar "),o.qZA()}}const v=function(t){return{"justify-content":t}};function Z(t,e){if(1&t){const t=o.EpF();o.ynx(0),o.TgZ(1,"mat-card"),o.TgZ(2,"mat-card-header",4),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().navigate(e.uid)}),o.TgZ(3,"mat-card-title"),o.TgZ(4,"mat-icon"),o._uU(5),o.qZA(),o._uU(6),o.qZA(),o.TgZ(7,"mat-card-subtitle"),o.TgZ(8,"mat-icon"),o._uU(9,"person"),o.qZA(),o._uU(10),o.qZA(),o.TgZ(11,"mat-card-subtitle",5),o.TgZ(12,"div",6),o.TgZ(13,"mat-icon"),o._uU(14,"event"),o.qZA(),o._uU(15),o.ALo(16,"date"),o.qZA(),o.TgZ(17,"div",6),o.TgZ(18,"mat-icon"),o._uU(19,"schedule"),o.qZA(),o._uU(20),o.qZA(),o.qZA(),o._UZ(21,"mat-card-subtitle"),o.qZA(),o.TgZ(22,"mat-card-content"),o._uU(23),o.qZA(),o.TgZ(24,"mat-card-actions",7),o.YNc(25,h,3,0,"button",8),o.YNc(26,g,4,3,"button",9),o.YNc(27,f,4,0,"button",10),o.qZA(),o.qZA(),o.BQk()}if(2&t){const t=e.$implicit,i=o.oxw();o.xp6(5),o.Oqu(i.ICONS[t.meanOfTransportation.toString()]),o.xp6(1),o.hij(" ",t.title," "),o.xp6(4),o.AsE(" ",t.creators[0].name," ",t.creators[0].surname," "),o.xp6(5),o.hij(" ",o.lcZ(16,11,t.startDate)," "),o.xp6(5),o.hij(" ",t.startTime," "),o.xp6(3),o.hij(" ",t.description," "),o.xp6(1),o.Q6J("ngStyle",o.VKq(13,v,t.isOwner?"space-between":"flex-end")),o.xp6(1),o.Q6J("ngIf",t.isOwner),o.xp6(1),o.Q6J("ngIf",!t.isOwner),o.xp6(1),o.Q6J("ngIf",t.isOwner)}}let _=(()=>{class t{constructor(t,e,i){this.activitiesService=t,this.router=e,this.authService=i,this.ICONS=c,this.activitiesLoaded$=(0,n.of)(!0),this.loggedUserName=i.getLoggedUserName()}ngOnInit(){this.uid=this.authService.getUserId(),this._activitiesSubscription=this.activitiesService.getAll().subscribe(t=>{this.activities=t,this.sortActivities(),this.checkOwner(),this.checkExipired(),this.activitiesLoaded$=(0,n.of)(0===this.activities.length)})}checkExipired(){this.activities=this.activities.filter(t=>new Date(t.startDate).toLocaleDateString()>=(new Date).toLocaleDateString())}sortActivities(){this.activities.sort((t,e)=>t.startDate<e.startDate?-1:1)}checkOwner(){this.activities.forEach(t=>{t.isOwner=void 0!==t.creators.find(t=>t.uid===this.uid)})}checkParticipant(t){return void 0!==t.participants.find(t=>t.uid===this.uid)}eliminar(t){this.activitiesService.delete(t).subscribe(()=>{window.location.reload()})}ngOnDestroy(){this._activitiesSubscription.unsubscribe()}navigate(t){this.router.navigate(["actividad/ver",t])}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(a._),o.Y36(r.F0),o.Y36(s.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-participar"]],decls:3,vars:4,consts:[["class","m-5",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"m-5"],["routerLink","/actividad/organizar"],[3,"click"],[1,"when"],[1,"icon-time"],[3,"ngStyle"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(o.YNc(0,m,6,0,"div",0),o.ALo(1,"async"),o.YNc(2,Z,28,15,"ng-container",1)),2&t&&(o.Q6J("ngIf",o.lcZ(1,2,e.activitiesLoaded$)),o.xp6(2),o.Q6J("ngForOf",e.activities))},directives:[l.O5,l.sg,r.yS,u.a8,u.dk,u.n5,d.Hw,u.$j,u.dn,u.hq,l.PC,p.lW],pipes:[l.Ov,l.uU],styles:["mat-card[_ngcontent-%COMP%]{margin:2vw}mat-card-actions[_ngcontent-%COMP%]{flex-direction:row}mat-card-actions[_ngcontent-%COMP%], mat-card-subtitle.when[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.icon-time[_ngcontent-%COMP%]{align-content:space-around}.empty[_ngcontent-%COMP%], .icon-time[_ngcontent-%COMP%]{display:flex;align-items:center}.empty[_ngcontent-%COMP%]{flex-direction:column}"]}),t})()},982:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ContactosModule:()=>J});var n=i(8583),c=i(4872),o=i(3679),a=i(4655),r=i(7716),s=i(8060),l=i(1841);let u=(()=>{class t{constructor(t){this.http=t,this._controllerName="users"}get(t){return this.http.get(`${this._controllerName}/${t}/contacts`)}add(t,e){return this.http.post(`${this._controllerName}/${t}/contacts`,{email:e})}remove(t,e){return this.http.delete(`${this._controllerName}/${t}/contacts/${e}`)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(l.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e){this.authService=t,this.contactosService=e}resolve(t,e){const i=this.authService.getUserId();return this.contactosService.get(i)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(s.e),r.LFG(u))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=i(3071);let m=(()=>{class t{constructor(t){this.usuariosService=t}resolve(t,e){return this.usuariosService.getAll()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(p.K))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=i(9761),g=i(8002),f=i(6332),v=i(6324),Z=i(3738),_=i(8295),w=i(9983),A=i(1554),x=i(1095),C=i(6627),b=i(2458),O=i(2789),k=i(1436);function q(t,e){if(1&t&&(r.TgZ(0,"mat-option",10),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.Q6J("value",t.email),r.xp6(1),r.AsE(" ",t.name," ",t.surname," ")}}function T(t,e){1&t&&r._UZ(0,"th",19)}function U(t,e){if(1&t&&(r.TgZ(0,"td",20),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.AsE(" ",t.name," ",t.surname,"")}}function y(t,e){1&t&&r._UZ(0,"th",19)}function S(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",21),r.TgZ(1,"button",22),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw(2).remove(e)}),r.TgZ(2,"mat-icon"),r._uU(3,"delete"),r.qZA(),r.qZA(),r.qZA()}}function N(t,e){1&t&&r._UZ(0,"tr",23)}function $(t,e){if(1&t&&(r.TgZ(0,"mat-card",11),r.TgZ(1,"mat-card-header"),r.TgZ(2,"mat-card-title"),r._uU(3,"Mis usuarios frecuentes"),r.qZA(),r.qZA(),r.TgZ(4,"table",12),r.ynx(5,13),r.YNc(6,T,1,0,"th",14),r.YNc(7,U,2,2,"td",15),r.BQk(),r.ynx(8,16),r.YNc(9,y,1,0,"th",14),r.YNc(10,S,4,0,"td",17),r.BQk(),r.YNc(11,N,1,0,"tr",18),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(4),r.Q6J("dataSource",t.contacts),r.xp6(7),r.Q6J("matRowDefColumns",t.displayedColumns)}}const I=[{path:"contactos",component:(()=>{class t{constructor(t,e,i,n){this.route=t,this.contactosService=e,this.authService=i,this.snackBarService=n,this.displayedColumns=["nombreApellido","acciones"],this.myControl=new o.NI}ngOnInit(){this._userId=this.route.snapshot.params.id,this.users=this.route.snapshot.data[f.p.USUARIOS].users.filter(t=>t.uid!==this.authService.getUserId()),this.contacts=this.route.snapshot.data[f.p.CONTACTOS].contacts,this.filteredOptions=this.myControl.valueChanges.pipe((0,h.O)(""),(0,g.U)(t=>this._filter(t)))}_filter(t){const e=t.toLowerCase();return this.users.filter(t=>t.name.toLowerCase().includes(e))}onSelectionChange(t){this.selectedOption=t.option.value}agregarContacto(){this.contactosService.add(this.authService.getUserId(),this.selectedOption).subscribe(t=>{this.snackBarService.openSnackBar("Usuario frecuente agregado!",!0),this.contacts=t.user.contacts})}remove(t){const e=this.authService.getLoggedUser();this.contactosService.remove(e.uid,t.id).subscribe(t=>{this.snackBarService.openSnackBar("Usuario frecuente eliminado!",!0),this.contacts=t.contacts})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.gz),r.Y36(u),r.Y36(s.e),r.Y36(v.c))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-agregar"]],decls:15,vars:6,consts:[[1,"row","justify-content-center","padding-top-15","padding-left-50","example-card","padding-bottom"],[1,"example-card"],[1,"example-form"],["appearance","fill",1,"example-full-width"],["autocomplete","off","type","text","matInput","","placeholder","Nombre",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["type","button","mat-icon-button","",3,"click"],["class","example-card mt-2",4,"ngIf"],[3,"value"],[1,"example-card","mt-2"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nombreApellido"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","acciones"],["mat-cell","","class","header-align-right",4,"matCellDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"header-align-right"],["matTooltip","Eliminar","mat-icon-button","",3,"click"],["mat-row",""]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h1"),r._uU(2,"Agregar usuario frecuente"),r.qZA(),r.TgZ(3,"mat-card",1),r.TgZ(4,"form",2),r.TgZ(5,"mat-form-field",3),r._UZ(6,"input",4),r.TgZ(7,"mat-autocomplete",5,6),r.NdJ("optionSelected",function(t){return e.onSelectionChange(t)}),r.YNc(9,q,2,3,"mat-option",7),r.ALo(10,"async"),r.qZA(),r.qZA(),r.TgZ(11,"button",8),r.NdJ("click",function(){return e.agregarContacto()}),r.TgZ(12,"mat-icon"),r._uU(13,"add"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(14,$,12,2,"mat-card",9),r.qZA()),2&t){const t=r.MAs(8);r.xp6(6),r.Q6J("formControl",e.myControl)("matAutocomplete",t),r.xp6(3),r.Q6J("ngForOf",r.lcZ(10,4,e.filteredOptions)),r.xp6(5),r.Q6J("ngIf",e.contacts.length)}},directives:[Z.a8,o._Y,o.JL,_.KE,w.Nt,o.Fj,A.ZL,o.JJ,o.oH,A.XC,n.sg,x.lW,C.Hw,n.O5,b.ey,Z.dk,Z.n5,O.BZ,O.w1,O.fO,O.Dz,O.nj,O.ge,O.ev,k.gM,O.Gk],pipes:[n.Ov],styles:["table[_ngcontent-%COMP%]{width:100%}.header-align-right[_ngcontent-%COMP%]{display:flex;padding:21px 0;justify-content:flex-end}.example-card[_ngcontent-%COMP%]{max-width:90vw}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:4vh}@media only screen and (max-width: 768px) and (max-height: 882px){table[_ngcontent-%COMP%]{width:80vw}.header-align-right[_ngcontent-%COMP%]{display:flex;padding:21px 0;justify-content:flex-end}.example-card[_ngcontent-%COMP%]{width:100vw}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:4vh}}"]}),t})(),resolve:{ContactsResolver:d,UsersResolver:m}}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.Bz.forChild(I)],a.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,M,c.q,o.UX]]}),t})()},3224:(t,e,i)=>{"use strict";i.d(e,{_:()=>a});var n=i(8002),c=i(7716),o=i(1841);let a=(()=>{class t{constructor(t){this.httpClient=t,this._controllerName="activities"}getAll(){return this.httpClient.get(this._controllerName).pipe((0,n.U)(t=>t.activities))}get(t){return this.httpClient.get(`${this._controllerName}/${t}`)}save(t){return this.httpClient.post(`${this._controllerName}`,t).pipe((0,n.U)(t=>t.title))}update(t){return this.httpClient.patch(`${this._controllerName}/${t.uid}`,t)}delete(t){return this.httpClient.delete(`${this._controllerName}/${t}`)}disparticipate(t){}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(o.eN))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);