import moment from 'moment'

// Creates a clean article URL.
export default function articleURL({date, heading}) {
    return moment(date).format('YYYY-MM-DD') + '/'
        + encodeURIComponent(
            // Remove interpuntion.
            heading.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
            // Merge double spaces and replace them by underscores.
            .replace(/\s{1,}/g, '_')
        )
}
