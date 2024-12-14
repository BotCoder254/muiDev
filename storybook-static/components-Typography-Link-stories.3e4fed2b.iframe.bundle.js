"use strict";(self.webpackChunkmuidev=self.webpackChunkmuidev||[]).push([[452],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./src/components/Typography/Link.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ExternalLinks:()=>ExternalLinks,ModernActionLinks:()=>ModernActionLinks,Sizes:()=>Sizes,UnderlineStyles:()=>UnderlineStyles,Variants:()=>Variants,WithCustomIcons:()=>WithCustomIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories});__webpack_require__("./node_modules/react/index.js");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["href","children","variant","size","external","underline","icon","animate","className","onClick","highlight","pill","elevated"],Link=_ref=>{let{href,children,variant="default",size="medium",external=!1,underline="hover",icon=!0,animate=!0,className="",onClick,highlight=!1,pill=!1,elevated=!1}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const baseClasses="\n    ".concat({small:"text-sm",medium:"text-base",large:"text-lg"}[size],"\n    ").concat({default:"text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",secondary:"text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",success:"text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",warning:"text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300",error:"text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"}[variant],"\n    ").concat({none:"",always:"underline decoration-2 underline-offset-2",hover:"hover:underline hover:decoration-2 hover:underline-offset-2"}[underline],"\n    ").concat(highlight?"bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded":"","\n    ").concat(pill?"rounded-full border border-current px-4 py-1 hover:bg-primary-50 dark:hover:bg-primary-900/20":"","\n    ").concat(elevated?"shadow-sm hover:shadow-md":"","\n    inline-flex items-center gap-1.5\n    transition-all duration-300\n    focus:outline-none focus:ring-2 focus:ring-primary-500/20\n  "),linkContent=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children}),icon&&(external?(0,jsx_runtime.jsx)(index_esm.HaR,{className:"w-4 h-4"}):(0,jsx_runtime.jsx)(index_esm.dyV,{className:"w-4 h-4 transform group-hover:translate-x-1 transition-transform"}))]}),linkProps=(0,objectSpread2.A)((0,objectSpread2.A)({href,className:"group ".concat(baseClasses," ").concat(className),onClick},external&&{target:"_blank",rel:"noopener noreferrer","aria-label":"".concat(children," (opens in new tab)")}),props);return animate?(0,jsx_runtime.jsx)(proxy.P.a,(0,objectSpread2.A)((0,objectSpread2.A)({initial:{opacity:0,y:10},animate:{opacity:1,y:0},whileHover:{scale:1.02},whileTap:{scale:.98},transition:{duration:.2}},linkProps),{},{children:linkContent})):(0,jsx_runtime.jsx)("a",(0,objectSpread2.A)((0,objectSpread2.A)({},linkProps),{},{children:linkContent}))},Typography_Link=Link;Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},external:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},underline:{defaultValue:{value:"'hover'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'always'",computed:!1},{value:"'hover'",computed:!1}]},required:!1},icon:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},animate:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},highlight:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},pill:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},elevated:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}};const Link_stories={title:"Typography/Link",component:Typography_Link,parameters:{layout:"padded",docs:{description:{component:"A versatile link component with multiple variants, animations, and professional styling."}}},argTypes:{variant:{control:"select",options:["default","secondary","success","warning","error"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large"],description:"Link size"},external:{control:"boolean",description:"External link behavior"},underline:{control:"select",options:["none","always","hover"],description:"Underline style"},icon:{control:"boolean",description:"Show/hide icon"},animate:{control:"boolean",description:"Enable animations"}}},Default={args:{href:"#",children:"Default Link"}},Variants=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-4",children:["default","secondary","success","warning","error"].map((variant=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Typography_Link,{href:"#",variant,children:[variant.charAt(0).toUpperCase()+variant.slice(1)," Link"]})},variant)))}),Sizes=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-4",children:["small","medium","large"].map((size=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Typography_Link,{href:"#",size,children:[size.charAt(0).toUpperCase()+size.slice(1)," Size Link"]})},size)))}),UnderlineStyles=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-4",children:["none","always","hover"].map((style=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Typography_Link,{href:"#",underline:style,children:[style.charAt(0).toUpperCase()+style.slice(1)," Underline"]})},style)))}),ExternalLinks=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsx)(Typography_Link,{href:"https://github.com",external:!0,children:"GitHub Repository"}),(0,jsx_runtime.jsx)(Typography_Link,{href:"https://twitter.com",external:!0,variant:"secondary",children:"Twitter Profile"}),(0,jsx_runtime.jsx)(Typography_Link,{href:"https://linkedin.com",external:!0,variant:"success",children:"LinkedIn Page"})]}),WithCustomIcons=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-4",children:[(0,jsx_runtime.jsx)(Typography_Link,{href:"#",icon:(0,jsx_runtime.jsx)(index_esm.BR8,{}),children:"GitHub Profile"}),(0,jsx_runtime.jsx)(Typography_Link,{href:"#",icon:(0,jsx_runtime.jsx)(index_esm.TC4,{}),variant:"secondary",children:"Twitter Feed"}),(0,jsx_runtime.jsx)(Typography_Link,{href:"#",icon:(0,jsx_runtime.jsx)(index_esm.Wjy,{}),variant:"success",children:"LinkedIn Profile"}),(0,jsx_runtime.jsx)(Typography_Link,{href:"#",icon:(0,jsx_runtime.jsx)(index_esm.VeH,{}),variant:"warning",children:"Website"})]}),ModernActionLinks=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-8",children:[(0,jsx_runtime.jsxs)("div",{className:"bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 p-6 rounded-xl",children:[(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Quick Actions"}),(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{icon:index_esm.a4x,text:"Download Resources",variant:"default"},{icon:index_esm.Y19,text:"Save for Later",variant:"secondary"},{icon:index_esm.Pum,text:"Share Content",variant:"success"},{icon:index_esm.ayE,text:"Copy Link",variant:"warning"}].map((_ref=>{let{icon:Icon,text,variant}=_ref;return(0,jsx_runtime.jsx)(Typography_Link,{href:"#",variant,className:"p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-3",children:[(0,jsx_runtime.jsx)(Icon,{className:"w-5 h-5"}),(0,jsx_runtime.jsx)("span",{children:text})]})},text)}))})]}),(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{icon:index_esm.VeH,title:"Visit Website",description:"Explore our main website",variant:"default"},{icon:index_esm.BR8,title:"View Source",description:"Check out our GitHub",variant:"secondary"},{icon:index_esm.a4x,title:"Get Started",description:"Download the package",variant:"success"}].map((_ref2=>{let{icon:Icon,title,description,variant}=_ref2;return(0,jsx_runtime.jsx)(Typography_Link,{href:"#",variant,className:"block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center text-center gap-2",children:[(0,jsx_runtime.jsx)(Icon,{className:"w-8 h-8 mb-2"}),(0,jsx_runtime.jsx)("span",{className:"font-semibold",children:title}),(0,jsx_runtime.jsx)("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:description})]})},title)}))})]});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: '#',\n    children: 'Default Link'\n  }\n}",...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"() => <div className=\"space-y-4\">\r\n    {['default', 'secondary', 'success', 'warning', 'error'].map(variant => <div key={variant}>\r\n        <Link href=\"#\" variant={variant}>\r\n          {variant.charAt(0).toUpperCase() + variant.slice(1)} Link\r\n        </Link>\r\n      </div>)}\r\n  </div>",...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:"() => <div className=\"space-y-4\">\r\n    {['small', 'medium', 'large'].map(size => <div key={size}>\r\n        <Link href=\"#\" size={size}>\r\n          {size.charAt(0).toUpperCase() + size.slice(1)} Size Link\r\n        </Link>\r\n      </div>)}\r\n  </div>",...Sizes.parameters?.docs?.source}}},UnderlineStyles.parameters={...UnderlineStyles.parameters,docs:{...UnderlineStyles.parameters?.docs,source:{originalSource:"() => <div className=\"space-y-4\">\r\n    {['none', 'always', 'hover'].map(style => <div key={style}>\r\n        <Link href=\"#\" underline={style}>\r\n          {style.charAt(0).toUpperCase() + style.slice(1)} Underline\r\n        </Link>\r\n      </div>)}\r\n  </div>",...UnderlineStyles.parameters?.docs?.source}}},ExternalLinks.parameters={...ExternalLinks.parameters,docs:{...ExternalLinks.parameters?.docs,source:{originalSource:'() => <div className="space-y-4">\r\n    <Link href="https://github.com" external>\r\n      GitHub Repository\r\n    </Link>\r\n    <Link href="https://twitter.com" external variant="secondary">\r\n      Twitter Profile\r\n    </Link>\r\n    <Link href="https://linkedin.com" external variant="success">\r\n      LinkedIn Page\r\n    </Link>\r\n  </div>',...ExternalLinks.parameters?.docs?.source}}},WithCustomIcons.parameters={...WithCustomIcons.parameters,docs:{...WithCustomIcons.parameters?.docs,source:{originalSource:'() => <div className="space-y-4">\r\n    <Link href="#" icon={<FiGithub />}>\r\n      GitHub Profile\r\n    </Link>\r\n    <Link href="#" icon={<FiTwitter />} variant="secondary">\r\n      Twitter Feed\r\n    </Link>\r\n    <Link href="#" icon={<FiLinkedin />} variant="success">\r\n      LinkedIn Profile\r\n    </Link>\r\n    <Link href="#" icon={<FiGlobe />} variant="warning">\r\n      Website\r\n    </Link>\r\n  </div>',...WithCustomIcons.parameters?.docs?.source}}},ModernActionLinks.parameters={...ModernActionLinks.parameters,docs:{...ModernActionLinks.parameters?.docs,source:{originalSource:"() => <div className=\"space-y-8\">\r\n    <div className=\"bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 p-6 rounded-xl\">\r\n      <h3 className=\"text-lg font-semibold mb-4\">Quick Actions</h3>\r\n      <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\r\n        {[{\n        icon: FiDownload,\n        text: 'Download Resources',\n        variant: 'default'\n      }, {\n        icon: FiBookmark,\n        text: 'Save for Later',\n        variant: 'secondary'\n      }, {\n        icon: FiShare2,\n        text: 'Share Content',\n        variant: 'success'\n      }, {\n        icon: FiLink,\n        text: 'Copy Link',\n        variant: 'warning'\n      }].map(({\n        icon: Icon,\n        text,\n        variant\n      }) => <Link key={text} href=\"#\" variant={variant} className=\"p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow\">\r\n            <div className=\"flex items-center gap-3\">\r\n              <Icon className=\"w-5 h-5\" />\r\n              <span>{text}</span>\r\n            </div>\r\n          </Link>)}\r\n      </div>\r\n    </div>\r\n\r\n    <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\r\n      {[{\n      icon: FiGlobe,\n      title: 'Visit Website',\n      description: 'Explore our main website',\n      variant: 'default'\n    }, {\n      icon: FiGithub,\n      title: 'View Source',\n      description: 'Check out our GitHub',\n      variant: 'secondary'\n    }, {\n      icon: FiDownload,\n      title: 'Get Started',\n      description: 'Download the package',\n      variant: 'success'\n    }].map(({\n      icon: Icon,\n      title,\n      description,\n      variant\n    }) => <Link key={title} href=\"#\" variant={variant} className=\"block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300\">\r\n          <div className=\"flex flex-col items-center text-center gap-2\">\r\n            <Icon className=\"w-8 h-8 mb-2\" />\r\n            <span className=\"font-semibold\">{title}</span>\r\n            <span className=\"text-sm text-gray-600 dark:text-gray-300\">\r\n              {description}\r\n            </span>\r\n          </div>\r\n        </Link>)}\r\n    </div>\r\n  </div>",...ModernActionLinks.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Variants","Sizes","UnderlineStyles","ExternalLinks","WithCustomIcons","ModernActionLinks"]}}]);