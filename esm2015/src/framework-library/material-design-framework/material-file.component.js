import { Component, Input } from '@angular/core';
import { JsonSchemaFormService } from '../../json-schema-form.service';
// TODO: Add this control
export class MaterialFileComponent {
    constructor(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    ngOnInit() {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        this.imageSrc = this.controlValue || `assets/placeholder-600x400.png`;
    }
    updateValue(event) {
        this.jsf.updateValue(this, event.target.value);
    }
    onFileChanged(event) {
        const selectedFile = event.target.files[0];
        this.selectedFileName = selectedFile.name;
        this.getBase64(selectedFile).then(f => this.jsf.updateValue(this, f));
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result;
                return resolve(reader.result);
            };
            reader.onerror = error => reject(error);
        });
    }
}
MaterialFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'material-file-widget',
                template: `
    <label for="file-upload" class="custom-file-upload">
      <i class="fa fa-cloud-upload"></i> Upload {{options?.title}}
    </label>
    <input type="file" id="file-upload" accept="image/jpg, image/gif, image/jpeg, image/png" (change)="onFileChanged($event)">
    <span> {{ selectedFileName }}</span>
    <div>
      <div>Preview: </div>
      <img id="preview" [src]="imageSrc" alt="Image Preview" />
    </div>
  `,
                styles: [`
    input[type="file"] {
      display: none;
    }

    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
  `]
            },] },
];
/** @nocollapse */
MaterialFileComponent.ctorParameters = () => [
    { type: JsonSchemaFormService, },
];
MaterialFileComponent.propDecorators = {
    "layoutNode": [{ type: Input },],
    "layoutIndex": [{ type: Input },],
    "dataIndex": [{ type: Input },],
};
//# sourceMappingURL=material-file.component.js.map
