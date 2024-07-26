
export function multi_check(list) {
    const array_of_error_messages = [];
    for (const [statement, callback, callback_arguments] of list) {
        if (statement) {
            try {
                callback(...callback_arguments)
            } catch (err){
                throw `ви виконанні ${callback.name} виникли проблеми. ${err}`
            }
        } else {
            array_of_error_messages.push(`${callback.name} не може бути виконаний. Умова не вірна`)
        }
    }
    console.log(array_of_error_messages);
}