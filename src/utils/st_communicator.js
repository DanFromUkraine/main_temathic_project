import { multi_check } from "./multiple_check";


export function rewrite_cell(storage, key, val) {
  if (key && val && storage) {
    storage.setItem(key, JSON.stringify(val));
  } else {
    throw `Неможливо записати у ${storage} властивість ${key} із значенням ${val}`
  }
  }
  
  export function add_to_array_cell(storage, key, val) {
    const possibly_existing_cell = JSON.parse(storage.getItem(key));
    if (possibly_existing_cell) {
      const new_content_of_cell = possibly_existing_cell;
      new_content_of_cell.push(val);
      storage.setItem(key, JSON.stringify(new_content_of_cell));
    } else {
      storage.setItem(key, JSON.stringify([val]));
    }
  }
  
  export async function read_st(type, key) {
    const json_data = type.getItem(key);
    
    if (json_data) {

    }
    const val = JSON.parse(json_data);
      if (val) {
        return val;
      } else {
        return "";
      }
    }
   
  export function read_ss(key) {
    const val = sessionStorage.getItem(key)
    multi_check([!key, () => {throw `key is ${key}`}],
                [!val, () => {throw `val is ${val}`}],
                [!JSON.parse(val), () => {throw `ss.get(${key}) is ${JSON.parse(val)}`}])
  }

  read_ss(undefined);