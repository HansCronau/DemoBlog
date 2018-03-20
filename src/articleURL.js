import moment from 'moment'

export default function articleURL({date, heading}) {
    return moment(date).format('YYYY-MM-DD') + '/' +
        encodeURIComponent(heading.replace(/ /g,"_"))
}
