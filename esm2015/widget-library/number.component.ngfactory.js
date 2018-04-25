/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "./number.component";
import * as i4 from "../json-schema-form.service";
var styles_NumberComponent = [];
var RenderType_NumberComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NumberComponent, data: {} });
export { RenderType_NumberComponent as RenderType_NumberComponent };
function View_NumberComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "label", [], [[1, "for", 0], [8, "className", 0], [4, "display", null], [8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)); var currVal_1 = (((_co.options == null) ? null : _co.options.labelHtmlClass) || ""); var currVal_2 = (((_co.options == null) ? null : _co.options.notitle) ? "none" : ""); var currVal_3 = ((_co.options == null) ? null : _co.options.title); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_NumberComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "input", [], [[1, "aria-describedby", 0], [1, "max", 0], [1, "min", 0], [1, "placeholder", 0], [1, "required", 0], [1, "readonly", 0], [1, "step", 0], [8, "className", 0], [8, "id", 0], [8, "name", 0], [8, "readOnly", 0], [8, "title", 0], [8, "type", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 1)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(3, 540672, null, 0, i1.FormControlDirective, [[8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_j]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlDirective]), i0.ɵdid(5, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_20 = _co.formControl; _ck(_v, 3, 0, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)) + "Status"); var currVal_1 = ((_co.options == null) ? null : _co.options.maximum); var currVal_2 = ((_co.options == null) ? null : _co.options.minimum); var currVal_3 = ((_co.options == null) ? null : _co.options.placeholder); var currVal_4 = ((_co.options == null) ? null : _co.options.required); var currVal_5 = (((_co.options == null) ? null : _co.options.readonly) ? "readonly" : null); var currVal_6 = ((((_co.options == null) ? null : _co.options.multipleOf) || ((_co.options == null) ? null : _co.options.step)) || "any"); var currVal_7 = (((_co.options == null) ? null : _co.options.fieldHtmlClass) || ""); var currVal_8 = ("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)); var currVal_9 = _co.controlName; var currVal_10 = (((_co.options == null) ? null : _co.options.readonly) ? "readonly" : null); var currVal_11 = _co.lastValidNumber; var currVal_12 = ((((_co.layoutNode == null) ? null : _co.layoutNode.type) === "range") ? "range" : "number"); var currVal_13 = i0.ɵnov(_v, 5).ngClassUntouched; var currVal_14 = i0.ɵnov(_v, 5).ngClassTouched; var currVal_15 = i0.ɵnov(_v, 5).ngClassPristine; var currVal_16 = i0.ɵnov(_v, 5).ngClassDirty; var currVal_17 = i0.ɵnov(_v, 5).ngClassValid; var currVal_18 = i0.ɵnov(_v, 5).ngClassInvalid; var currVal_19 = i0.ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); }); }
function View_NumberComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "input", [], [[1, "aria-describedby", 0], [1, "max", 0], [1, "min", 0], [1, "placeholder", 0], [1, "required", 0], [1, "readonly", 0], [1, "step", 0], [8, "className", 0], [8, "disabled", 0], [8, "id", 0], [8, "name", 0], [8, "readOnly", 0], [8, "title", 0], [8, "type", 0], [8, "value", 0]], [[null, "input"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.updateValue($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)) + "Status"); var currVal_1 = ((_co.options == null) ? null : _co.options.maximum); var currVal_2 = ((_co.options == null) ? null : _co.options.minimum); var currVal_3 = ((_co.options == null) ? null : _co.options.placeholder); var currVal_4 = ((_co.options == null) ? null : _co.options.required); var currVal_5 = (((_co.options == null) ? null : _co.options.readonly) ? "readonly" : null); var currVal_6 = ((((_co.options == null) ? null : _co.options.multipleOf) || ((_co.options == null) ? null : _co.options.step)) || "any"); var currVal_7 = (((_co.options == null) ? null : _co.options.fieldHtmlClass) || ""); var currVal_8 = _co.controlDisabled; var currVal_9 = ("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)); var currVal_10 = _co.controlName; var currVal_11 = (((_co.options == null) ? null : _co.options.readonly) ? "readonly" : null); var currVal_12 = _co.lastValidNumber; var currVal_13 = ((((_co.layoutNode == null) ? null : _co.layoutNode.type) === "range") ? "range" : "number"); var currVal_14 = _co.controlValue; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]); }); }
function View_NumberComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.controlValue; _ck(_v, 0, 0, currVal_0); }); }
export function View_NumberComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NumberComponent_1)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NumberComponent_2)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NumberComponent_3)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NumberComponent_4)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.options == null) ? null : _co.options.title); _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.boundControl; _ck(_v, 4, 0, currVal_2); var currVal_3 = !_co.boundControl; _ck(_v, 6, 0, currVal_3); var currVal_4 = (((_co.layoutNode == null) ? null : _co.layoutNode.type) === "range"); _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.options == null) ? null : _co.options.htmlClass) || ""); _ck(_v, 0, 0, currVal_0); }); }
export function View_NumberComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "number-widget", [], null, null, null, View_NumberComponent_0, RenderType_NumberComponent)), i0.ɵdid(1, 114688, null, 0, i3.NumberComponent, [i4.JsonSchemaFormService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NumberComponentNgFactory = i0.ɵccf("number-widget", i3.NumberComponent, View_NumberComponent_Host_0, { layoutNode: "layoutNode", layoutIndex: "layoutIndex", dataIndex: "dataIndex" }, {}, []);
export { NumberComponentNgFactory as NumberComponentNgFactory };
//# sourceMappingURL=number.component.ngfactory.js.map
