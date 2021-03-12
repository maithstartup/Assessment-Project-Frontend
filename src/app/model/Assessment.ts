import { from } from 'rxjs';
import {Quiz} from './Quiz';
import {Assignment} from './Assignment';
import {Project} from './Project';
import {TrainingMaterial} from './TrainingMaterial';
export interface Assessment{

    assessmentId:number;

    assessmentName:string;

    type:string;

    score:number;

    description:string;

    courseId:number;


    lastUpdate:Date;

    trainerId:number;

    quizzes:Array<Quiz>;

    assignments:Array<Assignment>;


    projects:Array<Project>;

    trainingMaterials:Array<TrainingMaterial>;

}
