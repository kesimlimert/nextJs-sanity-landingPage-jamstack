import{s as V,B as D,r as o,u as pe,a as r,c as Fe,d as ke,e as he,f as Ne,A as je,U as Be,S as $e,C as fe,g as te,h as Qe,i as We,k as Ye,l as qe,j as B,P as Ue,_ as Ve,m as ze,n as He,o as Ge,p as Ke,q as Xe,t as Je,F as Ze,v as Y,w as et,T as q,x as K,y as ye,H as tt,z as nt,D as st,E as rt,G as at,I as ot,J as it,K as ge,L as ct,M as se,N as lt,O as ut,Q as dt,R as re,V as mt,W as pt,X as ht,Y as ft,Z as yt,$ as gt,a0 as X,a1 as J,a2 as U,a3 as St,a4 as It,a5 as Se,a6 as vt,a7 as Ie,a8 as bt,a9 as Lt,aa as Tt,ab as Rt,ac as Et,ad as _t}from"./sanity-93c7e6b7.js";import{useDeskTool as wt,useDeskToolSetting as ae,Delay as Ct}from"./index-1873ab3b-00716064.js";import{P as Pt}from"./PaneItem-9b239a45-d7c9999a.js";import"./json-inspector-007063f1.js";var oe,ie,ce,le,ue;function $(s,e){return e||(e=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(e)}}))}const de=100,Z=2e3,ve={by:[{field:"_updatedAt",direction:"desc"}]},xt={};function At(s){return ft(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Ot=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function be(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=s.match(Ot);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),u=e[a];return typeof u=="string"?u:null}return t}function Mt(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Dt(s,e){const n=s.by.map(t=>{if(t.mapWith)return t;const a=Ft(e,t.field);return a?Nt(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===s.by[a])?s:{...s,by:n}}function Ft(s,e){const n=ze(e);let t=s;for(const a of n){if(!t)return;if(typeof a=="string"){t=kt(t,a);continue}if(!(He(a)||Ge(a))||t.jsonType!=="array")return;const[i,l]=t.of||[];if(l||!i)return;if(!Ke(i)){t=i;continue}const[c,h]=i.to||[];if(h||!c)return;t=c}return t}function kt(s,e){if(!("fields"in s))return;const n=s.fields.find(t=>t.name===e);return n?n.type:void 0}function Nt(s,e){let n=s.type;for(;n;){if(n.name===e||!n.type&&n.jsonType===e)return!0;n=n.type}return!1}const jt=V(D)(oe||(oe=$([`
  position: relative;
`]))),Bt=V(D)(ie||(ie=$([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),$t=[...Array(30).keys()];function Qt(s){const{layout:e}=s;return r(ye,{padding:2,space:1,children:$t.map(n=>r(fe,{padding:2,children:r(yt,{isPlaceholder:!0,layout:e})},n))})}function Wt(s){const{childItemId:e,error:n,filterIsSimpleTypeConstraint:t,hasMaxItems:a,hasSearchQuery:u,isActive:i,isLazyLoading:l,isLoading:c,items:h,layout:S,loadingVariant:f,onListChange:I,onRetry:R,searchInputElement:m,showIcons:y}=s,E=te(),{collapsed:P}=Xe(),{collapsed:p,index:T}=pe(),[v,_]=o.useState(!1),w=o.useCallback(()=>{c||l||!v||I()},[l,c,I,v]);o.useEffect(()=>{if(p)return;const g=setTimeout(()=>{_(!0)},0);return()=>{clearTimeout(g)}},[p,h]);const F=o.useCallback((g,d)=>{let{activeIndex:A}=d;const C=Je(g._id),O=e===C,L=!i&&O,b=i&&O,Q=A===h.length-1,M=Q&&l,z=Q&&a;return B(Ze,{children:[r(Pt,{icon:y===!1?!1:void 0,id:C,layout:S,marginBottom:1,pressed:L,schemaType:E.get(g._type),selected:b,value:g}),M&&r(Y,{align:"center",justify:"center",padding:4,children:r(et,{muted:!0})}),z&&r(D,{marginY:1,paddingX:3,paddingY:4,children:B(q,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",Z," documents"]})})]})},[e,i,h.length,S,E,y,a,l]),x=o.useMemo(()=>u?r(Y,{align:"center",direction:"column",height:"fill",justify:"center",children:r(K,{width:1,children:r(D,{paddingX:4,paddingY:5,children:r(q,{align:"center",muted:!0,children:"No results found"})})})}):r(Y,{align:"center",direction:"column",height:"fill",justify:"center",children:r(K,{width:1,children:r(D,{paddingX:4,paddingY:5,children:r(q,{align:"center",muted:!0,children:t?"No documents of this type":"No matching documents"})})})}),[t,u]),k=o.useMemo(()=>{if(!v)return null;if(n)return r(Y,{align:"center",direction:"column",height:"fill",justify:"center",children:r(K,{width:1,children:B(ye,{paddingX:4,paddingY:5,space:4,children:[r(tt,{as:"h3",children:"Could not fetch list items"}),B(q,{as:"p",children:["Error: ",r("code",{children:n.message})]}),R&&r(D,{children:r(he,{icon:nt,onClick:R,text:"Retry",tone:"primary"})})]})})});if(!c&&h.length===0)return x;if(f==="initial"&&c)return r(Ct,{ms:300,children:r(Qt,{layout:S})});if(f==="spinner"&&c)return null;const g="".concat(T,"-").concat(p);return r(jt,{overflow:"hidden",height:"fill",children:r(Bt,{children:r(st,{activeItemDataAttr:"data-hovered",ariaLabel:"Document list",canReceiveFocus:!0,focusRingOffset:-3,inputElement:m,itemHeight:51,items:h,onEndReached:w,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:F,wrapAround:!1},g)})})},[p,n,w,T,c,h,S,f,R,F,m,v]);return r(rt,{overflow:P||f==="initial"?"hidden":"auto",children:k})}const Le=o.memo(s=>{let{contentAfter:e,index:n,initialValueTemplates:t=[],menuItemGroups:a=[],menuItems:u=[],setLayout:i,setSortOrder:l,title:c}=s;const{features:h}=wt(),{collapsed:S,isLast:f}=pe(),I=f&&!S?-1:0,R=o.useMemo(()=>({setLayout:m=>{let{layout:y}=m;i(y)},setSortOrder:m=>{l(m)}}),[i,l]);return r(Fe,{actions:r(ke,{initialValueTemplateItems:t,actionHandlers:R,menuItemGroups:a,menuItems:u}),backButton:h.backButton&&n>0&&r(he,{as:Ne,"data-as":"a",icon:je,mode:"bleed"}),contentAfter:e,tabIndex:I,title:c})});Le.displayName="DocumentListPaneHeader";function Yt(s){const{client:e,schema:n,sort:t,limit:a,params:u,filter:i,searchQuery:l,staticTypeNames:c}=s,h=t.by,S=t==null?void 0:t.extendedProjection,f=gt(()=>e.listen("*[".concat(i,"]"),u,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(X((m,y)=>y===0&&m.type!=="welcome"?J(()=>new Error(m.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(m.type,'"'))):U(m)),St()),[I,R]=It(f,m=>m.type==="welcome");return Se(I.pipe(Ie(1)),R.pipe(vt(1e3,Et,{leading:!0,trailing:!0}))).pipe(bt(()=>(c?U(c):e.observable.fetch("array::unique(*[".concat(i,"][]._type)"),u)).pipe(X(y=>{const E=y.flatMap(_=>n.get(_)||[]),P={filter:i,query:l||"",types:E},p={__unstable_extendedProjection:S,comments:["findability-source: ".concat(l?"list-query":"list")],limit:a,params:u,sort:h},{query:T,params:v}=_t(P,p);return e.observable.fetch(T,v)}))))}const qt=[],me={error:null,onRetry:void 0,result:null},Ut={result:null,error:null};function Vt(s){const{filter:e,params:n,sortOrder:t,searchQuery:a}=s,u=at(ot),i=te(),[l,c]=o.useState(me),{onRetry:h,error:S,result:f}=l,I=f==null?void 0:f.documents,R=o.useMemo(()=>I?At(I):qt,[I]),[m,y]=o.useState(!1),[E,P]=o.useState(!1),[p,T]=o.useState(!1),v=o.useMemo(()=>be(e,n),[e,n]),_=f===null&&!S,w=(I==null?void 0:I.length)===Z,F=o.useCallback(()=>{_||E||p||T(!0)},[_,E,p]),x=o.useCallback(d=>{var A,C;if(d.error){c(d);return}const O=((C=(A=d.result)==null?void 0:A.documents)==null?void 0:C.length)||0;if(!d.error&&(d==null?void 0:d.result)===null&&p){y(!0);return}if(O<de&&O!==0&&!p&&P(!0),(d==null?void 0:d.result)===null){c(b=>({...b.error?d:b}));return}y(!1),c(d)},[p]),k=o.useMemo(()=>{const d=new it,A=()=>d.next();return Yt({client:u,filter:e,limit:p?Z:de,params:n,schema:i,searchQuery:a||"",sort:t||ve,staticTypeNames:v?[v]:void 0}).pipe(ge(L=>({result:{documents:L},error:null})),ct(Ut),se(L=>L instanceof ProgressEvent?J(()=>new Error("Request error")):J(()=>L)),se((L,b)=>Lt(U({result:null,error:L}),Se(Tt(window,"online"),d).pipe(Ie(1),X(()=>b)))),lt((L,b)=>({...L,...b,onRetry:A})))},[u,e,n,i,a,p,t,v]);o.useEffect(()=>{const d=k.subscribe(x);return()=>{d.unsubscribe()}},[x,k]);const g=o.useCallback(()=>{P(!1),y(!1),c(me),T(!1)},[]);return o.useEffect(()=>{g()},[g,e,n,t,a]),{error:S,hasMaxItems:w,isLazyLoading:m,isLoading:_,isSearchReady:!S,items:R,onListChange:F,onRetry:h}}const ee=[],zt=Be(ce||(ce=$([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Ht=V($e)(le||(le=$([`
  animation: `,` 500ms linear infinite;
`])),zt),Gt=V(fe)(ue||(ue=$([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function Kt(s){const e=o.useRef(s);return ut(e.current,s)||(e.current=s),e.current}const Xt=s=>{const{menuItems:e,sortOrderRaw:n,layout:t}=s;return e==null?void 0:e.map(a=>{var u,i,l,c;return(u=a.params)!=null&&u.layout?{...a,selected:t===((i=a.params)==null?void 0:i.layout)}:(l=a==null?void 0:a.params)!=null&&l.by?{...a,selected:dt(n==null?void 0:n.by,((c=a==null?void 0:a.params)==null?void 0:c.by)||ee)}:{...a,selected:!1}})},sn=o.memo(function(e){const{childItemId:n,index:t,isActive:a,isSelected:u,pane:i,paneKey:l}=e,c=te(),{name:h}=Qe(),{defaultLayout:S="default",displayOptions:f,initialValueTemplates:I=ee,menuItemGroups:R,menuItems:m,options:y,title:E}=i,{apiVersion:P,defaultOrdering:p=ee,filter:T}=y,v=Kt(y.params||xt),_=i.source,w=o.useMemo(()=>be(T,v),[T,v]),F=(f==null?void 0:f.showIcons)!==!1,[x,k]=ae(w,"layout",S),[g,d]=o.useState(""),[A,C]=o.useState(""),[O,L]=o.useState(null),b=o.useRef(!1),Q=o.useMemo(()=>(p==null?void 0:p.length)>0?{by:p}:ve,[p]),[M,z]=ae(w,"sortOrder",Q),Te=w&&M?Dt(M,c.get(w)):M,Re=We(Te),Ee=Mt(T),{error:_e,hasMaxItems:we,isLazyLoading:Ce,isLoading:N,isSearchReady:Pe,items:H,onListChange:xe,onRetry:Ae}=Vt({apiVersion:P,filter:T,params:v,searchQuery:g==null?void 0:g.trim(),sortOrder:Re}),Oe=o.useMemo(()=>Xt({menuItems:m,sortOrderRaw:M,layout:x}),[x,m,M]),Me=Ye(W=>W.pipe(ge(G=>G.target.value),re(C),mt(G=>G===""?U(""):Rt(300)),re(d)),[]),j=o.useCallback(()=>{d(""),C("")},[]),De=o.useCallback(W=>{W.key==="Escape"&&j()},[j]);o.useEffect(()=>(b.current===!1&&!N&&(b.current=!0),()=>{b.current=!1}),[N]),o.useEffect(()=>{j(),b.current=!1},[l,j]);const ne=o.useMemo(()=>N&&H.length===0&&b.current?"spinner":"initial",[N,H.length]);return r(qe,{name:_||h,children:B(Ue,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:l,maxWidth:640,minWidth:320,selected:u,children:[Ve,r(Le,{contentAfter:r(D,{paddingX:2,paddingBottom:2,children:r(Gt,{radius:4,tone:"transparent",children:r(pt,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:!!g,disabled:!Pe,fontSize:[2,2,1],icon:ne==="spinner"?Ht:ht,onChange:Me,onClear:j,onKeyDown:De,placeholder:"Search list",radius:2,ref:L,spellCheck:!1,value:A})})}),index:t,initialValueTemplates:I,menuItemGroups:R,menuItems:Oe,setLayout:k,setSortOrder:z,title:E}),r(Wt,{childItemId:n,error:_e,filterIsSimpleTypeConstraint:Ee,hasMaxItems:we,hasSearchQuery:!!g,isActive:a,isLazyLoading:Ce,isLoading:N,items:H,layout:x,loadingVariant:ne,onListChange:xe,onRetry:Ae,searchInputElement:O,showIcons:F},l)]})})});export{sn as default};
