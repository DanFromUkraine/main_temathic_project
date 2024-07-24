
export function insert_via_tpl(tpl, ins_cont, tpl_data, callback) {
        try {
            ins_cont.insertAdjacentHTML("beforeend", tpl(tpl_data));
            if (typeof callback === "function") {
                callback(ins_cont.lastElementChild, tpl_data);
            }
        } catch(mess) {
            throw `ймовірно ins_path неправильний, його значення = ${ins_cont}. Повідомлення = ${mess}`
        }
}