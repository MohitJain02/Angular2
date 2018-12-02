import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-form-to-add-topics',
  templateUrl: './new-form-to-add-topics.component.html',
  styleUrls: ['./new-form-to-add-topics.component.css']
})
export class NewFormToAddTopicsComponent {

  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopics(topic : HTMLInputElement)
  {
      this.topics.push(new FormControl(topic.value)); 
      topic.value = '';
  }

  get topics()
  {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic : FormControl)
  {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
