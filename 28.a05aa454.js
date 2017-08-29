webpackJsonp([28],{"80zA":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("地图容器")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("实例属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("自定义主题")]),t._v(" "),a("p",[t._v("百度地图实例允许用户设置自定义配色风格以配合不同风格的主题设计。")]),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("设置经纬度和缩放等级")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}})],1),t._v(" "),a("h3",[t._v("开启滚轮缩放")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(5),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15,"scroll-wheel-zoom":!0}})],1),t._v(" "),a("h3",[t._v("设置自定义主题")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(6),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15,theme:t.theme}})],1),t._v(" "),a("h3",[t._v("设置地图类型")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(7),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15,mapType:"BMAP_SATELLITE_MAP"}})],1),t._v(" "),a("h3",[t._v("双向绑定")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(8),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{"scroll-wheel-zoom":!0,center:t.center,zoom:t.zoom},on:{moving:t.syncCenterAndZoom,moveend:t.syncCenterAndZoom,zoomend:t.syncCenterAndZoom}}),t._v(" "),a("div",{staticClass:"toolbar"},[a("table",[a("thead",[a("tr",[a("th",[t._v("经度")]),a("th",[t._v("纬度")]),a("th",[t._v("缩放")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("text-field",{attrs:{pattern:"-?[0-9]*(\\.[0-9]+)?",label:"经度"},model:{value:t.center.lng,callback:function(s){t.center.lng=t._n(s)},expression:"center.lng"}})],1),a("td",[a("text-field",{attrs:{pattern:"-?[0-9]*(\\.[0-9]+)?",label:"纬度"},model:{value:t.center.lat,callback:function(s){t.center.lat=t._n(s)},expression:"center.lat"}})],1),t._v(" "),a("td",[a("text-field",{attrs:{pattern:"-?[0-9]*(\\.[0-9]+)?",label:"缩放"},model:{value:t.zoom,callback:function(s){t.zoom=t._n(s)},expression:"zoom"}})],1)])])])])],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BaiduMap")]),t._v(" 百度地图容器，用于挂载百度地图核心类和一个百度地图实例。是所有地图组件的根组件。"),a("br"),t._v("\n地图容器的实质是一个空的 DOM 节点，它可以用于挂载 "),a("code",[t._v("BmView")]),t._v(" 组件或其它 DOM 节点或组件。如果你需要二次开发或手动控制其子组件，可以使用在 "),a("code",[t._v("ready")]),t._v(" 事件中使用返回的 "),a("code",[t._v("BMap")]),t._v(" 类和 "),a("code",[t._v("map")]),t._v(" 实例进行手动控制。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ak")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("百度地图开发者平台申请的密钥，仅在局部注册组件时声明。")])]),t._v(" "),a("tr",[a("td",[t._v("center")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Point, String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("定位, 可使用如“广州市海珠区”的地区字符串，也可以使用对象如 {lng: 116.404, lat: 39.915} 表示经纬度")])]),t._v(" "),a("tr",[a("td",[t._v("zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("缩放等级")])]),t._v(" "),a("tr",[a("td",[t._v("min-zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("最小缩放级别")])]),t._v(" "),a("tr",[a("td",[t._v("max-zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("最大缩放级别")])]),t._v(" "),a("tr",[a("td",[t._v("high-resolution")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("高分屏模式 该项仅在地图组件挂载时加载一次")])]),t._v(" "),a("tr",[a("td",[t._v("map-click")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("允许点击 该项仅在地图组件挂载时加载一次")])]),t._v(" "),a("tr",[a("td",[t._v("map-type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("global.BMAP_NORMAL_MAP")]),t._v(" "),a("td",[t._v("地图类型")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("允许拖拽")])]),t._v(" "),a("tr",[a("td",[t._v("scroll-wheel-zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("允许鼠标滚轮缩放")])]),t._v(" "),a("tr",[a("td",[t._v("double-click-zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("允许双击缩放")])]),t._v(" "),a("tr",[a("td",[t._v("keyboard")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("允许键盘操作")])]),t._v(" "),a("tr",[a("td",[t._v("inertial-dragging")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("允许惯性拖拽")])]),t._v(" "),a("tr",[a("td",[t._v("continuous-zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("允许无级缩放")])]),t._v(" "),a("tr",[a("td",[t._v("pinch-to-zoom")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("允许双指缩放")])]),t._v(" "),a("tr",[a("td",[t._v("auto-resize")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("允许自适应容器尺寸")])]),t._v(" "),a("tr",[a("td",[t._v("theme")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("自定义主题")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("鼠标双击地图时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("rightclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick")])]),t._v(" "),a("tr",[a("td",[t._v("rightdblclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("右键双击地图时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("maptypechange")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("地图类型发生变化时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mousemove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("鼠标在地图区域移动过程中触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("鼠标移入地图区域时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("鼠标移出地图区域时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("movestart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("地图移动开始时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("moving")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("地图移动过程中触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("moveend")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("地图移动结束时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("zoomstart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("地图更改缩放级别开始时触发触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("zoomend")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("地图更改缩放级别结束时触发触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("addoverlay")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("addcontrol")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("当使用Map.addControl()方法向地图中添加单个控件时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("removecontrol")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("当使用Map.removeControl()方法移除单个控件时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("removeoverlay")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("clearoverlays")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dragstart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("开始拖拽地图时触发")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("拖拽地图过程中触发")])]),t._v(" "),a("tr",[a("td",[t._v("dragend")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("停止拖拽地图时触发")])]),t._v(" "),a("tr",[a("td",[t._v("addtilelayer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("添加一个自定义地图图层时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("removetilelayer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("移除一个自定义地图图层时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("load")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, pixel, point, zoom}")]),t._v(" "),a("td",[t._v("调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块")])]),t._v(" "),a("tr",[a("td",[t._v("resize")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, size}")]),t._v(" "),a("td",[t._v("地图可视区域大小发生变化时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("hotspotclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, spots}")]),t._v(" "),a("td",[t._v("点击热区时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("hotspotover")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, spots}")]),t._v(" "),a("td",[t._v("鼠标移至热区时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("hotspotout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, spots}")]),t._v(" "),a("td",[t._v("鼠标移出热区时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("tilesloaded")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target}")]),t._v(" "),a("td",[t._v("当地图所有图块完成加载时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("touchstart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("触摸开始时触发此事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[t._v("touchmove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("触摸移动时触发此事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[t._v("touchend")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("触摸结束时触发此事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[t._v("longpress")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("长按事件，仅适用移动设备")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("主题数据格式请参考："),a("a",{attrs:{href:"http://developer.baidu.com/map/custom/"}},[t._v("百度地图主题编辑器")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":scroll-wheel-zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":theme")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"theme"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": [\n        {\n          "),a("span",{staticClass:"hljs-string"},[t._v('"featureType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"all"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"elementType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"geometry"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"stylers"')]),t._v(": {\n              "),a("span",{staticClass:"hljs-string"},[t._v('"hue"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"#007fff"')]),t._v(",\n              "),a("span",{staticClass:"hljs-string"},[t._v('"saturation"')]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("89")]),t._v("\n          }\n        },\n        {\n          "),a("span",{staticClass:"hljs-string"},[t._v('"featureType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"water"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"elementType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"all"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"stylers"')]),t._v(": {\n              "),a("span",{staticClass:"hljs-string"},[t._v('"color"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"#ffffff"')]),t._v("\n          }\n        }\n      ]\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mapType")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_SATELLITE_MAP"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model.number")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center.lng"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model.number")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center.lat"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model.number")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" \n        "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v(":scroll-wheel-zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v("@moving")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"syncCenterAndZoom"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v("@moveend")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"syncCenterAndZoom"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v("@zoomend")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"syncCenterAndZoom"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[t._v("zoom")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("15")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n     syncCenterAndZoom (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" {lng, lat} = e.target.getCenter()\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center.lng = lng\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center.lat = lat\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".zoom = e.target.getZoom()\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},Id8e:function(t,s,a){var e,v,_;!function(a,l){v=[t,s],e=l,void 0!==(_="function"==typeof e?e.apply(s,v):e)&&(t.exports=_)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{center:{lng:116.404,lat:39.915},zoom:15,theme:[{featureType:"all",elementType:"geometry",stylers:{hue:"#007fff",saturation:89}},{featureType:"water",elementType:"all",stylers:{color:"#ffffff"}}]}},methods:{syncCenterAndZoom:function(t){var s=t.target.getCenter(),a=s.lng,e=s.lat;this.center.lng=a,this.center.lat=e,this.zoom=t.target.getZoom()}}},t.exports=s.default})},ScEq:function(t,s,a){t.exports=a("ovjl")},ovjl:function(t,s,a){var e=a("VU/8")(a("Id8e"),a("80zA"),null,null);t.exports=e.exports}});