import * as moment from "moment";
import { USER_TYPES } from "./constants";

export const convertArrayInObject = (array: Array<any>) => {
    const obj = {};

    array.forEach((v, i) => {
        obj[v.key] = v.label
    })

    return obj;
}

export const downloadBlob = (blob, name = 'file.txt') => {
    const blobUrl = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
  
    link.href = blobUrl;
    link.download = name;
  
    document.body.appendChild(link);
  
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );
  
    document.body.removeChild(link);
  }

  export const isClient = (user) => {
    return user.userType === USER_TYPES.CLIENT;
  }

  export const isContractor = (user) => {
    return user.userType === USER_TYPES.CONTRACTOR;
  }

  export const getDueDateColor = (dueDate) => {
    const today = moment(moment().format("YYYY-MM-DD"), "YYYY-MM-DD");
    const dueDateToCheck = moment(dueDate, "YYYY-MM-DD")
    const diff = today.diff(dueDateToCheck)

    if(diff === 0){
      return 'text-orange-500'
    }

    if(diff < 0){
      return ''
    }

    if(diff > 0){
      return 'text-red-500'
    }
  }

  export const distinctArray = (listToDistinct: Array<any>, attrToDistinct: string) => {
    const uniqArray = [];

    listToDistinct.filter((item) => {
      var i = uniqArray.findIndex(x => (x[attrToDistinct].id == item[attrToDistinct].id));
      if(i <= -1){
        uniqArray.push(item);
      }
      return null;
    });

    return uniqArray;
  }
