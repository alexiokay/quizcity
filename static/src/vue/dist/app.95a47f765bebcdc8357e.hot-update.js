webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.navbar[data-v-41458b80] {\\n  z-index:9\\n}\\n#navbar-top[data-v-41458b80] {\\n  color: red;\\n}\\n.btn[data-v-41458b80] {\\n  width: 33%;\\n}\\na[data-v-41458b80] {\\n  color: black;\\n  text-decoration: none;\\n}\\na[data-v-41458b80]:hover {\\n  color: white;\\n  transition:5ms;\\n}\\nnav li[data-v-41458b80]:hover,\\n nav li.router-link-active[data-v-41458b80],\\n nav li.router-link-exact-active[data-v-41458b80] {\\n   border-radius: 6px;\\n   background-color: rgb(27, 107, 255);\\n   cursor: pointer;\\n   color: white;\\n   transition:5ms;\\n}\\n#user:hover > .dropdown-menu[data-v-41458b80] {\\n   display: block;\\n}\\nli[data-v-41458b80] {\\n  margin-left: 10px;\\n}\\n\\n/* BottomBar   */\\n.bottombar[data-v-41458b80] {\\n  position: fixed;\\n  background-color: var(--bg-primary);\\n  transition: width 600ms ease;\\n  z-index: 10;\\n  margin-top: 75px;\\n}\\n.bottombar-nav[data-v-41458b80] {\\n  list-style: none;\\n  padding: 0;\\n  margin-left: -1rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  height: 90%;\\n}\\n.nav-item[data-v-41458b80] {\\n  width: 100%;\\n}\\n.nav-item[data-v-41458b80]:last-child {\\n  margin-top: auto;\\n}\\n.nav-link[data-v-41458b80] {\\n  display: flex;\\n  align-items: center;\\n  height: 5rem;\\n  color: var(--text-primary);\\n  text-decoration: none;\\n  filter: grayscale(100%) opacity(0.7);\\n  transition: var(--transition-speed);\\n}\\n.nav-link[data-v-41458b80]:hover {\\n  filter: grayscale(0%) opacity(1);\\n  background: var(--bg-secondary);\\n  color: var(--text-secondary);\\n}\\n.link-text[data-v-41458b80] {\\n  display: none;\\n  margin-left: 2rem;\\n}\\n.nav-link svg[data-v-41458b80] {\\n  width: 2rem;\\n  min-width: 2rem;\\n  margin: 0 1.5rem;\\n}\\n.fa-primary[data-v-41458b80] {\\n  color: #ff7eee;\\n}\\n.fa-secondary[data-v-41458b80] {\\n  color: #df49a6;\\n}\\n.fa-primary[data-v-41458b80],\\n.fa-secondary[data-v-41458b80] {\\n  transition: var(--transition-speed);\\n}\\n.logo[data-v-41458b80] {\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  margin-bottom: 1rem;\\n  text-align: center;\\n  color: var(--text-secondary);\\n  background: var(--bg-secondary);\\n  font-size: 1.5rem;\\n  letter-spacing: 0.3ch;\\n  width: 100%;\\n}\\n.logo svg[data-v-41458b80] {\\n  transform: rotate(0deg);\\n  transition: var(--transition-speed);\\n}\\n.logo-text[data-v-41458b80]\\n{\\n  display: inline;\\n  position: absolute;\\n  left: -999px;\\n  transition: var(--transition-speed);\\n}\\n.bottombar:hover .logo svg[data-v-41458b80] {\\n  transform: rotate(-180deg);\\n}\\n\\n/* Small screens */\\n.bottombar[data-v-41458b80] {\\n    bottom: 0;\\n    width: 100vw;\\n    height: 5rem;\\n}\\n.logo[data-v-41458b80] {\\n    display: none;\\n}\\n.bottombar-nav[data-v-41458b80] {\\n    flex-direction: row;\\n}\\n.nav-link[data-v-41458b80] {\\n    justify-content: center;\\n}\\nmain[data-v-41458b80] {\\n    margin: 0;\\n}\\n.dark[data-v-41458b80] {\\n  --text-primary: #b6b6b6;\\n  --text-secondary: #ececec;\\n  --bg-primary: #23232e;\\n  --bg-secondary: #141418;\\n}\\n.light[data-v-41458b80] {\\n  --text-primary: #1f1f1f;\\n  --text-secondary: #000000;\\n  --bg-primary: #ffffff;\\n  --bg-secondary: #e4e4e4;\\n}\\n.solar[data-v-41458b80] {\\n  --text-primary: #576e75;\\n  --text-secondary: #35535c;\\n  --bg-primary: #fdf6e3;\\n  --bg-secondary: #f5e5b8;\\n}\\n.theme-icon[data-v-41458b80] {\\n  display: none;\\n}\\n.dark #darkIcon[data-v-41458b80] {\\n  display: block;\\n}\\n.light #lightIcon[data-v-41458b80] {\\n  display: block;\\n}\\n.solar #solarIcon[data-v-41458b80] {\\n  display: block;\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQxNDU4YjgwJnNjb3BlZD10cnVlJmxhbmc9Y3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnZ1ZT9lYjJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubmF2YmFyW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgei1pbmRleDo5XFxufVxcbiNuYXZiYXItdG9wW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmJ0bltkYXRhLXYtNDE0NThiODBdIHtcXG4gIHdpZHRoOiAzMyU7XFxufVxcbmFbZGF0YS12LTQxNDU4YjgwXSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmFbZGF0YS12LTQxNDU4YjgwXTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOjVtcztcXG59XFxubmF2IGxpW2RhdGEtdi00MTQ1OGI4MF06aG92ZXIsXFxuIG5hdiBsaS5yb3V0ZXItbGluay1hY3RpdmVbZGF0YS12LTQxNDU4YjgwXSxcXG4gbmF2IGxpLnJvdXRlci1saW5rLWV4YWN0LWFjdGl2ZVtkYXRhLXYtNDE0NThiODBdIHtcXG4gICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxMDcsIDI1NSk7XFxuICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG4gICB0cmFuc2l0aW9uOjVtcztcXG59XFxuI3VzZXI6aG92ZXIgPiAuZHJvcGRvd24tbWVudVtkYXRhLXYtNDE0NThiODBdIHtcXG4gICBkaXNwbGF5OiBibG9jaztcXG59XFxubGlbZGF0YS12LTQxNDU4YjgwXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogQm90dG9tQmFyICAgKi9cXG4uYm90dG9tYmFyW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCA2MDBtcyBlYXNlO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW4tdG9wOiA3NXB4O1xcbn1cXG4uYm90dG9tYmFyLW5hdltkYXRhLXYtNDE0NThiODBdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcbi5uYXYtaXRlbVtkYXRhLXYtNDE0NThiODBdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2LWl0ZW1bZGF0YS12LTQxNDU4YjgwXTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5uYXYtbGlua1tkYXRhLXYtNDE0NThiODBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNyk7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuLm5hdi1saW5rW2RhdGEtdi00MTQ1OGI4MF06aG92ZXIge1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG59XFxuLmxpbmstdGV4dFtkYXRhLXYtNDE0NThiODBdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLm5hdi1saW5rIHN2Z1tkYXRhLXYtNDE0NThiODBdIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWluLXdpZHRoOiAycmVtO1xcbiAgbWFyZ2luOiAwIDEuNXJlbTtcXG59XFxuLmZhLXByaW1hcnlbZGF0YS12LTQxNDU4YjgwXSB7XFxuICBjb2xvcjogI2ZmN2VlZTtcXG59XFxuLmZhLXNlY29uZGFyeVtkYXRhLXYtNDE0NThiODBdIHtcXG4gIGNvbG9yOiAjZGY0OWE2O1xcbn1cXG4uZmEtcHJpbWFyeVtkYXRhLXYtNDE0NThiODBdLFxcbi5mYS1zZWNvbmRhcnlbZGF0YS12LTQxNDU4YjgwXSB7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuLmxvZ29bZGF0YS12LTQxNDU4YjgwXSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubG9nbyBzdmdbZGF0YS12LTQxNDU4YjgwXSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG4ubG9nby10ZXh0W2RhdGEtdi00MTQ1OGI4MF1cXG57XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtOTk5cHg7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuLmJvdHRvbWJhcjpob3ZlciAubG9nbyBzdmdbZGF0YS12LTQxNDU4YjgwXSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG59XFxuXFxuLyogU21hbGwgc2NyZWVucyAqL1xcbi5ib3R0b21iYXJbZGF0YS12LTQxNDU4YjgwXSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcbi5sb2dvW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYm90dG9tYmFyLW5hdltkYXRhLXYtNDE0NThiODBdIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm5hdi1saW5rW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxubWFpbltkYXRhLXYtNDE0NThiODBdIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uZGFya1tkYXRhLXYtNDE0NThiODBdIHtcXG4gIC0tdGV4dC1wcmltYXJ5OiAjYjZiNmI2O1xcbiAgLS10ZXh0LXNlY29uZGFyeTogI2VjZWNlYztcXG4gIC0tYmctcHJpbWFyeTogIzIzMjMyZTtcXG4gIC0tYmctc2Vjb25kYXJ5OiAjMTQxNDE4O1xcbn1cXG4ubGlnaHRbZGF0YS12LTQxNDU4YjgwXSB7XFxuICAtLXRleHQtcHJpbWFyeTogIzFmMWYxZjtcXG4gIC0tdGV4dC1zZWNvbmRhcnk6ICMwMDAwMDA7XFxuICAtLWJnLXByaW1hcnk6ICNmZmZmZmY7XFxuICAtLWJnLXNlY29uZGFyeTogI2U0ZTRlNDtcXG59XFxuLnNvbGFyW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgLS10ZXh0LXByaW1hcnk6ICM1NzZlNzU7XFxuICAtLXRleHQtc2Vjb25kYXJ5OiAjMzU1MzVjO1xcbiAgLS1iZy1wcmltYXJ5OiAjZmRmNmUzO1xcbiAgLS1iZy1zZWNvbmRhcnk6ICNmNWU1Yjg7XFxufVxcbi50aGVtZS1pY29uW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRhcmsgI2RhcmtJY29uW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5saWdodCAjbGlnaHRJY29uW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zb2xhciAjc29sYXJJY29uW2RhdGEtdi00MTQ1OGI4MF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css\n");

/***/ })

})