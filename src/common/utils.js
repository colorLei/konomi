/**
 * 格式化金额
 */

export const dollorFormat = (num = 0) =>
    num ? num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : '0';

/**
 * 格式化时间, 支持的格式:
 *       yyyy ==> 完整的年份，如：2015
 *       yy   ==> 简短的年份，如：15
 *       MM   ==> 月份填充0，如：05
 *       M    ==> 月份，不填充0，如：5
 *       dd   ==> 日期，填充0，如：08
 *       d    ==> 日期，不填充0，如：8
 *       hh   ==> 小时，填充0，如：09
 *       h    ==> 小时，不填充0，如：9
 *       mm   ==> 分钟，填充0，如：28
 *       m    ==> 分钟，不填充0，如：8
 *       ss   ==> 秒，填充0，如：28
 *       s    ==> 秒，不填充0，如：8
 *       tt   ==> 星期，如：星期二
 *       t    ==> 星期，如：周二
 * @param {String|Date} date 要格式化的日期／日期字符串
 * @param {String} [pattern='yyyy-MM-dd']   目标格式，比如："yyyy-MM-dd"
 * @returns
 */
export const dateFormat = (date, pattern, lang) => {
    if (typeof date === 'string' || typeof date === 'number') {
        date = new Date(date);
    }
    var year = date.getFullYear(),
        month = date.getMonth(),
        d = date.getDate(),
        day = date.getDay();

    var hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        mseconds = date.getMilliseconds();

    var mapping = {
        cn: {
            tt: '周日 周一 周二 周三 周四 周五 周六',
            ttt: '星期日 星期一 星期二 星期三 星期四 星期五 星期六',
            MM: '01 02 03 04 05 06 07 08 09 10 11 12',
            M: '1 2 3 4 5 6 7 8 9 10 11 12'
        },
        en: {
            tt: 'Sun Mon Tue Wed Thu Fri Sat',
            ttt: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday',
            MM: 'January February March April May June July August September October November December',
            M: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'
        }
    }[lang || 'cn'];

    return (pattern || 'yyyy-MM-dd')
        .replace(/\byyyy\b/g, year)
        .replace(/\bMM\b/g, mapping.MM.split(' ')[month])
        .replace(/\bM\b/g, mapping.M.split(' ')[month])
        .replace(/\bdd\b/g, (d + 100 + '').substring(1))
        .replace(/\bd\b/g, d)
        .replace(/\btt\b/g, mapping.tt.split(' ')[day])
        .replace(/\bttt\b/g, mapping.ttt.split(' ')[day])
        .replace(/\bhh\b/g, (hour + 100 + '').substring(1))
        .replace(/\bh\b/g, hour)
        .replace(/\bmm\b/g, (minutes + 100 + '').substring(1))
        .replace(/\bm\b/g, minutes)
        .replace(/\bsss\b/g, mseconds)
        .replace(/\bss\b/g, (seconds + 100 + '').substring(1))
        .replace(/\bs\b/g, seconds);
};
