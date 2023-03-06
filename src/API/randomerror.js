import { throwerror } from "./api";
export function randomerror(){
        const arr= [436,437,438,439,409,413,429,500,502];
        const randomIndex = Math.floor(Math.random() * arr.length);
        const status = arr[randomIndex];
        return throwerror(status);

}