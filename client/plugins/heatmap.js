/* eslint-disable */
import moment from 'moment'
import * as d3 from 'd3'

const heatmap = {
  name: 'Heatmap',
  create() {
    // defaults
    const width = 1100
    const height = 115
    const legendWidth = 150
    let selector = 'body'
    const SQUARE_LENGTH = 14
    const SQUARE_PADDING = 6
    const MONTH_LABEL_PADDING = 6
    let now = moment().endOf('day').toDate()
    let yearAgo = moment().startOf('day').subtract(1, 'year').toDate()
    const startDate = null
    let counterMap = {}
    let data = []
    let max = 10
    let colorRange = [ '#ffffff', '#218380' ]
    let tooltipEnabled = true
    let tooltipUnit = 'слов'
    let legendEnabled = false
    let onClick = null
    const weekStart = 1 // 0 for Sunday, 1 for Monday
    let locale = {
      months: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
      days: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
      No: 'Нет',
      on: 'в',
      Less: 'Меньше',
      More: 'Больше',
    }
    const v = Number(d3.version.split('.')[0])

    // setters and getters
    chart.data = function (value) {
      if (!arguments.length) return data
      data = value

      counterMap = {}

      data.forEach(function (element, index) {
        const key = moment(element.date).format('YYYY-MM-DD')
        const counter = counterMap[key] || 0
        counterMap[key] = counter + element.count
      })

      return chart
    }

    chart.max = function (value) {
      if (!arguments.length) return max
      max = value
      return chart
    }

    chart.selector = function (value) {
      if (!arguments.length) return selector
      selector = value
      return chart
    }

    chart.startDate = function (value) {
      if (!arguments.length) return startDate
      yearAgo = value
      now = moment(value).endOf('day').add(1, 'year').toDate()
      return chart
    }

    chart.colorRange = function (value) {
      if (!arguments.length) return colorRange
      colorRange = value
      return chart
    }

    chart.tooltipEnabled = function (value) {
      if (!arguments.length) return tooltipEnabled
      tooltipEnabled = value
      return chart
    }

    chart.tooltipUnit = function (value) {
      if (!arguments.length) return tooltipUnit
      tooltipUnit = value
      return chart
    }

    chart.legendEnabled = function (value) {
      if (!arguments.length) return legendEnabled
      legendEnabled = value
      return chart
    }

    chart.onClick = function (value) {
      if (!arguments.length) return onClick()
      onClick = value
      return chart
    }

    chart.locale = function (value) {
      if (!arguments.length) return locale
      locale = value
      return chart
    }

    function chart () {
      d3.select(chart.selector()).selectAll('svg.calendar-heatmap').remove() // remove the existing chart, if it exists

      const dateRange = ((d3.scaleTime() && d3.scaleTime().days) || d3.timeDays)(yearAgo, now) // generates an array of date objects within the specified range
      const monthRange = ((d3.scaleTime() && d3.scaleTime().months) || d3.timeMonths)(moment(yearAgo).startOf('month').toDate(), now) // it ignores the first month if the 1st date is after the start of the month
      const firstDate = moment(dateRange[0])
      if (chart.data().length === 0)
        max = 0
      else if (max === null)
        max = d3.max(chart.data(), function (d) { return d.count }) // max data value

      // color range
      const color = ((d3.scaleTime() && d3.scaleTime().linear) || d3.scaleLinear)()
        .range(chart.colorRange())
        .domain([ 0, max ])

      let tooltip
      let dayRects

      drawChart()

      function drawChart () {
        const svg = d3.select(chart.selector())
          .style('position', 'relative')
          .append('svg')
          .attr('width', width)
          .attr('class', 'calendar-heatmap')
          .attr('height', height)

        dayRects = svg.selectAll('.day-cell')
          .data(dateRange) //  array of days for the last yr

        const enterSelection = dayRects.enter().append('rect')
          .attr('class', 'day-cell')
          .attr('width', SQUARE_LENGTH)
          .attr('height', SQUARE_LENGTH)
          .attr('fill', function (d) { return color(countForDate(d)) })
          .attr('x', function (d, i) {
            const cellDate = moment(d)
            const result = cellDate.week() - firstDate.week() + (firstDate.weeksInYear() * (cellDate.weekYear() - firstDate.weekYear()))
            return result * (SQUARE_LENGTH + SQUARE_PADDING)
          })
          .attr('y', function (d, i) {
            return MONTH_LABEL_PADDING + formatWeekday(d.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING)
          })

        if (typeof onClick === 'function')
          (v === 3 ? enterSelection : enterSelection.merge(dayRects)).on('click', function (position, date) {
            onClick(date)
          })

        if (chart.tooltipEnabled())
          (v === 3 ? enterSelection : enterSelection.merge(dayRects)).on('mouseover', function (d, i) {
            tooltip = d3.select(chart.selector())
              .append('div')
              .attr('class', 'day-cell-tooltip')
              .html(tooltipHTMLForDate(i))
              .style('left', function () {
                // return i.getDay() * SQUARE_LENGTH + 'px'
                return d.clientX - 105 + 'px'
              })
              .style('top', function () {
                return d.clientY - 40 + 'px'
                // return ((formatWeekday(i.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING) + MONTH_LABEL_PADDING * 2) - 10) + 'px'
              })
          })
            .on('mouseout', function (d, i) {
              tooltip.remove()
            })

        if (chart.legendEnabled()) {
          const colorRange = [ color(0) ]
          for (let i = 3; i > 0; i--)
            colorRange.push(color(max / i))

          const legendGroup = svg.append('g')
          legendGroup.selectAll('.calendar-heatmap-legend')
            .data(colorRange)
            .enter()
            .append('rect')
            .attr('class', 'calendar-heatmap-legend')
            .attr('width', SQUARE_LENGTH)
            .attr('height', SQUARE_LENGTH)
            .attr('x', function (d, i) { return (width - legendWidth) + (i + 1) * 13 })
            .attr('y', height + SQUARE_PADDING)
            .attr('fill', function (d) { return d })

          legendGroup.append('text')
            .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-less')
            .attr('x', width - legendWidth - 13)
            .attr('y', height + SQUARE_LENGTH)
            .text(locale.Less)

          legendGroup.append('text')
            .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-more')
            .attr('x', (width - legendWidth + SQUARE_PADDING) + (colorRange.length + 1) * 13)
            .attr('y', height + SQUARE_LENGTH)
            .text(locale.More)
        }

        dayRects.exit().remove()

        let prev_x = -20;

        const monthLabels = svg.selectAll('.month')
          .data(monthRange)
          .enter().append('text')
          .attr('class', 'month-name')
          .text(function (d) {
            return locale.months[d.getMonth()]
          })
          .attr('x', function (d, i) {
            let matchIndex = 0
            dateRange.find(function (element, index) {
              matchIndex = index
              return moment(d).isSame(element, 'month') && moment(d).isSame(element, 'year')
            })

            let cur_x = Math.floor(matchIndex / 7) * (SQUARE_LENGTH + SQUARE_PADDING)

            if (cur_x - prev_x < 20) {
              cur_x = prev_x + 20;
            }

            if (i !== 0) {
              cur_x += 25
            }

            return prev_x = cur_x
          })
          .attr('y', 0) // fix these to the top

        locale.days.forEach(function (day, index) {
          index = formatWeekday(index)

          if (!(index % 2))
            svg.append('text')
              .attr('class', 'day-initial')
              .attr('transform', 'translate(-8,' + (SQUARE_LENGTH + SQUARE_PADDING) * (index + 2) + ')')
              .style('text-anchor', 'end')
              .attr('dy', '2')
              .text(day)
        })
      }

      function pluralizedTooltipUnit (count) {
        if (typeof tooltipUnit === 'string')
          // return (tooltipUnit + (count === 1 ? '' : 's'))
          return tooltipUnit

        for (const i in tooltipUnit) {
          const _rule = tooltipUnit[i]
          const _min = _rule.min
          let _max = _rule.max || _rule.min
          _max = _max === 'Infinity' ? Infinity : _max
          if (count >= _min && count <= _max)
            return _rule.unit
        }
      }

      function tooltipHTMLForDate (d) {
        const dateStr = moment(d).format('ddd, MMM Do YYYY')
        const count = countForDate(d)
        return '<span><strong>' + (count || locale.No) + ' ' + pluralizedTooltipUnit(count) + '</strong> ' + locale.on + ' ' + dateStr + '</span>'
      }

      function countForDate (d) {
        const key = moment(d).format('YYYY-MM-DD')
        return counterMap[key] || 0
      }

      function formatWeekday (weekDay) {
        if (weekStart === 1)
          if (weekDay === 0)
            return 6
          else
            return weekDay - 1

        return weekDay
      }

      const daysOfChart = chart.data().map(function (day) {
        return day.date.toDateString()
      })
    }

    return chart
  }
}

export default ({ app }, inject) => {
  inject('heatmap', heatmap)
}
