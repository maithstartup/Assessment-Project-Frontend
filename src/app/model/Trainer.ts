import {Assessment} from './Assessment'
export interface Trainer{
    
    trainerId:number,

    trainerName:string,

    trainerEmail:string,

    trainerPassword:string,

    assessments:Array<Assessment>

}