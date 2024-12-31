"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[7064],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/DataDisplay/Badge.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animated:()=>Animated,Default:()=>Default,Interactive:()=>Interactive,Outlined:()=>Outlined,Removable:()=>Removable,RoundedVariants:()=>RoundedVariants,Sizes:()=>Sizes,StatusIndicators:()=>StatusIndicators,Variants:()=>Variants,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","variant","size","rounded","removable","icon","pulse","glow","outline","interactive","elevated","animated","className","onRemove","onClick"],Badge=_ref=>{let{children,variant="default",size="medium",rounded="medium",removable=!1,icon,pulse=!1,glow=!1,outline=!1,interactive=!1,elevated=!1,animated=!1,className="",onRemove,onClick}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const variants={default:{base:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100",outline:"border-gray-500 text-gray-700 dark:text-gray-300"},primary:{base:"bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-100",outline:"border-primary-500 text-primary-700 dark:text-primary-300"},success:{base:"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-100",outline:"border-green-500 text-green-700 dark:text-green-300"},warning:{base:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-100",outline:"border-yellow-500 text-yellow-700 dark:text-yellow-300"},error:{base:"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-100",outline:"border-red-500 text-red-700 dark:text-red-300"},info:{base:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-100",outline:"border-blue-500 text-blue-700 dark:text-blue-300"}},pulseAnimation={initial:{scale:1},animate:{scale:[1,1.05,1],transition:{duration:2,repeat:1/0,ease:"easeInOut"}}},bounceAnimation={initial:{y:0},animate:{y:[-2,2,-2],transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}}};return(0,jsx_runtime.jsx)(AnimatePresence.N,{children:(0,jsx_runtime.jsxs)(proxy.P.span,(0,objectSpread2.A)((0,objectSpread2.A)({variants:animated?pulse?pulseAnimation:bounceAnimation:void 0,initial:"initial",animate:"animate",whileHover:interactive?{scale:1.05}:void 0,whileTap:interactive?{scale:.95}:void 0,onClick:interactive?onClick:void 0,className:"\n          inline-flex items-center gap-1.5 font-medium\n          ".concat({tiny:"px-1.5 py-0.5 text-xs",small:"px-2 py-1 text-sm",medium:"px-2.5 py-1.5 text-base",large:"px-3 py-2 text-lg"}[size],"\n          ").concat({none:"rounded-none",small:"rounded",medium:"rounded-lg",large:"rounded-xl",full:"rounded-full"}[rounded],"\n          ").concat(outline?"border-2 ".concat(variants[variant].outline):variants[variant].base,"\n          ").concat(glow?"shadow-lg shadow-".concat(variant,"-500/50"):"","\n          ").concat(elevated?"shadow-md hover:shadow-lg transition-shadow":"","\n          ").concat(interactive?"cursor-pointer":"","\n          ").concat(className,"\n        ")},props),{},{children:[icon&&(()=>{if(react.isValidElement(icon))return icon;const iconProps={className:"".concat("tiny"===size?"w-3 h-3":"small"===size?"w-3.5 h-3.5":"large"===size?"w-5 h-5":"w-4 h-4")},iconMap={success:(0,jsx_runtime.jsx)(index_esm.YrT,(0,objectSpread2.A)({},iconProps)),warning:(0,jsx_runtime.jsx)(index_esm.y3G,(0,objectSpread2.A)({},iconProps)),error:(0,jsx_runtime.jsx)(index_esm.yGN,(0,objectSpread2.A)({},iconProps)),info:(0,jsx_runtime.jsx)(index_esm.S8s,(0,objectSpread2.A)({},iconProps)),notification:(0,jsx_runtime.jsx)(index_esm.zd,(0,objectSpread2.A)({},iconProps)),security:(0,jsx_runtime.jsx)(index_esm.pcC,(0,objectSpread2.A)({},iconProps)),time:(0,jsx_runtime.jsx)(index_esm.Ohp,(0,objectSpread2.A)({},iconProps)),favorite:(0,jsx_runtime.jsx)(index_esm.icx,(0,objectSpread2.A)({},iconProps)),power:(0,jsx_runtime.jsx)(index_esm.FrA,(0,objectSpread2.A)({},iconProps)),award:(0,jsx_runtime.jsx)(index_esm.TPq,(0,objectSpread2.A)({},iconProps)),default:(0,jsx_runtime.jsx)(index_esm.usP,(0,objectSpread2.A)({},iconProps))};return iconMap[variant]||icon?iconMap[icon]||iconMap.default:null})(),children,removable&&(0,jsx_runtime.jsx)(proxy.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:e=>{e.stopPropagation(),null==onRemove||onRemove()},className:"\n              ml-1 hover:bg-black/10 rounded-full p-0.5\n              ".concat("tiny"===size?"ml-0.5":"large"===size?"ml-2":"ml-1","\n            "),children:(0,jsx_runtime.jsx)(index_esm.yGN,{className:"tiny"===size?"w-2.5 h-2.5":"small"===size?"w-3 h-3":"large"===size?"w-5 h-5":"w-4 h-4"})})]}))})},DataDisplay_Badge=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},rounded:{defaultValue:{value:"'medium'",computed:!1},required:!1},removable:{defaultValue:{value:"false",computed:!1},required:!1},pulse:{defaultValue:{value:"false",computed:!1},required:!1},glow:{defaultValue:{value:"false",computed:!1},required:!1},outline:{defaultValue:{value:"false",computed:!1},required:!1},interactive:{defaultValue:{value:"false",computed:!1},required:!1},elevated:{defaultValue:{value:"false",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Badge_stories={title:"Data Display/Badge",component:DataDisplay_Badge,parameters:{layout:"centered",docs:{description:{component:"A versatile badge component with various styles and animations."}}},argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","info"]},size:{control:"select",options:["small","medium","large"]},rounded:{control:"select",options:["none","small","medium","large","full"]},removable:{control:"boolean"},pulse:{control:"boolean"},glow:{control:"boolean"},outline:{control:"boolean"}}},Default={args:{children:"Default Badge"}},Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"default",children:"Default"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"success",children:"Success"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"warning",children:"Warning"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"error",children:"Error"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"info",children:"Info"})]}),Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{size:"small",children:"Small"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{size:"medium",children:"Medium"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{size:"large",children:"Large"})]}),RoundedVariants=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{rounded:"none",children:"Square"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{rounded:"small",children:"Small Rounded"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{rounded:"medium",children:"Medium Rounded"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{rounded:"large",children:"Large Rounded"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{rounded:"full",children:"Fully Rounded"})]}),WithIcons=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{icon:(0,jsx_runtime.jsx)(index_esm.usP,{}),variant:"primary",children:"Featured"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{icon:(0,jsx_runtime.jsx)(index_esm.ARf,{}),variant:"success",children:"Trending Up"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{icon:(0,jsx_runtime.jsx)(index_esm.JW4,{}),variant:"error",children:"Trending Down"})]}),Removable=()=>{const[badges,setBadges]=react.useState([{id:1,text:"React",variant:"primary"},{id:2,text:"Vue",variant:"success"},{id:3,text:"Angular",variant:"error"}]);return(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap gap-2",children:badges.map((badge=>(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:badge.variant,removable:!0,onRemove:()=>{return id=badge.id,void setBadges(badges.filter((badge=>badge.id!==id)));var id},children:badge.text},badge.id)))})},Animated=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{pulse:!0,variant:"primary",children:"Pulsing"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{glow:!0,variant:"success",children:"Glowing"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{pulse:!0,glow:!0,variant:"warning",children:"Pulsing & Glowing"})]}),Outlined=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{outline:!0,variant:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{outline:!0,variant:"success",children:"Success"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{outline:!0,variant:"warning",children:"Warning"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{outline:!0,variant:"error",children:"Error"})]}),StatusIndicators=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"success",icon:(0,jsx_runtime.jsx)(index_esm.usP,{}),children:"Online"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"error",icon:(0,jsx_runtime.jsx)(index_esm.usP,{}),children:"Offline"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"warning",icon:(0,jsx_runtime.jsx)(index_esm.usP,{}),children:"Away"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"success",pulse:!0,children:"Active Now"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"warning",glow:!0,children:"Processing"}),(0,jsx_runtime.jsx)(DataDisplay_Badge,{variant:"error",pulse:!0,glow:!0,children:"Critical"})]})]}),Interactive=()=>{const[count,setCount]=react.useState(0);return(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,jsx_runtime.jsxs)(DataDisplay_Badge,{variant:count>0?"success":"error",icon:count>0?(0,jsx_runtime.jsx)(index_esm.ARf,{}):(0,jsx_runtime.jsx)(index_esm.JW4,{}),pulse:count>5,glow:count>10,children:["Count: ",count]}),(0,jsx_runtime.jsx)("button",{onClick:()=>setCount((prev=>prev+1)),className:"px-3 py-1 bg-primary-500 text-white rounded-lg",children:"Increment"}),(0,jsx_runtime.jsx)("button",{onClick:()=>setCount((prev=>Math.max(0,prev-1))),className:"px-3 py-1 bg-gray-500 text-white rounded-lg",children:"Decrement"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Default Badge'\n  }\n}",...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="flex flex-wrap gap-4">\n    <Badge variant="default">Default</Badge>\n    <Badge variant="primary">Primary</Badge>\n    <Badge variant="success">Success</Badge>\n    <Badge variant="warning">Warning</Badge>\n    <Badge variant="error">Error</Badge>\n    <Badge variant="info">Info</Badge>\n  </div>',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="flex flex-wrap items-center gap-4">\n    <Badge size="small">Small</Badge>\n    <Badge size="medium">Medium</Badge>\n    <Badge size="large">Large</Badge>\n  </div>',...Sizes.parameters?.docs?.source}}},RoundedVariants.parameters={...RoundedVariants.parameters,docs:{...RoundedVariants.parameters?.docs,source:{originalSource:'() => <div className="flex flex-wrap gap-4">\n    <Badge rounded="none">Square</Badge>\n    <Badge rounded="small">Small Rounded</Badge>\n    <Badge rounded="medium">Medium Rounded</Badge>\n    <Badge rounded="large">Large Rounded</Badge>\n    <Badge rounded="full">Fully Rounded</Badge>\n  </div>',...RoundedVariants.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'() => <div className="flex flex-wrap gap-4">\n    <Badge icon={<FiStar />} variant="primary">Featured</Badge>\n    <Badge icon={<FiTrendingUp />} variant="success">Trending Up</Badge>\n    <Badge icon={<FiTrendingDown />} variant="error">Trending Down</Badge>\n  </div>',...WithIcons.parameters?.docs?.source}}},Removable.parameters={...Removable.parameters,docs:{...Removable.parameters?.docs,source:{originalSource:"() => {\n  const [badges, setBadges] = React.useState([{\n    id: 1,\n    text: 'React',\n    variant: 'primary'\n  }, {\n    id: 2,\n    text: 'Vue',\n    variant: 'success'\n  }, {\n    id: 3,\n    text: 'Angular',\n    variant: 'error'\n  }]);\n  const handleRemove = id => {\n    setBadges(badges.filter(badge => badge.id !== id));\n  };\n  return <div className=\"flex flex-wrap gap-2\">\n      {badges.map(badge => <Badge key={badge.id} variant={badge.variant} removable onRemove={() => handleRemove(badge.id)}>\n          {badge.text}\n        </Badge>)}\n    </div>;\n}",...Removable.parameters?.docs?.source}}},Animated.parameters={...Animated.parameters,docs:{...Animated.parameters?.docs,source:{originalSource:'() => <div className="flex flex-wrap gap-4">\n    <Badge pulse variant="primary">Pulsing</Badge>\n    <Badge glow variant="success">Glowing</Badge>\n    <Badge pulse glow variant="warning">Pulsing & Glowing</Badge>\n  </div>',...Animated.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'() => <div className="flex flex-wrap gap-4">\n    <Badge outline variant="primary">Primary</Badge>\n    <Badge outline variant="success">Success</Badge>\n    <Badge outline variant="warning">Warning</Badge>\n    <Badge outline variant="error">Error</Badge>\n  </div>',...Outlined.parameters?.docs?.source}}},StatusIndicators.parameters={...StatusIndicators.parameters,docs:{...StatusIndicators.parameters?.docs,source:{originalSource:'() => <div className="space-y-4">\n    <div className="flex flex-wrap gap-4">\n      <Badge variant="success" icon={<FiStar />}>Online</Badge>\n      <Badge variant="error" icon={<FiStar />}>Offline</Badge>\n      <Badge variant="warning" icon={<FiStar />}>Away</Badge>\n    </div>\n    <div className="flex flex-wrap gap-4">\n      <Badge variant="success" pulse>Active Now</Badge>\n      <Badge variant="warning" glow>Processing</Badge>\n      <Badge variant="error" pulse glow>Critical</Badge>\n    </div>\n  </div>',...StatusIndicators.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'() => {\n  const [count, setCount] = React.useState(0);\n  return <div className="flex flex-wrap gap-4">\n      <Badge variant={count > 0 ? \'success\' : \'error\'} icon={count > 0 ? <FiTrendingUp /> : <FiTrendingDown />} pulse={count > 5} glow={count > 10}>\n        Count: {count}\n      </Badge>\n      <button onClick={() => setCount(prev => prev + 1)} className="px-3 py-1 bg-primary-500 text-white rounded-lg">\n        Increment\n      </button>\n      <button onClick={() => setCount(prev => Math.max(0, prev - 1))} className="px-3 py-1 bg-gray-500 text-white rounded-lg">\n        Decrement\n      </button>\n    </div>;\n}',...Interactive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Variants","Sizes","RoundedVariants","WithIcons","Removable","Animated","Outlined","StatusIndicators","Interactive"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);