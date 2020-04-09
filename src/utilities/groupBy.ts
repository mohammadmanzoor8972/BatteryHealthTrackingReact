import { Battery } from "../models/battery";

const groupBy = (arr:Battery[], key:any)=> {
    return arr.reduce((acc:any, item:any) =>  {
     (acc[item[key]] = acc[item[key]] || []).push(item);
     return acc;
    },{});
};

export default groupBy;
