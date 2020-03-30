import React from "react"
import dayjs from "dayjs"
let relativeTime = require('dayjs/plugin/relativeTime')
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

function Time(time){
    time=time.time
    return dayjs(time).fromNow();
}

export default Time;