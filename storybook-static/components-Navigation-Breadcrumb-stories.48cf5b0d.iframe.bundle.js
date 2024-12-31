"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[6720],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Navigation/Breadcrumb.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bordered:()=>Bordered,Colors:()=>Colors,Default:()=>Default,Pills:()=>Pills,Responsive:()=>Responsive,Separators:()=>Separators,Sizes:()=>Sizes,Truncated:()=>Truncated,WithCustomSeparator:()=>WithCustomSeparator,WithIcons:()=>WithIcons,WithoutHomeIcon:()=>WithoutHomeIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumb_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["items","separatorIcon","variant","size","color","maxItems","showHomeIcon","className"],Breadcrumb=_ref=>{let{items=[],separatorIcon,variant="default",size="medium",color="primary",maxItems=0,showHomeIcon=!0,className}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const sizes={small:{text:"text-sm",icon:"w-3.5 h-3.5",spacing:"space-x-1",padding:"px-2 py-1"},medium:{text:"text-base",icon:"w-4 h-4",spacing:"space-x-2",padding:"px-3 py-1.5"},large:{text:"text-lg",icon:"w-5 h-5",spacing:"space-x-3",padding:"px-4 py-2"}},colors={primary:{text:"text-gray-600",hover:"hover:text-blue-600",active:"text-blue-600",separator:"text-gray-400",icon:"text-gray-400",bg:"bg-gray-100",border:"border-gray-200"},secondary:{text:"text-gray-600",hover:"hover:text-gray-900",active:"text-gray-900",separator:"text-gray-400",icon:"text-gray-400",bg:"bg-gray-100",border:"border-gray-200"},white:{text:"text-gray-500",hover:"hover:text-gray-700",active:"text-gray-700",separator:"text-gray-300",icon:"text-gray-300",bg:"bg-white",border:"border-gray-100"}},variants={default:{container:"",item:"",separator:""},pills:{container:"p-2 rounded-lg bg-gray-50/50",item:"rounded-md",separator:"mx-1"},bordered:{container:"p-2 rounded-lg border",item:"rounded-md",separator:"mx-1"}},renderSeparator=()=>separatorIcon?react.cloneElement(separatorIcon,{className:"".concat(sizes[size].icon," ").concat(colors[color].separator)}):(0,jsx_runtime.jsx)(index_esm.fOo,{className:"".concat(sizes[size].icon," ").concat(colors[color].separator)}),visibleItems=maxItems>0&&items.length>maxItems?[...items.slice(0,Math.max(1,Math.floor((maxItems-1)/2))),{label:"...",truncated:!0},...items.slice(items.length-Math.floor((maxItems-1)/2))]:items,containerClasses="\n    flex items-center flex-wrap\n    ".concat(sizes[size].spacing,"\n    ").concat(variants[variant].container,"\n    ").concat("bordered"===variant&&colors[color].border,"\n    ").concat(className||"","\n  "),itemClasses=(isLast,isTruncated)=>"\n    ".concat(sizes[size].text,"\n    ").concat(sizes[size].padding,"\n    ").concat(variants[variant].item,"\n    ").concat(isTruncated?colors[color].separator:isLast?colors[color].active:colors[color].text,"\n    ").concat(!isLast&&!isTruncated&&colors[color].hover,"\n    transition-colors duration-200\n    flex items-center gap-1.5\n    ").concat("default"!==variant&&colors[color].bg,"\n  ");return(0,jsx_runtime.jsx)("nav",(0,objectSpread2.A)((0,objectSpread2.A)({"aria-label":"Breadcrumb",className:containerClasses},props),{},{children:(0,jsx_runtime.jsxs)("ol",{className:"flex items-center flex-wrap",children:[showHomeIcon&&(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsxs)(proxy.P.a,{href:"/",className:itemClasses(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,jsx_runtime.jsx)(index_esm.V5Y,{className:"".concat(sizes[size].icon," ").concat(colors[color].icon)}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Home"})]}),(0,jsx_runtime.jsx)("span",{className:"mx-2","aria-hidden":"true",children:renderSeparator()})]}),visibleItems.map(((item,index)=>{const isLast=index===visibleItems.length-1,isTruncated=item.truncated;return(0,jsx_runtime.jsxs)("li",{className:"flex items-center",children:[isTruncated?(0,jsx_runtime.jsx)("span",{className:itemClasses(!1,!0),children:item.label}):(0,jsx_runtime.jsx)(proxy.P.div,{whileHover:isLast?{}:{scale:1.05},whileTap:isLast?{}:{scale:.95},children:item.href?(0,jsx_runtime.jsxs)("a",{href:item.href,className:itemClasses(isLast),children:[item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:"".concat(sizes[size].icon," ").concat(colors[color].icon)}),item.label]}):(0,jsx_runtime.jsxs)("span",{className:itemClasses(isLast),"aria-current":isLast?"page":void 0,children:[item.icon&&(0,jsx_runtime.jsx)(item.icon,{className:"".concat(sizes[size].icon," ").concat(colors[color].icon)}),item.label]})}),!isLast&&(0,jsx_runtime.jsx)("span",{className:"mx-2 ".concat(variants[variant].separator),"aria-hidden":"true",children:renderSeparator()})]},index)}))]})}))},Navigation_Breadcrumb=Breadcrumb;Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{defaultValue:{value:"[]",computed:!1},description:"Array of breadcrumb items",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"Item label",required:!0},href:{name:"string",description:"Item link URL",required:!1},icon:{name:"elementType",description:"Item icon component",required:!1},truncated:{name:"bool",description:"Whether this is a truncated item (internal use)",required:!1}}}},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"Visual style variant",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'pills'",computed:!1},{value:"'bordered'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size preset",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"Color theme",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'white'",computed:!1}]},required:!1},maxItems:{defaultValue:{value:"0",computed:!1},description:"Maximum number of visible items (0 for all)",type:{name:"number"},required:!1},showHomeIcon:{defaultValue:{value:"true",computed:!1},description:"Whether to show the home icon",type:{name:"bool"},required:!1},separatorIcon:{description:"Custom separator icon element",type:{name:"element"},required:!1},className:{description:"Additional CSS classes",type:{name:"string"},required:!1}}};const Breadcrumb_stories={title:"Navigation/Breadcrumb",component:Navigation_Breadcrumb,parameters:{layout:"centered",docs:{description:{component:"A versatile breadcrumb navigation component with multiple variants and features."}}},argTypes:{color:{control:"select",options:["primary","secondary","white"],description:"Color theme of the breadcrumb"},variant:{control:"select",options:["default","pills","bordered"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large"],description:"Size of the breadcrumb items"},maxItems:{control:"number",description:"Maximum number of visible items (0 for all)"},showHomeIcon:{control:"boolean",description:"Whether to show the home icon"}}},items=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops",href:"/products/electronics/laptops"},{label:"MacBook Pro"}],Default={args:{items,color:"primary"}},WithCustomSeparator={args:{items,separatorIcon:(0,jsx_runtime.jsx)(index_esm.del,{}),color:"primary"}},Pills={args:{items,variant:"pills",color:"primary"}},Bordered={args:{items,variant:"bordered",color:"primary"}},Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-6",children:[(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,size:"small",color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,size:"medium",color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,size:"large",color:"primary"})]}),Colors=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-6",children:[(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,color:"primary",variant:"pills"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,color:"secondary",variant:"pills"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,color:"white",variant:"pills"})]}),WithIcons={args:{items:[{label:"Dashboard",href:"/",icon:index_esm.V5Y},{label:"Settings",href:"/settings",icon:index_esm.VSk},{label:"Profile",href:"/settings/profile",icon:index_esm.JXP},{label:"Security",icon:index_esm.pcC}],variant:"pills",color:"primary"}},Truncated={args:{items:items.map((item=>(0,objectSpread2.A)((0,objectSpread2.A)({},item),{},{label:item.label.repeat(3)}))),maxItems:3,color:"primary"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"max-w-md",children:(0,jsx_runtime.jsx)(Story,{})})]},Separators=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-6",children:[(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,separatorIcon:(0,jsx_runtime.jsx)(index_esm.fOo,{}),color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,separatorIcon:(0,jsx_runtime.jsx)(index_esm.del,{}),color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,separatorIcon:(0,jsx_runtime.jsx)(index_esm.sxA,{className:"w-1.5 h-1.5"}),color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Breadcrumb,{items,separatorIcon:(0,jsx_runtime.jsx)(index_esm.dyV,{}),color:"primary"})]}),WithoutHomeIcon={args:{items,showHomeIcon:!1,color:"primary"}},Responsive={args:{items:items.concat(items),maxItems:5,color:"primary",variant:"pills"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"w-full max-w-4xl mx-auto",children:(0,jsx_runtime.jsx)(Story,{})})]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    color: 'primary'\n  }\n}",...Default.parameters?.docs?.source}}},WithCustomSeparator.parameters={...WithCustomSeparator.parameters,docs:{...WithCustomSeparator.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    separatorIcon: <FiSlash />,\n    color: 'primary'\n  }\n}",...WithCustomSeparator.parameters?.docs?.source}}},Pills.parameters={...Pills.parameters,docs:{...Pills.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...Pills.parameters?.docs?.source}}},Bordered.parameters={...Bordered.parameters,docs:{...Bordered.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    variant: 'bordered',\n    color: 'primary'\n  }\n}",...Bordered.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-6">\n    <Breadcrumb items={items} size="small" color="primary" />\n    <Breadcrumb items={items} size="medium" color="primary" />\n    <Breadcrumb items={items} size="large" color="primary" />\n  </div>',...Sizes.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => <div className="space-y-6">\n    <Breadcrumb items={items} color="primary" variant="pills" />\n    <Breadcrumb items={items} color="secondary" variant="pills" />\n    <Breadcrumb items={items} color="white" variant="pills" />\n  </div>',...Colors.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Dashboard',\n      href: '/',\n      icon: FiHome\n    }, {\n      label: 'Settings',\n      href: '/settings',\n      icon: FiSettings\n    }, {\n      label: 'Profile',\n      href: '/settings/profile',\n      icon: FiUser\n    }, {\n      label: 'Security',\n      icon: FiShield\n    }],\n    variant: 'pills',\n    color: 'primary'\n  }\n}",...WithIcons.parameters?.docs?.source}}},Truncated.parameters={...Truncated.parameters,docs:{...Truncated.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: items.map(item => ({\n      ...item,\n      label: item.label.repeat(3) // Make labels longer\n    })),\n    maxItems: 3,\n    color: 'primary'\n  },\n  decorators: [Story => <div className=\"max-w-md\">\n        <Story />\n      </div>]\n}",...Truncated.parameters?.docs?.source}}},Separators.parameters={...Separators.parameters,docs:{...Separators.parameters?.docs,source:{originalSource:'() => <div className="space-y-6">\n    <Breadcrumb items={items} separatorIcon={<FiChevronRight />} color="primary" />\n    <Breadcrumb items={items} separatorIcon={<FiSlash />} color="primary" />\n    <Breadcrumb items={items} separatorIcon={<FiCircle className="w-1.5 h-1.5" />} color="primary" />\n    <Breadcrumb items={items} separatorIcon={<FiArrowRight />} color="primary" />\n  </div>',...Separators.parameters?.docs?.source}}},WithoutHomeIcon.parameters={...WithoutHomeIcon.parameters,docs:{...WithoutHomeIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    showHomeIcon: false,\n    color: 'primary'\n  }\n}",...WithoutHomeIcon.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: items.concat(items),\n    // Double the items\n    maxItems: 5,\n    color: 'primary',\n    variant: 'pills'\n  },\n  decorators: [Story => <div className=\"w-full max-w-4xl mx-auto\">\n        <Story />\n      </div>]\n}",...Responsive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCustomSeparator","Pills","Bordered","Sizes","Colors","WithIcons","Truncated","Separators","WithoutHomeIcon","Responsive"]}}]);