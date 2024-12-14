"use strict";(self.webpackChunkmuilibrary=self.webpackChunkmuilibrary||[]).push([[1205],{"./src/components/Navigation/Sidebar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapsed:()=>Collapsed,Dark:()=>Dark,Default:()=>Default,Floating:()=>Floating,Minimal:()=>Minimal,Overlay:()=>Overlay,Primary:()=>Primary,RightPosition:()=>RightPosition,Rounded:()=>Rounded,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Sidebar_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),ChevronUpIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronUpIcon.js"),ChevronDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js"),ChevronLeftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js"),ArrowTrendingUpIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ArrowTrendingUpIcon.js"),ExclamationTriangleIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js"),ArrowPathIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["brand","brandLogo","menuItems","footer","variant","position","size","color","expanded","collapsible","overlay","blur","shadow","bordered","rounded","showStatus","className","onExpandedChange"],Sidebar=_ref=>{let{brand,brandLogo,menuItems=[],footer,variant="default",position="left",size="medium",color="white",expanded=!0,collapsible=!0,overlay=!1,blur=!1,shadow=!0,bordered=!1,rounded=!1,showStatus=!1,className,onExpandedChange}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[isExpanded,setIsExpanded]=(0,react.useState)(expanded),[activeGroup,setActiveGroup]=(0,react.useState)(null),[scrolled,setScrolled]=(0,react.useState)(!1),[statusData,setStatusData]=(0,react.useState)({type:"success",message:"All systems operational"});(0,react.useEffect)((()=>{const handleScroll=()=>{setScrolled(window.scrollY>20)};return window.addEventListener("scroll",handleScroll),()=>window.removeEventListener("scroll",handleScroll)}),[]);const sizes={small:{width:"w-56",collapsedWidth:"w-16",padding:"p-2",brand:"text-lg",item:"text-sm px-3 py-2",icon:"w-5 h-5",logo:"w-8 h-8",spacing:"gap-2",badge:"w-4 h-4 text-[10px]"},medium:{width:"w-64",collapsedWidth:"w-20",padding:"p-3",brand:"text-xl",item:"text-base px-4 py-2.5",icon:"w-6 h-6",logo:"w-10 h-10",spacing:"gap-3",badge:"w-5 h-5 text-[11px]"},large:{width:"w-72",collapsedWidth:"w-24",padding:"p-4",brand:"text-2xl",item:"text-lg px-5 py-3",icon:"w-7 h-7",logo:"w-12 h-12",spacing:"gap-4",badge:"w-6 h-6 text-xs"}},colors={primary:{bg:"bg-blue-600",text:"text-white",hover:"hover:bg-blue-700/50",active:"bg-blue-700",border:"border-blue-700",muted:"text-blue-100",ring:"focus:ring-blue-400",gradient:"bg-gradient-to-b from-blue-600 to-indigo-600"},secondary:{bg:"bg-gray-800",text:"text-white",hover:"hover:bg-gray-700/50",active:"bg-gray-700",border:"border-gray-700",muted:"text-gray-300",ring:"focus:ring-gray-400",gradient:"bg-gradient-to-b from-gray-800 to-gray-900"},white:{bg:"bg-white",text:"text-gray-800",hover:"hover:bg-gray-100",active:"bg-gray-100",border:"border-gray-200",muted:"text-gray-500",ring:"focus:ring-gray-200",gradient:"bg-gradient-to-b from-gray-50 to-white"},dark:{bg:"bg-gray-900",text:"text-white",hover:"hover:bg-gray-800/50",active:"bg-gray-800",border:"border-gray-700",muted:"text-gray-300",ring:"focus:ring-gray-400",gradient:"bg-gradient-to-b from-gray-900 to-gray-800"}},baseClasses="\n    h-screen\n    ".concat(isExpanded?sizes[size].width:sizes[size].collapsedWidth,"\n    ").concat(sizes[size].padding,"\n    ").concat({default:"",floating:"mt-4 mb-4 rounded-xl",minimal:"border-r",gradient:"bg-gradient-to-b"}[variant],"\n    ").concat({left:"left-0",right:"right-0"}[position],"\n    ").concat("gradient"===variant?colors[color].gradient:colors[color].bg,"\n    ").concat(colors[color].text,"\n    ").concat(shadow?"shadow-lg":"","\n    ").concat(bordered?"border ".concat(colors[color].border):"","\n    ").concat(rounded?"rounded-r-2xl":"","\n    ").concat(overlay?"fixed z-50":"relative","\n    ").concat(blur&&overlay?"backdrop-blur-md backdrop-saturate-150":"","\n    ").concat(scrolled?"shadow-md":"","\n    transition-all duration-300\n  "),MenuItem=_ref2=>{let{item,isActive,level=0}=_ref2;const[isHovered,setIsHovered]=(0,react.useState)(!1),isGroup=Array.isArray(item.children),isGroupActive=activeGroup===item.id,showChildren=isExpanded&&isGroupActive;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(proxy.P.div,{className:"\n            ".concat(level>0?"ml-4":"","\n            ").concat(isGroup?"cursor-pointer":"","\n          "),children:(0,jsx_runtime.jsxs)(proxy.P.a,{href:isGroup?void 0:item.href,className:"\n              ".concat(sizes[size].item,"\n              ").concat(isActive||isGroupActive?colors[color].active:colors[color].hover,"\n              rounded-lg\n              flex items-center\n              ").concat(sizes[size].spacing,"\n              transition-all duration-200\n              relative\n              group\n              ").concat(item.disabled?"opacity-50 cursor-not-allowed":"","\n              focus:outline-none focus:ring-2 ").concat(colors[color].ring,"\n            "),onClick:isGroup?()=>{return groupId=item.id,void setActiveGroup(activeGroup===groupId?null:groupId);var groupId}:void 0,onHoverStart:()=>setIsHovered(!0),onHoverEnd:()=>setIsHovered(!1),whileHover:!item.disabled&&{scale:1.02},whileTap:!item.disabled&&{scale:.98},children:[item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:"\n                ".concat(sizes[size].icon,"\n                ").concat(isActive?"":colors[color].muted,"\n                transition-colors duration-200\n                flex-shrink-0\n              ")}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:(isExpanded||isHovered)&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{opacity:0,width:0},animate:{opacity:1,width:"auto"},exit:{opacity:0,width:0},className:"whitespace-nowrap flex-1 truncate",children:item.label})}),item.badge&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{scale:0},animate:{scale:1},className:"\n                  ".concat(sizes[size].badge,"\n                  ").concat("success"===item.badge.variant?"bg-green-500":"","\n                  ").concat("warning"===item.badge.variant?"bg-yellow-500":"","\n                  ").concat("error"===item.badge.variant?"bg-red-500":"","\n                  ").concat("info"===item.badge.variant?"bg-blue-500":"","\n                  text-white font-bold rounded-full\n                  flex items-center justify-center\n                  ").concat(isExpanded||isHovered?"":"hidden","\n                "),children:item.badge.content}),isGroup&&(0,jsx_runtime.jsx)(proxy.P.div,{animate:{rotate:isGroupActive?180:0},transition:{duration:.2},children:isGroupActive?(0,jsx_runtime.jsx)(ChevronUpIcon.A,{className:"".concat(sizes[size].icon," ").concat(colors[color].muted)}):(0,jsx_runtime.jsx)(ChevronDownIcon.A,{className:"".concat(sizes[size].icon," ").concat(colors[color].muted)})}),!isExpanded&&isHovered&&(0,jsx_runtime.jsxs)(proxy.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"\n                  absolute left-full top-0 ml-2\n                  ".concat(sizes[size].item,"\n                  ").concat(colors[color].bg,"\n                  shadow-lg rounded-lg\n                  whitespace-nowrap\n                  z-50\n                  flex items-center gap-2\n                "),children:[item.label,item.badge&&(0,jsx_runtime.jsx)("span",{className:"\n                    ".concat(sizes[size].badge,"\n                    ").concat("success"===item.badge.variant?"bg-green-500":"","\n                    ").concat("warning"===item.badge.variant?"bg-yellow-500":"","\n                    ").concat("error"===item.badge.variant?"bg-red-500":"","\n                    ").concat("info"===item.badge.variant?"bg-blue-500":"","\n                    text-white font-bold rounded-full\n                    flex items-center justify-center\n                  "),children:item.badge.content})]})]})}),(0,jsx_runtime.jsx)(AnimatePresence.N,{children:showChildren&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"overflow-hidden",children:item.children.map(((child,index)=>(0,jsx_runtime.jsx)(MenuItem,{item:child,isActive:child.active,level:level+1},index)))})})]})};return(0,jsx_runtime.jsx)(proxy.P.aside,(0,objectSpread2.A)((0,objectSpread2.A)({className:"".concat(baseClasses," ").concat(className||"")},props),{},{children:(0,jsx_runtime.jsxs)("div",{className:"h-full flex flex-col",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-3 min-w-0",children:[brandLogo&&(0,jsx_runtime.jsx)(proxy.P.img,{src:brandLogo,alt:brand,className:sizes[size].logo,whileHover:{scale:1.05}}),brand&&isExpanded&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{opacity:0,width:0},animate:{opacity:1,width:"auto"},exit:{opacity:0,width:0},className:"".concat(sizes[size].brand," font-bold tracking-tight truncate"),children:brand})]}),collapsible&&(0,jsx_runtime.jsx)(proxy.P.button,{onClick:()=>{const newExpanded=!isExpanded;setIsExpanded(newExpanded),null==onExpandedChange||onExpandedChange(newExpanded)},className:"\n                ".concat(sizes[size].item,"\n                ").concat(colors[color].hover,"\n                rounded-lg\n                flex items-center justify-center\n                focus:outline-none focus:ring-2 ").concat(colors[color].ring,"\n              "),whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,jsx_runtime.jsx)(proxy.P.div,{animate:{rotate:isExpanded?0:180},transition:{duration:.2},children:isExpanded?(0,jsx_runtime.jsx)(ChevronLeftIcon.A,{className:sizes[size].icon}):(0,jsx_runtime.jsx)(ChevronRightIcon.A,{className:sizes[size].icon})})})]}),showStatus&&isExpanded&&(0,jsx_runtime.jsx)("div",{className:"\n            mb-4 p-3 rounded-lg\n            ".concat("success"===statusData.type?"bg-green-500/10 text-green-500":"","\n            ").concat("warning"===statusData.type?"bg-yellow-500/10 text-yellow-500":"","\n            ").concat("error"===statusData.type?"bg-red-500/10 text-red-500":"","\n          "),children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:["success"===statusData.type&&(0,jsx_runtime.jsx)(ArrowTrendingUpIcon.A,{className:"w-5 h-5"}),"warning"===statusData.type&&(0,jsx_runtime.jsx)(ExclamationTriangleIcon.A,{className:"w-5 h-5"}),"error"===statusData.type&&(0,jsx_runtime.jsx)(ArrowPathIcon.A,{className:"w-5 h-5 animate-spin"}),(0,jsx_runtime.jsx)("span",{className:"text-sm font-medium",children:statusData.message})]})}),(0,jsx_runtime.jsx)("div",{className:"flex-1 space-y-1 overflow-y-auto",children:menuItems.map(((item,index)=>(0,jsx_runtime.jsx)(MenuItem,{item,isActive:item.active},index)))}),footer&&(0,jsx_runtime.jsx)("div",{className:"mt-6",children:isExpanded?footer:(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:react.Children.map(footer.props.children,(child=>{var _child$props;return null!=child&&null!==(_child$props=child.props)&&void 0!==_child$props&&_child$props.icon?react.cloneElement(child,{className:sizes[size].icon}):null}))})})]})}))},Navigation_Sidebar=Sidebar;Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},label:{name:"string",required:!0},href:{name:"string",required:!1},icon:{name:"elementType",required:!1},active:{name:"bool",required:!1},disabled:{name:"bool",required:!1},badge:{name:"shape",value:{content:{name:"union",value:[{name:"string"},{name:"number"}],required:!1},variant:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1},{value:"'info'",computed:!1}],required:!1}},required:!1},children:{name:"arrayOf",value:{name:"object"},required:!1}}}},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'floating'",computed:!1},{value:"'minimal'",computed:!1},{value:"'gradient'",computed:!1}]},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},color:{defaultValue:{value:"'white'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'white'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},expanded:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},collapsible:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},overlay:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},blur:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},shadow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},bordered:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showStatus:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},brand:{description:"",type:{name:"string"},required:!1},brandLogo:{description:"",type:{name:"string"},required:!1},footer:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},onExpandedChange:{description:"",type:{name:"func"},required:!1}}};var HomeIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js"),UserGroupIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js"),DocumentDuplicateIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js"),CalendarIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js"),InboxIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/InboxIcon.js"),ChartBarIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js"),CogIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CogIcon.js"),QuestionMarkCircleIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js");const Sidebar_stories={title:"Navigation/Sidebar",component:Navigation_Sidebar,parameters:{layout:"fullscreen"}},menuItems=[{label:"Dashboard",href:"#",icon:HomeIcon.A,active:!0},{label:"Team",href:"#",icon:UserGroupIcon.A},{label:"Projects",href:"#",icon:DocumentDuplicateIcon.A},{label:"Calendar",href:"#",icon:CalendarIcon.A},{label:"Documents",href:"#",icon:InboxIcon.A},{label:"Reports",href:"#",icon:ChartBarIcon.A},{label:"Settings",href:"#",icon:CogIcon.A},{label:"Help",href:"#",icon:QuestionMarkCircleIcon.A}],Footer=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-4 px-4 py-3 bg-black/10 rounded-lg",children:[(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/32",alt:"User",className:"w-8 h-8 rounded-full"}),(0,jsx_runtime.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,jsx_runtime.jsx)("div",{className:"font-medium truncate",children:"John Doe"}),(0,jsx_runtime.jsx)("div",{className:"text-sm opacity-60 truncate",children:"john@example.com"})]})]}),Default={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{})}},Dark={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),color:"dark"}},Primary={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),color:"primary"}},Floating={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),variant:"floating",color:"white",shadow:!0},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"min-h-screen bg-gray-100 p-4",children:(0,jsx_runtime.jsx)(Story,{})})]},Minimal={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),variant:"minimal",color:"white",shadow:!1}},RightPosition={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),position:"right",color:"white"}},Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"flex gap-4",children:[(0,jsx_runtime.jsx)(Navigation_Sidebar,{brand:"Small",menuItems:menuItems.slice(0,5),size:"small",color:"white"}),(0,jsx_runtime.jsx)(Navigation_Sidebar,{brand:"Medium",menuItems:menuItems.slice(0,5),size:"medium",color:"white"}),(0,jsx_runtime.jsx)(Navigation_Sidebar,{brand:"Large",menuItems:menuItems.slice(0,5),size:"large",color:"white"})]}),Collapsed={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),expanded:!1,color:"white"}},Overlay={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),overlay:!0,blur:!0,color:"dark"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4",children:(0,jsx_runtime.jsx)(Story,{})})]},Rounded={args:{brand:"Company",brandLogo:"https://via.placeholder.com/32",menuItems,footer:(0,jsx_runtime.jsx)(Footer,{}),rounded:!0,color:"white",shadow:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />\n  }\n}",...Default.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    color: 'dark'\n  }\n}",...Dark.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    color: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Floating.parameters={...Floating.parameters,docs:{...Floating.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    variant: 'floating',\n    color: 'white',\n    shadow: true\n  },\n  decorators: [Story => <div className=\"min-h-screen bg-gray-100 p-4\">\r\n        <Story />\r\n      </div>]\n}",...Floating.parameters?.docs?.source}}},Minimal.parameters={...Minimal.parameters,docs:{...Minimal.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    variant: 'minimal',\n    color: 'white',\n    shadow: false\n  }\n}",...Minimal.parameters?.docs?.source}}},RightPosition.parameters={...RightPosition.parameters,docs:{...RightPosition.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    position: 'right',\n    color: 'white'\n  }\n}",...RightPosition.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="flex gap-4">\r\n    <Sidebar brand="Small" menuItems={menuItems.slice(0, 5)} size="small" color="white" />\r\n    <Sidebar brand="Medium" menuItems={menuItems.slice(0, 5)} size="medium" color="white" />\r\n    <Sidebar brand="Large" menuItems={menuItems.slice(0, 5)} size="large" color="white" />\r\n  </div>',...Sizes.parameters?.docs?.source}}},Collapsed.parameters={...Collapsed.parameters,docs:{...Collapsed.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    expanded: false,\n    color: 'white'\n  }\n}",...Collapsed.parameters?.docs?.source}}},Overlay.parameters={...Overlay.parameters,docs:{...Overlay.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    overlay: true,\n    blur: true,\n    color: 'dark'\n  },\n  decorators: [Story => <div className=\"min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4\">\r\n        <Story />\r\n      </div>]\n}",...Overlay.parameters?.docs?.source}}},Rounded.parameters={...Rounded.parameters,docs:{...Rounded.parameters?.docs,source:{originalSource:"{\n  args: {\n    brand: 'Company',\n    brandLogo: 'https://via.placeholder.com/32',\n    menuItems,\n    footer: <Footer />,\n    rounded: true,\n    color: 'white',\n    shadow: true\n  }\n}",...Rounded.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Dark","Primary","Floating","Minimal","RightPosition","Sizes","Collapsed","Overlay","Rounded"]}}]);