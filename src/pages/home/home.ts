import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Task } from '../../models/task'
import { AddTaskPage } from '../addTask/addTask';

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Task[] = [];
  modal: any;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {
    this.getTasks();
  }

  getTasks() {

    this.tasks = [];
    for (let i = 0; i < localStorage.length; i += 3) {
      let item = {
        taskID: Number(localStorage.getItem(String(i))),
        objective: localStorage.getItem("Task" + i),
        notes: localStorage.getItem("Note" + i)
      }

      this.tasks.push(item);

    }
  }

  addTask() {
    this.modal = this.modalCtrl.create(AddTaskPage);
    this.modal.present();

    this.modal.onDidDismiss(() => {
      this.getTasks();
    });

  }

  delete(item) {
    alert(JSON.stringify(item));

   
  }


}
