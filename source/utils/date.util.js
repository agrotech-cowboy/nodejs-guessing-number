/**
 * Retorna a data informada sem incluir horas, minutos e segundos. O formato da padrão
 * retornado é yyyy-MM-dd. Caso não seja informada uma data, será retornada a data atual.
 * 
 * @param {Date} date Data a ser tratada
 */
function getDate(date) {
    
    if (!date) {
        date = new Date();
    }

    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
}

/**
 * Retorna a data informada incluindo horas, minutos e segundos. O formato da padrão
 * yyyy-MM-dd HH:mm:ss. Caso não seja informada uma data, será retornada a data atual.
 * 
 * @param {Date} date Data a ser tratada.
 */
function getDateTime(date) {

    if (!date)
        date = new Date();

    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;
}

module.exports = {
    getDate,
    getDateTime
}