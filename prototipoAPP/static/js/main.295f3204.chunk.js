(this.webpackJsonpprototipo=this.webpackJsonpprototipo||[]).push([[0],{129:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),s=a.n(i),r=a(12),o=a.n(r),c=(a(129),a(7)),l=a(8),u=a(15),m=a(17),h=a(266),j=a(267),d=a(233),b=a(270),p=a(268),g=a(269),O=a(271),x=a.p+"static/media/logo.47caa2f7.png",f=a(272);function v(){return Object(n.jsx)(f.a,{variant:"square",style:{width:280,height:"auto",margin:"auto",backgroundColor:"transparent",marginTop:"20px",marginBottom:"40px"},children:Object(n.jsx)("img",{src:x,alt:"",style:{width:150}})})}var y=a(21),S=a(26),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={mensagem:"",status:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t={marginTop:"10px",marginBottom:"10px"},a=S.a().shape({email:S.c().email("Por favor preencha um e-mail v\xe1lido").required("Obrigat\xf3rio"),senha:S.c().required("Obrigat\xf3rio")});return Object(n.jsx)(h.a,{children:Object(n.jsxs)(j.a,{elevation:5,style:{padding:20,height:"auto",width:280,margin:"20px auto"},children:[Object(n.jsxs)(h.a,{align:"center",children:[Object(n.jsx)(v,{}),Object(n.jsx)(d.a,{variant:"h6",style:{color:"#92c52a"},children:"Entrar"})]}),""!=this.state.mensagem?Object(n.jsx)(O.a,{severity:this.state.status,children:this.state.mensagem}):"",Object(n.jsx)(y.d,{initialValues:{email:"",senha:""},onSubmit:function(t,a){a.setSubmitting(!0);var n={method:"POST",body:JSON.stringify({usuario:t}),headers:new Headers({"Content-type":"application/json"})};fetch("http://localhost:3001/login",n).then((function(e){if(e.ok)return e.json();throw new Error(e.mensagem)})).then((function(t){console.log(t.mensagem),a.setSubmitting(!1),"sucesso"==t.status?(localStorage.setItem("token",t.mensagem),e.props.history.push("/")):e.setState({mensagem:t.mensagem,status:t.status})})).catch((function(t){a.setSubmitting(!1),e.setState({mensagem:"Erro na requisi\xe7\xe3o",status:"error"})}))},validationSchema:a,children:function(e){return Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.b,{as:b.a,name:"email",label:"E-mail",placeholder:"E-mail",type:"email",variant:"outlined",fullWidth:!0,required:!0,style:t,helperText:Object(n.jsx)(y.a,{name:"email"})}),Object(n.jsx)(y.b,{as:b.a,name:"senha",label:"Senha",placeholder:"Senha",type:"password",variant:"outlined",fullWidth:!0,required:!0,style:t,helperText:Object(n.jsx)(y.a,{name:"senha"})}),Object(n.jsxs)(d.a,{variant:"subtitle2",className:"color-grey",children:["N\xe3o possui conta ainda? \xa0",Object(n.jsx)(p.a,{href:"/cadastro",variant:"subtitle2",className:"color-green",children:"Resgistre-se aqui"})]}),Object(n.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:t,disabled:e.isSubmitting,children:"ENTRE"})]})}})]})})}}]),a}(i.Component),w=a(79),E=a(14),T=a(66),k=a(115),C=function(e){var t=e.component,a=Object(k.a)(e,["component"]);return Object(n.jsx)(E.b,Object(T.a)(Object(T.a)({},a),{},{render:function(e){return null!==localStorage.getItem("token")?Object(n.jsx)(t,Object(T.a)({},e)):Object(n.jsx)(E.a,{to:{pathname:"/login",state:{mensagem:"Fa\xe7a login",status:"warning"}}})}}))},N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={mensagem:"",status:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t={marginTop:"10px",marginBottom:"10px"},a=S.a().shape({email:S.c().email("Por favor preencha um e-mail v\xe1lido").required("Obrigat\xf3rio"),senha1:S.c().required("Obrigat\xf3rio"),senha2:S.c().required("Obrigat\xf3rio").oneOf([S.b("senha1"),null],"Senhas n\xe3o batem")});return Object(n.jsx)(h.a,{children:Object(n.jsxs)(j.a,{elevation:5,style:{padding:20,height:"auto",width:280,margin:"20px auto"},children:[Object(n.jsxs)(h.a,{align:"center",children:[Object(n.jsx)(v,{}),Object(n.jsx)(d.a,{variant:"h6",style:{color:"#92c52a"},children:"Novo Registro"})]}),""!=this.state.mensagem?Object(n.jsx)(O.a,{severity:this.state.status,children:this.state.mensagem}):"",Object(n.jsx)(y.d,{initialValues:{email:"",senha1:"",senha2:""},onSubmit:function(t,a){a.setSubmitting(!0);var n={method:"POST",body:JSON.stringify({usuario:t}),headers:new Headers({"Content-type":"application/json"})};fetch("http://localhost:3001/criar/usuario",n).then((function(e){if(e.ok)return e.json();throw new Error(e.mensagem)})).then((function(t){console.log(t.mensagem),a.setSubmitting(!1),"sucesso"==t.status?(localStorage.setItem("token",t.mensagem),e.props.history.push("/")):e.setState({mensagem:t.mensagem,status:t.status})})).catch((function(t){a.setSubmitting(!1),e.setState({mensagem:"Erro na requisi\xe7\xe3o",status:"error"})}))},validationSchema:a,children:function(e){return Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.b,{as:b.a,name:"email",label:"E-mail",placeholder:"E-mail",type:"email",variant:"outlined",fullWidth:!0,required:!0,style:t,helperText:Object(n.jsx)(y.a,{name:"email"})}),Object(n.jsx)(y.b,{as:b.a,name:"senha1",label:"Senha",placeholder:"Senha",type:"password",variant:"outlined",fullWidth:!0,required:!0,style:t,helperText:Object(n.jsx)(y.a,{name:"senha1"})}),Object(n.jsx)(y.b,{as:b.a,name:"senha2",label:"Confirmar Senha",placeholder:"Confirmar Senha",type:"password",variant:"outlined",fullWidth:!0,required:!0,style:t,helperText:Object(n.jsx)(y.a,{name:"senha2"})}),Object(n.jsxs)(d.a,{variant:"subtitle2",className:"color-grey",children:["J\xe1 possui conta? \xa0",Object(n.jsx)(p.a,{href:"/login",variant:"subtitle2",className:"color-green",children:"Entre!"})]}),Object(n.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:t,children:"REGISTRAR-SE"})]})}})]})})}}]),a}(i.Component),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t={marginTop:"10px",marginBottom:"10px"};return Object(n.jsx)(h.a,{children:Object(n.jsxs)(j.a,{elevation:5,style:{padding:20,height:"auto",width:280,margin:"20px auto"},children:[Object(n.jsx)(h.a,{align:"center",children:Object(n.jsx)(v,{})}),Object(n.jsx)(d.a,{variant:"h5",className:"color-green",style:t,children:"Bem Vindo!"}),Object(n.jsx)(d.a,{variant:"h6",style:t,children:"Agora voc\xea \xe9 um filiado!"}),Object(n.jsx)(d.a,{variant:"body1",align:"justify",style:t,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corporis corrupti delectus enim officia accusantium maiores modi laudantium placeat cupiditate facere molestiae nostrum autem architecto dolores quis voluptatum, ut libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam asperiores autem itaque optio! Omnis, est. Omnis minima ut error qui consequatur ducimus quia beatae architecto, impedit facere quo enim."}),Object(n.jsxs)(h.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(d.a,{variant:"overline",className:"color-grey-subtitle",align:"left",children:"ip: 000.000.0.00"}),Object(n.jsx)(g.a,{type:"button",color:"secondary",onClick:function(){localStorage.clear(),e.props.history.push("/login")},children:"SAIR"})]})]})})}}]),a}(i.Component),B=function(){return Object(n.jsx)(w.a,{children:Object(n.jsxs)(E.d,{children:[Object(n.jsx)(C,{exact:!0,path:"/",component:I}),Object(n.jsx)(E.b,{exact:!0,path:"/login",component:q}),Object(n.jsx)(E.b,{exact:!0,path:"/cadastro",component:N})]})})};var R=function(){return Object(n.jsx)(B,{})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,274)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),W()}},[[232,1,2]]]);
//# sourceMappingURL=main.295f3204.chunk.js.map