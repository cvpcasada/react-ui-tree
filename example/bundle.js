!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/example/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),d=r(s),u=n(3),c=r(u),f=n(6),p=r(f),h=n(9),g=r(h),v=n(7),m=r(v);n(17),n(16),n(15);var y=function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.handleChange=e.handleChange.bind(e),e.handleDragStart=e.handleDragStart.bind(e),e.handleDragEnd=e.handleDragEnd.bind(e),e.onClickNode=e.onClickNode.bind(e),e.isNodeCollapsed=e.isNodeCollapsed.bind(e),e.renderNode=e.renderNode.bind(e),e.state={active:null,tree:m["default"]},e}return a(t,e),l(t,[{key:"renderNode",value:function(e){var t=this;return c["default"].createElement("span",{className:(0,d["default"])("node",{"is-active":e===this.state.active}),onClick:function(){return t.onClickNode(e)}},e.module)}},{key:"onClickNode",value:function(e){this.setState({active:e})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"app"},c["default"].createElement("div",{className:"tree"},c["default"].createElement(g["default"],{paddingLeft:20,tree:this.state.tree,onChange:this.handleChange,onDragStart:this.handleDragStart,onDragEnd:this.handleDragEnd,isNodeCollapsed:this.isNodeCollapsed,renderNode:this.renderNode,shouldRenderRootNode:!0})),c["default"].createElement("div",{className:"inspector"},c["default"].createElement("button",{onClick:this.updateTree},"update tree"),c["default"].createElement("pre",null,JSON.stringify(this.state.tree,null,"  "))))}},{key:"handleChange",value:function(e){this.setState({tree:e})}},{key:"handleDragStart",value:function(e){console.log("Drag start on",e.node.module),this.dragging=e}},{key:"handleDragEnd",value:function(e){console.log("Drag start on",e.node.module),e.parent!=this.dragging.parent&&console.log("Parent changed",e),this.dragging=null}},{key:"isNodeCollapsed",value:function(e){console.log({args:e})}},{key:"updateTree",value:function(){var e=this.state.tree;e.children.push({module:"test"}),this.setState({tree:e})}}]),t}(c["default"].Component);p["default"].render(c["default"].createElement(y,null),document.getElementById("app"))},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(d(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],l=o[2],s=o[3],d={css:a,media:l,sourceMap:s};n[i]?n[i].parts.push(d):t.push(n[i]={id:i,parts:[d]})}return t}function i(e,t){var n=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function d(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=l(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=c.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=p[l.id];s.refs--,i.push(s)}if(e){var d=o(e);r(d,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete p[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=React},function(e,t,n){var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r="undefined"==typeof n?"undefined":i(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)l.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=a:"object"===i(n(5))&&n(5)?(r=[],o=function(){return a}.apply(t,r),!(void 0!==o&&(e.exports=o))):window.classNames=a}()},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t){e.exports=ReactDOM},function(e,t){"use strict";e.exports={module:"react-ui-tree",children:[{module:"dist",collapsed:!0,children:[{module:"node.js",leaf:!0},{module:"react-ui-tree.css",leaf:!0},{module:"react-ui-tree.js",leaf:!0},{module:"tree.js",leaf:!0}]},{module:"example",children:[{module:"app.js",leaf:!0},{module:"app.less",leaf:!0},{module:"index.html",leaf:!0}]},{module:"lib",children:[{module:"node.js",leaf:!0},{module:"react-ui-tree.js",leaf:!0},{module:"react-ui-tree.less",leaf:!0},{module:"tree.js",leaf:!0}]},{module:".gitiignore",leaf:!0},{module:"index.js",leaf:!0},{module:"LICENSE",leaf:!0},{module:"Makefile",leaf:!0},{module:"package.json",leaf:!0},{module:"README.md",leaf:!0},{module:"webpack.config.js",leaf:!0}]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),d=r(s),u=n(3),c=r(u),f=n(6),p=(r(f),function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.handleCollapse=e.handleCollapse.bind(e),e.handleMouseDown=e.handleMouseDown.bind(e),e}return a(t,e),l(t,[{key:"renderCollapse",value:function(){var e=this.props.index,t=e.node;if(t.hasChildren||e.children&&e.children.length){var n=e.node.collapsed;return c["default"].createElement("span",{className:(0,d["default"])("collapse",n?"caret-right":"caret-down"),onMouseDown:function(e){e.stopPropagation()},onClick:this.handleCollapse})}return null}},{key:"renderChildren",value:function(){var e=this.props,n=e.index,r=e.tree,o=e.dragging,i=e.paddingLeft,a=e.onCollapse,l=e.onDragStart,s=e.shouldRenderRootNode;if(n.children&&n.children.length){var d={};return n.node.collapsed&&(d.display="none"),d.paddingLeft=(this.isRoot(n)&&!s?0:i)+"px",c["default"].createElement("div",{className:"children",style:d},n.children.map(function(e){var n=r.getIndex(e);return c["default"].createElement(t,{tree:r,index:n,key:n.id,dragging:o,paddingLeft:i,onCollapse:a,onDragStart:l,shouldRenderRootNode:s})}))}return null}},{key:"renderInner",value:function(){var e=this.props,t=e.tree,n=e.index.node,r=e.shouldRenderRootNode;return this.isRoot()&&!r?null:c["default"].createElement("div",{className:"inner",ref:"inner",onMouseDown:this.handleMouseDown},this.renderCollapse(),t.renderNode(n))}},{key:"isRoot",value:function(){var e=this.props.index.id;return 1===e}},{key:"render",value:function(){var e=this.props,t=e.index.id,n=e.dragging,r={};return c["default"].createElement("div",{className:(0,d["default"])("m-node",{placeholder:t===n}),style:r},this.renderInner(),this.renderChildren())}},{key:"handleCollapse",value:function(e){e.stopPropagation();var t=this.props,n=t.index.id,r=t.onCollapse;this.props.onCollapse&&r(n)}},{key:"handleMouseDown",value:function(e){var t=this.props.index.id,n=this.refs.inner;this.props.onDragStart&&this.props.onDragStart(t,n,e)}}]),t}(c["default"].Component));t["default"]=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),d=r(s),u=n(10),c=r(u),f=n(8),p=r(f),h=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state=n.init(e),n.dragStart=n.dragStart.bind(n),n.drag=n.drag.bind(n),n.dragEnd=n.dragEnd.bind(n),n.toggleCollapse=n.toggleCollapse.bind(n),n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this._updated?this._updated=!1:this.setState(this.init(e))}},{key:"init",value:function(e){var t=new c["default"](e.tree);return t.isNodeCollapsed=e.isNodeCollapsed,t.renderNode=e.renderNode,t.changeNodeCollapsed=e.changeNodeCollapsed,t.updateNodesPosition(),{tree:t,dragging:{id:null,x:null,y:null,w:null,h:null}}}},{key:"getDraggingDom",value:function(){var e=this.state.tree,t=this.state.dragging;if(t&&t.id){var n=e.getIndex(t.id),r={top:t.y,left:t.x,width:t.w};return d["default"].createElement("div",{className:"m-draggable",style:r},d["default"].createElement(p["default"],{tree:e,index:n,paddingLeft:this.props.paddingLeft}))}return null}},{key:"render",value:function(){var e=this.state.tree,t=this.state.dragging,n=this.getDraggingDom();return d["default"].createElement("div",{className:"m-tree"},n,d["default"].createElement(p["default"],{tree:e,index:e.getIndex(1),key:1,paddingLeft:this.props.paddingLeft,onDragStart:this.dragStart,onCollapse:this.toggleCollapse,dragging:t&&t.id,shouldRenderRootNode:this.props.shouldRenderRootNode}))}},{key:"dragStart",value:function(e,t,n){var r=this.props.onDragStart;this.dragging={id:e,w:t.offsetWidth,h:t.offsetHeight,x:t.offsetLeft,y:t.offsetTop},this._startX=t.offsetLeft,this._startY=t.offsetTop,this._offsetX=n.clientX,this._offsetY=n.clientY,this._start=!0;var o=this.getNode(e),i=this.getNode(o.parent);i&&i.children?this.setState({siblings:[o.prev,o.next]}):this.setState({siblings:[]}),r&&r(this.getNode(e)),window.addEventListener("mousemove",this.drag),window.addEventListener("mouseup",this.dragEnd)}},{key:"drag",value:function(e){this._start&&(this.setState({dragging:this.dragging}),this._start=!1);var t=this.state,n=t.tree,r=t.dragging,o=this.props.paddingLeft,i=null,a=n.getIndex(r.id),l=a.node.collapsed,s=this._startX,d=this._startY,u=this._offsetX,c=this._offsetY,f={x:s+e.clientX-u,y:d+e.clientY-c};r.x=f.x,r.y=f.y;var p=r.x-o/2-(a.left-2)*o,h=r.y-r.h/2-(a.top-2)*r.h;if(p<0)a.parent&&!a.next&&(i=n.move(a.id,a.parent,"after"));else if(p>o&&a.prev){var g=n.getIndex(a.prev).node;g.collapsed||g.leaf||(i=n.move(a.id,a.prev,"append"))}if(i&&(a=i,i.node.collapsed=l,r.id=i.id),h<0){var v=n.getNodeByTop(a.top-1);i=n.move(a.id,v.id,"before")}else if(h>r.h)if(a.next){var m=n.getIndex(a.next);i=m.children&&m.children.length&&!m.node.collapsed?n.move(a.id,a.next,"prepend"):n.move(a.id,a.next,"after")}else{var m=n.getNodeByTop(a.top+a.height);m&&m.parent!==a.id&&(i=m.children&&m.children.length?n.move(a.id,m.id,"prepend"):n.move(a.id,m.id,"after"))}i&&(i.node.collapsed=l,r.id=i.id),this.setState({tree:n,dragging:r})}},{key:"dragEnd",value:function(){var e=this.props.onDragEnd,t=this.state,n=t.tree,r=t.dragging.id,o=this.getNode(r);r&&e&&e(o);var i=r&&this.getNode(o.parent);r&&i&&i.children&&(this.state.siblings[0]!==o.prev||this.state.siblings[1]!==o.next)&&this.change(n),this.setState({siblings:[],dragging:{id:null,x:null,y:null,w:null,h:null}}),window.removeEventListener("mousemove",this.drag),window.removeEventListener("mouseup",this.dragEnd)}},{key:"getNode",value:function(e){var t=this.state.tree;return t.getIndex(e)}},{key:"change",value:function(e){this._updated=!0,this.props.onChange&&this.props.onChange(e.obj)}},{key:"toggleCollapse",value:function(e){var t=this.state.tree,n=t.getIndex(e),r=n.node;this.props.onLazyloadNode&&r.lazy&&r.hasChildren?(r.lazy=!1,this.props.onLazyloadNode(r,function(n){n.map(function(n){t.append(n,e)}),this.makeToggleUpdate(r)}.bind(this))):this.makeToggleUpdate(r)}},{key:"makeToggleUpdate",value:function(e){var t=this.state.tree;e.collapsed=!e.collapsed,t.updateNodesPosition(),this.setState({tree:t}),this.change(t)}}]),t}(d["default"].Component);h.propTypes={tree:d["default"].PropTypes.object.isRequired,paddingLeft:d["default"].PropTypes.number,renderNode:d["default"].PropTypes.func.isRequired,onDragStart:d["default"].PropTypes.func,onDragEnd:d["default"].PropTypes.func,shouldRenderRootNode:d["default"].PropTypes.bool},h.defaultProps={paddingLeft:20,shouldRenderRootNode:!0},t["default"]=h},function(e,t,n){"use strict";var r=n(11),o=r.prototype;o.updateNodesPosition=function(){function e(n,r,i,a){n=n.filter(Number);var l=1;return n.forEach(function(n){var r=o.getIndex(n);a?(r.top=null,r.left=null):(r.top=t++,r.left=i),r.children&&r.children.length?l+=e(r.children,r,i+1,a||r.node.collapsed):(r.height=1,l+=1)}),r.node.collapsed?r.height=1:r.height=l,r.height}var t=1,n=1,r=this.getIndex(1),o=this;r.top=t++,r.left=n++,r.children&&r.children.length&&e(r.children,r,n,r.node.collapsed)},o.move=function(e,t,n){if(e!==t&&1!==t){var r=this.remove(e),o=null;return"before"===n?o=this.insertBefore(r,t):"after"===n?o=this.insertAfter(r,t):"prepend"===n?o=this.prepend(r,t):"append"===n&&(o=this.append(r,t)),this.updateNodesPosition(),o}},o.getNodeByTop=function(e){var t=this.indexes;for(var n in t)if(t.hasOwnProperty(n)&&t[n].top===e)return t[n]},e.exports=r},function(e,t){"use strict";function n(e){this.cnt=1,this.obj=e||{children:[]},this.indexes={},this.build(this.obj)}var r=n.prototype;r.build=function(e){function t(e,r){var i=[];e.forEach(function(e,a){var l={};l.id=o.cnt,l.node=e,r&&(l.parent=r.id),n[o.cnt+""]=l,i.push(o.cnt),o.cnt++,e.children&&e.children.length&&t(e.children,l)}),r.children=i,i.forEach(function(e,t){var r=n[e+""];t>0&&(r.prev=i[t-1]),t<i.length-1&&(r.next=i[t+1])})}var n=this.indexes,r=this.cnt,o=this,i={id:r,node:e};return n[this.cnt+""]=i,this.cnt++,e.children&&e.children.length&&t(e.children,i),i},r.getIndex=function(e){var t=this.indexes[e+""];if(t)return t},r.removeIndex=function(e){function t(e){delete n.indexes[e.id+""],e.children&&e.children.length&&e.children.forEach(function(e){t(n.getIndex(e))})}var n=this;t(e)},r.get=function(e){var t=this.getIndex(e);return t&&t.node?t.node:null},r.remove=function(e){var t=this.getIndex(e),n=this.get(e),r=this.getIndex(t.parent),o=this.get(t.parent);return o.children.splice(o.children.indexOf(n),1),r.children.splice(r.children.indexOf(e),1),this.removeIndex(t),this.updateChildren(r.children),n},r.updateChildren=function(e){e.forEach(function(t,n){var r=this.getIndex(t);r.prev=r.next=null,n>0&&(r.prev=e[n-1]),n<e.length-1&&(r.next=e[n+1])}.bind(this))},r.insert=function(e,t,n){var r=this.getIndex(t),o=this.get(t),i=this.build(e);return i.parent=t,o.children=o.children||[],r.children=r.children||[],o.children.splice(n,0,e),r.children.splice(n,0,i.id),this.updateChildren(r.children),r.parent&&this.updateChildren(this.getIndex(r.parent).children),i},r.insertBefore=function(e,t){var n=this.getIndex(t),r=n.parent,o=this.getIndex(r).children.indexOf(t);return this.insert(e,r,o)},r.insertAfter=function(e,t){var n=this.getIndex(t),r=n.parent,o=this.getIndex(r).children.indexOf(t);return this.insert(e,r,o+1)},r.prepend=function(e,t){return this.insert(e,t,0)},r.append=function(e,t){var n=this.getIndex(t);return n.children=n.children||[],this.insert(e,t,n.children.length)},e.exports=n},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"*,:after,:before{box-sizing:border-box}body{margin:0;padding:0;font-size:100%}.inspector{margin-left:400px}.inspector pre{font-family:Menlo;font-size:13px}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".tree{position:fixed;top:0;left:0;bottom:0;width:300px;overflow-x:hidden;overflow-y:auto;background-color:#21252b}.m-node.placeholder{border:1px dashed #1385e5}.m-node .inner{color:#9da5b4;font-size:12px;font-family:Menlo}.m-node .node{display:inline-block;width:100%;padding:4px 5px}.m-node .node.is-active{background-color:#31363f}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".f-no-select,.m-tree{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.m-tree{position:relative;overflow:hidden}.m-draggable{position:absolute;opacity:.8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.m-node.placeholder>*{visibility:hidden}.m-node.placeholder{border:1px dashed #ccc}.m-node .inner{position:relative;cursor:pointer;padding-left:10px}.m-node .collapse{position:absolute;left:0;cursor:pointer}.m-node .caret-right:before{content:'\\25B8'}.m-node .caret-down:before{content:'\\25BE'}",""])},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)}]);
//# sourceMappingURL=bundle.js.map