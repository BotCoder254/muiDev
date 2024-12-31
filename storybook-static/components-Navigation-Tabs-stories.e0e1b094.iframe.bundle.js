"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[3663],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Navigation/Tabs.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bordered:()=>Bordered,Centered:()=>Centered,Colors:()=>Colors,Controlled:()=>Controlled,Default:()=>Default,Enclosed:()=>Enclosed,FullWidth:()=>FullWidth,Lifted:()=>Lifted,Pills:()=>Pills,Responsive:()=>Responsive,Sizes:()=>Sizes,Vertical:()=>Vertical,WithIconsAndBadges:()=>WithIconsAndBadges,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["items","variant","size","color","orientation","fullWidth","centered","animated","disabled","defaultValue","value","onChange","className"],Tabs=_ref=>{var _items$;let{items=[],variant="default",size="medium",color="primary",orientation="horizontal",fullWidth=!1,centered=!1,animated=!0,disabled=!1,defaultValue,value,onChange,className}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[activeTab,setActiveTab]=(0,react.useState)(value||defaultValue||(null===(_items$=items[0])||void 0===_items$?void 0:_items$.value)),[hoveredTab,setHoveredTab]=(0,react.useState)(null),[contentHeight,setContentHeight]=(0,react.useState)("auto"),[tabsWidth,setTabsWidth]=(0,react.useState)({}),[tabsRect,setTabsRect]=(0,react.useState)({}),tabsRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{void 0!==value&&setActiveTab(value)}),[value]),(0,react.useEffect)((()=>{const updateContentHeight=()=>{const activeContent=document.querySelector('[data-tab-content="'.concat(activeTab,'"]'));activeContent&&setContentHeight(activeContent.offsetHeight)},updateTabsMetrics=()=>{if(!tabsRef.current)return;const tabElements=tabsRef.current.querySelectorAll("[data-tab-value]"),widths={},rects={};tabElements.forEach((tab=>{const value=tab.getAttribute("data-tab-value"),rect=tab.getBoundingClientRect();widths[value]=tab.offsetWidth,rects[value]={left:rect.left-tabsRef.current.getBoundingClientRect().left,width:rect.width}})),setTabsWidth(widths),setTabsRect(rects)};return updateContentHeight(),updateTabsMetrics(),window.addEventListener("resize",updateContentHeight),window.addEventListener("resize",updateTabsMetrics),()=>{window.removeEventListener("resize",updateContentHeight),window.removeEventListener("resize",updateTabsMetrics)}}),[activeTab]);const sizes={small:{text:"text-sm",icon:"w-4 h-4",padding:"px-3 py-1.5",spacing:"space-x-1",indicator:"h-0.5",badge:"w-4 h-4 text-[10px]",content:"p-3"},medium:{text:"text-base",icon:"w-5 h-5",padding:"px-4 py-2",spacing:"space-x-2",indicator:"h-0.5",badge:"w-5 h-5 text-[11px]",content:"p-4"},large:{text:"text-lg",icon:"w-6 h-6",padding:"px-6 py-3",spacing:"space-x-3",indicator:"h-0.5",badge:"w-6 h-6 text-xs",content:"p-6"}},colors={primary:{text:"text-gray-600",hover:"hover:text-blue-600",active:"text-blue-600",indicator:"bg-blue-600",disabled:"text-gray-300",ring:"focus:ring-blue-200",content:"bg-blue-50/30",badge:"bg-blue-500",border:"border-blue-200"},secondary:{text:"text-gray-600",hover:"hover:text-gray-900",active:"text-gray-900",indicator:"bg-gray-900",disabled:"text-gray-300",ring:"focus:ring-gray-200",content:"bg-gray-50/30",badge:"bg-gray-500",border:"border-gray-200"},success:{text:"text-gray-600",hover:"hover:text-green-600",active:"text-green-600",indicator:"bg-green-600",disabled:"text-gray-300",ring:"focus:ring-green-200",content:"bg-green-50/30",badge:"bg-green-500",border:"border-green-200"},white:{text:"text-gray-400",hover:"hover:text-white",active:"text-white",indicator:"bg-white",disabled:"text-gray-600",ring:"focus:ring-white/20",content:"bg-white/5",badge:"bg-white",border:"border-white/20"}},variants={default:{tab:"",indicator:"absolute bottom-0 left-0 right-0",list:"border-b border-gray-200",content:""},pills:{tab:"rounded-full",indicator:"absolute inset-0 rounded-full -z-10",list:"",content:"rounded-lg"},bordered:{tab:"border-b-2 border-transparent",indicator:"absolute bottom-0 left-0 right-0",list:"border-b border-gray-200",content:"border rounded-lg"},lifted:{tab:"border-2 border-transparent rounded-t-lg",indicator:"absolute bottom-0 left-0 right-0 top-0 border-2 rounded-t-lg -z-10",list:"border-b border-gray-200",content:"border-x border-b rounded-b-lg shadow-sm"},enclosed:{tab:"border border-transparent rounded-t-lg",indicator:"absolute inset-0 border rounded-t-lg -z-10",list:"border-b border-gray-200",content:"border-x border-b rounded-b-lg"}},getTabStyle=item=>{const isActive=item.value===(value||activeTab),isDisabled=disabled||item.disabled,isHovered=hoveredTab===item.value;return"\n      ".concat(sizes[size].text,"\n      ").concat(sizes[size].padding,"\n      ").concat(variants[variant].tab,"\n      ").concat(isDisabled?colors[color].disabled:isActive?colors[color].active:colors[color].text,"\n      ").concat(!isDisabled&&!isActive&&colors[color].hover,"\n      relative\n      transition-all\n      duration-200\n      cursor-pointer\n      select-none\n      flex\n      items-center\n      ").concat(sizes[size].spacing,"\n      ").concat(fullWidth?"flex-1 justify-center":"","\n      ").concat(isDisabled?"cursor-not-allowed":"","\n      focus:outline-none focus:ring-2 ").concat(colors[color].ring,"\n      ").concat(!isHovered||isActive||isDisabled?"":"bg-gray-50/50","\n    ")},containerClasses="\n    flex\n    ".concat({horizontal:"flex-row",vertical:"flex-col"}[orientation],"\n    ").concat(centered?"justify-center":"","\n    ").concat(variants[variant].list,"\n    ").concat(className||"","\n  "),currentTab=items.find((item=>item.value===(value||activeTab)));return(0,jsx_runtime.jsxs)("div",(0,objectSpread2.A)((0,objectSpread2.A)({},props),{},{children:[(0,jsx_runtime.jsxs)("div",{ref:tabsRef,role:"tablist",className:containerClasses,children:[items.map((item=>(0,jsx_runtime.jsxs)(proxy.P.div,{role:"tab","data-tab-value":item.value,"aria-selected":item.value===(value||activeTab),tabIndex:disabled||item.disabled?-1:0,className:getTabStyle(item),onClick:()=>{return tab=item,void(disabled||tab.disabled||(void 0===value&&setActiveTab(tab.value),null==onChange||onChange(tab.value)));var tab},onHoverStart:()=>setHoveredTab(item.value),onHoverEnd:()=>setHoveredTab(null),whileHover:!disabled&&!item.disabled&&{scale:1.02},whileTap:!disabled&&!item.disabled&&{scale:.98},children:[item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:"\n                ".concat(sizes[size].icon,"\n                ").concat(item.value===(value||activeTab)?"":"opacity-75","\n                transition-opacity duration-200\n              ")}),item.label,item.badge&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{scale:0},animate:{scale:1},className:"\n                  ".concat(sizes[size].badge,"\n                  ").concat(colors[color].badge,"\n                  text-white font-bold\n                  rounded-full\n                  flex items-center justify-center\n                  ml-2\n                "),children:item.badge.content}),"pills"!==variant&&item.value===(value||activeTab)&&(0,jsx_runtime.jsx)(proxy.P.div,{className:"\n                  ".concat(variants[variant].indicator,"\n                  ").concat(colors[color].indicator,"\n                  ").concat(sizes[size].indicator,"\n                "),layoutId:animated?"indicator":void 0,transition:{type:"spring",bounce:.2,duration:.6},style:tabsRect[item.value]?{width:tabsRect[item.value].width,left:tabsRect[item.value].left}:void 0})]},item.value))),"pills"===variant&&(0,jsx_runtime.jsx)(proxy.P.div,{className:"\n              ".concat(variants[variant].indicator,"\n              ").concat(colors[color].indicator,"\n              opacity-10\n            "),layoutId:animated?"pill-indicator":void 0,transition:{type:"spring",bounce:.2,duration:.6},style:tabsRect[activeTab]?{width:tabsRect[activeTab].width,left:tabsRect[activeTab].left}:void 0})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{mode:"wait",children:(null==currentTab?void 0:currentTab.content)&&(0,jsx_runtime.jsx)(proxy.P.div,{role:"tabpanel","data-tab-content":currentTab.value,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"\n              ".concat(sizes[size].content,"\n              ").concat(colors[color].content,"\n              ").concat(variants[variant].content,"\n              ").concat(colors[color].border,"\n            "),style:{minHeight:contentHeight},children:currentTab.content},currentTab.value)})]}))},Navigation_Tabs=Tabs;Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{defaultValue:{value:"[]",computed:!1},description:"Array of tab items",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"Label text for the tab",required:!0},value:{name:"string",description:"Unique value for the tab",required:!0},icon:{name:"elementType",description:"Icon component for the tab",required:!1},disabled:{name:"bool",description:"Whether the tab is disabled",required:!1},content:{name:"node",description:"Content to show when tab is active",required:!1},badge:{name:"shape",value:{content:{name:"union",value:[{name:"string"},{name:"number"}],description:"Content to show in the badge",required:!1}},description:"Badge configuration",required:!1}}}},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"Visual style variant",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'pills'",computed:!1},{value:"'bordered'",computed:!1},{value:"'lifted'",computed:!1},{value:"'enclosed'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of the tabs",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"Color theme",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1},{value:"'white'",computed:!1}]},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},description:"Tab list orientation",type:{name:"enum",value:[{value:"'horizontal'",computed:!1},{value:"'vertical'",computed:!1}]},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},description:"Whether to make tabs take full width",type:{name:"bool"},required:!1},centered:{defaultValue:{value:"false",computed:!1},description:"Whether to center the tabs",type:{name:"bool"},required:!1},animated:{defaultValue:{value:"true",computed:!1},description:"Whether to animate tab changes",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether all tabs are disabled",type:{name:"bool"},required:!1},defaultValue:{description:"Initial active tab (uncontrolled)",type:{name:"string"},required:!1},value:{description:"Active tab (controlled)",type:{name:"string"},required:!1},onChange:{description:"Called when active tab changes",type:{name:"func"},required:!1},className:{description:"Additional CSS classes",type:{name:"string"},required:!1}}};var index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js");const Tabs_stories={title:"Navigation/Tabs",component:Navigation_Tabs,parameters:{layout:"centered",docs:{description:{component:"A versatile tabs component with multiple variants, animations, and rich features."}}},argTypes:{color:{control:"select",options:["primary","secondary","success","white"],description:"Color theme of the tabs"},variant:{control:"select",options:["default","pills","bordered","lifted","enclosed"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large"],description:"Size of the tabs"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the tabs"}}},items=[{label:"Home",value:"home",icon:index_esm.V5Y,badge:{content:"5"},content:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Home Content"}),(0,jsx_runtime.jsx)("p",{children:"This is the home tab content."})]})},{label:"Profile",value:"profile",icon:index_esm.JXP,content:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Profile Content"}),(0,jsx_runtime.jsx)("p",{children:"This is the profile tab content."})]})},{label:"Messages",value:"messages",icon:index_esm.pHD,badge:{content:"3"},content:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Messages Content"}),(0,jsx_runtime.jsx)("p",{children:"This is the messages tab content."})]})},{label:"Notifications",value:"notifications",icon:index_esm.zd,badge:{content:"2"},content:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Notifications Content"}),(0,jsx_runtime.jsx)("p",{children:"This is the notifications tab content."})]})},{label:"Settings",value:"settings",icon:index_esm.VSk,content:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Settings Content"}),(0,jsx_runtime.jsx)("p",{children:"This is the settings tab content."})]})}],Default={args:{items,color:"primary"}},Pills={args:{items,variant:"pills",color:"primary"}},Bordered={args:{items,variant:"bordered",color:"primary"}},Lifted={args:{items,variant:"lifted",color:"primary"}},Enclosed={args:{items,variant:"enclosed",color:"primary"}},Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Tabs,{items:items.slice(0,3),size:"small",variant:"pills",color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Tabs,{items:items.slice(0,3),size:"medium",variant:"pills",color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Tabs,{items:items.slice(0,3),size:"large",variant:"pills",color:"primary"})]}),Colors=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Tabs,{items:items.slice(0,3),color:"primary",variant:"pills"}),(0,jsx_runtime.jsx)(Navigation_Tabs,{items:items.slice(0,3),color:"secondary",variant:"pills"}),(0,jsx_runtime.jsx)(Navigation_Tabs,{items:items.slice(0,3),color:"success",variant:"pills"})]}),WithIconsAndBadges={args:{items,variant:"pills",color:"primary"}},Vertical={args:{items:items.slice(0,3),orientation:"vertical",variant:"pills",color:"primary"}},FullWidth={args:{items:items.slice(0,3),fullWidth:!0,variant:"pills",color:"primary"}},Centered={args:{items:items.slice(0,3),centered:!0,variant:"pills",color:"primary"}},Controlled=()=>{const[activeTab,setActiveTab]=react.useState("home");return(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsxs)("div",{className:"text-center text-gray-600",children:["Active Tab: ",activeTab]}),(0,jsx_runtime.jsx)(Navigation_Tabs,{items,value:activeTab,onChange:setActiveTab,variant:"pills",color:"primary"}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setActiveTab("home"),className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Go to Home"}),(0,jsx_runtime.jsx)("button",{onClick:()=>setActiveTab("settings"),className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Go to Settings"})]})]})},Responsive={args:{items,variant:"pills",color:"primary",fullWidth:!0},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"w-full max-w-4xl mx-auto px-4",children:(0,jsx_runtime.jsx)(Story,{})})]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    color: 'primary'\n  }\n}",...Default.parameters?.docs?.source}}},Pills.parameters={...Pills.parameters,docs:{...Pills.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...Pills.parameters?.docs?.source}}},Bordered.parameters={...Bordered.parameters,docs:{...Bordered.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'bordered',\n    color: 'primary'\n  }\n}",...Bordered.parameters?.docs?.source}}},Lifted.parameters={...Lifted.parameters,docs:{...Lifted.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'lifted',\n    color: 'primary'\n  }\n}",...Lifted.parameters?.docs?.source}}},Enclosed.parameters={...Enclosed.parameters,docs:{...Enclosed.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'enclosed',\n    color: 'primary'\n  }\n}",...Enclosed.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\n    <Tabs items={items.slice(0, 3)} size="small" variant="pills" color="primary" />\n    <Tabs items={items.slice(0, 3)} size="medium" variant="pills" color="primary" />\n    <Tabs items={items.slice(0, 3)} size="large" variant="pills" color="primary" />\n  </div>',...Sizes.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\n    <Tabs items={items.slice(0, 3)} color="primary" variant="pills" />\n    <Tabs items={items.slice(0, 3)} color="secondary" variant="pills" />\n    <Tabs items={items.slice(0, 3)} color="success" variant="pills" />\n  </div>',...Colors.parameters?.docs?.source}}},WithIconsAndBadges.parameters={...WithIconsAndBadges.parameters,docs:{...WithIconsAndBadges.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...WithIconsAndBadges.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: items.slice(0, 3),\n    orientation: 'vertical',\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...Vertical.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: items.slice(0, 3),\n    fullWidth: true,\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...FullWidth.parameters?.docs?.source}}},Centered.parameters={...Centered.parameters,docs:{...Centered.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: items.slice(0, 3),\n    centered: true,\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...Centered.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'() => {\n  const [activeTab, setActiveTab] = React.useState(\'home\');\n  return <div className="space-y-4">\n      <div className="text-center text-gray-600">\n        Active Tab: {activeTab}\n      </div>\n      <Tabs items={items} value={activeTab} onChange={setActiveTab} variant="pills" color="primary" />\n      <div className="flex justify-center gap-4">\n        <button onClick={() => setActiveTab(\'home\')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">\n          Go to Home\n        </button>\n        <button onClick={() => setActiveTab(\'settings\')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">\n          Go to Settings\n        </button>\n      </div>\n    </div>;\n}',...Controlled.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'pills',\n    color: 'primary',\n    fullWidth: true\n  },\n  decorators: [Story => <div className=\"w-full max-w-4xl mx-auto px-4\">\n        <Story />\n      </div>]\n}",...Responsive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Pills","Bordered","Lifted","Enclosed","Sizes","Colors","WithIconsAndBadges","Vertical","FullWidth","Centered","Controlled","Responsive"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);