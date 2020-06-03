(this["webpackJsonpreact-pokemon"]=this["webpackJsonpreact-pokemon"]||[]).push([[0],{33:function(e,t,n){e.exports=n(62)},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),l=n(9),i=n.n(l),s=n(16),m=n(12),u=n(13),p=n(15),d=n(14),h=n(10),f=n.n(h),k=n(31),E=n(7),v=function(e){return r.a.createElement("div",{className:"card text-center mx-auto",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header"},r.a.createElement("b",null,"Name: ",e.pokemon.name)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Type:",e.pokemon.types.map((function(e,t){return e.type.name+","}))),r.a.createElement(E.b,{to:"/pokemon/".concat(e.pokemon.id)},r.a.createElement("img",{src:e.pokemon.sprites.front_default,alt:""}))))},y=function(e){var t=e.data.map((function(e){return r.a.createElement(v,{pokemon:e,key:e.id})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.map((function(e,t){return r.a.createElement("div",{className:"col-sm-12 col-md-4 mb-5",key:t},e)}))))},b=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).pokemonDetails=[],e.getPokemon=Object(s.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://pokeapi.co/api/v2/pokemon?limit=150");case 2:return n=t.sent,a=n.data.results,r=[],t.next=7,e._asyncForEach(a,function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t.url);case 2:n=e.sent,r.push(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:r.sort((function(e,t){return e.id-t.id})),e.pokemonDetails=r,e.setState({displayList:r,loading:!1});case 10:case"end":return t.stop()}}),t)}))),e._asyncForEach=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.length)){e.next=7;break}return e.next=4,n(t[a],a,t);case 4:a++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e.onSelect=function(t){e._filterFunction(t)},e.onRemove=function(t){t.length>0?e._filterFunction(t):e.setState({displayList:e.pokemonDetails})},e._filterFunction=function(t){var n;n=e.pokemonDetails.filter((function(e){return t.some((function(t){return e.types.some((function(e){return t.name===e.type.name}))}))})),e.setState({displayList:n})},e.state={pokemons:[],pokemonType:[],displayList:[],loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getPokemon(),this.getPoketype()}},{key:"getPoketype",value:function(){var e=this;f.a.get("https://pokeapi.co/api/v2/type").then((function(t){e.setState({pokemonType:t.data.results})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.displayList;return r.a.createElement("div",{className:"container"},r.a.createElement(k.Multiselect,{options:this.state.pokemonType,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}),r.a.createElement("br",null),r.a.createElement("div",null,t?r.a.createElement("p",null,"Fetching pokemons....."):r.a.createElement(y,{data:n})))}}]),n}(a.Component),g=(n(61),function(){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Poke gallery is a react application that fetches Pokemon from the poke API"),r.a.createElement("p",null,"It renders the first 150 Pokemon and displays their details"),r.a.createElement("p",null,"The Pokemons can be filter by multiple types"),r.a.createElement("p",null,"To view more information about each Pokemon click on the Pokemon Image")))}),x=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={poke:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchPoketype()}},{key:"fetchPoketype",value:function(){var e=this,t=this.props.match.params;f.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.id)).then((function(t){e.setState({poke:t.data})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"render",value:function(){var e=this.state.poke;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",null,"Name : ",e.name),r.a.createElement("h1",null,"ID : ",e.id),r.a.createElement("h1",null,"Height : ",e.height),r.a.createElement("h1",null,"Weight : ",e.weight)))}}]),n}(a.Component),N=function(){return r.a.createElement("div",{className:"Title"},r.a.createElement("center",null,r.a.createElement("h2",null,"Poke Gallery")))},P=function(){var e={color:"white"};return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(N,null),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(E.b,{style:e,to:"/"},r.a.createElement("li",null,"About")),r.a.createElement(E.b,{style:e,to:"/pokemon"},r.a.createElement("li",null,"Pokemons")))))},w=n(1),j=function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/pokemon",exact:!0,component:b}),r.a.createElement(w.a,{path:"/pokemon/:id",exact:!0,component:x}),r.a.createElement(w.a,{path:"/",component:g}))))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.712c0d79.chunk.js.map