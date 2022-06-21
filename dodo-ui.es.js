var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { reactive, readonly, inject, watchEffect, defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, useAttrs, ref, mergeProps, renderSlot, createBlock, createCommentVNode, normalizeStyle, Teleport, createVNode, withCtx, toDisplayString, onErrorCaptured, Fragment, createTextVNode, renderList } from "vue";
var mdiAccount = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
var mdiAccountGroup = "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z";
var mdiAccountMultiple = "M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z";
var mdiAlert = "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z";
var mdiArrowDown = "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z";
var mdiArrowLeft = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
var mdiArrowRight = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
var mdiArrowUp = "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";
var mdiAt = "M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z";
var mdiAttachment = "M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z";
var mdiBell = "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21";
var mdiBookmark = "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
var mdiBullhorn = "M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z";
var mdiCalendar = "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
var mdiCalendarClock = "M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z";
var mdiCamera = "M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z";
var mdiCart = "M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z";
var mdiCartArrowDown = "M10,0V4H8L12,8L16,4H14V0M1,2V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z";
var mdiChartArc = "M16.18,19.6L14.17,16.12C15.15,15.4 15.83,14.28 15.97,13H20C19.83,15.76 18.35,18.16 16.18,19.6M13,7.03V3C17.3,3.26 20.74,6.7 21,11H16.97C16.74,8.91 15.09,7.26 13,7.03M7,12.5C7,13.14 7.13,13.75 7.38,14.3L3.9,16.31C3.32,15.16 3,13.87 3,12.5C3,7.97 6.54,4.27 11,4V8.03C8.75,8.28 7,10.18 7,12.5M11.5,21C8.53,21 5.92,19.5 4.4,17.18L7.88,15.17C8.7,16.28 10,17 11.5,17C12.14,17 12.75,16.87 13.3,16.62L15.31,20.1C14.16,20.68 12.87,21 11.5,21Z";
var mdiCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
var mdiCheckBold = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z";
var mdiChevronDown = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
var mdiChevronLeft = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
var mdiChevronRight = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
var mdiChevronUp = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z";
var mdiClockOutline = "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiCloudUpload = "M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z";
var mdiCog = "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
var mdiCross = "M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z";
var mdiDelete = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
var mdiDotsHorizontal = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z";
var mdiDotsVertical = "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";
var mdiDownload = "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
var mdiEmail = "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z";
var mdiEye = "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
var mdiFacebook = "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z";
var mdiFile = "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z";
var mdiFilter = "M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z";
var mdiFolder = "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";
var mdiHammer = "M2 19.63L13.43 8.2L12.72 7.5L14.14 6.07L12 3.89C13.2 2.7 15.09 2.7 16.27 3.89L19.87 7.5L18.45 8.91H21.29L22 9.62L18.45 13.21L17.74 12.5V9.62L16.27 11.04L15.56 10.33L4.13 21.76L2 19.63Z";
var mdiHeart = "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z";
var mdiHelp = "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z";
var mdiHome = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z";
var mdiImage = "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z";
var mdiImageMultipleOutline = "M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z";
var mdiInformation = "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
var mdiLink = "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z";
var mdiLinkedin = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z";
var mdiLoading = "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z";
var mdiMagnify = "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
var mdiMapMarker = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
var mdiMenu = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";
var mdiMessage = "M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z";
var mdiMicrophone = "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z";
var mdiMinus = "M19,13H5V11H19V13Z";
var mdiOfficeBuilding = "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z";
var mdiPause = "M14,19H18V5H14M6,19H10V5H6V19Z";
var mdiPencil = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
var mdiPhone = "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z";
var mdiPlay = "M8,5.14V19.14L19,12.14L8,5.14Z";
var mdiPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
var mdiShare = "M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z";
var mdiSpeaker = "M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z";
var mdiTrendingUp = "M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z";
var mdiTwitter = "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z";
var mdiUpload = "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
var mdiVideo = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z";
var mdiViewGrid = "M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3";
var mdiViewList = "M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z";
const baseTheme = {
  colors: {
    info: "#3a86ff",
    success: "#2a9d8f",
    warn: "#e9c46a",
    danger: "#e76f51",
    background: "#ffffff",
    foreground: "#4e5d78",
    container: "#f7f8f9",
    heading: "#000000"
  },
  fonts: {
    heading: "sans-serif",
    body: "sans-serif",
    monospace: "monospace"
  },
  buttonClasses: {
    default: "uiButton_default",
    solid: "uiButton_solid",
    text: "uiButton_text"
  },
  textClasses: {
    p: "uiText_p",
    h1: "uiText_h1",
    h2: "uiText_h2",
    h3: "uiText_h3",
    small: "uiText_small"
  },
  spacings: {
    "0": "0px",
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px"
  },
  icons: {
    "account-group": mdiAccountGroup,
    "account-multiple": mdiAccountMultiple,
    "account": mdiAccount,
    "alert": mdiAlert,
    "arrow-down": mdiArrowDown,
    "arrow-left": mdiArrowLeft,
    "arrow-right": mdiArrowRight,
    "arrow-up": mdiArrowUp,
    "at": mdiAt,
    "attachment": mdiAttachment,
    "bell": mdiBell,
    "bookmark": mdiBookmark,
    "bullhorn": mdiBullhorn,
    "calendar-clock": mdiCalendarClock,
    "calendar": mdiCalendar,
    "camera": mdiCamera,
    "cart-arrow-down": mdiCartArrowDown,
    "cart": mdiCart,
    "chart-arc": mdiChartArc,
    "check-bold": mdiCheckBold,
    "check": mdiCheck,
    "chevron-down": mdiChevronDown,
    "chevron-left": mdiChevronLeft,
    "chevron-right": mdiChevronRight,
    "chevron-up": mdiChevronUp,
    "clock-outline": mdiClockOutline,
    "close": mdiClose,
    "cloud-upload": mdiCloudUpload,
    "cog": mdiCog,
    "cross": mdiCross,
    "delete": mdiDelete,
    "dots-horizontal": mdiDotsHorizontal,
    "dots-vertical": mdiDotsVertical,
    "download": mdiDownload,
    "email": mdiEmail,
    "eye": mdiEye,
    "facebook": mdiFacebook,
    "file": mdiFile,
    "filter": mdiFilter,
    "folder": mdiFolder,
    "hammer": mdiHammer,
    "heart": mdiHeart,
    "help": mdiHelp,
    "home": mdiHome,
    "image-multiple-outline": mdiImageMultipleOutline,
    "image": mdiImage,
    "information": mdiInformation,
    "link": mdiLink,
    "linkedin": mdiLinkedin,
    "loading": mdiLoading,
    "magnify": mdiMagnify,
    "map-marker": mdiMapMarker,
    "menu": mdiMenu,
    "message": mdiMessage,
    "microphone": mdiMicrophone,
    "minus": mdiMinus,
    "office-building": mdiOfficeBuilding,
    "pause": mdiPause,
    "pencil": mdiPencil,
    "phone": mdiPhone,
    "play": mdiPlay,
    "plus": mdiPlus,
    "share": mdiShare,
    "speaker": mdiSpeaker,
    "trending-up": mdiTrendingUp,
    "twitter": mdiTwitter,
    "upload": mdiUpload,
    "video": mdiVideo,
    "view-grid": mdiViewGrid,
    "view-list": mdiViewList
  }
};
const key = Symbol("themeKey");
function provideCustomTheme(customize) {
  return {
    install(app) {
      const theme = reactive(baseTheme);
      app.provide(key, theme);
      if (customize)
        customize(theme);
    }
  };
}
function useTheme() {
  return readonly(inject(key, baseTheme));
}
function useCustomTheme() {
  return inject(key);
}
function useThemeColor(name) {
  var _a;
  const theme = (_a = useTheme()) != null ? _a : baseTheme;
  if (!theme.colors[name]) {
    throw new Error(`"${name}" is not a valid theme color (${Object.keys(theme.colors)})`);
  }
  return theme.colors[name];
}
function useThemeColorRGB(name) {
  return hexToRGB(useThemeColor(name));
}
function hexToRGB(hex) {
  const [r, g, b] = hex.match(/(\w\w)/g);
  return [r, g, b].map((x) => parseInt(x, 16));
}
function useTextVariant(name) {
  var _a;
  const theme = (_a = useTheme()) != null ? _a : baseTheme;
  if (!theme.textClasses[name]) {
    throw new Error(`"${name}" is not a valid text variant (${Object.keys(theme.textClasses)})`);
  }
  return theme.textClasses[name];
}
function useButtonVariant(name) {
  var _a;
  const theme = (_a = useTheme()) != null ? _a : baseTheme;
  if (!theme.buttonClasses[name]) {
    throw new Error(`"${name}" is not a valid button variant (${Object.keys(theme.buttonClasses)})`);
  }
  return theme.buttonClasses[name];
}
function useIconSvgPath(name) {
  var _a;
  const theme = (_a = useTheme()) != null ? _a : baseTheme;
  if (!theme.icons[name]) {
    throw new Error(`"${name}" is not a valid icon name (${Object.keys(theme.icons)})`);
  }
  return theme.icons[name];
}
function useSpacing(name) {
  var _a;
  const theme = (_a = useTheme()) != null ? _a : baseTheme;
  if (!theme.spacings[name]) {
    throw new Error(`"${name}" is not a valid icon name (${Object.keys(theme.spacings)})`);
  }
  return theme.spacings[name];
}
function useThemeCssVars() {
  watchEffect(() => {
    var _a;
    const theme = (_a = useCustomTheme()) != null ? _a : baseTheme;
    const vars = [
      ...Object.entries(theme.colors).map(([k, v]) => `--color-${k}:${v};`),
      ...Object.entries(theme.colors).map(([k, v]) => `--rgb-${k}:${hexToRGB(v)};`),
      ...Object.entries(theme.fonts).map(([k, v]) => `--font-${k}:${v};`),
      ...Object.entries(theme.spacings).map(([k, v]) => `--spacing-${k}:${v};`)
    ].join("");
    const css = `:root{${vars}}`;
    const id = "dodoui-theme-vars";
    let style = document.querySelector("#" + id);
    if (!style) {
      style = document.createElement("style");
      style.id = id;
      document.head.appendChild(style);
    }
    style.innerHTML = css;
  });
}
var Spinner_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  fill: "none",
  d: "M 9 1 A 8 8 0 0 1 9 17",
  "stroke-width": "2"
}, null, -1);
const _hoisted_2$3 = [
  _hoisted_1$5
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useThemeCssVars();
    const classes = computed(() => []);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: normalizeClass(["uiSpinner", unref(classes)]),
        viewBox: "0 0 18 18"
      }, _hoisted_2$3, 2);
    };
  }
});
var Button_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = ["type"];
const _hoisted_2$2 = { class: "uiButton_content" };
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    color: null,
    variant: null,
    type: null,
    square: { type: Boolean },
    small: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    useThemeCssVars();
    const css = computed(() => {
      let s = "";
      if (props.color)
        s += `--rgb:${useThemeColorRGB(props.color)};`;
      return s;
    });
    const classes = computed(() => {
      var _a;
      return [
        { uiButton_loading: loading.value },
        useButtonVariant((_a = props.variant) != null ? _a : "default"),
        props.small ? `uiButton_small` : null,
        props.square ? "uiButton_square" : null
      ];
    });
    const attrs = useAttrs();
    const loading = ref(false);
    async function onClick(event) {
      if (!loading.value && typeof attrs.onClick === "function") {
        const result = attrs.onClick(event);
        if (result instanceof Promise) {
          loading.value = true;
          await result.finally(() => {
            loading.value = false;
          });
        }
      }
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("button", mergeProps({
        class: ["uiButton", unref(classes)],
        style: unref(css),
        type: (_a = __props.type) != null ? _a : "button"
      }, __spreadProps(__spreadValues({}, _ctx.$attrs), { onClick })), [
        createElementVNode("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "default")
        ]),
        loading.value ? (openBlock(), createBlock(_sfc_main$8, {
          key: 0,
          class: "uiButton_spinner"
        })) : createCommentVNode("", true)
      ], 16, _hoisted_1$4);
    };
  }
}));
var Container_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    gap: null,
    pad: null,
    column: { type: Boolean },
    grow: { type: Boolean },
    justify: null,
    align: null,
    wrap: { type: Boolean },
    background: null
  },
  setup(__props) {
    const props = __props;
    useThemeCssVars();
    const css = computed(() => {
      let s = "";
      if (props.gap)
        s += `gap:${useSpacing(props.gap)};`;
      if (props.pad)
        s += `padding:${useSpacing(props.pad)};`;
      if (props.grow)
        s += `flex-grow:1;`;
      if (props.wrap)
        s += `flex-wrap:wrap;`;
      if (props.justify)
        s += `justify-content:${props.justify};`;
      if (props.align)
        s += `align-items:${props.align};`;
      if (props.background)
        s += `background:${props.background};`;
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "uiContainer",
        style: normalizeStyle(unref(css))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
var Row_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    gap: null,
    pad: null,
    column: { type: Boolean },
    grow: { type: Boolean },
    justify: null,
    align: null,
    wrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    useThemeCssVars();
    const css = computed(() => {
      let s = "";
      if (props.gap)
        s += `gap:${useSpacing(props.gap)};`;
      if (props.pad)
        s += `padding:${useSpacing(props.pad)};`;
      if (props.grow)
        s += `flex-grow:1;`;
      if (props.wrap)
        s += `flex-wrap:wrap;`;
      if (props.justify)
        s += `justify-content:${props.justify};`;
      if (props.align)
        s += `align-items:${props.align};`;
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "uiFlex",
        style: normalizeStyle(unref(css))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
var Dialog_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "Dialog_window" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    title: null
  },
  setup(__props) {
    const css = computed(() => {
      let s = "";
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createElementVNode("div", {
          class: "Dialog",
          style: normalizeStyle(unref(css))
        }, [
          createElementVNode("div", _hoisted_1$3, [
            createVNode(_sfc_main$6, { pad: "m" }, {
              default: withCtx(() => [
                createElementVNode("div", null, toDisplayString(__props.title), 1),
                renderSlot(_ctx.$slots, "content")
              ]),
              _: 3
            }),
            createVNode(_sfc_main$5, {
              pad: "m",
              justify: "end",
              gap: "s"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "controls")
              ]),
              _: 3
            })
          ])
        ], 4)
      ]);
    };
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode("div", null, " An unexpected error occurred and the application may not function correctly until the page is reloaded. Any unsaved changes will be lost if you choose to reload the page. ", -1);
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("div", null, "Please contact us if the problem persists.", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Ignore");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Reload page");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const currentError = ref();
    onErrorCaptured((err, component, info) => {
      console.log("onErrorCaptured");
      currentError.value = err;
    });
    function reload() {
      location.reload();
    }
    function ignore() {
      currentError.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        currentError.value ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: "body"
        }, [
          createVNode(_sfc_main$4, { title: "Something went wrong" }, {
            content: withCtx(() => [
              _hoisted_1$2,
              _hoisted_2$1
            ]),
            controls: withCtx(() => [
              createVNode(_sfc_main$7, { onClick: ignore }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              }),
              createVNode(_sfc_main$7, {
                variant: "solid",
                color: "info",
                onClick: reload
              }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 64);
    };
  }
});
var UiIcon_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["d"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    color: null,
    size: null
  },
  setup(__props) {
    const props = __props;
    const path = computed(() => {
      return useIconSvgPath(props.name);
    });
    const css = computed(() => {
      let s = "";
      if (props.color)
        s += "color: " + useThemeColor(props.color);
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: normalizeClass(["UiIcon", __props.size && `UiIcon_${__props.size}`]),
        style: normalizeStyle(unref(css)),
        viewBox: "0 0 24 24"
      }, [
        createElementVNode("path", {
          fill: "currentColor",
          d: unref(path)
        }, null, 8, _hoisted_1$1)
      ], 6);
    };
  }
});
var GridResponsive_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    columnWidth: null,
    stretch: { type: Boolean },
    gap: null
  },
  setup(__props) {
    const props = __props;
    const css = computed(() => {
      let s = "";
      const fitFill = props.stretch ? "auto-fit" : "auto-fill";
      s += `grid-template-columns: repeat(${fitFill}, minmax(${props.columnWidth}, 1fr));`;
      if (props.gap)
        s += `gap:${useSpacing(props.gap)};`;
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "GridResponsive",
        style: normalizeStyle(unref(css))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
var NavLayout_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["href"];
const _hoisted_2 = { class: "NavLayout_content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    items: null
  },
  setup(__props) {
    const css = computed(() => {
      let s = "";
      return s;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "NavLayout",
        style: normalizeStyle(unref(css))
      }, [
        createVNode(_sfc_main$6, {
          pad: "l",
          class: "NavLayout_bar"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
              return openBlock(), createElementBlock("a", {
                href: item.href,
                class: "NavLayout_item"
              }, toDisplayString(item.label), 9, _hoisted_1);
            }), 256))
          ]),
          _: 1
        }),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 4);
    };
  }
});
export { _sfc_main$7 as Button, _sfc_main$6 as Container, _sfc_main$3 as CrashDialog, _sfc_main$4 as Dialog, _sfc_main$1 as GridResponsive, _sfc_main as NavBar, _sfc_main$5 as Row, _sfc_main$2 as UiIcon, hexToRGB, provideCustomTheme, useButtonVariant, useCustomTheme, useIconSvgPath, useSpacing, useTextVariant, useTheme, useThemeColor, useThemeColorRGB, useThemeCssVars };
