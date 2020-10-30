import Vue from 'vue'
import moment from 'moment'
// import 'moment/locale/ru'

// moment.locale('ru')

Vue.filter('datetime', function (value) {
  if (!value)
    return ''

  return moment(value).format('HH:mm DD-MM-YYYY')
})

Vue.filter('date', function (value) {
  if (!value)
    return ''

  return moment(value).format('DD MMMM YYYY')
})

Vue.filter('timeago', function (value) {
  if (!value)
    return ''

  return moment(value).fromNow()
})
