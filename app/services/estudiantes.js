import Service from '@ember/service';
import Constants from '../helpers/Constants';

export default class EstudiantesService extends Service {

    
    
    
    
    
    initStudentLocalStorage(){
        const jsonVoidArray=JSON.stringify([]);
        localStorage.setItem(Constants.STUDENTS,jsonVoidArray);
    
    }
}
