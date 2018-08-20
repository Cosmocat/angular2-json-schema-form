import { Injectable } from '@angular/core';

import { hasOwn } from '../shared/utility.functions';

import { AddReferenceComponent } from './add-reference.component';
import { OneOfComponent } from './one-of.component';
import { ButtonComponent } from './button.component';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxesComponent } from './checkboxes.component';
import { FileComponent } from './file.component';
import { HiddenComponent } from './hidden.component';
import { InputComponent } from './input.component';
import { MessageComponent } from './message.component';
import { NoneComponent } from './none.component';
import { NumberComponent } from './number.component';
import { RadiosComponent } from './radios.component';
import { RootComponent } from './root.component';
import { SectionComponent } from './section.component';
import { CkeditorComponent } from './ckeditor.component';
import { SelectComponent } from './select.component';
import { SelectFrameworkComponent } from './select-framework.component';
import { SelectWidgetComponent } from './select-widget.component';
import { SubmitComponent } from './submit.component';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { TemplateComponent } from './template.component';
import { TextareaComponent } from './textarea.component';
import { DatetimepickerComponent } from './datetimepicker.component';

@Injectable()
export class WidgetLibraryService {

  defaultWidget = 'text';
  widgetLibrary: any = {

  // Angular JSON Schema Form administrative widgets
    'none': NoneComponent, // Placeholder, for development - displays nothing
    'root': RootComponent, // Form root, renders a complete layout
    'select-framework': SelectFrameworkComponent, // Applies the selected framework to a specified widget
    'select-widget': SelectWidgetComponent, // Displays a specified widget
    '$ref': AddReferenceComponent, // Button to add a new array item or $ref element

  // Free-form text HTML 'input' form control widgets <input type="...">
    'email': 'text',
    'integer': 'number', // Note: 'integer' is not a recognized HTML input type
    'number': NumberComponent,
    'password': 'text',
    'search': 'text',
    'tel': 'text',
    'text': InputComponent,
    'url': 'text',

  // Controlled text HTML 'input' form control widgets <input type="...">
    'color': 'text',
    'icon': 'text',
    'date': 'text',
    'datetime': DatetimepickerComponent,
    'datetime-local': 'text',
    'month': 'text',
    'range': 'number',
    'time': 'text',
    'week': 'text',

  // Non-text HTML 'input' form control widgets <input type="...">
    // 'button': <input type="button"> not used, use <button> instead
    'checkbox': CheckboxComponent, // TODO: Set ternary = true for 3-state ??
    'file': FileComponent, // TODO: Finish 'file' widget
    'hidden': 'text',
    'image': 'text', // TODO: Figure out how to handle these
    'radio': 'radios',
    'reset': 'submit', // TODO: Figure out how to handle these
    'submit': SubmitComponent,

  // Other (non-'input') HTML form control widgets
    'button': ButtonComponent,
    'select': SelectComponent,
    // 'option': automatically generated by select widgets
    // 'optgroup': automatically generated by select widgets
    'textarea': TextareaComponent,

  // HTML form control widget sets
    'checkboxes': CheckboxesComponent, // Grouped list of checkboxes
    'checkboxes-inline': 'checkboxes', // Checkboxes in one line
    'checkboxbuttons': 'checkboxes', // Checkboxes as html buttons
    'radios': RadiosComponent, // Grouped list of radio buttons
    'radios-inline': 'radios', // Radio controls in one line
    'radiobuttons': 'radios', // Radio controls as html buttons

  // HTML Layout widgets
    // 'label': automatically added to data widgets
    // 'legend': automatically added to fieldsets
    'section': SectionComponent, // Just a div <div>
    'div': 'section', // Still just a div <div>
    'fieldset': 'section', // A fieldset, with an optional legend <fieldset>
    'flex': 'section', // A flexbox container <div style="display: flex">

  // Non-HTML layout widgets
    'one-of': OneOfComponent, // A select box that changes another input
                              // TODO: Finish 'one-of' widget
    'array': 'section', // A list you can add, remove and reorder <fieldset>
    'tabarray': 'tabs', // A tabbed version of array
    'tab': 'section', // A tab group, similar to a fieldset or section <fieldset>
    'tabs': TabsComponent, // A tabbed set of panels with different controls
    'message': MessageComponent, // Insert arbitrary html
    'help': 'message', // Insert arbitrary html
    'msg': 'message', // Insert arbitrary html
    'html': 'message', // Insert arbitrary html
    'template': TemplateComponent, // Insert a custom Angular component

  // Widgets included for compatibility with JSON Form API
    'advancedfieldset': 'section', // Adds 'Advanced settings' title <fieldset>
    'authfieldset': 'section', // Adds 'Authentication settings' title <fieldset>
    'optionfieldset': 'one-of', // Option control, displays selected sub-item <fieldset>
    'selectfieldset': 'one-of', // Select control, displays selected sub-item <fieldset>
    'conditional': 'section', // Identical to 'section' (depeciated) <div>
    'actions': 'section', // Horizontal button list, can only submit, uses buttons as items <div>
    'tagsinput': 'section', // For entering short text tags <div>
    // See: http://ulion.github.io/jsonform/playground/?example=fields-checkboxbuttons

  // Widgets included for compatibility with React JSON Schema Form API
    'updown': 'number',
    'date-time': 'datetime-local',
    'alt-datetime': 'datetime-local',
    'alt-date': 'date',

  // Widgets included for compatibility with Angular Schema Form API
    'wizard': 'section', // TODO: Sequential panels with "Next" and "Previous" buttons

  // Widgets included for compatibility with other libraries
    'textline': 'text',

    //CKeditor widget
    'ckeditor': CkeditorComponent

  // Recommended 3rd-party add-on widgets (TODO: create wrappers for these...)
    // 'ng2-select': Select control replacement - http://valor-software.com/ng2-select/
    // 'flatpickr': Flatpickr date picker - https://github.com/chmln/flatpickr
    // 'pikaday': Pikaday date picker - https://github.com/dbushell/Pikaday
    // 'spectrum': Spectrum color picker - http://bgrins.github.io/spectrum
    // 'bootstrap-slider': Bootstrap Slider range control - https://github.com/seiyria/bootstrap-slider
    // 'ace': ACE code editor - https://ace.c9.io
    // 'ckeditor': CKEditor HTML / rich text editor - http://ckeditor.com
    // 'tinymce': TinyMCE HTML / rich text editor - https://www.tinymce.com
    // 'imageselect': Bootstrap drop-down image selector - http://silviomoreto.github.io/bootstrap-select
    // 'wysihtml5': HTML editor - http://jhollingworth.github.io/bootstrap-wysihtml5
    // 'quill': Quill HTML / rich text editor (?) - https://quilljs.com
  };
  registeredWidgets: any = { };
  frameworkWidgets: any = { };
  activeWidgets: any = { };

  constructor() {
    this.setActiveWidgets();
  }

  setActiveWidgets(): boolean {
    this.activeWidgets = Object.assign(
      { }, this.widgetLibrary, this.frameworkWidgets, this.registeredWidgets
    );
    for (const widgetName of Object.keys(this.activeWidgets)) {
      let widget: any = this.activeWidgets[widgetName];
      // Resolve aliases
      if (typeof widget === 'string') {
        const usedAliases: string[] = [];
        while (typeof widget === 'string' && !usedAliases.includes(widget)) {
          usedAliases.push(widget);
          widget = this.activeWidgets[widget];
        }
        if (typeof widget !== 'string') {
          this.activeWidgets[widgetName] = widget;
        }
      }
    }
    return true;
  }

  setDefaultWidget(type: string): boolean {
    if (!this.hasWidget(type)) { return false; }
    this.defaultWidget = type;
    return true;
  }

  hasWidget(type: string, widgetSet = 'activeWidgets'): boolean {
    if (!type || typeof type !== 'string') { return false; }
    return hasOwn(this[widgetSet], type);
  }

  hasDefaultWidget(type: string): boolean {
    return this.hasWidget(type, 'widgetLibrary');
  }

  registerWidget(type: string, widget: any): boolean {
    if (!type || !widget || typeof type !== 'string') { return false; }
    this.registeredWidgets[type] = widget;
    return this.setActiveWidgets();
  }

  unRegisterWidget(type: string): boolean {
    if (!hasOwn(this.registeredWidgets, type)) { return false; }
    delete this.registeredWidgets[type];
    return this.setActiveWidgets();
  }

  unRegisterAllWidgets(unRegisterFrameworkWidgets = true): boolean {
    this.registeredWidgets = { };
    if (unRegisterFrameworkWidgets) { this.frameworkWidgets = { }; }
    return this.setActiveWidgets();
  }

  registerFrameworkWidgets(widgets: any): boolean {
    if (widgets === null || typeof widgets !== 'object') { widgets = { }; }
    this.frameworkWidgets = widgets;
    return this.setActiveWidgets();
  }

  unRegisterFrameworkWidgets(): boolean {
    if (Object.keys(this.frameworkWidgets).length) {
      this.frameworkWidgets = { };
      return this.setActiveWidgets();
    }
    return false;
  }

  getWidget(type?: string, widgetSet = 'activeWidgets'): any {
    if (this.hasWidget(type, widgetSet)) {
      return this[widgetSet][type];
    } else if (this.hasWidget(this.defaultWidget, widgetSet)) {
      return this[widgetSet][this.defaultWidget];
    } else {
      return null;
    }
  }

  getAllWidgets(): any {
    return {
      widgetLibrary: this.widgetLibrary,
      registeredWidgets: this.registeredWidgets,
      frameworkWidgets: this.frameworkWidgets,
      activeWidgets: this.activeWidgets,
    };
  }
}
