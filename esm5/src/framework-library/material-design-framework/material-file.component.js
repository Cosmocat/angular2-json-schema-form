import { Component, Input } from '@angular/core';
import { JsonSchemaFormService } from '../../json-schema-form.service';
// TODO: Add this control
var MaterialFileComponent = /** @class */ (function () {
    function MaterialFileComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialFileComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        this.imageSrc = this.controlValue || "assets/placeholder-600x400.png";
    };
    MaterialFileComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    MaterialFileComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        var selectedFile = event.target.files[0];
        this.selectedFileName = selectedFile.name;
        this.getBase64(selectedFile).then(function (f) { return _this.jsf.updateValue(_this, f); });
    };
    MaterialFileComponent.prototype.getBase64 = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.imageSrc = reader.result;
                return resolve(reader.result);
            };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    return MaterialFileComponent;
}());
export { MaterialFileComponent };
MaterialFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'material-file-widget',
                template: "\n    <label for=\"file-upload\" class=\"custom-file-upload\">\n      <i class=\"fa fa-cloud-upload\"></i> Upload {{options?.title}}\n    </label>\n    <input type=\"file\" id=\"file-upload\" accept=\"image/jpg, image/gif, image/jpeg, image/png\" (change)=\"onFileChanged($event)\">\n    <span> {{ selectedFileName }}</span>\n    <div>\n      <div>Preview: </div>\n      <img id=\"preview\" [src]=\"imageSrc\" alt=\"Image Preview\" />\n    </div>\n  ",
                styles: ["\n    input[type=\"file\"] {\n      display: none;\n    }\n\n    .custom-file-upload {\n        border: 1px solid #ccc;\n        display: inline-block;\n        padding: 6px 12px;\n        cursor: pointer;\n    }\n  "]
            },] },
];
/** @nocollapse */
MaterialFileComponent.ctorParameters = function () { return [
    { type: JsonSchemaFormService, },
]; };
MaterialFileComponent.propDecorators = {
    "layoutNode": [{ type: Input },],
    "layoutIndex": [{ type: Input },],
    "dataIndex": [{ type: Input },],
};
//# sourceMappingURL=material-file.component.js.map
