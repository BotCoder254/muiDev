"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[1276],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Forms/Form.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,ComplexForm:()=>ComplexForm,Default:()=>Default,Disabled:()=>Disabled,Layouts:()=>Layouts,Loading:()=>Loading,Sizes:()=>Sizes,Variants:()=>Variants,WithValidation:()=>WithValidation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","onSubmit","variant","size","color","layout","disabled","loading","showLabels","showHelperText","showValidationIcons","className"],_excluded2=["label","name","type","value","defaultValue","placeholder","helperText","error","success","required","disabled","readOnly","autoFocus","autoComplete","variant","size","color","showLabel","showHelperText","showValidationIcon","icon","onChange","onBlur","onFocus","className"],Form=_ref=>{let{children,onSubmit,variant="default",size="medium",color="primary",layout="vertical",disabled=!1,loading=!1,showLabels=!0,showHelperText=!0,showValidationIcons=!0,className}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const formClasses="\n    ".concat({vertical:"space-y-4",horizontal:"grid grid-cols-12 gap-6",inline:"flex items-start space-x-4"}[layout],"\n    ").concat(className||"","\n  ");return(0,jsx_runtime.jsx)(proxy.P.form,(0,objectSpread2.A)((0,objectSpread2.A)({initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},onSubmit:e=>{e.preventDefault(),disabled||loading||null==onSubmit||onSubmit(e)},className:formClasses,noValidate:!0},props),{},{children:react.Children.map(children,(child=>react.isValidElement(child)?react.cloneElement(child,{variant,size,color,disabled:disabled||child.props.disabled,showLabel:showLabels&&!1!==child.props.showLabel,showHelperText:showHelperText&&!1!==child.props.showHelperText,showValidationIcon:showValidationIcons&&!1!==child.props.showValidationIcon}):child))}))};Form.Field=_ref2=>{let{label,name,type="text",value,defaultValue,placeholder,helperText,error,success,required,disabled,readOnly,autoFocus,autoComplete,variant="default",size="medium",color="primary",showLabel=!0,showHelperText=!0,showValidationIcon=!0,icon,onChange,onBlur,onFocus,className}=_ref2,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);const[isFocused,setIsFocused]=react.useState(!1),[isDirty,setIsDirty]=react.useState(!1),[showPassword,setShowPassword]=react.useState(!1),sizes={small:{text:"text-sm",spacing:"space-y-3",input:"h-8",label:"mb-1",helper:"mt-1",icon:"w-4 h-4",padding:"px-3 py-1"},medium:{text:"text-base",spacing:"space-y-4",input:"h-10",label:"mb-1.5",helper:"mt-1.5",icon:"w-5 h-5",padding:"px-4 py-2"},large:{text:"text-lg",spacing:"space-y-5",input:"h-12",label:"mb-2",helper:"mt-2",icon:"w-6 h-6",padding:"px-5 py-2.5"}},colors={primary:{text:"text-gray-900",label:"text-gray-700",helper:"text-gray-500",border:"border-gray-300",hover:"hover:border-blue-500",focus:"focus:border-blue-500 focus:ring-blue-500",error:"border-red-500 focus:border-red-500 focus:ring-red-500",success:"border-green-500 focus:border-green-500 focus:ring-green-500",errorText:"text-red-500",successText:"text-green-500",disabled:"bg-gray-100 text-gray-400 border-gray-200",icon:"text-gray-400",iconHover:"hover:text-gray-500",iconFocus:"text-blue-500"},secondary:{text:"text-gray-900",label:"text-gray-700",helper:"text-gray-500",border:"border-gray-300",hover:"hover:border-gray-400",focus:"focus:border-gray-500 focus:ring-gray-500",error:"border-red-500 focus:border-red-500 focus:ring-red-500",success:"border-green-500 focus:border-green-500 focus:ring-green-500",errorText:"text-red-500",successText:"text-green-500",disabled:"bg-gray-100 text-gray-400 border-gray-200",icon:"text-gray-400",iconHover:"hover:text-gray-500",iconFocus:"text-gray-500"},white:{text:"text-white",label:"text-gray-100",helper:"text-gray-300",border:"border-gray-600",hover:"hover:border-gray-500",focus:"focus:border-gray-400 focus:ring-gray-400",error:"border-red-400 focus:border-red-400 focus:ring-red-400",success:"border-green-400 focus:border-green-400 focus:ring-green-400",errorText:"text-red-400",successText:"text-green-400",disabled:"bg-gray-800 text-gray-500 border-gray-700",icon:"text-gray-500",iconHover:"hover:text-gray-400",iconFocus:"text-white"}},variants={default:{container:"",fieldset:"space-y-1",input:"rounded-md"},filled:{container:"",fieldset:"space-y-1",input:"rounded-md bg-gray-100 border-transparent"},outlined:{container:"",fieldset:"space-y-1",input:"rounded-md bg-transparent"},underlined:{container:"",fieldset:"space-y-1",input:"rounded-none border-t-0 border-x-0 px-0"}},InputIcon=(()=>{if(icon)return icon;switch(type){case"email":return index_esm.pHD;case"password":return index_esm.F5$;case"tel":return index_esm.QFc;case"date":return index_esm.wIk;case"number":return index_esm.z8N;case"url":return index_esm.ayE;case"search":return index_esm.CKj;case"file":return index_esm.QuH;default:return"text"===type?index_esm.JXP:null}})(),fieldClasses="\n    block\n    w-full\n    ".concat(sizes[size].input,"\n    ").concat(sizes[size].text,"\n    ").concat(variants[variant].input,"\n    ").concat(colors[color].text,"\n    ").concat(colors[color].border,"\n    ").concat(!disabled&&!error&&!success&&colors[color].hover,"\n    ").concat(!disabled&&!error&&!success&&colors[color].focus,"\n    ").concat(error&&colors[color].error,"\n    ").concat(success&&colors[color].success,"\n    ").concat(disabled&&colors[color].disabled,"\n    ").concat(InputIcon?"pl-10":"","\n    ").concat("password"===type?"pr-10":"","\n    border\n    transition-all\n    duration-200\n    focus:outline-none focus:ring-2 focus:ring-opacity-50\n    disabled:cursor-not-allowed\n    ").concat(className||"","\n  "),ValidationIcon=()=>showValidationIcon&&(error||success)?(0,jsx_runtime.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:(0,jsx_runtime.jsxs)(AnimatePresence.N,{mode:"wait",children:[error&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},children:(0,jsx_runtime.jsx)(index_esm.y3G,{className:"".concat(sizes[size].icon," ").concat(colors[color].errorText)})}),success&&(0,jsx_runtime.jsx)(proxy.P.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},children:(0,jsx_runtime.jsx)(index_esm.A3x,{className:"".concat(sizes[size].icon," ").concat(colors[color].successText)})})]})}):null;return(0,jsx_runtime.jsxs)(proxy.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:variants[variant].fieldset,children:[showLabel&&label&&(0,jsx_runtime.jsxs)(proxy.P.label,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},htmlFor:name,className:"\n            block\n            ".concat(sizes[size].text,"\n            ").concat(sizes[size].label,"\n            ").concat(colors[color].label,"\n            font-medium\n          "),children:[label,required&&(0,jsx_runtime.jsx)(proxy.P.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},className:colors[color].errorText,children:"*"})]}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[InputIcon&&(0,jsx_runtime.jsx)("div",{className:"\n            absolute\n            inset-y-0\n            left-0\n            flex\n            items-center\n            pl-3\n            pointer-events-none\n            transition-colors\n            duration-200\n            ".concat(isFocused?colors[color].iconFocus:colors[color].icon,"\n          "),children:(0,jsx_runtime.jsx)(InputIcon,{className:sizes[size].icon})}),(0,jsx_runtime.jsx)("input",(0,objectSpread2.A)({id:name,name,type:"password"===type?showPassword?"text":"password":type,value,defaultValue,placeholder,required,disabled,readOnly,autoFocus,autoComplete,className:fieldClasses,onChange:e=>{setIsDirty(!0),null==onChange||onChange(e)},onFocus:e=>{setIsFocused(!0),null==onFocus||onFocus(e)},onBlur:e=>{setIsFocused(!1),null==onBlur||onBlur(e)},"aria-invalid":error?"true":"false","aria-describedby":"".concat(name,"-helper")},props)),"password"===type&&(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>{setShowPassword(!showPassword)},className:"\n              absolute\n              inset-y-0\n              right-0\n              flex\n              items-center\n              pr-3\n              transition-colors\n              duration-200\n              ".concat(colors[color].icon,"\n              ").concat(colors[color].iconHover,"\n            "),children:showPassword?(0,jsx_runtime.jsx)(index_esm._NO,{className:sizes[size].icon}):(0,jsx_runtime.jsx)(index_esm.Vap,{className:sizes[size].icon})}),(0,jsx_runtime.jsx)(ValidationIcon,{})]}),showHelperText&&(helperText||error||success)&&(0,jsx_runtime.jsx)(AnimatePresence.N,{mode:"wait",children:(0,jsx_runtime.jsx)(proxy.P.p,{id:"".concat(name,"-helper"),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"\n              ".concat(sizes[size].text,"\n              ").concat(sizes[size].helper,"\n              ").concat(error?colors[color].errorText:success?colors[color].successText:colors[color].helper,"\n            "),children:error||success||helperText},error||success||helperText)})]})};const Forms_Form=Form;Form.__docgenInfo={description:"",methods:[{name:"Field",docblock:null,modifiers:["static"],params:[{name:"{\n  label,\n  name,\n  type = 'text',\n  value,\n  defaultValue,\n  placeholder,\n  helperText,\n  error,\n  success,\n  required,\n  disabled,\n  readOnly,\n  autoFocus,\n  autoComplete,\n  variant = 'default',\n  size = 'medium',\n  color = 'primary',\n  showLabel = true,\n  showHelperText = true,\n  showValidationIcon = true,\n  icon,\n  onChange,\n  onBlur,\n  onFocus,\n  className,\n  ...props\n}",optional:!1,type:null}],returns:null}],displayName:"Form",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"Visual style variant",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'filled'",computed:!1},{value:"'outlined'",computed:!1},{value:"'underlined'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size preset",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"Color theme",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'white'",computed:!1}]},required:!1},layout:{defaultValue:{value:"'vertical'",computed:!1},description:"Layout style",type:{name:"enum",value:[{value:"'vertical'",computed:!1},{value:"'horizontal'",computed:!1},{value:"'inline'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the form is disabled",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the form is loading",type:{name:"bool"},required:!1},showLabels:{defaultValue:{value:"true",computed:!1},description:"Whether to show field labels",type:{name:"bool"},required:!1},showHelperText:{defaultValue:{value:"true",computed:!1},description:"Whether to show helper text",type:{name:"bool"},required:!1},showValidationIcons:{defaultValue:{value:"true",computed:!1},description:"Whether to show validation icons",type:{name:"bool"},required:!1},children:{description:"Form content",type:{name:"node"},required:!1},onSubmit:{description:"Submit handler",type:{name:"func"},required:!1},className:{description:"Additional CSS classes",type:{name:"string"},required:!1}}};const Form_stories={title:"Forms/Form",component:Forms_Form,parameters:{layout:"centered",docs:{description:{component:"A versatile form component with multiple variants, validation, and rich features."}}},argTypes:{variant:{control:"select",options:["default","filled","outlined","underlined"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large"],description:"Size preset"},color:{control:"select",options:["primary","secondary","white"],description:"Color theme"},layout:{control:"select",options:["vertical","horizontal","inline"],description:"Layout style"}}},Default={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Username",name:"username",placeholder:"Enter username",helperText:"Choose a unique username",required:!0}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Email",name:"email",type:"email",placeholder:"Enter email",helperText:"We'll never share your email",required:!0}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Password",name:"password",type:"password",placeholder:"Enter password",helperText:"Must be at least 8 characters",required:!0}),(0,jsx_runtime.jsx)("button",{type:"submit",className:"w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Submit"})]}),onSubmit:e=>{e.preventDefault(),console.log("Form submitted")}}},WithValidation={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Username",name:"username",value:"johndoe",success:"Username is available"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Email",name:"email",type:"email",value:"invalid-email",error:"Please enter a valid email address"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Password",name:"password",type:"password",helperText:"Must be at least 8 characters"})]})}},Variants=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Forms_Form,{variant:"default",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Default variant",name:"default",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)(Forms_Form,{variant:"filled",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Filled variant",name:"filled",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)(Forms_Form,{variant:"outlined",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Outlined variant",name:"outlined",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)(Forms_Form,{variant:"underlined",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Underlined variant",name:"underlined",placeholder:"Enter text"})})]}),Sizes=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Forms_Form,{size:"small",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Small size",name:"small",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)(Forms_Form,{size:"medium",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Medium size",name:"medium",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)(Forms_Form,{size:"large",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Large size",name:"large",placeholder:"Enter text"})})]}),Colors=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsx)(Forms_Form,{color:"primary",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Primary color",name:"primary",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)(Forms_Form,{color:"secondary",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Secondary color",name:"secondary",placeholder:"Enter text"})}),(0,jsx_runtime.jsx)("div",{className:"p-8 bg-gray-800 rounded-lg",children:(0,jsx_runtime.jsx)(Forms_Form,{color:"white",children:(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"White color",name:"white",placeholder:"Enter text"})})})]}),Layouts=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsxs)(Forms_Form,{layout:"vertical",children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Vertical layout",name:"vertical",placeholder:"Enter text"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Another field",name:"another",placeholder:"Enter text"})]}),(0,jsx_runtime.jsxs)(Forms_Form,{layout:"horizontal",children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Horizontal layout",name:"horizontal",placeholder:"Enter text"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Another field",name:"another",placeholder:"Enter text"})]}),(0,jsx_runtime.jsxs)(Forms_Form,{layout:"inline",children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Inline layout",name:"inline",placeholder:"Enter text"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Another field",name:"another",placeholder:"Enter text"})]})]}),Disabled={args:{disabled:!0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Disabled field",name:"disabled",placeholder:"Enter text"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Another disabled field",name:"another",placeholder:"Enter text"})]})}},Loading={args:{loading:!0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Loading field",name:"loading",placeholder:"Enter text"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Another loading field",name:"another",placeholder:"Enter text"})]})}},ComplexForm=()=>{const[formState,setFormState]=react.useState({username:"",email:"",password:""}),[errors,setErrors]=react.useState({}),handleChange=e=>{const{name,value}=e.target;setFormState((prev=>(0,objectSpread2.A)((0,objectSpread2.A)({},prev),{},{[name]:value}))),"email"===name&&value&&!/\S+@\S+\.\S+/.test(value)?setErrors((prev=>(0,objectSpread2.A)((0,objectSpread2.A)({},prev),{},{email:"Invalid email address"}))):"password"===name&&value&&value.length<8?setErrors((prev=>(0,objectSpread2.A)((0,objectSpread2.A)({},prev),{},{password:"Password must be at least 8 characters"}))):setErrors((prev=>(0,objectSpread2.A)((0,objectSpread2.A)({},prev),{},{[name]:void 0})))};return(0,jsx_runtime.jsxs)(Forms_Form,{variant:"outlined",color:"primary",size:"medium",onSubmit:e=>{e.preventDefault(),console.log("Form submitted:",formState)},children:[(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Username",name:"username",value:formState.username,onChange:handleChange,required:!0,helperText:"Choose a unique username"}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Email",name:"email",type:"email",value:formState.email,onChange:handleChange,required:!0,error:errors.email}),(0,jsx_runtime.jsx)(Forms_Form.Field,{label:"Password",name:"password",type:"password",value:formState.password,onChange:handleChange,required:!0,error:errors.password}),(0,jsx_runtime.jsx)("button",{type:"submit",className:"w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Submit"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Form.Field label="Username" name="username" placeholder="Enter username" helperText="Choose a unique username" required />\n        <Form.Field label="Email" name="email" type="email" placeholder="Enter email" helperText="We\'ll never share your email" required />\n        <Form.Field label="Password" name="password" type="password" placeholder="Enter password" helperText="Must be at least 8 characters" required />\n        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">\n          Submit\n        </button>\n      </>,\n    onSubmit: e => {\n      e.preventDefault();\n      console.log(\'Form submitted\');\n    }\n  }\n}',...Default.parameters?.docs?.source}}},WithValidation.parameters={...WithValidation.parameters,docs:{...WithValidation.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Form.Field label="Username" name="username" value="johndoe" success="Username is available" />\n        <Form.Field label="Email" name="email" type="email" value="invalid-email" error="Please enter a valid email address" />\n        <Form.Field label="Password" name="password" type="password" helperText="Must be at least 8 characters" />\n      </>\n  }\n}',...WithValidation.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\n    <Form variant="default">\n      <Form.Field label="Default variant" name="default" placeholder="Enter text" />\n    </Form>\n    <Form variant="filled">\n      <Form.Field label="Filled variant" name="filled" placeholder="Enter text" />\n    </Form>\n    <Form variant="outlined">\n      <Form.Field label="Outlined variant" name="outlined" placeholder="Enter text" />\n    </Form>\n    <Form variant="underlined">\n      <Form.Field label="Underlined variant" name="underlined" placeholder="Enter text" />\n    </Form>\n  </div>',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\n    <Form size="small">\n      <Form.Field label="Small size" name="small" placeholder="Enter text" />\n    </Form>\n    <Form size="medium">\n      <Form.Field label="Medium size" name="medium" placeholder="Enter text" />\n    </Form>\n    <Form size="large">\n      <Form.Field label="Large size" name="large" placeholder="Enter text" />\n    </Form>\n  </div>',...Sizes.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\n    <Form color="primary">\n      <Form.Field label="Primary color" name="primary" placeholder="Enter text" />\n    </Form>\n    <Form color="secondary">\n      <Form.Field label="Secondary color" name="secondary" placeholder="Enter text" />\n    </Form>\n    <div className="p-8 bg-gray-800 rounded-lg">\n      <Form color="white">\n        <Form.Field label="White color" name="white" placeholder="Enter text" />\n      </Form>\n    </div>\n  </div>',...Colors.parameters?.docs?.source}}},Layouts.parameters={...Layouts.parameters,docs:{...Layouts.parameters?.docs,source:{originalSource:'() => <div className="space-y-8">\n    <Form layout="vertical">\n      <Form.Field label="Vertical layout" name="vertical" placeholder="Enter text" />\n      <Form.Field label="Another field" name="another" placeholder="Enter text" />\n    </Form>\n    <Form layout="horizontal">\n      <Form.Field label="Horizontal layout" name="horizontal" placeholder="Enter text" />\n      <Form.Field label="Another field" name="another" placeholder="Enter text" />\n    </Form>\n    <Form layout="inline">\n      <Form.Field label="Inline layout" name="inline" placeholder="Enter text" />\n      <Form.Field label="Another field" name="another" placeholder="Enter text" />\n    </Form>\n  </div>',...Layouts.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: true,\n    children: <>\n        <Form.Field label="Disabled field" name="disabled" placeholder="Enter text" />\n        <Form.Field label="Another disabled field" name="another" placeholder="Enter text" />\n      </>\n  }\n}',...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  args: {\n    loading: true,\n    children: <>\n        <Form.Field label="Loading field" name="loading" placeholder="Enter text" />\n        <Form.Field label="Another loading field" name="another" placeholder="Enter text" />\n      </>\n  }\n}',...Loading.parameters?.docs?.source}}},ComplexForm.parameters={...ComplexForm.parameters,docs:{...ComplexForm.parameters?.docs,source:{originalSource:'() => {\n  const [formState, setFormState] = React.useState({\n    username: \'\',\n    email: \'\',\n    password: \'\'\n  });\n  const [errors, setErrors] = React.useState({});\n  const handleChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    setFormState(prev => ({\n      ...prev,\n      [name]: value\n    }));\n\n    // Simple validation\n    if (name === \'email\' && value && !/\\S+@\\S+\\.\\S+/.test(value)) {\n      setErrors(prev => ({\n        ...prev,\n        email: \'Invalid email address\'\n      }));\n    } else if (name === \'password\' && value && value.length < 8) {\n      setErrors(prev => ({\n        ...prev,\n        password: \'Password must be at least 8 characters\'\n      }));\n    } else {\n      setErrors(prev => ({\n        ...prev,\n        [name]: undefined\n      }));\n    }\n  };\n  return <Form variant="outlined" color="primary" size="medium" onSubmit={e => {\n    e.preventDefault();\n    console.log(\'Form submitted:\', formState);\n  }}>\n      <Form.Field label="Username" name="username" value={formState.username} onChange={handleChange} required helperText="Choose a unique username" />\n      <Form.Field label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required error={errors.email} />\n      <Form.Field label="Password" name="password" type="password" value={formState.password} onChange={handleChange} required error={errors.password} />\n      <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">\n        Submit\n      </button>\n    </Form>;\n}',...ComplexForm.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithValidation","Variants","Sizes","Colors","Layouts","Disabled","Loading","ComplexForm"]},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext.Q);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.M)(newChildrenMap),id=(0,react.useId)(),memoizedOnExitComplete=(0,react.useCallback)((childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()}),[presenceChildren,onExitComplete]),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:memoizedOnExitComplete,register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random(),memoizedOnExitComplete]:[isPresent,memoizedOnExitComplete]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.t.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs");const getChildKey=child=>child.key||"";function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");const AnimatePresence=({children,exitBeforeEnter,custom,initial=!0,onExitComplete,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.V)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const presentChildren=(0,react.useMemo)((()=>onlyElements(children)),[children]),presentKeys=presentChildren.map(getChildKey),isInitialRender=(0,react.useRef)(!0),pendingPresentChildren=(0,react.useRef)(presentChildren),exitComplete=(0,use_constant.M)((()=>new Map)),[diffedChildren,setDiffedChildren]=(0,react.useState)(presentChildren),[renderedChildren,setRenderedChildren]=(0,react.useState)(presentChildren);(0,use_isomorphic_effect.E)((()=>{isInitialRender.current=!1,pendingPresentChildren.current=presentChildren;for(let i=0;i<renderedChildren.length;i++){const key=getChildKey(renderedChildren[i]);presentKeys.includes(key)?exitComplete.delete(key):!0!==exitComplete.get(key)&&exitComplete.set(key,!1)}}),[renderedChildren,presentKeys.length,presentKeys.join("-")]);const exitingChildren=[];if(presentChildren!==diffedChildren){let nextChildren=[...presentChildren];for(let i=0;i<renderedChildren.length;i++){const child=renderedChildren[i],key=getChildKey(child);presentKeys.includes(key)||(nextChildren.splice(i,0,child),exitingChildren.push(child))}return"wait"===mode&&exitingChildren.length&&(nextChildren=exitingChildren),setRenderedChildren(onlyElements(nextChildren)),void setDiffedChildren(presentChildren)}const{forceRender}=(0,react.useContext)(LayoutGroupContext.L);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:renderedChildren.map((child=>{const key=getChildKey(child),isPresent=presentChildren===renderedChildren||presentKeys.includes(key);return(0,jsx_runtime.jsx)(PresenceChild,{isPresent,initial:!(isInitialRender.current&&!initial)&&void 0,custom:isPresent?void 0:custom,presenceAffectsLayout,mode,onExitComplete:isPresent?void 0:()=>{if(!exitComplete.has(key))return;exitComplete.set(key,!0);let isEveryExitComplete=!0;exitComplete.forEach((isExitComplete=>{isExitComplete||(isEveryExitComplete=!1)})),isEveryExitComplete&&(null==forceRender||forceRender(),setRenderedChildren(pendingPresentChildren.current),onExitComplete&&onExitComplete())},children:child},key)}))})}}}]);