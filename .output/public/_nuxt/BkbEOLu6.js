import{s as l}from"./DD3ENQQv.js";import{B as p}from"./B3_v5Jja.js";import{D as t,I as i,C as a,a0 as d,O as u,$ as m,a2 as o}from"./CdUlu0ZY.js";var b=function(r){var e=r.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(e("progressbar.height"),`;
    background: `).concat(e("progressbar.background"),`;
    border-radius: `).concat(e("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(e("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(e("progressbar.label.color"),`;
    font-size: `).concat(e("progressbar.label.font.size"),`;
    font-weight: `).concat(e("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`)},c={root:function(r){var e=r.instance;return["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},g=p.extend({name:"progressbar",theme:b,classes:c}),v={name:"BaseProgressBar",extends:l,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:g,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},f={name:"ProgressBar",extends:v,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},h=["aria-valuenow"];function y(n,r,e,k,w,s){return t(),i("div",a({role:"progressbar",class:n.cx("root"),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},n.ptmi("root")),[s.determinate?(t(),i("div",a({key:0,class:n.cx("value"),style:s.progressStyle},n.ptm("value")),[n.value!=null&&n.value!==0&&n.showValue?(t(),i("div",a({key:0,class:n.cx("label")},n.ptm("label")),[d(n.$slots,"default",{},function(){return[u(m(n.value+"%"),1)]})],16)):o("",!0)],16)):s.indeterminate?(t(),i("div",a({key:1,class:n.cx("value")},n.ptm("value")),null,16)):o("",!0)],16,h)}f.render=y;export{f as s};
