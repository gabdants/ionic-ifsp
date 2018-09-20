import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../modelos/aluno';

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  aluno: Aluno;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aluno = this.navParams.get('alunoSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

}
