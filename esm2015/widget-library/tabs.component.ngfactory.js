/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./select-framework.component.ngfactory";
import * as i3 from "./select-framework.component";
import * as i4 from "../json-schema-form.service";
import * as i5 from "./tabs.component";
var styles_TabsComponent = ["a[_ngcontent-%COMP%] { cursor: pointer; }"];
var RenderType_TabsComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_TabsComponent, data: {} });
export { RenderType_TabsComponent as RenderType_TabsComponent };
function View_TabsComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "a", [], [[8, "className", 0], [8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.select(_v.parent.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("nav-link" + ((_co.selectedItem === _v.parent.context.index) ? (((" " + ((_co.options == null) ? null : _co.options.activeClass)) + " ") + ((_co.options == null) ? null : ((_co.options.style == null) ? null : _co.options.style.selected))) : (" " + ((_co.options == null) ? null : ((_co.options.style == null) ? null : _co.options.style.unselected))))); var currVal_1 = _co.setTabTitle(_v.parent.context.$implicit, _v.parent.context.index); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_TabsComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "li", [["data-tabs", ""], ["role", "presentation"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TabsComponent_2)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.showAddTab || (_v.context.$implicit.type !== "$ref")); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((((_co.options == null) ? null : _co.options.itemLabelHtmlClass) || "") + ((_co.selectedItem === _v.context.index) ? (((" " + (((_co.options == null) ? null : _co.options.activeClass) || "")) + " ") + (((_co.options == null) ? null : ((_co.options.style == null) ? null : _co.options.style.selected)) || "")) : (" " + ((_co.options == null) ? null : ((_co.options.style == null) ? null : _co.options.style.unselected))))); _ck(_v, 0, 0, currVal_0); }); }
function View_TabsComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "select-framework-widget", [], [[8, "className", 0]], null, null, i2.View_SelectFrameworkComponent_0, i2.RenderType_SelectFrameworkComponent)), i0.ɵdid(1, 638976, null, 0, i3.SelectFrameworkComponent, [i0.ComponentFactoryResolver, i4.JsonSchemaFormService], { layoutNode: [0, "layoutNode"], layoutIndex: [1, "layoutIndex"], dataIndex: [2, "dataIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.parent.context.$implicit; var currVal_2 = (_co.layoutIndex || i0.ɵEMPTY_ARRAY).concat(_v.parent.context.index); var currVal_3 = ((((_co.layoutNode == null) ? null : _co.layoutNode.dataType) === "array") ? (_co.dataIndex || i0.ɵEMPTY_ARRAY).concat(_v.parent.context.index) : _co.dataIndex); _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((((((_co.options == null) ? null : _co.options.fieldHtmlClass) || "") + " ") + (((_co.options == null) ? null : _co.options.activeClass) || "")) + " ") + (((_co.options == null) ? null : ((_co.options.style == null) ? null : _co.options.style.selected)) || "")); _ck(_v, 0, 0, currVal_0); }); }
function View_TabsComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TabsComponent_4)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.selectedItem === _v.context.index); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.options == null) ? null : _co.options.htmlClass) || ""); _ck(_v, 0, 0, currVal_0); }); }
export function View_TabsComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ul", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TabsComponent_1)), i0.ɵdid(2, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TabsComponent_3)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.layoutNode == null) ? null : _co.layoutNode.items); _ck(_v, 2, 0, currVal_1); var currVal_2 = ((_co.layoutNode == null) ? null : _co.layoutNode.items); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.options == null) ? null : _co.options.labelHtmlClass) || ""); _ck(_v, 0, 0, currVal_0); }); }
export function View_TabsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "tabs-widget", [], null, null, null, View_TabsComponent_0, RenderType_TabsComponent)), i0.ɵdid(1, 114688, null, 0, i5.TabsComponent, [i4.JsonSchemaFormService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TabsComponentNgFactory = i0.ɵccf("tabs-widget", i5.TabsComponent, View_TabsComponent_Host_0, { layoutNode: "layoutNode", layoutIndex: "layoutIndex", dataIndex: "dataIndex" }, {}, []);
export { TabsComponentNgFactory as TabsComponentNgFactory };
//# sourceMappingURL=tabs.component.ngfactory.js.map
