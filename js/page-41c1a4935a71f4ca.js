(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{5279:function(e,t,r){Promise.resolve().then(r.bind(r,9910))},9910:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var i=r(7437),s=r(5547),n=r(1817),a=r(1706),l=r(8623),o=r(2265),c=r(9376);function u(){let e=(0,c.useRouter)(),[t,r]=(0,o.useState)(!1),[u,h]=(0,o.useState)(!0),d=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=setTimeout(()=>{r(!0)},1e3),i=setTimeout(()=>{d.current&&(d.current.pause(),d.current.currentTime=0),e.push("/success")},3e3);return d.current&&(d.current.play().catch(e=>console.error("Audio playback failed:",e)),d.current.volume=.2),()=>{clearTimeout(t),clearTimeout(i),d.current&&(d.current.pause(),d.current.currentTime=0)}},[e]),(0,i.jsxs)("main",{className:"min-h-screen relative",children:[(0,i.jsx)(s.v,{}),(0,i.jsx)("div",{className:"relative z-10 p-6",children:(0,i.jsx)("div",{className:"max-w-xl mx-auto space-y-12 flex flex-col items-center text-center",children:(0,i.jsx)("div",{className:"bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-sm w-full",children:(0,i.jsxs)("div",{className:"space-y-6 flex flex-col items-center",children:[(0,i.jsx)(n.Z,{className:"w-16 h-16 text-purple-400 animate-spin"}),(0,i.jsx)("h1",{className:"text-3xl font-bold mb-2 transition-colors duration-300 ".concat(t?"text-green-400":"text-white"),children:"Submitting SolFession"}),(0,i.jsx)("p",{className:"text-gray-200",children:"Please wait while we record your story from the trenches..."})]})})})}),(0,i.jsx)("button",{onClick:()=>{d.current&&(u?d.current.pause():(d.current.play(),d.current.volume=.2),h(!u))},className:"fixed bottom-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors","aria-label":u?"Mute audio":"Unmute audio",children:u?(0,i.jsx)(a.Z,{className:"text-white"}):(0,i.jsx)(l.Z,{className:"text-white"})}),(0,i.jsxs)("audio",{ref:d,loop:!0,children:[(0,i.jsx)("source",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snore-mimimimimimi-9UTrAB5O2pTz4k3Wy8ILATnXiP4xGw.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]})]})}},5547:function(e,t,r){"use strict";r.d(t,{v:function(){return o}});var i=r(7437),s=r(2265),n=r(3145),a=r(1434);let l=e=>{let{src:t,size:r,index:l}=e,o=(0,s.useRef)(5e3+5e3*Math.random()),[c,u]=(0,s.useState)(80*Math.random()+10),[{y:h},d]=(0,a.q_)(()=>({from:{y:-r},to:async e=>{for(;;)await e({y:window.innerHeight,config:{...a.vc.molasses,duration:o.current}}),u(80*Math.random()+10),await e({y:-r,config:{duration:0}})},config:{...a.vc.molasses,duration:o.current}}));return(0,s.useEffect)(()=>{let e=()=>{u(80*Math.random()+10)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.jsx)(a.q.div,{style:{position:"absolute",left:"".concat(c,"%"),top:h,transform:"translate(-50%, -50%)"},children:(0,i.jsx)("div",{className:"rounded-full overflow-hidden",style:{boxShadow:"0 0 20px 10px rgba(255, 255, 255, 0.3)",width:r,height:r},children:(0,i.jsx)(n.default,{src:t,alt:"Decorative bubble",width:r,height:r,className:"rounded-full object-cover opacity-30"})})})};function o(){let e=(0,s.useRef)(null),[t,r]=(0,s.useState)({width:0,height:0});return(0,s.useEffect)(()=>{let t;let i=e.current;if(!i)return;let s=i.getContext("2d");if(!s)return;let n=0,a=0,l=()=>{let{width:e,height:t}=i.getBoundingClientRect();i.width=e,i.height=t,r({width:e,height:t})};class o{draw(e){s.beginPath(),s.moveTo(0,i.height);for(let t=0;t<i.width;t++){let r=e+Math.sin((t*this.period+this.phase)/100)*this.amplitude;s.lineTo(t,r)}s.lineTo(i.width,i.height),s.fillStyle=this.color,s.fill()}update(){this.phase+=.02}constructor(e,t,r,i){this.amplitude=e,this.period=t,this.phase=r,this.color=i}}let c=[new o(50,4,0,"rgba(147, 51, 234, 0.3)"),new o(40,5,2,"rgba(59, 130, 246, 0.2)"),new o(30,6,4,"rgba(236, 72, 153, 0.1)")],u=()=>{s.clearRect(0,0,i.width,i.height),s.fillStyle="rgb(17, 24, 39)",s.fillRect(0,0,i.width,i.height),c.forEach((e,t)=>{e.draw(i.height-100+50*t),e.update()}),s.fillStyle="rgba(255, 255, 255, 0.5)";for(let e=0;e<50;e++){let t=(.5*Math.sin(.001*Date.now()+e)+.5)*i.width,r=(.5*Math.cos(.0015*Date.now()+e)+.5)*i.height,n=2*Math.random()+1;s.beginPath(),s.arc(t,r,n,0,2*Math.PI),s.fill()}s.beginPath(),s.arc(n,a,25,0,2*Math.PI),s.fillStyle="rgba(255, 255, 255, 0.1)",s.fill(),t=requestAnimationFrame(u)};return l(),u(),window.addEventListener("resize",l),i.addEventListener("mousemove",e=>{let t=i.getBoundingClientRect();n=e.clientX-t.left,a=e.clientY-t.top}),()=>{window.removeEventListener("resize",l),i.removeEventListener("mousemove",()=>{}),cancelAnimationFrame(t)}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("canvas",{ref:e,className:"fixed inset-0 z-0",style:{width:"100vw",height:"100vh"}}),(0,i.jsxs)("div",{className:"fixed inset-0 z-10 overflow-hidden pointer-events-none",children:[(0,i.jsx)(l,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QmTAStnBUY7L14q5qjbsMuMPbwu2QfLVg3tSK9ikeqqRFb.jpg-V2azyNmTvgDgcfpsYwn4L1QPopC6tn.jpeg",size:100,index:0}),(0,i.jsx)(l,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QmTAStnBUY7L14q5qjbsMuMPbwu2QfLVg3tSK9ikeqqRFb.jpg-V2azyNmTvgDgcfpsYwn4L1QPopC6tn.jpeg",size:80,index:1}),(0,i.jsx)(l,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.JPG-9swDsiC1HSf8KxWMjb77ROp2scFdX9.jpeg",size:120,index:2}),(0,i.jsx)(l,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.JPG-9swDsiC1HSf8KxWMjb77ROp2scFdX9.jpeg",size:90,index:3}),(0,i.jsx)(l,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QmeBEgC2K2xHLQrivo3kPbfM9j5paY7antHbDCEXXC688o.jpg-GfTs9hZXv9hyCMbKqS1UoMyjBx6yAl.jpeg",size:150,index:4}),(0,i.jsx)(l,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QmeBEgC2K2xHLQrivo3kPbfM9j5paY7antHbDCEXXC688o.jpg-GfTs9hZXv9hyCMbKqS1UoMyjBx6yAl.jpeg",size:110,index:5})]})]})}},1817:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});let i=(0,r(9205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},9376:function(e,t,r){"use strict";var i=r(5475);r.o(i,"useRouter")&&r.d(t,{useRouter:function(){return i.useRouter}})}},function(e){e.O(0,[478,971,117,744],function(){return e(e.s=5279)}),_N_E=e.O()}]);