import { Component } from '@angular/core';
import { NavController, LoadingController, Content, AlertController, Button } from 'ionic-angular';
import { Carro } from '../../modelos/carro';
import {HttpErrorResponse} from '@angular/common/http';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';
import { NotasPage } from '../notas/notas';
import { FrequenciaPage } from '../frequencia/frequencia';
import { MensagensPage } from '../mensagens/mensagens';
import { AlunosServiceProvider } from '../../providers/alunos-service/alunos-service';
import { Aluno } from '../../modelos/aluno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {
  public alunos: Aluno[];

  constructor(public navCtrl: NavController, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _carrosService: AlunosServiceProvider ) {}

    ionViewDidLoad(){
        
      let loading = this._loadingCtrl.create({
        content: 'Carregando carros...'
      });
      loading.present();
      



    this._carrosService.lista()
          .subscribe(
            (alunos) => {
              this.alunos = alunos;

              loading.dismiss();
              
              
            },
            (err: HttpErrorResponse) => {
              console.log(err);

              loading.dismiss();
              this._alertCtrl.create({
                title: 'Falha na Conexão',
                subTitle: 'Não foi possivel carregar a lista de carros.',
                buttons: [
                  {text: 'ok'}
                ]
              }).present();
            }
        
        
        
        ); 
        
      }

      chamaNotas(aluno: Aluno){
        console.log(aluno);
        this.navCtrl.push(NotasPage, {alunoSelecionado: aluno});
        
      }
      chamaFreq(aluno: Aluno){
        console.log(aluno);
        this.navCtrl.push(FrequenciaPage, {alunoSelecionado: aluno});
      }
      chamaMensagem(aluno: Aluno){
        this.navCtrl.push(MensagensPage);
      }

}
