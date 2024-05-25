import Service from '@ember/service';
import Constants from '../helpers/Constants';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EstudiantesService extends Service {

    
    @tracked studenlist;
    @tracked filter;
    
    
    
    initStudentLocalStorage(){
        const jsonVoidArray=JSON.stringify([]);
        localStorage.setItem(Constants.STUDENTS,jsonVoidArray);
    
    }

    @action
    filterStudentList(filter){
        const result = this.studenlist.filter((x)=> { 
            return x.name.toLocaleLowerCase().includes(filter) || x.apellidos.toLocaleLowerCase().includes(filter) || x.direccion.toLocaleLowerCase().includes(filter) || x.dni.toLocaleLowerCase().includes(filter) || x.direccion.toLocaleLowerCase().includes(filter) || x.fechaNacimiento.toLocaleLowerCase().includes(filter)  });
        if(this.studenlist.length == 0 || filter.length == 0){
            this.studenlist= JSON.parse(localStorage.getItem(Constants.STUDENTS))
         return;
        }

        this.studenlist = result;    
    }
}
