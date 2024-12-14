"use strict";(self.webpackChunkmuilibrary=self.webpackChunkmuilibrary||[]).push([[2949],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Navigation/DropdownMenu.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Colors:()=>Colors,ComplexExample:()=>ComplexExample,Placements:()=>Placements,Sizes:()=>Sizes,Variants:()=>Variants,WithCustomTrigger:()=>WithCustomTrigger,WithNestedItems:()=>WithNestedItems,WithSelectedItems:()=>WithSelectedItems,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropdownMenu_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["trigger","items","variant","color","size","placement","arrow","closeOnClick","closeOnOutsideClick","nested","withDividers","withIcons","withBadges","withGlow","withGradient","className"],DropdownMenu=_ref=>{let{trigger,items=[],variant="default",color="gray",size="medium",placement="bottom-start",arrow=!0,closeOnClick=!0,closeOnOutsideClick=!0,nested=!1,withDividers=!1,withIcons=!0,withBadges=!1,withGlow=!1,withGradient=!1,className=""}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[isOpen,setIsOpen]=(0,react.useState)(!1),[activeIndex,setActiveIndex]=(0,react.useState)(-1),dropdownRef=(0,react.useRef)(null),colors={gray:{bg:"bg-white dark:bg-gray-800",text:"text-gray-700 dark:text-gray-200",hover:"hover:bg-gray-100 dark:hover:bg-gray-700",border:"border-gray-200 dark:border-gray-700",trigger:"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",gradient:"from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700",glow:"shadow-gray-200/50 dark:shadow-gray-900/50"},primary:{bg:"bg-white dark:bg-gray-800",text:"text-primary-700 dark:text-primary-200",hover:"hover:bg-primary-50 dark:hover:bg-primary-900",border:"border-primary-200 dark:border-primary-700",trigger:"text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900",gradient:"from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800",glow:"shadow-primary-200/50 dark:shadow-primary-900/50"},secondary:{bg:"bg-white dark:bg-gray-800",text:"text-secondary-700 dark:text-secondary-200",hover:"hover:bg-secondary-50 dark:hover:bg-secondary-900",border:"border-secondary-200 dark:border-secondary-700",trigger:"text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-900",gradient:"from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800",glow:"shadow-secondary-200/50 dark:shadow-secondary-900/50"}},sizes={small:{text:"text-sm",padding:"px-3 py-1.5",trigger:"text-sm px-2 py-1",icon:"w-4 h-4",badge:"w-4 h-4 text-[10px]"},medium:{text:"text-base",padding:"px-4 py-2",trigger:"text-base px-3 py-2",icon:"w-5 h-5",badge:"w-5 h-5 text-xs"},large:{text:"text-lg",padding:"px-5 py-2.5",trigger:"text-lg px-4 py-2.5",icon:"w-6 h-6",badge:"w-6 h-6 text-sm"}},itemVariants={hidden:{opacity:0,x:-10,transition:{duration:.1}},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:300,damping:20}},hover:{scale:1.02,x:5,transition:{duration:.2}}};(0,react.useEffect)((()=>{const handleClickOutside=event=>{closeOnOutsideClick&&dropdownRef.current&&!dropdownRef.current.contains(event.target)&&(setIsOpen(!1),setActiveIndex(-1))};return document.addEventListener("mousedown",handleClickOutside),()=>document.removeEventListener("mousedown",handleClickOutside)}),[closeOnOutsideClick]);return(0,jsx_runtime.jsxs)("div",(0,objectSpread2.A)((0,objectSpread2.A)({ref:dropdownRef,className:"relative inline-block ".concat(className)},props),{},{children:[react.isValidElement(trigger)?react.cloneElement(trigger,{onClick:()=>setIsOpen(!isOpen),className:"".concat(trigger.props.className||""," cursor-pointer")}):(0,jsx_runtime.jsxs)(proxy.P.button,{onClick:()=>setIsOpen(!isOpen),whileHover:{scale:1.05},whileTap:{scale:.95},className:"\n          inline-flex items-center justify-center rounded-md\n          ".concat(colors[color].trigger,"\n          ").concat(sizes[size].trigger,"\n          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500\n          transition-all duration-200\n        "),children:[trigger||(0,jsx_runtime.jsx)(index_esm.ZZB,{className:sizes[size].icon}),!nested&&(0,jsx_runtime.jsx)(proxy.P.span,{animate:{rotate:isOpen?180:0},transition:{duration:.2},className:"ml-2",children:(0,jsx_runtime.jsx)(index_esm.fK4,{className:sizes[size].icon})})]}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:isOpen&&(0,jsx_runtime.jsxs)(proxy.P.div,{initial:"hidden",animate:"visible",exit:"hidden",variants:{hidden:{opacity:0,scale:.95,transition:{duration:.1}},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:20,staggerChildren:.05}}},className:"\n              absolute z-50 min-w-[160px]\n              ".concat({"bottom-start":"top-full left-0","bottom-end":"top-full right-0","top-start":"bottom-full left-0","top-end":"bottom-full right-0","right-start":"left-full top-0","right-end":"left-full bottom-0","left-start":"right-full top-0","left-end":"right-full bottom-0"}[placement],"\n              ").concat(withGradient?"bg-gradient-to-b ".concat(colors[color].gradient):colors[color].bg,"\n              ").concat(colors[color].text,"\n              ").concat({default:"shadow-lg border",minimal:"shadow border",flat:""}[variant],"\n              ").concat(colors[color].border,"\n              ").concat(withGlow?"shadow-xl ".concat(colors[color].glow):"","\n              rounded-md overflow-hidden\n              mt-2\n            "),children:[arrow&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{scale:0},animate:{scale:1},className:"\n                  absolute w-3 h-3 transform rotate-45\n                  ".concat(withGradient?"bg-gradient-to-b ".concat(colors[color].gradient):colors[color].bg,"\n                  ").concat(colors[color].border,"\n                  ").concat(placement.startsWith("bottom")?"-top-1.5 border-t border-l":"","\n                  ").concat(placement.startsWith("top")?"-bottom-1.5 border-b border-r":"","\n                  ").concat(placement.startsWith("right")?"-left-1.5 border-l border-t":"","\n                  ").concat(placement.startsWith("left")?"-right-1.5 border-r border-b":"","\n                  ").concat(placement.endsWith("start")?"left-4":"","\n                  ").concat(placement.endsWith("end")?"right-4":"","\n                ")}),(0,jsx_runtime.jsx)("div",{className:"relative bg-inherit rounded-md overflow-hidden py-1",children:function(menuItems){return menuItems.map(((item,index)=>{if(item.separator)return withDividers?(0,jsx_runtime.jsx)(proxy.P.div,{variants:itemVariants,className:"my-1 border-t ".concat(colors[color].border)},index):null;const hasSubItems=Array.isArray(item.items)&&item.items.length>0;return(0,jsx_runtime.jsx)(proxy.P.div,{variants:itemVariants,className:"relative",children:hasSubItems?(0,jsx_runtime.jsx)(DropdownMenu,{trigger:(0,jsx_runtime.jsxs)(proxy.P.div,{className:"\n                    flex items-center justify-between w-full\n                    ".concat(colors[color].text,"\n                    ").concat(colors[color].hover,"\n                    ").concat(sizes[size].padding,"\n                    ").concat(sizes[size].text,"\n                    cursor-pointer\n                  "),whileHover:"hover",variants:itemVariants,onHoverStart:()=>setActiveIndex(index),children:[(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-2",children:[withIcons&&item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:sizes[size].icon}),(0,jsx_runtime.jsxs)("span",{className:"relative",children:[item.label,withBadges&&item.badge&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{scale:0},animate:{scale:1},className:"\n                            absolute -top-1 -right-6\n                            flex items-center justify-center\n                            ".concat(sizes[size].badge,"\n                            rounded-full bg-red-500 text-white font-bold\n                          "),children:item.badge})]})]}),(0,jsx_runtime.jsx)(index_esm.fOo,{className:sizes[size].icon})]}),items:item.items,variant,color,size,placement:"right-start",arrow,closeOnClick,closeOnOutsideClick:!1,nested:!0,withDividers,withIcons,withBadges,className:"min-w-[160px]"}):(0,jsx_runtime.jsxs)(proxy.P.div,{onClick:()=>(item=>{var _item$onClick;closeOnClick&&!item.items&&(setIsOpen(!1),setActiveIndex(-1)),null===(_item$onClick=item.onClick)||void 0===_item$onClick||_item$onClick.call(item)})(item),className:"\n                flex items-center justify-between\n                ".concat(colors[color].text,"\n                ").concat(colors[color].hover,"\n                ").concat(sizes[size].padding,"\n                ").concat(sizes[size].text,"\n                cursor-pointer\n              "),whileHover:"hover",variants:itemVariants,children:[(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-2",children:[withIcons&&item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:sizes[size].icon}),(0,jsx_runtime.jsxs)("span",{className:"relative",children:[item.label,withBadges&&item.badge&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{scale:0},animate:{scale:1},className:"\n                        absolute -top-1 -right-6\n                        flex items-center justify-center\n                        ".concat(sizes[size].badge,"\n                        rounded-full bg-red-500 text-white font-bold\n                      "),children:item.badge})]})]}),item.selected&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300,damping:20},children:(0,jsx_runtime.jsx)(index_esm.YrT,{className:sizes[size].icon})})]})},index)}))}(items)})]})})]}))},Navigation_DropdownMenu=DropdownMenu;DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},icon:{name:"elementType",required:!1},onClick:{name:"func",required:!1},items:{name:"array",required:!1},separator:{name:"bool",required:!1},selected:{name:"bool",required:!1},badge:{name:"node",required:!1}}}},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'minimal'",computed:!1},{value:"'flat'",computed:!1}]},required:!1},color:{defaultValue:{value:"'gray'",computed:!1},description:"",type:{name:"enum",value:[{value:"'gray'",computed:!1},{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},placement:{defaultValue:{value:"'bottom-start'",computed:!1},description:"",type:{name:"enum",value:[{value:"'bottom-start'",computed:!1},{value:"'bottom-end'",computed:!1},{value:"'top-start'",computed:!1},{value:"'top-end'",computed:!1},{value:"'right-start'",computed:!1},{value:"'right-end'",computed:!1},{value:"'left-start'",computed:!1},{value:"'left-end'",computed:!1}]},required:!1},arrow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},closeOnClick:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},closeOnOutsideClick:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},nested:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withDividers:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withIcons:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},withBadges:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withGlow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withGradient:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},trigger:{description:"",type:{name:"node"},required:!1}}};const DropdownMenu_stories={title:"Navigation/DropdownMenu",component:Navigation_DropdownMenu,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","minimal","flat"]},color:{control:"select",options:["gray","primary","secondary"]},size:{control:"select",options:["small","medium","large"]},placement:{control:"select",options:["bottom-start","bottom-end","top-start","top-end","right-start","right-end","left-start","left-end"]}}},defaultItems=[{label:"Profile",icon:index_esm.JXP,onClick:()=>console.log("Profile clicked")},{label:"Settings",icon:index_esm.VSk,onClick:()=>console.log("Settings clicked")},{separator:!0},{label:"Help",icon:index_esm.lrG,onClick:()=>console.log("Help clicked")},{label:"Logout",icon:index_esm.QeK,onClick:()=>console.log("Logout clicked")}],Basic={args:{trigger:"Click me",items:defaultItems,variant:"default",color:"gray",size:"medium"}},WithCustomTrigger={args:{trigger:(0,jsx_runtime.jsx)("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",children:(0,jsx_runtime.jsx)(index_esm.ZZB,{className:"w-5 h-5"})}),items:defaultItems}},Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Default",items:defaultItems,variant:"default"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Minimal",items:defaultItems,variant:"minimal"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Flat",items:defaultItems,variant:"flat"})]}),Colors=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Gray",items:defaultItems,color:"gray"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Primary",items:defaultItems,color:"primary"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Secondary",items:defaultItems,color:"secondary"})]}),Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Small",items:defaultItems,size:"small"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Medium",items:defaultItems,size:"medium"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Large",items:defaultItems,size:"large"})]}),Placements=()=>(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 gap-4 p-20",children:[(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Top Start",items:defaultItems,placement:"top-start"}),(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Top End",items:defaultItems,placement:"top-end"})}),(0,jsx_runtime.jsx)("div",{className:"flex justify-end",children:(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Right Start",items:defaultItems,placement:"right-start"})}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Left Start",items:defaultItems,placement:"left-start"}),(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Bottom Start",items:defaultItems,placement:"bottom-start"})}),(0,jsx_runtime.jsx)("div",{className:"flex justify-end",children:(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:"Bottom End",items:defaultItems,placement:"bottom-end"})})]}),WithNestedItems={args:{trigger:"File",items:[{label:"New",icon:index_esm.GGD,items:[{label:"File",icon:index_esm.QuH,onClick:()=>console.log("New file")},{label:"Folder",icon:index_esm.UDU,onClick:()=>console.log("New folder")}]},{separator:!0},{label:"Share",icon:index_esm.Pum,items:[{label:"Public",icon:index_esm.VeH,onClick:()=>console.log("Make public")},{label:"Private",icon:index_esm.F5$,onClick:()=>console.log("Make private")}]},{separator:!0},{label:"Delete",icon:index_esm.IXo,onClick:()=>console.log("Delete clicked")}]}},WithSelectedItems={args:{trigger:"Options",items:[{label:"Option 1",selected:!0},{label:"Option 2"},{label:"Option 3",selected:!0},{label:"Option 4"}]}},ComplexExample=()=>{const[notifications,setNotifications]=react.useState([{id:1,read:!1,message:"New message from John"},{id:2,read:!1,message:"Project update available"},{id:3,read:!0,message:"Your post was liked"}]);return(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:(0,jsx_runtime.jsxs)("button",{className:"flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",children:[(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/32",alt:"User",className:"w-8 h-8 rounded-full"}),(0,jsx_runtime.jsx)("span",{children:"John Doe"})]}),items:[{label:"Signed in as",icon:index_esm.JXP,items:[{label:"john@example.com",icon:index_esm.pHD},{label:"Admin Account",icon:index_esm.usP}]},{separator:!0},{label:"Your Profile",icon:index_esm.JXP},{label:"Settings",icon:index_esm.VSk},{separator:!0},{label:"Sign out",icon:index_esm.QeK}],placement:"bottom-end"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:(0,jsx_runtime.jsxs)("button",{className:"relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",children:[(0,jsx_runtime.jsx)(index_esm.zd,{className:"w-5 h-5"}),notifications.some((n=>!n.read))&&(0,jsx_runtime.jsx)("span",{className:"absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"})]}),items:[...notifications.map((notification=>({label:notification.message,icon:notification.read?index_esm.pHD:index_esm.zd,onClick:()=>{return id=notification.id,void setNotifications(notifications.map((n=>n.id===id?(0,objectSpread2.A)((0,objectSpread2.A)({},n),{},{read:!0}):n)));var id}}))),{separator:!0},{label:"Clear all",icon:index_esm.IXo,onClick:()=>{setNotifications([])}}],placement:"bottom-end"}),(0,jsx_runtime.jsx)(Navigation_DropdownMenu,{trigger:(0,jsx_runtime.jsx)("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",children:(0,jsx_runtime.jsx)(index_esm.ZZB,{className:"w-5 h-5"})}),items:[{label:"Edit",icon:index_esm.SG1},{label:"Share",icon:index_esm.Pum},{separator:!0},{label:"Delete",icon:index_esm.IXo}],placement:"bottom-end"})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    trigger: 'Click me',\n    items: defaultItems,\n    variant: 'default',\n    color: 'gray',\n    size: 'medium'\n  }\n}",...Basic.parameters?.docs?.source}}},WithCustomTrigger.parameters={...WithCustomTrigger.parameters,docs:{...WithCustomTrigger.parameters?.docs,source:{originalSource:'{\n  args: {\n    trigger: <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">\r\n        <FiMoreVertical className="w-5 h-5" />\r\n      </button>,\n    items: defaultItems\n  }\n}',...WithCustomTrigger.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="flex items-center space-x-4">\r\n    <DropdownMenu trigger="Default" items={defaultItems} variant="default" />\r\n    <DropdownMenu trigger="Minimal" items={defaultItems} variant="minimal" />\r\n    <DropdownMenu trigger="Flat" items={defaultItems} variant="flat" />\r\n  </div>',...Variants.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => <div className="flex items-center space-x-4">\r\n    <DropdownMenu trigger="Gray" items={defaultItems} color="gray" />\r\n    <DropdownMenu trigger="Primary" items={defaultItems} color="primary" />\r\n    <DropdownMenu trigger="Secondary" items={defaultItems} color="secondary" />\r\n  </div>',...Colors.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="flex items-center space-x-4">\r\n    <DropdownMenu trigger="Small" items={defaultItems} size="small" />\r\n    <DropdownMenu trigger="Medium" items={defaultItems} size="medium" />\r\n    <DropdownMenu trigger="Large" items={defaultItems} size="large" />\r\n  </div>',...Sizes.parameters?.docs?.source}}},Placements.parameters={...Placements.parameters,docs:{...Placements.parameters?.docs,source:{originalSource:'() => <div className="grid grid-cols-3 gap-4 p-20">\r\n    <DropdownMenu trigger="Top Start" items={defaultItems} placement="top-start" />\r\n    <div className="flex justify-center">\r\n      <DropdownMenu trigger="Top End" items={defaultItems} placement="top-end" />\r\n    </div>\r\n    <div className="flex justify-end">\r\n      <DropdownMenu trigger="Right Start" items={defaultItems} placement="right-start" />\r\n    </div>\r\n    <DropdownMenu trigger="Left Start" items={defaultItems} placement="left-start" />\r\n    <div className="flex justify-center">\r\n      <DropdownMenu trigger="Bottom Start" items={defaultItems} placement="bottom-start" />\r\n    </div>\r\n    <div className="flex justify-end">\r\n      <DropdownMenu trigger="Bottom End" items={defaultItems} placement="bottom-end" />\r\n    </div>\r\n  </div>',...Placements.parameters?.docs?.source}}},WithNestedItems.parameters={...WithNestedItems.parameters,docs:{...WithNestedItems.parameters?.docs,source:{originalSource:"{\n  args: {\n    trigger: 'File',\n    items: [{\n      label: 'New',\n      icon: FiPlus,\n      items: [{\n        label: 'File',\n        icon: FiFile,\n        onClick: () => console.log('New file')\n      }, {\n        label: 'Folder',\n        icon: FiFolder,\n        onClick: () => console.log('New folder')\n      }]\n    }, {\n      separator: true\n    }, {\n      label: 'Share',\n      icon: FiShare2,\n      items: [{\n        label: 'Public',\n        icon: FiGlobe,\n        onClick: () => console.log('Make public')\n      }, {\n        label: 'Private',\n        icon: FiLock,\n        onClick: () => console.log('Make private')\n      }]\n    }, {\n      separator: true\n    }, {\n      label: 'Delete',\n      icon: FiTrash2,\n      onClick: () => console.log('Delete clicked')\n    }]\n  }\n}",...WithNestedItems.parameters?.docs?.source}}},WithSelectedItems.parameters={...WithSelectedItems.parameters,docs:{...WithSelectedItems.parameters?.docs,source:{originalSource:"{\n  args: {\n    trigger: 'Options',\n    items: [{\n      label: 'Option 1',\n      selected: true\n    }, {\n      label: 'Option 2'\n    }, {\n      label: 'Option 3',\n      selected: true\n    }, {\n      label: 'Option 4'\n    }]\n  }\n}",...WithSelectedItems.parameters?.docs?.source}}},ComplexExample.parameters={...ComplexExample.parameters,docs:{...ComplexExample.parameters?.docs,source:{originalSource:"() => {\n  const [notifications, setNotifications] = React.useState([{\n    id: 1,\n    read: false,\n    message: 'New message from John'\n  }, {\n    id: 2,\n    read: false,\n    message: 'Project update available'\n  }, {\n    id: 3,\n    read: true,\n    message: 'Your post was liked'\n  }]);\n  const markAsRead = id => {\n    setNotifications(notifications.map(n => n.id === id ? {\n      ...n,\n      read: true\n    } : n));\n  };\n  const clearAll = () => {\n    setNotifications([]);\n  };\n  return <div className=\"flex items-center space-x-4\">\r\n      {/* User menu */}\r\n      <DropdownMenu trigger={<button className=\"flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800\">\r\n            <img src=\"https://via.placeholder.com/32\" alt=\"User\" className=\"w-8 h-8 rounded-full\" />\r\n            <span>John Doe</span>\r\n          </button>} items={[{\n      label: 'Signed in as',\n      icon: FiUser,\n      items: [{\n        label: 'john@example.com',\n        icon: FiMail\n      }, {\n        label: 'Admin Account',\n        icon: FiStar\n      }]\n    }, {\n      separator: true\n    }, {\n      label: 'Your Profile',\n      icon: FiUser\n    }, {\n      label: 'Settings',\n      icon: FiSettings\n    }, {\n      separator: true\n    }, {\n      label: 'Sign out',\n      icon: FiLogOut\n    }]} placement=\"bottom-end\" />\r\n\r\n      {/* Notifications menu */}\r\n      <DropdownMenu trigger={<button className=\"relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800\">\r\n            <FiBell className=\"w-5 h-5\" />\r\n            {notifications.some(n => !n.read) && <span className=\"absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full\" />}\r\n          </button>} items={[...notifications.map(notification => ({\n      label: notification.message,\n      icon: notification.read ? FiMail : FiBell,\n      onClick: () => markAsRead(notification.id)\n    })), {\n      separator: true\n    }, {\n      label: 'Clear all',\n      icon: FiTrash2,\n      onClick: clearAll\n    }]} placement=\"bottom-end\" />\r\n\r\n      {/* Actions menu */}\r\n      <DropdownMenu trigger={<button className=\"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800\">\r\n            <FiMoreVertical className=\"w-5 h-5\" />\r\n          </button>} items={[{\n      label: 'Edit',\n      icon: FiEdit\n    }, {\n      label: 'Share',\n      icon: FiShare2\n    }, {\n      separator: true\n    }, {\n      label: 'Delete',\n      icon: FiTrash2\n    }]} placement=\"bottom-end\" />\r\n    </div>;\n}",...ComplexExample.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithCustomTrigger","Variants","Colors","Sizes","Placements","WithNestedItems","WithSelectedItems","ComplexExample"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);