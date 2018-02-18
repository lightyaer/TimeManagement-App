import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Task } from '../../models/Task';

@Component({
    selector: 'page-addtask',
    templateUrl: 'addTask.html'
})
export class AddTaskPage {

    task: Task = new Task();
    constructor(public navCtrl: NavController,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    alertUser() {
        let alert = this.alertCtrl.create({
            title: "Add an Objective",
            buttons: ['Cancel', 'OK']
        });
        alert.present();
    }


    saveTask() {
        if (this.task.objective.length == 0) {
            return this.alertUser();
        }


        let length = localStorage.length;
        this.task.taskID = length;
        localStorage.setItem(String(length), String(this.task.taskID));
        localStorage.setItem("Task" + length, this.task.objective);
        localStorage.setItem("Note" + length, this.task.notes);
        this.viewCtrl.dismiss();
    }

    
}
