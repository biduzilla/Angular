"use strict";(self.webpackChunkWeatherApp=self.webpackChunkWeatherApp||[]).push([[638],{638:(Hn,ue,l)=>{l.r(ue),l.d(ue,{HomeModule:()=>Tn});var C=l(895),o=l(256),A=l(529),g=l(340);let vt=(()=>{class n{constructor(e){this.httpClient=e}getWeatherData(e,r){return this.httpClient.get(g.N.weatherApiBaseUrl,{headers:(new A.WM).set(g.N.XRapidAPIHostHeaderName,g.N.XRapidAPIHostHeaderNameValue).set(g.N.XRapidAPIKeyHeaderName,g.N.XRapidAPIKeyHeaderNameValue),params:(new A.LE).set("q",`${e},${r}`)})}getLocal(e){return this.httpClient.get("https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi",{headers:(new A.WM).set(g.N.XRapidAPIHostHeaderName,"ca24613bedmshdb8c362ecba0242p12359fjsn337beb0c2285").set(g.N.XRapidAPIKeyHeaderName,"address-from-to-latitude-longitude.p.rapidapi.com"),params:(new A.LE).set("address",e)})}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(A.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Ct=l(76),Vt=l(751),bt=l(742),At=l(421),Mt=l(669),Dt=l(403),wt=l(268),Ft=l(810),Ot=l(4);let ce=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends ce{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),St={provide:h,useExisting:(0,o.Gpc)(()=>O),multi:!0},Gt=new o.OlP("CompositionEventMode");let O=(()=>{class n extends ce{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function xt(){const n=(0,C.q)()?(0,C.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Gt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([St]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),f=new o.OlP("NgAsyncValidators");function Ve(n){return null!=n}function be(n){return(0,o.QGY)(n)?(0,Ct.D)(n):n}function Ae(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Me(n,t){return t.map(e=>e(n))}function De(n){return n.map(t=>function Pt(n){return!n.validate}(t)?t:e=>t.validate(e))}function U(n){return null!=n?function we(n){if(!n)return null;const t=n.filter(Ve);return 0==t.length?null:function(e){return Ae(Me(e,t))}}(De(n)):null}function j(n){return null!=n?function Fe(n){if(!n)return null;const t=n.filter(Ve);return 0==t.length?null:function(e){return function Et(...n){const t=(0,Mt.jO)(n),{args:e,keys:r}=(0,bt.D)(n),i=new Vt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let v=a,b=a;for(let R=0;R<a;R++){let le=!1;(0,At.Xf)(e[R]).subscribe((0,Dt.x)(s,kn=>{le||(le=!0,b--),d[R]=kn},()=>v--,void 0,()=>{(!v||!le)&&(b||s.next(r?(0,Ft.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,wt.Z)(t)):i}(Me(e,t).map(be)).pipe((0,Ot.U)(Ae))}}(De(n)):null}function Ee(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function L(n){return n?Array.isArray(n)?n:[n]:[]}function S(n,t){return Array.isArray(n)?n.includes(t):n===t}function Se(n,t){const e=L(t);return L(n).forEach(i=>{S(e,i)||e.push(i)}),e}function xe(n,t){return L(t).filter(e=>!S(n,e))}class Ge{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=U(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends Ge{get formDirective(){return null}get path(){return null}}class m extends Ge{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Be{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ie=(()=>{class n extends Be{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Pe=(()=>{class n extends Be{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const M="VALID",G="INVALID",V="PENDING",D="DISABLED";function Z(n){return(B(n)?n.validators:n)||null}function ke(n){return Array.isArray(n)?U(n):n||null}function z(n,t){return(B(t)?t.asyncValidators:n)||null}function He(n){return Array.isArray(n)?j(n):n||null}function B(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class je{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=ke(this._rawValidators),this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===G}get pending(){return this.status==V}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=ke(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=He(t)}addValidators(t){this.setValidators(Se(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Se(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(xe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(xe(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const e=be(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(G)?G:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){B(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}class $ extends je{constructor(t,e,r){super(Z(e),z(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function Ue(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function Re(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const w=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>J}),J="always";function F(n,t,e=J){Q(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Yt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Le(n,t)})}(n,t),function Zt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Wt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Le(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function qt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function T(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Q(n,t){const e=function Oe(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Ee(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Ne(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Ee(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();T(t._rawValidators,i),T(t._rawAsyncValidators,i)}function Le(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}const Xt={provide:c,useExisting:(0,o.Gpc)(()=>H)},E=(()=>Promise.resolve())();let H=(()=>{class n extends c{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new $({},U(e),j(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){E.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),F(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){E.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){E.then(()=>{const r=this._findContainer(e.path),i=new $({});(function qe(n,t){Q(n,t)})(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){E.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){E.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function Ye(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(f,10),o.Y36(w,8))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Xt]),o.qOj]}),n})();function We(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ze(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const ze=class extends je{constructor(t=null,e,r){super(Z(e),z(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Ze(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){We(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){We(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Ze(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},tn={provide:m,useExisting:(0,o.Gpc)(()=>te)},Qe=(()=>Promise.resolve())();let te=(()=>{class n extends m{constructor(e,r,i,s,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new ze,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ee(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function Jt(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function K(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){F(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Qe.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);Qe.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function I(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,9),o.Y36(u,10),o.Y36(f,10),o.Y36(h,10),o.Y36(o.sBO,8),o.Y36(w,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([tn]),o.qOj,o.TTD]}),n})(),Xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),wn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[et]}),n})(),Fn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:w,useValue:e.callSetDisabledState??J}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[wn]}),n})();function On(n,t){1&n&&o._UZ(0,"img",25)}function Nn(n,t){1&n&&o._UZ(0,"img",26)}function Sn(n,t){1&n&&o._UZ(0,"img",27)}function xn(n,t){1&n&&o._UZ(0,"img",28)}function Gn(n,t){if(1&n&&(o.TgZ(0,"div",5)(1,"div",6),o.YNc(2,On,1,0,"img",7),o.YNc(3,Nn,1,0,"img",8),o.YNc(4,Sn,1,0,"img",9),o.YNc(5,xn,1,0,"img",10),o.TgZ(6,"div",11)(7,"div",12),o._uU(8),o.ALo(9,"date"),o.qZA(),o.TgZ(10,"div",12),o._uU(11),o.qZA(),o.TgZ(12,"div",13),o._uU(13),o.ALo(14,"number"),o.qZA()()(),o.TgZ(15,"div",14)(16,"div",15),o._uU(17,"Mais Informa\xe7\xf5es"),o.qZA(),o.TgZ(18,"div",16)(19,"div",17)(20,"div",18),o._UZ(21,"img",19),o.qZA(),o.TgZ(22,"div",20),o._uU(23),o.qZA()(),o.TgZ(24,"div",17)(25,"div",18),o._UZ(26,"img",21),o.TgZ(27,"span",22),o._uU(28,"Umidade"),o.qZA()(),o.TgZ(29,"div",20),o._uU(30),o.qZA()(),o.TgZ(31,"div",17)(32,"div",18),o._UZ(33,"img",23),o.TgZ(34,"span",22),o._uU(35,"Vento"),o.qZA()(),o.TgZ(36,"div",20),o._uU(37),o.qZA()(),o.TgZ(38,"div",17)(39,"div",18),o._UZ(40,"img",24),o.TgZ(41,"span",22),o._uU(42,"Precipita\xe7\xe3o"),o.qZA()(),o.TgZ(43,"div",20),o._uU(44),o.qZA()()()()()),2&n){const e=o.oxw();o.xp6(2),o.Q6J("ngIf",e.weatherData.current.temp_c<=15&&0==e.weatherData.current.is_day),o.xp6(1),o.Q6J("ngIf",e.weatherData.current.temp_c<=15&&1==e.weatherData.current.is_day),o.xp6(1),o.Q6J("ngIf",e.weatherData.current.temp_c>15&&1==e.weatherData.current.is_day),o.xp6(1),o.Q6J("ngIf",e.weatherData.current.temp_c>15&&0==e.weatherData.current.is_day),o.xp6(3),o.hij(" ",o.xi3(9,13,e.weatherData.location.localtime,"shortTime")," "),o.xp6(3),o.AsE(" ",e.weatherData.location.name," - ",e.weatherData.location.country," "),o.xp6(2),o.hij(" ",o.xi3(14,16,e.weatherData.current.temp_c,"1.0-0"),"\xb0C "),o.xp6(8),o.s9C("src",e.weatherData.current.condition.icon,o.LSH),o.xp6(2),o.hij(" ",e.weatherData.current.condition.text," "),o.xp6(7),o.hij(" ",e.weatherData.current.humidity,"% "),o.xp6(7),o.hij(" ",e.weatherData.current.wind_kph," km/h "),o.xp6(7),o.hij(" ",e.weatherData.current.precip_mm," mm ")}}let Bn=(()=>{class n{constructor(e){this.weatherService=e}ngOnInit(){this.weatherData={location:{name:"Teste",region:"Distrito Federal",country:"Brazil",lat:-15.78,lon:-47.92,tz_id:"America/Sao_Paulo",localtime_epoch:1668741934,localtime:"2022-11-18 22:25"},current:{last_updated_epoch:1668741300,last_updated:"2022-11-18 00:15",temp_c:14,temp_f:71.6,is_day:1,condition:{text:"Partly cloudy",icon:"//cdn.weatherapi.com/weather/64x64/night/116.png",code:1003},wind_mph:2.2,wind_kph:3.6,wind_degree:60,wind_dir:"ENE",pressure_mb:1016,pressure_in:30,precip_mm:0,precip_in:0,humidity:78,cloud:75,feelslike_c:24.6,feelslike_f:76.2,vis_km:10,vis_miles:6,uv:1,gust_mph:7.2,gust_kph:11.5}}}onSubmit(){this.getLocalData(this.cityName),this.cityName=""}getWeatherData(e,r){this.weatherService.getWeatherData(e,r).subscribe({next:i=>{this.weatherData=i}})}getLocalData(e){this.weatherService.getLocal(e).subscribe({next:r=>{this.local=r;var i=`${this.local.Results[0].latitude.toString()},${this.local.Results[0].longitude.toString()}`;console.log("adress: ",i),this.getWeatherData(this.local.Results[0].latitude.toString(),this.local.Results[0].longitude.toString())}})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(vt))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-home"]],decls:6,vars:2,consts:[[1,"search"],[1,"search__form",3,"ngSubmit"],["type","text","placeholder","Ex: Bras\xedlia",1,"search__form__input",3,"ngModel","ngModelChange"],["type","submit",1,"search__form__botao",3,"keyup.enter"],["class","container",4,"ngIf"],[1,"container"],[1,"container__upper-data"],["class","container__upper-data__img","src","../assets/5.png",4,"ngIf"],["class","container__upper-data__img","src","../assets/4.png",4,"ngIf"],["class","container__upper-data__img","src","../assets/2.png",4,"ngIf"],["class","container__upper-data__img","src","../assets/3.png",4,"ngIf"],[1,"container__upper-data__weather-data"],[1,"container__upper-data__weather-data__location"],[1,"container__upper-data__weather-data__temperature"],[1,"container__lower-data"],[1,"container__lower-data__moreInfo-label"],[1,"container__lower-data__moreInfo-container"],[1,"container__lower-data__moreInfo-container__info-block"],[1,"container__lower-data__moreInfo-container__info-block__label"],[3,"src"],[1,"container__lower-data__moreInfo-container__info-block__value"],["src","../assets/humidity.png",1,"container__lower-data__moreInfo-container__info-block__label__img"],[1,"container__lower-data__moreInfo-container__info-block__label__span"],["src","../assets/wind.png",1,"container__lower-data__moreInfo-container__info-block__label__img"],["src","../assets/water.png",1,"container__lower-data__moreInfo-container__info-block__label__img"],["src","../assets/5.png",1,"container__upper-data__img"],["src","../assets/4.png",1,"container__upper-data__img"],["src","../assets/2.png",1,"container__upper-data__img"],["src","../assets/3.png",1,"container__upper-data__img"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"form",1),o.NdJ("ngSubmit",function(){return r.onSubmit()}),o.TgZ(2,"input",2),o.NdJ("ngModelChange",function(s){return r.cityName=s}),o.qZA(),o.TgZ(3,"button",3),o.NdJ("keyup.enter",function(){return r.onSubmit()}),o._uU(4," Pesquisar "),o.qZA()()(),o.YNc(5,Gn,45,19,"div",4)),2&e&&(o.xp6(2),o.Q6J("ngModel",r.cityName),o.xp6(3),o.Q6J("ngIf",r.weatherData))},dependencies:[C.O5,Xe,O,Ie,Pe,te,H,C.JJ,C.uU],styles:[".search[_ngcontent-%COMP%]{box-sizing:border-box;margin-bottom:1em;text-align:center}.search__form[_ngcontent-%COMP%]{display:flex;flex-direction:row}.search__form__input[_ngcontent-%COMP%]{background-color:var(--shadow-light);outline:none;padding:1em;color:var(--grey-1);font-size:1.2em;text-align:center;border-top-left-radius:20px;border-bottom-left-radius:20px;width:75%}.search__form__botao[_ngcontent-%COMP%]{width:25%;background-color:var(--grey-1);color:var(--blue-2);display:block;flex:1;border:none;border-top-right-radius:20px;border-bottom-right-radius:20px;font-size:18px;padding:.5em;cursor:pointer;transition:opacity .2s}.search__form__botao[_ngcontent-%COMP%]:hover{opacity:.8}.container[_ngcontent-%COMP%]{width:400px;height:80vh;border-radius:20px;background-color:var(--blue-2);box-shadow:10px 10px 10px var(--shadow-dark)}.container__upper-data[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:50%;border-top-left-radius:20px;border-top-right-radius:20px}.container__upper-data__img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.container__upper-data__weather-data[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;height:100%;background-color:var(--shadow-dark);display:flex;flex-direction:column;align-items:center;justify-content:center}.container__upper-data__weather-data__location[_ngcontent-%COMP%]{color:var(--white);text-align:center;font-size:1.2em}.container__upper-data__weather-data__temperature[_ngcontent-%COMP%]{color:var(--white);text-align:center;font-size:4em;font-weight:900}.container__lower-data[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:50%;border-bottom-left-radius:20px;border-bottom-right-radius:20px;padding:1em;display:flex;flex-direction:column}.container__lower-data__moreInfo-label[_ngcontent-%COMP%]{color:var(--white)}.container__lower-data__moreInfo-container[_ngcontent-%COMP%]{flex:1;background-color:var(--shadow-light);border-bottom-left-radius:20px;border-bottom-right-radius:20px;margin-top:1em;display:flex;flex-direction:row;flex-wrap:wrap}.container__lower-data__moreInfo-container__info-block[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:row}.container__lower-data__moreInfo-container__info-block__label[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.container__lower-data__moreInfo-container__info-block__label__img[_ngcontent-%COMP%]{width:1.5em}.container__lower-data__moreInfo-container__info-block__label__span[_ngcontent-%COMP%]{color:var(--white);font-size:.8em}.container__lower-data__moreInfo-container__info-block__value[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:flex-start;align-items:center;color:var(--white)}"]}),n})();var yt=l(773);const In=[{path:"",component:Bn}];let Pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[yt.Bz.forChild(In),yt.Bz]}),n})(),Tn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[C.ez,Pn,Fn]}),n})()}}]);