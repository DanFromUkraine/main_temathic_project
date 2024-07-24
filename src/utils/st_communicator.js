

export function rewrite_cell(storage, key, val) {
    storage.setItem(key, JSON.stringify(val));
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
  
  export function read_st(type, key) {
    const val = JSON.parse(type.getItem(key));
    if (val) {
      return val;
    } else {
      return "";
    }
  }