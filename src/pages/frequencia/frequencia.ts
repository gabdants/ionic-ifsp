import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../modelos/aluno';

/**
 * Generated class for the FrequenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frequencia',
  templateUrl: 'frequencia.html',
})
export class FrequenciaPage {

  public aluno: Aluno; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log('alunoSelecionado'); 
    this.aluno = this.navParams.get('alunoSelecionado');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequenciaPage');
  }

}
