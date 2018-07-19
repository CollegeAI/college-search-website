// @flow

export const formatNumber = (num: number) => {
  const money = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return money.substring(0, money.toString().lastIndexOf('.'))
}

export const decimalToPercentage = (num: number) => {
  return `${(num * 100).toFixed(0)}%`
}

export const getScoreFromRanking = ({
  value,
  total
}: {
  value: number,
  total: number
}) => {
  if (!value || !total) {
    return -1
  }

  return (1 - value / total) * 40 + 60
}
