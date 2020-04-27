import dayjs from 'dayjs'

/**
 * 解析时间
 *
 * @author motioliang <motioliang@gmail.com>
 * @param { any } time
 * @returns
 */
function parseTime(time, format = 'YYYY-MM-DD HH:mm:ss') {
    const timeStr = dayjs(time).format(format)
    return timeStr
}

export default {
    parseTime
}
