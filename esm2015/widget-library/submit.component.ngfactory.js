/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./submit.component";
import * as i2 from "../json-schema-form.service";
var styles_SubmitComponent = [];
var RenderType_SubmitComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SubmitComponent, data: {} });
export { RenderType_SubmitComponent as RenderType_SubmitComponent };
export function View_SubmitComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "input", [], [[1, "aria-describedby", 0], [1, "readonly", 0], [1, "required", 0], [8, "className", 0], [8, "disabled", 0], [8, "id", 0], [8, "name", 0], [8, "type", 0], [8, "value", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateValue($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.options == null) ? null : _co.options.htmlClass) || ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = (("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)) + "Status"); var currVal_2 = (((_co.options == null) ? null : _co.options.readonly) ? "readonly" : null); var currVal_3 = ((_co.options == null) ? null : _co.options.required); var currVal_4 = (((_co.options == null) ? null : _co.options.fieldHtmlClass) || ""); var currVal_5 = _co.controlDisabled; var currVal_6 = ("control" + ((_co.layoutNode == null) ? null : _co.layoutNode._id)); var currVal_7 = _co.controlName; var currVal_8 = ((_co.layoutNode == null) ? null : _co.layoutNode.type); var currVal_9 = _co.controlValue; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
export function View_SubmitComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "submit-widget", [], null, null, null, View_SubmitComponent_0, RenderType_SubmitComponent)), i0.ɵdid(1, 114688, null, 0, i1.SubmitComponent, [i2.JsonSchemaFormService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SubmitComponentNgFactory = i0.ɵccf("submit-widget", i1.SubmitComponent, View_SubmitComponent_Host_0, { layoutNode: "layoutNode", layoutIndex: "layoutIndex", dataIndex: "dataIndex" }, {}, []);
export { SubmitComponentNgFactory as SubmitComponentNgFactory };
//# sourceMappingURL=submit.component.ngfactory.js.map
