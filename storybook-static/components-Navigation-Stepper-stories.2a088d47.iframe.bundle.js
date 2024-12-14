"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[8318],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Navigation/Stepper.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlternativeLabel:()=>AlternativeLabel,Basic:()=>Basic,Colors:()=>Colors,ComplexExample:()=>ComplexExample,InteractiveExample:()=>InteractiveExample,Sizes:()=>Sizes,Variants:()=>Variants,Vertical:()=>Vertical,WithOptionalLabels:()=>WithOptionalLabels,WithStates:()=>WithStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stepper_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["steps","activeStep","orientation","variant","color","size","showLabels","showNumbers","animated","alternativeLabel","withConnectorAnimation","withGlow","withGradient","withPulse","withHoverEffect","className","onChange"],Stepper=_ref=>{let{steps=[],activeStep=0,orientation="horizontal",variant="default",color="primary",size="medium",showLabels=!0,showNumbers=!0,animated=!0,alternativeLabel=!1,withConnectorAnimation=!0,withGlow=!1,withGradient=!1,withPulse=!1,withHoverEffect=!0,className="",onChange}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const colors={primary:{active:{bg:"bg-primary-500",text:"text-white",gradient:"from-primary-400 to-primary-600",glow:"shadow-primary-500/50"},completed:{bg:"bg-primary-500",text:"text-white",gradient:"from-primary-400 to-primary-600",glow:"shadow-primary-500/50"},pending:{bg:"bg-gray-200 dark:bg-gray-700",text:"text-gray-500 dark:text-gray-400",gradient:"from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600",glow:"shadow-gray-400/30"},connector:"bg-primary-500",pendingConnector:"bg-gray-200 dark:bg-gray-700",hover:"hover:bg-primary-600",text:"text-primary-500",pendingText:"text-gray-500 dark:text-gray-400"},secondary:{active:{bg:"bg-secondary-500",text:"text-white",gradient:"from-secondary-400 to-secondary-600",glow:"shadow-secondary-500/50"},completed:{bg:"bg-secondary-500",text:"text-white",gradient:"from-secondary-400 to-secondary-600",glow:"shadow-secondary-500/50"},pending:{bg:"bg-gray-200 dark:bg-gray-700",text:"text-gray-500 dark:text-gray-400",gradient:"from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600",glow:"shadow-gray-400/30"},connector:"bg-secondary-500",pendingConnector:"bg-gray-200 dark:bg-gray-700",hover:"hover:bg-secondary-600",text:"text-secondary-500",pendingText:"text-gray-500 dark:text-gray-400"},success:{active:{bg:"bg-green-500",text:"text-white",gradient:"from-green-400 to-green-600",glow:"shadow-green-500/50"},completed:{bg:"bg-green-500",text:"text-white",gradient:"from-green-400 to-green-600",glow:"shadow-green-500/50"},pending:{bg:"bg-gray-200 dark:bg-gray-700",text:"text-gray-500 dark:text-gray-400",gradient:"from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600",glow:"shadow-gray-400/30"},connector:"bg-green-500",pendingConnector:"bg-gray-200 dark:bg-gray-700",hover:"hover:bg-green-600",text:"text-green-500",pendingText:"text-gray-500 dark:text-gray-400"}},variants={default:"",outlined:"border-2",dashed:"border-2 border-dashed",elevated:"shadow-md"},sizes={small:{icon:"w-4 h-4",step:"w-6 h-6",connector:"h-0.5",verticalConnector:"w-0.5",text:"text-sm",spacing:"gap-2",verticalSpacing:"gap-3"},medium:{icon:"w-5 h-5",step:"w-8 h-8",connector:"h-0.5",verticalConnector:"w-0.5",text:"text-base",spacing:"gap-3",verticalSpacing:"gap-4"},large:{icon:"w-6 h-6",step:"w-10 h-10",connector:"h-1",verticalConnector:"w-1",text:"text-lg",spacing:"gap-4",verticalSpacing:"gap-5"}},stepVariants={initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},hover:withHoverEffect?{scale:1.1,transition:{duration:.2}}:{}},connectorVariants={initial:"horizontal"===orientation?{scaleX:0}:{scaleY:0},animate:{scale:1},exit:"horizontal"===orientation?{scaleX:0}:{scaleY:0}},labelVariants={initial:{opacity:0,y:10},animate:{opacity:1,y:0},hover:withHoverEffect?{y:-2,transition:{duration:.2}}:{}},pulseAnimation=withPulse?{animate:{scale:[1,1.05,1],transition:{duration:2,repeat:1/0,repeatType:"reverse"}}}:{},getStepIcon=(step,index)=>index<activeStep?(0,jsx_runtime.jsx)(index_esm.YrT,{className:sizes[size].icon}):index===activeStep?step.loading?(0,jsx_runtime.jsx)(proxy.P.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:(0,jsx_runtime.jsx)(index_esm.TwU,{className:sizes[size].icon})}):step.error?(0,jsx_runtime.jsx)(index_esm.yGN,{className:sizes[size].icon}):step.warning?(0,jsx_runtime.jsx)(index_esm.y3G,{className:sizes[size].icon}):step.icon?(0,jsx_runtime.jsx)(step.icon,{className:sizes[size].icon}):showNumbers?index+1:null:step.icon?(0,jsx_runtime.jsx)(step.icon,{className:sizes[size].icon}):showNumbers?index+1:null;return(0,jsx_runtime.jsx)("div",(0,objectSpread2.A)((0,objectSpread2.A)({className:"\n        flex\n        ".concat("horizontal"===orientation?"flex-row":"flex-col","\n        ").concat("horizontal"===orientation?sizes[size].spacing:sizes[size].verticalSpacing,"\n        ").concat(className,"\n      ")},props),{},{children:(0,jsx_runtime.jsx)(AnimatePresence.N,{children:steps.map(((step,index)=>((step,index)=>{const isCompleted=index<activeStep,isActive=index===activeStep,status=isCompleted?"completed":isActive?"active":"pending";return(0,jsx_runtime.jsxs)("div",{className:"\n          flex\n          ".concat("horizontal"===orientation?"flex-col items-center":alternativeLabel?"flex-row-reverse items-center":"flex-col","\n          ").concat("horizontal"===orientation?sizes[size].spacing:sizes[size].verticalSpacing,"\n          ").concat(index===steps.length-1?"":"horizontal"===orientation?"flex-1":"","\n        "),children:[(0,jsx_runtime.jsx)(proxy.P.div,(0,objectSpread2.A)((0,objectSpread2.A)({variants:stepVariants,initial:!!animated&&"initial",animate:"animate",exit:"exit",whileHover:"hover"},pulseAnimation),{},{className:"\n            relative flex items-center justify-center\n            ".concat(sizes[size].step,"\n            rounded-full\n            ").concat(variants[variant],"\n            ").concat(withGradient?"bg-gradient-to-br ".concat(colors[color][status].gradient):colors[color][status].bg,"\n            ").concat(colors[color][status].text,"\n            ").concat(withGlow?"shadow-lg ".concat(colors[color][status].glow):"","\n            ").concat(isCompleted||isActive?"":colors[color].hover,"\n            transition-all duration-200\n            cursor-pointer\n            ").concat(withHoverEffect?"hover:scale-110":"","\n          "),onClick:()=>null==onChange?void 0:onChange(index),children:getStepIcon(step,index)})),showLabels&&(0,jsx_runtime.jsxs)(proxy.P.div,{variants:labelVariants,initial:!!animated&&"initial",animate:"animate",whileHover:"hover",className:"\n              ".concat(sizes[size].text,"\n              ").concat(isCompleted||isActive?colors[color].text:colors[color].pendingText,"\n              text-center\n              whitespace-nowrap\n              transition-colors duration-200\n            "),children:[step.label,step.optional&&(0,jsx_runtime.jsx)("div",{className:"".concat(sizes[size].text," text-gray-400 text-sm"),children:step.optional})]}),index!==steps.length-1&&withConnectorAnimation&&(0,jsx_runtime.jsx)(proxy.P.div,{variants:connectorVariants,initial:!!animated&&"initial",animate:"animate",exit:"exit",className:"\n              ".concat("horizontal"===orientation?"absolute top-4 left-1/2 w-full transform -translate-x-1/2":"absolute left-4 h-full transform -translate-x-1/2","\n              ").concat("horizontal"===orientation?sizes[size].connector:sizes[size].verticalConnector,"\n              ").concat(isCompleted?colors[color].connector:colors[color].pendingConnector,"\n              ").concat("horizontal"===orientation?"origin-left":"origin-top","\n              transition-colors duration-200\n            ")})]},index)})(step,index)))})}))},Navigation_Stepper=Stepper;Stepper.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},icon:{name:"elementType",required:!1},optional:{name:"string",required:!1},loading:{name:"bool",required:!1},error:{name:"bool",required:!1},warning:{name:"bool",required:!1}}}},required:!1},activeStep:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},description:"",type:{name:"enum",value:[{value:"'horizontal'",computed:!1},{value:"'vertical'",computed:!1}]},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'outlined'",computed:!1},{value:"'dashed'",computed:!1},{value:"'elevated'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},showLabels:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},showNumbers:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},animated:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},alternativeLabel:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withConnectorAnimation:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},withGlow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withGradient:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withPulse:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withHoverEffect:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}};const Stepper_stories={title:"Navigation/Stepper",component:Navigation_Stepper,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","outlined","dashed"]},color:{control:"select",options:["primary","secondary","success"]},size:{control:"select",options:["small","medium","large"]},orientation:{control:"radio",options:["horizontal","vertical"]}}},defaultSteps=[{label:"Account",icon:index_esm.JXP},{label:"Payment",icon:index_esm.lZI},{label:"Review",icon:index_esm.est},{label:"Complete",icon:index_esm.YrT}],Basic={args:{steps:defaultSteps,activeStep:1,variant:"default",color:"primary",size:"medium"}},Vertical={args:{steps:defaultSteps,activeStep:1,orientation:"vertical"}},Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,variant:"default",color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,variant:"outlined",color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,variant:"dashed",color:"primary"})]}),Colors=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,color:"primary"}),(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,color:"secondary"}),(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,color:"success"})]}),Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,size:"small"}),(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,size:"medium"}),(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:defaultSteps,activeStep:1,size:"large"})]}),WithOptionalLabels={args:{steps:[{label:"Account",icon:index_esm.JXP,optional:"Basic info"},{label:"Profile",icon:index_esm.SG1,optional:"Additional info"},{label:"Settings",icon:index_esm.VSk,optional:"Optional"},{label:"Review",icon:index_esm.YrT}],activeStep:1}},WithStates={args:{steps:[{label:"Completed",icon:index_esm.B88},{label:"Loading",icon:index_esm.Hbo,loading:!0},{label:"Error",icon:index_esm.LIi,error:!0},{label:"Warning",icon:index_esm.F5$,warning:!0}],activeStep:1}},AlternativeLabel={args:{steps:defaultSteps,activeStep:1,alternativeLabel:!0,orientation:"vertical"}},InteractiveExample=()=>{const[activeStep,setActiveStep]=react.useState(0),steps=[{label:"Account Setup",icon:index_esm.JXP,optional:"Basic information"},{label:"Profile Details",icon:index_esm.SG1,optional:"Tell us about yourself"},{label:"Email Verification",icon:index_esm.pHD,optional:"Verify your email"},{label:"Upload Avatar",icon:index_esm.fZZ,optional:"Choose a profile picture"},{label:"Complete",icon:index_esm.YrT}];return(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Stepper,{steps,activeStep,onChange:setActiveStep}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setActiveStep(Math.max(0,activeStep-1)),disabled:0===activeStep,className:"\n            px-4 py-2 rounded-md\n            ".concat(0===activeStep?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-primary-500 text-white hover:bg-primary-600","\n          "),children:"Previous"}),(0,jsx_runtime.jsx)("button",{onClick:()=>setActiveStep(Math.min(steps.length-1,activeStep+1)),disabled:activeStep===steps.length-1,className:"\n            px-4 py-2 rounded-md\n            ".concat(activeStep===steps.length-1?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-primary-500 text-white hover:bg-primary-600","\n          "),children:"Next"})]})]})},ComplexExample=()=>{const[activeStep,setActiveStep]=react.useState(0),[steps,setSteps]=react.useState([{label:"Upload Files",icon:index_esm.B88,status:"pending"},{label:"Process Data",icon:index_esm.Hbo,status:"pending"},{label:"Verify",icon:index_esm.F5$,status:"pending"},{label:"Complete",icon:index_esm.YrT,status:"pending"}]),updateStepStatus=(index,status)=>{setSteps(steps.map(((step,i)=>i===index?(0,objectSpread2.A)((0,objectSpread2.A)({},step),{},{status}):step)))};return(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Navigation_Stepper,{steps:steps.map((step=>(0,objectSpread2.A)((0,objectSpread2.A)({},step),{},{loading:"loading"===step.status,error:"error"===step.status,completed:"completed"===step.status}))),activeStep,orientation:"vertical"}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-4",children:[(0,jsx_runtime.jsx)("button",{onClick:async()=>{updateStepStatus(0,"loading"),await new Promise((resolve=>setTimeout(resolve,1500))),updateStepStatus(0,"completed"),setActiveStep(1),updateStepStatus(1,"loading"),await new Promise((resolve=>setTimeout(resolve,2e3))),updateStepStatus(1,"error"),setActiveStep(1)},disabled:activeStep>0,className:"\n            px-4 py-2 rounded-md\n            ".concat(activeStep>0?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-primary-500 text-white hover:bg-primary-600","\n          "),children:"Start Process"}),(0,jsx_runtime.jsx)("button",{onClick:()=>{setActiveStep(0),setSteps(steps.map((step=>(0,objectSpread2.A)((0,objectSpread2.A)({},step),{},{status:"pending"}))))},className:"px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50",children:"Reset"})]})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    steps: defaultSteps,\n    activeStep: 1,\n    variant: 'default',\n    color: 'primary',\n    size: 'medium'\n  }\n}",...Basic.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  args: {\n    steps: defaultSteps,\n    activeStep: 1,\n    orientation: 'vertical'\n  }\n}",...Vertical.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <Stepper steps={defaultSteps} activeStep={1} variant="default" color="primary" />\r\n    <Stepper steps={defaultSteps} activeStep={1} variant="outlined" color="primary" />\r\n    <Stepper steps={defaultSteps} activeStep={1} variant="dashed" color="primary" />\r\n  </div>',...Variants.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <Stepper steps={defaultSteps} activeStep={1} color="primary" />\r\n    <Stepper steps={defaultSteps} activeStep={1} color="secondary" />\r\n    <Stepper steps={defaultSteps} activeStep={1} color="success" />\r\n  </div>',...Colors.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\r\n    <Stepper steps={defaultSteps} activeStep={1} size="small" />\r\n    <Stepper steps={defaultSteps} activeStep={1} size="medium" />\r\n    <Stepper steps={defaultSteps} activeStep={1} size="large" />\r\n  </div>',...Sizes.parameters?.docs?.source}}},WithOptionalLabels.parameters={...WithOptionalLabels.parameters,docs:{...WithOptionalLabels.parameters?.docs,source:{originalSource:"{\n  args: {\n    steps: [{\n      label: 'Account',\n      icon: FiUser,\n      optional: 'Basic info'\n    }, {\n      label: 'Profile',\n      icon: FiEdit,\n      optional: 'Additional info'\n    }, {\n      label: 'Settings',\n      icon: FiSettings,\n      optional: 'Optional'\n    }, {\n      label: 'Review',\n      icon: FiCheck\n    }],\n    activeStep: 1\n  }\n}",...WithOptionalLabels.parameters?.docs?.source}}},WithStates.parameters={...WithStates.parameters,docs:{...WithStates.parameters?.docs,source:{originalSource:"{\n  args: {\n    steps: [{\n      label: 'Completed',\n      icon: FiUpload\n    }, {\n      label: 'Loading',\n      icon: FiDatabase,\n      loading: true\n    }, {\n      label: 'Error',\n      icon: FiServer,\n      error: true\n    }, {\n      label: 'Warning',\n      icon: FiLock,\n      warning: true\n    }],\n    activeStep: 1\n  }\n}",...WithStates.parameters?.docs?.source}}},AlternativeLabel.parameters={...AlternativeLabel.parameters,docs:{...AlternativeLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    steps: defaultSteps,\n    activeStep: 1,\n    alternativeLabel: true,\n    orientation: 'vertical'\n  }\n}",...AlternativeLabel.parameters?.docs?.source}}},InteractiveExample.parameters={...InteractiveExample.parameters,docs:{...InteractiveExample.parameters?.docs,source:{originalSource:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const steps = [{\n    label: 'Account Setup',\n    icon: FiUser,\n    optional: 'Basic information'\n  }, {\n    label: 'Profile Details',\n    icon: FiEdit,\n    optional: 'Tell us about yourself'\n  }, {\n    label: 'Email Verification',\n    icon: FiMail,\n    optional: 'Verify your email'\n  }, {\n    label: 'Upload Avatar',\n    icon: FiImage,\n    optional: 'Choose a profile picture'\n  }, {\n    label: 'Complete',\n    icon: FiCheck\n  }];\n  return <div className=\"space-y-8\">\r\n      <Stepper steps={steps} activeStep={activeStep} onChange={setActiveStep} />\r\n      \r\n      <div className=\"flex justify-between\">\r\n        <button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} className={`\n            px-4 py-2 rounded-md\n            ${activeStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary-500 text-white hover:bg-primary-600'}\n          `}>\r\n          Previous\r\n        </button>\r\n        <button onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} disabled={activeStep === steps.length - 1} className={`\n            px-4 py-2 rounded-md\n            ${activeStep === steps.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary-500 text-white hover:bg-primary-600'}\n          `}>\r\n          Next\r\n        </button>\r\n      </div>\r\n    </div>;\n}",...InteractiveExample.parameters?.docs?.source}}},ComplexExample.parameters={...ComplexExample.parameters,docs:{...ComplexExample.parameters?.docs,source:{originalSource:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [steps, setSteps] = React.useState([{\n    label: 'Upload Files',\n    icon: FiUpload,\n    status: 'pending'\n  }, {\n    label: 'Process Data',\n    icon: FiDatabase,\n    status: 'pending'\n  }, {\n    label: 'Verify',\n    icon: FiLock,\n    status: 'pending'\n  }, {\n    label: 'Complete',\n    icon: FiCheck,\n    status: 'pending'\n  }]);\n  const updateStepStatus = (index, status) => {\n    setSteps(steps.map((step, i) => i === index ? {\n      ...step,\n      status\n    } : step));\n  };\n  const simulateProcess = async () => {\n    // Upload\n    updateStepStatus(0, 'loading');\n    await new Promise(resolve => setTimeout(resolve, 1500));\n    updateStepStatus(0, 'completed');\n    setActiveStep(1);\n\n    // Process\n    updateStepStatus(1, 'loading');\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    updateStepStatus(1, 'error');\n    setActiveStep(1);\n  };\n  return <div className=\"space-y-8\">\r\n      <Stepper steps={steps.map(step => ({\n      ...step,\n      loading: step.status === 'loading',\n      error: step.status === 'error',\n      completed: step.status === 'completed'\n    }))} activeStep={activeStep} orientation=\"vertical\" />\r\n      \r\n      <div className=\"flex gap-4\">\r\n        <button onClick={simulateProcess} disabled={activeStep > 0} className={`\n            px-4 py-2 rounded-md\n            ${activeStep > 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary-500 text-white hover:bg-primary-600'}\n          `}>\r\n          Start Process\r\n        </button>\r\n        <button onClick={() => {\n        setActiveStep(0);\n        setSteps(steps.map(step => ({\n          ...step,\n          status: 'pending'\n        })));\n      }} className=\"px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50\">\r\n          Reset\r\n        </button>\r\n      </div>\r\n    </div>;\n}",...ComplexExample.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Vertical","Variants","Colors","Sizes","WithOptionalLabels","WithStates","AlternativeLabel","InteractiveExample","ComplexExample"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);