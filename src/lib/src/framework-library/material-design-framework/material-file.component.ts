import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { JsonSchemaFormService } from '../../json-schema-form.service';

// TODO: Add this control

@Component({
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
})
export class MaterialFileComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  selectedFileName: string;
  imageSrc: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  ngOnInit() {
    this.imageSrc = `assets/placeholder-600x400.png`;
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
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
