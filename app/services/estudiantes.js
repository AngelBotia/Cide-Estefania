import Service from '@ember/service';
import Constants from '../helpers/Constants';
import { tracked } from '@glimmer/tracking';

export default class EstudiantesService extends Service {

    
    @tracked studentsList;
    
    
    
    initStudentLocalStorage(){
        const jsonVoidArray=JSON.stringify([]);
        localStorage.setItem(Constants.STUDENTS,jsonVoidArray);
    
    }
}
