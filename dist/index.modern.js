let e=(e,n)=>{let t=["transitionend","transitioncancel"],i=()=>e.clientHeight,a=()=>e.style,o=e=>a().display=e,r=(e=!1)=>{let t=Object.assign({height:"",overflow:"hidden",transitionDuration:".25s",transitionTimingFunction:"ease"},n);Object.entries(t).forEach(([n,t])=>{a()[n]=e?"":t})},s=n=>new Promise(o=>{r();let s=[i()+"px","0px"];n&&s.reverse();let[l,c]=s;new Promise(n=>{t.forEach(i=>{e["on"+i]=()=>{t.forEach(n=>e["on"+n]=null),n()}})}).then(()=>{r(!0),o()}),a().height=l,requestAnimationFrame(()=>{requestAnimationFrame(()=>{a().height=c})})}),l=async()=>(await s(!1),o("none"),Promise.resolve(!1)),c=async()=>(o("block"),await s(!0),Promise.resolve(!0));return{up:l,down:c,toggle:()=>i()?l():c()}},n=async(n,t={})=>await e(n,t).down(),t=async(n,t={})=>await e(n,t).up(),i=(n,t={})=>e(n,t).toggle();export{n as down,i as toggle,t as up};
