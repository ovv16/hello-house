!function(e){function n(n){for(var r,_,i=n[0],o=n[1],l=n[2],u=0,d=[];u<i.length;u++)_=i[u],Object.prototype.hasOwnProperty.call(s,_)&&s[_]&&d.push(s[_][0]),s[_]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(c&&c(n);d.length;)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var o=t[i];0!==s[o]&&(r=!1)}r&&(a.splice(n--,1),e=_(_.s=t[0]))}return e}var r={},s={index:0},a=[];function _(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,_),t.l=!0,t.exports}_.m=e,_.c=r,_.d=function(e,n,t){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)_.d(t,r,function(n){return e[n]}.bind(null,r));return t},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var c=o;a.push(["./src/assets/scripts/index-app.js","vendors"]),t()}({"./src/assets/scripts/index-app.js":
/*!*****************************************!*\
  !*** ./src/assets/scripts/index-app.js ***!
  \*****************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.mjs\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var _pug_components_form_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pug/components/form/form */ \"./src/pug/components/form/form.js\");\n/* harmony import */ var _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pug/components/input/input */ \"./src/pug/components/input/input.js\");\n\n\n\n\n\n\n\n\n\n/** ******************************* */\n/*\n * smooth scroll start\n */\nglobal.gsap = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nglobal.ScrollTrigger = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nglobal.axios = axios__WEBPACK_IMPORTED_MODULE_4___default.a;\n\nwindow.gsap = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.ScrollTrigger = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n\nconst lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\nlenis.on('scroll', (e) => {\n  console.log(e)\n})\n\nfunction raf(time) {\n  lenis.raf(time)\n  requestAnimationFrame(raf)\n}\n\nrequestAnimationFrame(raf)\n\n// /* eslint-disable-next-line */\n// const locoScroll = new LocomotiveScroll({\n//   el: document.querySelector('[data-scroll-container]'),\n//   smooth: true,\n//   smoothMobile: false,\n//   inertia: 1.1,\n// });\n\n// global.locoScroll = locoScroll;\n/*\n * smooth scroll end\n */\n/** ******************************* */\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* eslint-disable no-undef */\n// locoScroll.on('scroll', () => {\n//   // eslint-disable-next-line no-unused-expressions\n//   ScrollTrigger.update;\n// });\n\n// ScrollTrigger.scrollerProxy(document.querySelector('.page__inner'), {\n//   scrollTop(value) {\n//     return arguments.length\n//       ? locoScroll.scrollTo(value, 0, 0)\n//       : locoScroll.scroll.instance.scroll.y;\n//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.\n//   getBoundingClientRect() {\n//     return {\n//       top: 0,\n//       left: 0,\n//       width: window.innerWidth,\n//       height: window.innerHeight,\n//     };\n//   },\n//   pinType: document.querySelector('.page__inner').style.transform ? 'transform' : 'fixed',\n// });\n// ScrollTrigger.addEventListener('fixed', () => locoScroll.update());\n\n// ScrollTrigger.refresh();\n/** ******************************* */\n/*\n * form handlers start\n */\n// const forms = ['[data-home-contact]'];\n// const formsWithRedirect = ['[data-callback-form], [data-home-contact]'];\nconst formsWithRedirect = ['[data-callback-form]'];\nconst formsTel = ['[data-home-contact]'];\n\nformsWithRedirect.forEach(form => {\n  const $form = document.querySelector(form);\n  if ($form) {\n    /* eslint-disable */\n    new _pug_components_form_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      /* eslint-enable */\n      elements: {\n        $form,\n        showSuccessMessage: false,\n        successAction: () => {\n          const backdrop = document.querySelector('.thanks-page');\n          gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(backdrop, { autoAlpha: 1 });\n        },\n        $btnSubmit: $form.querySelector('[data-btn-submit]'),\n        fields: {\n          name: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-name]'),\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .trim(),\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('name'),\n            valid: false,\n            error: [],\n          },\n          phone: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-phone]'),\n              typeInput: 'phone',\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .min(16, i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('field_too_short', { cnt: 19 - 7 })),\n\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('phone'),\n            valid: false,\n            error: [],\n          },\n        },\n      },\n    });\n  }\n});\n\nformsTel.forEach(form => {\n  const $form = document.querySelector(form);\n  if ($form) {\n    /* eslint-disable */\n    new _pug_components_form_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      /* eslint-enable */\n      elements: {\n        $form,\n        showSuccessMessage: false,\n        successAction: () => {\n          const backdrop = document.querySelector('.thanks-page');\n          gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(backdrop, { autoAlpha: 1 });\n        },\n        $btnSubmit: $form.querySelector('[data-btn-submit]'),\n        fields: {\n          name: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-name]'),\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .trim(),\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('name'),\n            valid: false,\n            error: [],\n          },\n          email: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-email]'),\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .trim(),\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('name'),\n            valid: false,\n            error: [],\n          },\n          phone: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-phone]'),\n              typeInput: 'phone',\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .min(16, i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('field_too_short', { cnt: 19 - 7 })),\n\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('phone'),\n            valid: false,\n            error: [],\n          },\n        },\n      },\n    });\n  }\n});\n\nconst leadFormRef = ['[data-lead-form]'];\n\nconst leadForm = form => {\n  const $form = document.querySelector(form);\n  if ($form) {\n    /* eslint-disable */\n    const btnRef = $form.querySelector('[data-btn-submit]');\n    new _pug_components_form_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      /* eslint-enable */\n      elements: {\n        $form,\n        showSuccessMessage: false,\n        successAction: () => {\n          const backdrop = document.querySelector('.thanks-page');\n          gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(backdrop, { autoAlpha: 1 });\n        },\n        $btnSubmit: btnRef,\n        fields: {\n          name: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-name]'),\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .trim(),\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('name'),\n            valid: false,\n            error: [],\n          },\n          phone: {\n            inputWrapper: new _pug_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n              animation: 'none',\n              $field: $form.querySelector('[data-field-phone]'),\n              typeInput: 'phone',\n            }),\n            rule: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]()\n              .required(i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('required'))\n              .min(16, i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('field_too_short', { cnt: 19 - 7 })),\n\n            defaultMessage: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('phone'),\n            valid: false,\n            error: [],\n          },\n        },\n      },\n    });\n  }\n};\n\nleadForm(leadFormRef);\n\n// forms.forEach(form => {\n//   const $form = document.querySelector(form);\n//   if ($form) {\n//     /* eslint-disable */\n//     new FormMonster({\n//       /* eslint-enable */\n//       elements: {\n//         $form,\n//         showSuccessMessage: false,\n//         successAction: () => {\n//           window.location.href = 'message';\n//         },\n//         $btnSubmit: $form.querySelector('[data-btn-submit]'),\n//         fields: {\n//           name: {\n//             inputWrapper: new SexyInput({\n//               animation: 'none',\n//               $field: $form.querySelector('[data-field-name]'),\n//             }),\n//             rule: yup\n//               .string()\n//               .required(i18next.t('required'))\n//               .trim(),\n//             defaultMessage: i18next.t('name'),\n//             valid: false,\n//             error: [],\n//           },\n//           // email: {\n//           //   inputWrapper: new SexyInput({\n//           //     animation: 'none',\n//           //     $field: $form.querySelector('[data-field-email]'),\n//           //   }),\n//           //   rule: yup\n//           //     .string()\n//           //     .required(i18next.t('required'))\n//           //     .trim(),\n//           //   defaultMessage: i18next.t('name'),\n//           //   valid: false,\n//           //   error: [],\n//           // },\n//           phone: {\n//             inputWrapper: new SexyInput({\n//               animation: 'none',\n//               $field: $form.querySelector('[data-field-phone]'),\n//               typeInput: 'phone',\n//             }),\n//             rule: yup\n//               .string()\n//               .required(i18next.t('required'))\n//               .min(17, i18next.t('field_too_short', { cnt: 17 - 5 })),\n\n//             defaultMessage: i18next.t('phone'),\n//             valid: false,\n//             error: [],\n//           },\n//         },\n//       },\n//     });\n\n//     $form.querySelector('.js-mask-absolute').addEventListener(\n//       'click',\n//       () => {\n//         $form.querySelector('[name=\"phone\"]').focus();\n//       },\n//       false,\n//     );\n//   }\n// });\n\n/*\n * form handlers end\n */\n// function disableScroll() {\n//   const containersScroll = document.querySelectorAll('[data-disable-page-scroll]');\n//   containersScroll.forEach((block) => {\n//     block.addEventListener('mouseenter', () => {\n//       locoScroll.stop();\n//     });\n//     block.addEventListener('mouseleave', () => {\n//       locoScroll.start();\n//     });\n//   });\n// }\n\n// document.addEventListener('DOMContentLoaded', () => {\n//   disableScroll();\n//   window.locoScroll.update();\n// });\n/** ******************************* */\n// const paralaxImages = document.querySelectorAll('[data-paralax]');\n// paralaxImages.forEach(image => {\n//   const wrap = document.createElement('div');\n//   wrap.style.overflow = 'hidden';\n//   wrap.style.height = '100%';\n//   image.parentElement.prepend(wrap);\n//   gsap.set(image, { willChange: 'transform', scale: 1.1 });\n//   wrap.prepend(image);\n\n//   gsap\n//     .timeline({\n//       ease: 'none',\n//       scrollTrigger: {\n//         trigger: wrap,\n//         scrub: 0.5,\n//         onLeave: () => {\n//           // console.log('leave');\n//         },\n//         // markers: true,\n//       },\n//     })\n//     .fromTo(\n//       image,\n//       {\n//         y: -35,\n//       },\n//       {\n//         y: 35,\n//         ease: 'linear',\n//       },\n//     );\n// });\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/assets/scripts/index-app.js?")},"./src/assets/scripts/modules/helpers/helpers.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/modules/helpers/helpers.js ***!
  \*******************************************************/
/*! exports provided: eases, langDetect */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eases\", function() { return eases; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"langDetect\", function() { return langDetect; });\nconst eases = {\n  ex: 'expo.inOut',\n  exI: 'expo.in',\n  exO: 'expo.out',\n  p4: 'power4.inOut',\n  p4I: 'power4.in',\n  p4O: 'power4.out',\n  p2: 'power2.inOut',\n  p2I: 'power2.in',\n  p2O: 'power2.out',\n  circ: 'circ.inOut',\n  circO: 'circ.out',\n  circI: 'circ.in',\n};\n\nconst langDetect = () => {\n  if (window.location.pathname.match(/\\/ru\\//)) {\n    return 'ru';\n  } if (window.location.pathname.match(/\\/en\\//)) {\n    return 'en';\n  }\n  return 'uk';\n};\n\n\n//# sourceURL=webpack:///./src/assets/scripts/modules/helpers/helpers.js?")},"./src/pug/components/form/form-view.js":
/*!**********************************************!*\
  !*** ./src/pug/components/form/form-view.js ***!
  \**********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! on-change */ \"./node_modules/on-change/index.js\");\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(on_change__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var _toster_toster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toster/toster */ \"./src/pug/components/toster/toster.js\");\n\n\n\n\n// BEGIN\n\nconst renderForm = (form, elements, toast) => {\n  const elementsParamFn = elements;\n  const fieldsKey = Object.keys(elements.fields);\n\n  switch (form.status) {\n    case 'renderErrorValidation':\n      elementsParamFn.$btnSubmit.setAttribute('disabled', true);\n      fieldsKey.forEach((key) => {\n        const field = elementsParamFn.fields[key];\n        if (field.valid) {\n          field.inputWrapper.showSuccessStyle();\n          field.inputWrapper.writeMessage('');\n          if (elementsParamFn.showSuccessMessage) {\n            field.inputWrapper.writeMessage(field.defaultMessage);\n          }\n        } else {\n          field.inputWrapper.showErrorStyle();\n          field.inputWrapper.addSelectedStyle();\n          field.inputWrapper.writeMessage(field.error[0]);\n        }\n      });\n      break;\n    case 'renderSuccessValidation':\n      elementsParamFn.$btnSubmit.removeAttribute('disabled');\n\n      fieldsKey.forEach((key) => {\n        const field = elementsParamFn.fields[key];\n        field.inputWrapper.showSuccessStyle();\n        field.inputWrapper.writeMessage('');\n      });\n      break;\n\n    case 'loading':\n      fieldsKey.forEach((key) => {\n        const field = elementsParamFn.fields[key];\n        field.inputWrapper.showLoadingStyle();\n      });\n\n      elementsParamFn.$btnSubmit.setAttribute('disabled', true);\n      elementsParamFn.$btnSubmit.querySelector('[data-btn-submit-text]').innerHTML = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t(\n        'sending',\n      );\n\n      break;\n    case 'successSand':\n      fieldsKey.forEach((key) => {\n        const field = elementsParamFn.fields[key];\n        field.inputWrapper.showDefaultStyle();\n        field.inputWrapper.removeSelectedStyle();\n      });\n      elementsParamFn.$form.reset();\n      elementsParamFn.$btnSubmit.setAttribute('disabled', false);\n      elementsParamFn.$btnSubmit.querySelector('[data-btn-submit-text]').innerHTML = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t(\n        'send',\n      );\n      /*  */\n      if (elementsParamFn.successAction === 'toster') {\n        toast.addToast({\n          type: 'success',\n          text: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('sendingSuccessText'),\n          title: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('sendingSuccessTitle'),\n        });\n      }\n      if (typeof elementsParamFn.successAction === 'function') {\n        elementsParamFn.successAction();\n      }\n      break;\n\n    case 'filling':\n      break;\n    case 'failed':\n      toast.addToast({\n        type: 'error',\n        text: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t(form.serverError),\n        title: 'Сталася помилка',\n      });\n      elementsParamFn.$btnSubmit.removeAttribute('disabled');\n      elementsParamFn.$btnSubmit.querySelector('[data-btn-submit-text]').innerHTML = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t(\n        'send',\n      );\n      break;\n\n    default:\n      throw Error(`Unknown form status: ${form.status}`);\n  }\n};\n\n\nconst initView = (state, elementsParamFn) => {\n  const toast = new _toster_toster__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    $wrap: document.querySelector('[data-toast-wrapper]'),\n  });\n\n  const mapping = {\n    status: () => renderForm(state, elementsParamFn, toast),\n  };\n\n  const watchedState = on_change__WEBPACK_IMPORTED_MODULE_0___default()(state, (path) => {\n    if (mapping[path]) {\n      mapping[path]();\n    }\n  });\n\n  return watchedState;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initView);\n// END\n\n\n//# sourceURL=webpack:///./src/pug/components/form/form-view.js?")},"./src/pug/components/form/form.js":
/*!*****************************************!*\
  !*** ./src/pug/components/form/form.js ***!
  \*****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormMonster; });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _form_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-view */ \"./src/pug/components/form/form-view.js\");\n/* harmony import */ var _assets_scripts_modules_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/scripts/modules/helpers/helpers */ \"./src/assets/scripts/modules/helpers/helpers.js\");\n\n\n\n\n\n\nconst sendForm = async (data) => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/wp-admin/admin-ajax.php', data);\n  return response.data;\n};\n\n/*  */\nconst lang = Object(_assets_scripts_modules_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__[\"langDetect\"])();\n(async () => {\n  await i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init({\n    lng: lang, // Текущий язык\n    debug: true,\n    resources: {\n      ru: {\n        // Тексты конкретного языка\n        translation: {\n          // Так называемый namespace по умолчанию\n          name: 'Имя:*',\n          phone: 'Телефон:*',\n          send: 'Отправить',\n          sending: 'Отправка',\n          field_too_short: 'Телефон должен содержать не менее {{cnt}} символов',\n          field_too_long: 'Телефон должен содержать не более {{cnt}} символов',\n          only_number: 'здесь только цифры',\n          required: 'это поле обязательне',\n          sendingSuccessTitle: 'Cообщение отправлено',\n          sendingSuccessText: 'Ждите ответа наших менеджеров',\n          sendingErrorText: 'Ждите ответа наших менеджеров',\n          sendingErrorTitle: 'Ошибка',\n          send_fail: 'Сообщение не было отправлено за неизвестной ошибки сервера. Код: [send_fail]',\n          invalid_form:\n            'Сообщение не было отправлено за неизвестной ошибки сервера. Код: [invalid_form]',\n          front_error:\n            'Сообщение не было отправлено за неизвестной ошибки сервера. Код: [front_error]',\n          invalid_upload_file: 'Ошибка загрузки файла. Код: [invalid_upload_file]',\n          invalid_recaptcha: 'Заполните капчу и попробуйте еще раз снова. Код: [invalid_recaptcha]',\n          connectionFailed: 'Ошибка соединения с CRM',\n        },\n      },\n      uk: {\n        // Тексты конкретного языка\n        translation: {\n          // Так называемый namespace по умолчанию\n          name: 'Ім’я:*',\n          phone: 'Телефон:*',\n          send: 'Надіслати',\n          sending: 'Відправлення',\n          field_too_short: 'Телефон має містити принаймні {{cnt}} символів',\n          field_too_long: 'Телефон має містити не більше {{cnt}} символів',\n          only_number: 'тут лише цифри',\n          required: 'Це поле є обов`язковим',\n          sendingSuccessTitle: 'Повідомлення надіслано',\n          sendingSuccessText: 'Чекайте відповіді наших менеджерів',\n          sendingErrorText: 'Чекайте відповіді наших менеджерів',\n\n          sendingErrorTitle: 'Сталася помилка',\n          send_fail:\n            'Повідомлення не було відправлено через невідому помилку сервера. Код: [send_fail] ',\n          invalid_form:\n            'Повідомлення не було відправлено через невідому помилку сервера. Код: [invalid_form] ',\n          front_error:\n            'Повідомлення не було відправлено через невідому помилку сервера. Код: [front_error] ',\n          invalid_upload_file: 'Помилка завантаження файлу. Код: [invalid_upload_file]',\n          invalid_recaptcha: 'Заповніть капчу і спробуйте ще раз знову. Код: [invalid_recaptcha]',\n          connectionFailed: \"Помилка з'єднання с CRM\",\n        },\n      },\n      en: {\n        // Тексты конкретного языка\n        translation: {\n          // Так называемый namespace по умолчанию\n          name: 'Name:*',\n          phone: 'Phone:*',\n          send: 'Sand',\n          sending: 'Sanding',\n          field_too_short: 'Phone must be at least {{cnt}} characters',\n          field_too_long: 'Phone must be at most {{cnt}} characters',\n          only_number: 'only digits here',\n          required: 'this field is required',\n          sendingSuccessTitle: 'Message sent',\n          sendingSuccessText: 'Wait for the answers of our managers',\n          sendingErrorText: 'Wait for the answers of our managers',\n          sendingErrorTitle: 'An error has occurred',\n          send_fail: 'The message was not sent due to an unknown server error. Code: [send_fail] ',\n          invalid_form:\n            'The message was not sent for an unknown server error. Code: [invalid_form] ',\n          front_error: 'The message was not sent for an unknown server error. Code: [front_error] ',\n          invalid_upload_file: 'Error uploading file. Code: [invalid_upload_file] ',\n          invalid_recaptcha: 'Please fill in the captcha and try again. Code: [invalid_recaptcha] ',\n          connectionFailed: 'Server connection error',\n        },\n      },\n    },\n  });\n})();\n/*  */\n\nclass FormMonster {\n  constructor(setting) {\n    this.elements = setting.elements;\n    this.$body = document.querySelector('body');\n    this.showSuccessMessage = setting.showSuccessMessage || true;\n\n    this.state = {\n      serverError: null,\n      error: true,\n      form: setting.elements.fields,\n      status: 'filling',\n    };\n    this.fieldsKey = Object.keys(this.elements.fields);\n    this.watchedState = Object(_form_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.state, this.elements);\n\n    this.init();\n  }\n\n  validate(formData) {\n    const formDataObj = this.fieldsKey.reduce((acc, key) => {\n      acc[key] = formData.get(key);\n      return acc;\n    }, {});\n    /*  */\n    const shapeObject = this.fieldsKey.reduce((acc, key) => {\n      acc[key] = this.elements.fields[key].rule;\n      return acc;\n    }, {});\n    /*  */\n\n    const schema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape(shapeObject);\n\n    try {\n      schema.validateSync(formDataObj, { abortEarly: false });\n      return null;\n    } catch (err) {\n      return err.inner;\n    }\n  }\n\n  changeInput() {\n    return (e) => {\n      /*  */\n      e.preventDefault();\n      this.watchedState.status = 'filling';\n      /*  */\n      const formData = new FormData(this.elements.$form);\n      /*  */\n      const error = this.validate(formData);\n      /*  */\n      this.fieldsKey.map((key) => {\n        const field = this.elements.fields[key];\n        field.valid = true;\n        field.error = [];\n        return null;\n      });\n      /*  */\n      /*  */\n      if (error) {\n        error.forEach(({ path, message }) => {\n          this.watchedState.form[path].valid = false;\n          this.watchedState.form[path].error.push(message);\n          return null;\n        });\n        this.watchedState.error = true;\n        this.watchedState.status = 'renderErrorValidation';\n        return null;\n      }\n      this.watchedState.error = false;\n      this.watchedState.status = 'renderSuccessValidation';\n      return null;\n    };\n  }\n\n  submitForm() {\n    return async (e) => {\n      /*  */\n      e.preventDefault();\n      this.changeInput()(e);\n\n      /*  */\n      if (this.watchedState.error === false) {\n        try {\n          this.watchedState.status = 'loading';\n          const formData = new FormData(this.elements.$form);\n          formData.append('action', 'app');\n\n          /* eslint-disable-next-line */\n          const { error, code_error } = await sendForm(formData);\n\n          if (error === 0) {\n            this.watchedState.status = 'successSand';\n            return true;\n          }\n          /* eslint-disable-next-line */\n          this.watchedState.serverError = code_error;\n          this.watchedState.status = 'failed';\n        } catch (err) {\n          this.watchedState.error = err.message;\n          this.watchedState.serverError = 'front_error';\n          this.watchedState.status = 'failed';\n        }\n      }\n      return null;\n    };\n  }\n\n  listers() {\n    this.elements.$form.addEventListener('submit', this.submitForm(this.watchedState));\n    this.fieldsKey.map((key) => {\n      const { input } = this.elements.fields[key].inputWrapper;\n      input.addEventListener('input', this.changeInput(this.watchedState));\n      return null;\n    });\n  }\n\n  init() {\n    this.listers();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/pug/components/form/form.js?")},"./src/pug/components/input/input.js":
/*!*******************************************!*\
  !*** ./src/pug/components/input/input.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SexyInput; });\n/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ \"./node_modules/cleave.js/dist/cleave-esm.js\");\n\n\nclass SexyInput {\n  constructor(setting) {\n    this.selected = false;\n    this.$field = setting.$field;\n    this.$input = setting.$input || setting.$field.querySelector('input');\n    this.typeInput = setting.typeInput || 'text';\n    this.animation = setting.animation || 'none';\n    this.$message = setting.$message || setting.$field.querySelector('[data-input-message]');\n\n    this.$body = document.querySelector('body');\n\n    this.init();\n  }\n\n  get input() {\n    return this.$input;\n  }\n\n  selectIn(self) {\n    return () => {\n      if (this.getStatusField() !== 'field--error') {\n        self.showSelectedStyle();\n        self.addSelectedStyle();\n      }\n    };\n  }\n\n  selectOut(self) {\n    return ({ target }) => {\n      if (this.getStatusField() === 'field--error' || target.value !== '') return;\n\n      self.showDefaultStyle();\n      self.removeSelectedStyle();\n    };\n  }\n\n  /*  */\n  getStatusField() {\n    return this.$field.getAttribute('data-status');\n  }\n\n  /*  */\n  showSuccessStyle() {\n    this.changeStatus(this.$field, 'success');\n  }\n\n  showDefaultStyle() {\n    this.changeStatus(this.$field, 'default');\n  }\n\n  showErrorStyle() {\n    this.changeStatus(this.$field, 'error');\n  }\n\n  showSelectedStyle() {\n    this.changeStatus(this.$field, 'selected');\n  }\n\n  showLoadingStyle() {\n    this.changeStatus(this.$field, 'loading');\n  }\n\n  addSelectedStyle() {\n    if (this.animation === 'focus') {\n      this.$field.classList.add('selected');\n    }\n  }\n\n  removeSelectedStyle() {\n    this.$field.classList.remove('selected');\n  }\n\n  writeMessage(text) {\n    this.$message.innerHTML = text;\n  }\n  /*  */\n\n  changeStatus(fieldBlock, status) {\n    switch (status) {\n      case 'default':\n        fieldBlock.classList.remove('selected');\n        fieldBlock.setAttribute('data-status', 'field--inactive');\n\n        break;\n      case 'success':\n        fieldBlock.setAttribute('data-status', 'field--success');\n\n        break;\n      case 'error':\n        fieldBlock.setAttribute('data-status', 'field--error');\n        break;\n      case 'selected':\n        fieldBlock.classList.add('selected');\n        fieldBlock.setAttribute('data-status', 'field--active');\n        break;\n      case 'loading':\n        fieldBlock.classList.add('selected');\n        fieldBlock.setAttribute('data-status', 'field--loading');\n        break;\n\n      default:\n        throw new Error(`Unknown change status ${status}`);\n    }\n  }\n\n  /*  */\n\n  listeners(input) {\n    const self = this;\n\n    if (this.typeInput === 'phone') {\n      /* eslint-disable */\n      input.setAttribute('inputmode', 'tel');\n      // input.intTelIput = intlTelInput(input, {\n      //   preferredCountries: ['ua'],\n      //   autoPlaceholder: 'off',\n      // });\n      let cleave = new cleave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](input, {\n        /* eslint-enable */\n        numericOnly: true,\n        prefix: '+380',\n        blocks: [4, 2, 3, 2, 2],\n        delimiters: [' ', ' ', ' ', ''],\n      });\n      // input.addEventListener('countrychange', () => {\n      //   const currentCountry = input.intTelIput.getSelectedCountryData();\n      //   const { dialCode } = currentCountry;\n      //   const selfInput = input;\n      //   const maskPartForUkraine = currentCountry.iso2 === 'ua' ? 2 : 3;\n      //   cleave.destroy();\n      //   selfInput.value = '';\n      //   cleave = new Cleave(input, {\n      //     numericOnly: true,\n      //     delimiter: '-',\n      //     prefix: `+${dialCode}`,\n      //     /* В код страны добавляется символ + */\n      //     blocks: [dialCode.toString().length + 1, maskPartForUkraine, 3, 2, 2],\n      //     delimiters: [' ', ' ', ' ', ''],\n      //   });\n      // });\n    }\n    if (this.animation === 'focus') {\n      input.addEventListener('focus', self.selectIn(self));\n      input.addEventListener('blur', self.selectOut(self));\n    }\n  }\n\n  prepareMarkup() {\n    if (this.animation === 'focus') {\n      this.$field.setAttribute('data-animation', 'focus');\n    }\n    if (this.animation === 'none') {\n      this.$field.setAttribute('data-animation', 'none');\n    }\n  }\n\n  init() {\n    this.listeners(this.$input);\n    this.prepareMarkup(this.$input);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/pug/components/input/input.js?")},"./src/pug/components/toster/toster.js":
/*!*********************************************!*\
  !*** ./src/pug/components/toster/toster.js ***!
  \*********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyToster; });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");\n/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");\n/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass MyToster {\n  constructor(setting) {\n    this.$wrap = setting.$wrap;\n    this.$item = setting.$item;\n    this.ease_0 = bezier_easing__WEBPACK_IMPORTED_MODULE_1___default()(0.34, 0.98, 0.43, 0.95);\n\n    this.$body = document.querySelector(\'body\');\n\n    this.init();\n  }\n\n  /*  */\n  createItem({ type, title, text }) {\n    return `\n      <div class="toast" data-toast-item="" data-toast-status="${type}">\n        <div class="toast-logo-block">\n          <div class="toast__logo">\n            <svg class="icon--logo" role="presentation">\n              <use xlink:href="#icon-logo"></use>\n            </svg>\n          </div>\n        </div>\n        <div class="toast-content-block">\n          <h5 class="toast__title">${title}</h5>\n          <p class="toast__text">${text}</p>\n        </div>\n        <button class="toast__colose-btn" data-toast-colose-btn="" type="button">\n          <svg class="icon--close" role="presentation">\n            <use xlink:href="#icon-close"></use>\n          </svg>\n        </button>\n      </div>\n    `;\n  }\n\n  removeItem(item) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(\n      item,\n      0.25,\n      { xPercent: 0, ease: this.ease_0 },\n      {\n        xPercent: 100,\n        onComplete: () => {\n          item.remove();\n        },\n      },\n    );\n  }\n\n  addToast(settingObj) {\n    const markup = this.createItem(settingObj);\n    this.$wrap.insertAdjacentHTML(\'beforeend\', markup);\n    /*  */\n    const items = this.$wrap.querySelectorAll(\'[data-toast-item]\');\n    const item = items[items.length - 1];\n    /*  */\n    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(\n      item,\n      0.75,\n      { xPercent: 100, skewX: -10 },\n      { xPercent: 0, skewX: 0, ease: this.ease_0 },\n    );\n\n    setTimeout(() => {\n      this.removeItem(item);\n    }, 3000);\n  }\n\n  listeners() {\n    const self = this;\n    this.$wrap.addEventListener(\'click\', ({ target }) => {\n      if (target.closest(\'[data-toast-colose-btn]\') !== null) {\n        const item = target.closest(\'[data-toast-item]\');\n        self.removeItem(item);\n      }\n    });\n  }\n\n  init() {\n    this.listeners();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/pug/components/toster/toster.js?')}});