(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(87),n(38),n(11)),s=(n(92),n(78)),l=(n(95),n(80)),u=n(28),h=(n(98),n(79)),m=n(53),v=n(54),d=n(58),p=n(55),g=n(59),f=(n(101),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).onChange=function(e){var t=e.target.value;(!isNaN(t)&&/^-?([0-9]*)(\[0-9]*)?$/.test(t)||""===t||"-"===t)&&n.props.onChange(t)},n}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,Object.assign({},this.props,{onChange:this.onChange,placeholder:"Input your number",maxLength:"4",size:"large",className:"input"}))}}]),t}(o.a.Component)),b=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).randomNum=function(){for(var e=[],t=[1,2,3,4,5,6,7,8,9,0],n=0;n<4;n++){var a=Math.floor(Math.random()*(t.length-n));e.push(t.splice(a,1)[0])}return"".concat(e[0]).concat(e[1]).concat(e[2]).concat(e[3])},n.get_A_B=function(){for(var e=n.state,t=e.init,a=e.value,o=0,r=0,c=new Array(10),i=0;i<10;i++)c[i]=0;for(var s=0;s<t.length;s++){var l=t.charCodeAt(s)-48,u=a.charCodeAt(s)-48;l===u?o++:(c[l]<0&&r++,c[u]>0&&r++,c[l]++,c[u]--)}return"".concat(o,"A").concat(r,"B")},n.onChange=function(e){n.setState({value:e})},n.handleClick=function(){var e=Object(u.a)(Object(u.a)(n)),t=n.state,a=t.init,r=t.value,c=t.count;r.length<4?l.a.warning("Please enter 4 numbers"):(n.setState({show:n.get_A_B(),count:c+1}),a===r&&s.a.success({okText:"Try again",title:"Congratulations!",content:o.a.createElement("div",null,o.a.createElement("div",{style:{fontSize:"20px"}},a),o.a.createElement("p",null,"your conuts: ",c)),onOk:function(){e.setState({count:1,init:e.randomNum(),value:"",show:"0A0B"})},keyboard:!1}))},n.state={init:"",value:"",show:"0A0B",count:1},n}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.setState({init:this.randomNum()})}},{key:"render",value:function(){var e=this.state.show;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",null,"xAxB"),o.a.createElement("div",{className:"xaxb"},e),o.a.createElement(f,{value:this.state.value,onChange:this.onChange}),o.a.createElement(i.a,{type:"primary",size:"large",className:"btn",onClick:this.handleClick},"SUBMIT")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,n){e.exports=n(158)},87:function(e,t,n){}},[[82,2,1]]]);
//# sourceMappingURL=main.82d13289.chunk.js.map