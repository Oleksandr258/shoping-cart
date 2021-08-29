(this["webpackJsonpreact-shoping-cart"]=this["webpackJsonpreact-shoping-cart"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var i=r(0),s=r(1),c=r.n(s),o=r(10),a=r.n(o),n=(r(16),r(9)),d=r(2),l=r(3),j=r(5),h=r(4),p=r(6),u=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(e){var i;return Object(d.a)(this,r),(i=t.call(this,e)).handleInput=function(e){i.setState(Object(p.a)({},e.target.name,e.target.value))},i.createOrder=function(e){e.preventDefault();var t={name:i.state.name,email:i.state.email,address:i.state.address,cartItems:i.props.cartItems};i.props.createOrder(t)},i.state={name:"",email:"",address:"",showCheckout:!1},i}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return Object(i.jsxs)("div",{children:[0===t.length?Object(i.jsx)("div",{className:"cart cart-header",children:"Cart is empty"}):Object(i.jsxs)("div",{className:"cart cart-header",children:["You have ",t.length," in the cart "," "]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"cart",children:Object(i.jsx)("ul",{className:"cart-items",children:t.map((function(t){return Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:t.image,alt:t.title})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:t.title}),Object(i.jsxs)("div",{className:"right",children:[t.price," ","$"," * ",t.count," "," ",Object(i.jsx)("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)},children:"Remove"})]})]})]},t._id)}))})}),0!==t.length&&Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"cart",children:Object(i.jsxs)("div",{className:"total",children:[Object(i.jsxs)("div",{children:["Total:"," ",t.reduce((function(e,t){return e+t.price*t.count}),0),"$"]}),Object(i.jsx)("button",{onClick:function(){e.setState({showCheckout:!0})},className:"button primary",children:"Proceed"})]})}),this.state.showCheckout&&Object(i.jsx)("div",{className:"cart",children:Object(i.jsx)("form",{onSubmit:this.createOrder,children:Object(i.jsxs)("ul",{className:"form-container",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("label",{children:"Email"}),Object(i.jsx)("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("label",{children:"Name"}),Object(i.jsx)("input",{name:"name",type:"text",required:!0,onChange:this.handleInput})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("label",{children:"Address"}),Object(i.jsx)("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})]}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{className:"button primary",type:"submit",children:"Checkout"})})]})})})]})]})]})}}]),r}(s.Component),b=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsxs)("div",{className:"filter-result",children:[this.props.count," Products"]}),Object(i.jsxs)("div",{className:"filter-sort",children:["Order "," ",Object(i.jsxs)("select",{value:this.props.sort,onChange:this.props.sortProducts,children:[Object(i.jsx)("option",{children:"Latest"}),Object(i.jsx)("option",{value:"lowest",children:"Lowest"}),Object(i.jsx)("option",{value:"higest",children:"Higest"})]})]}),Object(i.jsxs)("div",{className:"filter-size",children:["Filter "," ",Object(i.jsxs)("select",{value:this.props.size,onChange:this.props.filterProducts,children:[Object(i.jsx)("option",{value:"",children:"ALL"}),Object(i.jsx)("option",{value:"XS",children:"XS"}),Object(i.jsx)("option",{value:"S",children:"S"}),Object(i.jsx)("option",{value:"M",children:"M"}),Object(i.jsx)("option",{value:"L",children:"L"}),Object(i.jsx)("option",{value:"X",children:"X"}),Object(i.jsx)("option",{value:"XL",children:"XL"}),Object(i.jsx)("option",{value:"XXL",children:"XXL"})]})]})]})}}]),r}(s.Component),m=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"products",children:this.props.products.map((function(t){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsxs)("a",{href:"#"+t._id,children:[Object(i.jsx)("img",{src:t.image,alt:t.title}),Object(i.jsx)("p",{children:t.title})]}),Object(i.jsxs)("div",{className:"product-price",children:[Object(i.jsxs)("div",{children:[t.price," "," $"]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary",children:"Add to Cart"})})]})]})},t._id)}))})})}}]),r}(s.Component),O=r(7),v=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;return Object(d.a)(this,r),(e=t.call(this)).createOrder=function(e){alert("Need to save order for"+e.name)},e.removeFromCart=function(t){var r=e.state.cartItems.slice();e.setState({cartItems:r.filter((function(e){return e._id!==t._id}))}),localStorage.setItem("cartItems",JSON.stringify(r.filter((function(e){return e._id!==t._id}))))},e.addToCart=function(t){var r=e.state.cartItems.slice(),i=!1;r.forEach((function(e){e._id===t._id&&(e.count++,i=!0)})),i||r.push(Object(n.a)(Object(n.a)({},t),{},{count:1})),e.setState({cartItems:r}),localStorage.setItem("cartItems",JSON.stringify(r))},e.sortProducts=function(t){var r=t.target.value;console.log(t.target.value),e.setState((function(t){return{sort:r,products:e.state.products.slice().sort((function(e,t){return"lowest"===r?e.price>t.price?1:-1:"higest"===r?e.price<t.price?1:-1:e._id<t._id?1:-1}))}}))},e.filterProducts=function(t){console.log(t.target.value),""===t.target.value?e.setState({size:t.target.value,products:O.products}):e.setState({size:t.target.value,products:O.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))})},e.state={products:O.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",sort:""},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"grid-container",children:[Object(i.jsx)("header",{children:Object(i.jsx)("a",{href:"/",children:"React Shoping Cart"})}),Object(i.jsx)("main",{children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(b,{count:this.state.products.length,size:this.state.size,sort:this.state.sort,filterProducts:this.filterProducts,sortProducts:this.sortProducts}),Object(i.jsx)(m,{products:this.state.products,addToCart:this.addToCart})]}),Object(i.jsx)("div",{className:"sidebar",children:Object(i.jsx)(u,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart,createOrder:this.createOrder})})]})}),Object(i.jsx)("footer",{children:"All rights reserved"})]})}}]),r}(c.a.Component);a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"products":[{"_id":"doorphone1","title":"Doorphone 1","image":"/images/doorphone1.jpg","discription":"about doorphone 1","price":77,"availableSizes":["XS","M","L","XL"]},{"_id":"doorphone2","title":"Doorphone 2","image":"/images/doorphone2.jpg","discription":"about doorphone 2","price":31,"availableSizes":["XL","XXL"]},{"_id":"doorphone3","title":"Doorphone 3","image":"/images/doorphone3.png","discription":"about doorphone 3","price":25,"availableSizes":["M","XL","XXL"]},{"_id":"doorphone4","title":"Doorphone 4","image":"/images/doorphone4.jpg","discription":"about doorphone 4","price":118,"availableSizes":["X","L","XL","XXL"]},{"_id":"doorphone5","title":"Doorphone 5","image":"/images/doorphone5.jpg","discription":"about doorphone 5","price":18,"availableSizes":["M","L","XXL"]},{"_id":"doorphone6","title":"Doorphone 6","image":"/images/doorphone6.jpeg","discription":"about doorphone 6","price":55,"availableSizes":["X","L","XL","XXL"]},{"_id":"doorphone7","title":"Doorphone 7","image":"/images/doorphone7.jpg","discription":"about doorphone 7","price":77,"availableSizes":["S","L","XL","XXL"]},{"_id":"doorphone8","title":"Doorphone 8","image":"/images/doorphone8.jpg","discription":"about doorphone 8","price":30,"availableSizes":["X","L","XL","XXL"]},{"_id":"doorphone9","title":"Doorphone 9","image":"/images/doorphone9.jpeg","discription":"about doorphone 9","price":47,"availableSizes":["X","L","XL","XXL"]}]}')}},[[17,1,2]]]);
//# sourceMappingURL=main.8f6c1173.chunk.js.map