window.__require=function e(t,o,n){function i(c,l){if(!o[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var s="function"==typeof __require&&__require;if(!l&&s)return s(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var p=o[c]={exports:{}};t[c][0].call(p.exports,function(e){return i(t[c][1][e]||e)},p,p.exports,e,t,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({GameMain:[function(e,t,o){"use strict";cc._RF.push(t,"e1b90/rohdEk4SdmmEZANaD","GameMain");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0}),o.InfoType=void 0;var c=e("./GloabData"),l=e("./LineNode"),a=e("./OneSlotNode"),s=e("./PopViewNode"),p=cc._decorator,d=p.ccclass,h=p.property;o.InfoType={Room:"room",Device:"device",Item:"item"};var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.levelConfig=null,t.btnStart=null,t.nodeMenu=null,t.resultNode=null,t.labelResLabel=null,t.nodeRoot=null,t.labelDes=null,t.nodeTips=null,t.labelTips=null,t.prefabSlot=null,t.prefabPop=null,t.prefabLineNode=null,t.slotNodeArr=[],t.lineNodeArr=[],t.curLevelArr=[],t.nLevel=1,t}return i(t,e),t.prototype.onLoad=function(){this.slotNodeArr=[]},t.prototype.start=function(){var e=this,t=this.levelConfig.json["level"+this.nLevel];this.curLevelArr=t,cc.log("=>>>>>>>",t),this.InitLevelByInfo(t),this.resultNode.active=!1,this.nodeMenu.active=!0,this.btnStart.node.on("click",function(){e.nodeMenu.active=!1},this),c.G_Event.on("Open_One_Slot",this.OpenOneSlot,this),c.G_Event.on("Show_Slot_Des",this.ShowSlotDes,this),c.G_Event.on("Show_Tips",this.ShowTips,this),c.G_Event.on("Show_Pop_View",this.ShowPopView,this),c.G_Event.on("Hide_One_Slot",this.HideOneSlot,this)},t.prototype.ShowPopView=function(e,t){var o=cc.instantiate(this.prefabPop);o.getComponent(s.default).InitPopViewByInfo(e,t),this.nodeRoot.addChild(o,999),o.position=cc.v3(0,0)},t.prototype.ShowSlotDes=function(e){this.labelDes.string=e},t.prototype.ShowTips=function(e){var t=this;this.nodeTips.active=!0,this.nodeTips.opacity=255,this.labelTips.string=e,cc.tween(this.nodeTips).delay(2).to(.3,{opacity:0}).call(function(){t.nodeTips.active=!1}).start()},t.prototype.OpenOneSlot=function(e,t){var o=this;t||(t=this.curLevelArr),this.labelDes.string=e.des;var n=e.to;if(cc.log("=OpenOneSlot===>>",n),n.indexOf(c.G_NEXT_LEVEL_ID)>=0)return this.resultNode.active=!0,this.labelResLabel.string="\u9003\u79bb\u6210\u529f,\u8fdb\u5165\u4e0b\u4e00\u573a\u666f",this.ClearAllSlots(),void cc.tween(this.resultNode).delay(2).call(function(){o.resultNode.active=!1,o.GotoNextLevel()}).start();if(n.indexOf(c.G_DEATH_LEVEL_ID)>=0)return this.resultNode.active=!0,this.labelResLabel.string="\u9003\u79bb\u5931\u8d25!!!!!",this.ClearAllSlots(),void cc.tween(this.resultNode).delay(2).call(function(){o.resultNode.active=!1,o.nodeMenu.active=!0,o.GotoNewLevel()}).start();if(n.indexOf(c.G_SUCCESS_ESC)>=0)return this.resultNode.active=!0,this.labelResLabel.string="\u606d\u559c\u4f60\u79bb\u5f00\u4e86\u623f\u5b50",this.ClearAllSlots(),void cc.tween(this.resultNode).delay(2).call(function(){o.resultNode.active=!1,o.nodeMenu.active=!0,o.GotoNewLevel()}).start();for(var i=0;i<n.length;i++)for(var r=0;r<t.length;r++)if(t[r].id==n[i]){this.CreateOneSlotNode(t[r],e);break}},t.prototype.InitLevelByInfo=function(e){for(var t=0,n=e;t<n.length;t++){var i=n[t];0==i.from.length&&i.type==o.InfoType.Room&&(this.CreateOneSlotNode(i,null),this.labelDes.string=i.des)}},t.prototype.CreateOneSlotNode=function(e,t){var o=cc.instantiate(this.prefabSlot);o.getComponent(a.default).InitByInfo(e,this),this.nodeRoot.addChild(o,c.G_Z_INDEX.nSlotZ),o.position=cc.v3(e.position[0],e.position[1]),o.scale=e.scale,this.slotNodeArr.push(o),t&&this.CreateOneLineNode(e,t)},t.prototype.ClearAllSlots=function(){for(var e=0;e<this.slotNodeArr.length;e++)(t=this.slotNodeArr[e]).isValid&&(t.removeFromParent(),t.destroy(),t=null);for(e=0;e<this.lineNodeArr.length;e++){var t;(t=this.lineNodeArr[e]).node.isValid&&(t.node.removeFromParent(),t.destroy(),t=null)}this.lineNodeArr=[],this.slotNodeArr=[]},t.prototype.GotoNextLevel=function(){this.nLevel+=1;var e=this.levelConfig.json["level"+this.nLevel];e&&e.length>0?(this.curLevelArr=e,cc.log("=>>>GotoNextLevel>>>>",e),this.InitLevelByInfo(e)):cc.error("=?>>>>>>>>>>>>>>this.nLevel=",this.nLevel)},t.prototype.GotoNewLevel=function(){this.nLevel=1;var e=this.levelConfig.json["level"+this.nLevel];e&&e.length>0?(this.curLevelArr=e,cc.log("=>>>GotoNextLevel>>>>",e),this.InitLevelByInfo(e)):cc.error("=?>>>>>>>>>>>>>>this.nLevel=",this.nLevel)},t.prototype.CreateOneLineNode=function(e,t){var o=cc.instantiate(this.prefabLineNode);this.nodeRoot.addChild(o,c.G_Z_INDEX.nLineZ),o.position=cc.v3(t.position[0],t.position[1]),o.getComponent(l.default).InitLineNodeByInfo(cc.v3(t.position[0],t.position[1]),e),this.lineNodeArr.push(o.getComponent(l.default))},t.prototype.HideOneSlot=function(e){for(var t=0;t<this.lineNodeArr.length;t++)this.lineNodeArr[t].cacheInfo.id==e.id&&(this.lineNodeArr[t].node.active=!1)},r([h(cc.JsonAsset)],t.prototype,"levelConfig",void 0),r([h(cc.Button)],t.prototype,"btnStart",void 0),r([h(cc.Node)],t.prototype,"nodeMenu",void 0),r([h(cc.Node)],t.prototype,"resultNode",void 0),r([h(cc.Label)],t.prototype,"labelResLabel",void 0),r([h(cc.Node)],t.prototype,"nodeRoot",void 0),r([h(cc.Label)],t.prototype,"labelDes",void 0),r([h(cc.Node)],t.prototype,"nodeTips",void 0),r([h(cc.Label)],t.prototype,"labelTips",void 0),r([h(cc.Prefab)],t.prototype,"prefabSlot",void 0),r([h(cc.Prefab)],t.prototype,"prefabPop",void 0),r([h(cc.Prefab)],t.prototype,"prefabLineNode",void 0),r([d],t)}(cc.Component);o.default=f,cc._RF.pop()},{"./GloabData":"GloabData","./LineNode":"LineNode","./OneSlotNode":"OneSlotNode","./PopViewNode":"PopViewNode"}],GloabData:[function(e,t,o){"use strict";cc._RF.push(t,"2088awR0URMv5xhMizOoBTm","GloabData"),Object.defineProperty(o,"__esModule",{value:!0}),o.G_Z_INDEX=o.G_SUCCESS_ESC=o.G_DEATH_LEVEL_ID=o.G_NEXT_LEVEL_ID=o.G_Event=void 0,o.G_Event=new cc.EventTarget,o.G_NEXT_LEVEL_ID=998877,o.G_DEATH_LEVEL_ID=998876,o.G_SUCCESS_ESC=998875,o.G_Z_INDEX={nSlotZ:9,nLineZ:8},cc._RF.pop()},{}],LineNode:[function(e,t,o){"use strict";cc._RF.push(t,"24346ODKttEbLBlEJMy7A+J","LineNode");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,l=c.ccclass,a=(c.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cacheInfo=null,t}return i(t,e),t.prototype.InitLineNodeByInfo=function(e,t){this.cacheInfo=t;var o=cc.v3(t.position[0],t.position[1]).sub(e),n=o.mag();this.node.scaleY=n/2;var i=o.y/n,r=o.x/n,c=Math.asin(i)*(180/Math.PI),l=90-c;r>=0&&(l=-(90-c)),this.node.angle=l},r([l],t)}(cc.Component));o.default=a,cc._RF.pop()},{}],OneSlotNode:[function(e,t,o){"use strict";cc._RF.push(t,"3feac2NXWpIho5/FIswFATz","OneSlotNode");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=e("./GameMain"),l=e("./GloabData"),a=e("./PlayerData"),s=cc._decorator,p=s.ccclass,d=s.property,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.labelName=null,t.cachedInfo=null,t.gameMain=null,t.alreadyOpenNext=!1,t}return i(t,e),t.prototype.InitByInfo=function(e,t){this.cachedInfo=e,this.gameMain=t,this.labelName.string=e.name,this.node.scale=e.scale},t.prototype.start=function(){this.node.on("click",this.clickFunc,this)},t.prototype.clickFunc=function(){if(l.G_Event.emit("Show_Slot_Des",this.cachedInfo.des),this.alreadyOpenNext)cc.log("\u5df2\u7ecf\u6253\u5f00\u8fc7\u4e86");else{if(!(this.cachedInfo.passw.length>0))return this.cachedInfo.type==c.InfoType.Item?(this.alreadyOpenNext=!0,this.HideThisSlot(),a.mainPlayerData.backpackItems.push(this.cachedInfo.keyid),void l.G_Event.emit("Show_Tips","\u62fe\u53d6\u4e86["+this.cachedInfo.name+"]")):void(this.cachedInfo.lockid>0?a.mainPlayerData.backpackItems.indexOf(this.cachedInfo.lockid)>=0?(l.G_Event.emit("Open_One_Slot",this.cachedInfo),this.alreadyOpenNext=!0):l.G_Event.emit("Show_Tips","\u53ef\u80fd\u9700\u8981\u9053\u5177\u6253\u5f00"):(cc.log("=clickFunc===>",this.cachedInfo.to),l.G_Event.emit("Open_One_Slot",this.cachedInfo),this.alreadyOpenNext=!0));l.G_Event.emit("Show_Pop_View",this.cachedInfo,this)}},t.prototype.HideThisSlot=function(){this.node.active=!1,l.G_Event.emit("Hide_One_Slot",this.cachedInfo)},t.prototype.onDestroy=function(){this.cachedInfo=null,this.gameMain=null},r([d(cc.Label)],t.prototype,"labelName",void 0),r([p],t)}(cc.Component);o.default=h,cc._RF.pop()},{"./GameMain":"GameMain","./GloabData":"GloabData","./PlayerData":"PlayerData"}],PlayerData:[function(e,t,o){"use strict";cc._RF.push(t,"7920fEGrF5MsKQ0WoWu5TGD","PlayerData"),Object.defineProperty(o,"__esModule",{value:!0}),o.mainPlayerData=void 0;o.mainPlayerData=new function(){this.backpackItems=[]},cc._RF.pop()},{}],PopViewNode:[function(e,t,o){"use strict";cc._RF.push(t,"1cf5eKDkQlAHZXQQ4wi21HN","PopViewNode");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=e("./GloabData"),l=cc._decorator,a=l.ccclass,s=l.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.btnClose=null,t.btnConfim=null,t.EditBox=null,t.cachedInfo=null,t.cachedsNode=null,t}return i(t,e),t.prototype.start=function(){var e=this;this.btnClose.node.on("click",function(){e.ClosePop()},this),this.btnConfim.node.on("click",function(){e.cachedInfo&&e.EditBox.string==e.cachedInfo.passw?(c.G_Event.emit("Open_One_Slot",e.cachedInfo),e.ClosePop(),e.cachedsNode.alreadyOpenNext=!0):(cc.log("\u5bc6\u7801\u9519\u8bef"),c.G_Event.emit("Show_Tips","\u5bc6\u7801\u9519\u8bef"),e.cachedsNode.alreadyOpenNext=!1)},this)},t.prototype.ClosePop=function(){this.node.removeFromParent(),this.node.destroy(),this.destroy()},t.prototype.InitPopViewByInfo=function(e,t){this.cachedInfo=e,t&&(this.cachedsNode=t)},r([s(cc.Button)],t.prototype,"btnClose",void 0),r([s(cc.Button)],t.prototype,"btnConfim",void 0),r([s(cc.EditBox)],t.prototype,"EditBox",void 0),r([a],t)}(cc.Component);o.default=p,cc._RF.pop()},{"./GloabData":"GloabData"}]},{},["GameMain","GloabData","LineNode","OneSlotNode","PlayerData","PopViewNode"]);