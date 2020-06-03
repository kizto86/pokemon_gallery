(this["webpackJsonpreact-pokemon"]=this["webpackJsonpreact-pokemon"]||[]).push([[0],{31:function(e,t,n){e.exports=n(59)},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(28),c=n.n(l),r=n(11),i=n(12),m=n(14),s=n(13),u=n(9),p=n.n(u),d=n(29),h=n(7),k=function(e){return o.a.createElement("div",{className:"card text-center mx-auto",style:{maxWidth:"18rem"}},o.a.createElement("div",{className:"card-header"},o.a.createElement("b",null,"Name: ",e.pokemon.name)),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Type:",e.pokemon.types.map((function(e,t){return e.type.name+","}))),o.a.createElement(h.b,{to:"/pokemon/".concat(e.pokemon.id)},o.a.createElement("img",{src:e.pokemon.sprites.front_default,alt:""}))))},f=function(e){var t=e.data.map((function(e){return o.a.createElement(k,{pokemon:e,key:e.id})}));return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card-columns"},t))},E=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).pokemonDetails=[],e.onSelect=function(t){e._filterFunction(t)},e.onRemove=function(t){t.length>0?e._filterFunction(t):e.setState({displayList:e.pokemonDetails})},e._filterFunction=function(t){var n;n=e.pokemonDetails.filter((function(e){return t.some((function(t){return e.types.some((function(e){return t.name===e.type.name}))}))})),e.setState({displayList:n})},e.state={pokemons:[],pokemonType:[],displayList:[],loading:!0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getPokemon(),this.getPoketype()}},{key:"getPoketype",value:function(){var e=this;p.a.get("https://pokeapi.co/api/v2/type").then((function(t){e.setState({pokemonType:t.data.results})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"getPokemon",value:function(){var e=this;p.a.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(t){e.setState({pokemons:t.data.results}),e.state.pokemons.map((function(t){p.a.get(t.url).then((function(t){var n=e.pokemonDetails;n.push(t.data);var a=n.slice(0);a.sort((function(e,t){return e.id-t.id})),e.setState({displayList:a,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}))})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.displayList;return o.a.createElement("div",{className:"container"},o.a.createElement(d.Multiselect,{options:this.state.pokemonType,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}),o.a.createElement("br",null),o.a.createElement("div",null,t?o.a.createElement("p",null,"Fetching pokemons....."):o.a.createElement(f,{data:n})))}}]),n}(a.Component),v=(n(58),function(){return o.a.createElement("div",{className:"card text-center"},o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,"Poke gallery is a react application that fetches Pokemon from the poke API"),o.a.createElement("p",null,"It renders the first 150 Pokemon and displays their details"),o.a.createElement("p",null,"The Pokemons can be filter by multiple types"),o.a.createElement("p",null,"To view more information about each Pokemon click on the Pokemon Image")))}),y=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={poke:{}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.fetchPoketype()}},{key:"fetchPoketype",value:function(){var e=this,t=this.props.match.params;p.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.id)).then((function(t){e.setState({poke:t.data})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"render",value:function(){var e=this.state.poke;return o.a.createElement("div",{className:"card text-center"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h1",null,"Name : ",e.name),o.a.createElement("h1",null,"ID : ",e.id),o.a.createElement("h1",null,"Height : ",e.height),o.a.createElement("h1",null,"Weight : ",e.weight)))}}]),n}(a.Component),g=function(){return o.a.createElement("div",{className:"Title"},o.a.createElement("center",null,o.a.createElement("h2",null,"Poke Gallery")))},b=function(){var e={color:"white"};return o.a.createElement("div",null,o.a.createElement("nav",null,o.a.createElement(g,null),o.a.createElement("ul",{className:"nav-links"},o.a.createElement(h.b,{style:e,to:"/"},o.a.createElement("li",null,"About")),o.a.createElement(h.b,{style:e,to:"/pokemon"},o.a.createElement("li",null,"Pokemons")))))},N=n(1),P=function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(N.c,null,o.a.createElement(N.a,{path:"/",exact:!0,component:v}),o.a.createElement(N.a,{path:"/pokemon",exact:!0,component:E}),o.a.createElement(N.a,{path:"/pokemon/:id",exact:!0,component:y}))))};c.a.render(o.a.createElement(P,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.43fb8f4f.chunk.js.map