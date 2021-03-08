import {Assessment} from './Assessment'
export interface Course{
courseId:number;

courseDescription:string;

preReq:number;

trainerId:number;

courseScore:number;

assessments:Array<Assessment>


}