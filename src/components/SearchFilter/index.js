// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'

import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from '@material-ui/lab/Slider'

import SearchIcon from '@material-ui/icons/Search'

import MultiChoiceCheckbox from './components/multichoice-checkbox'
// import TestScores from './components/your-test-scores'
// import CollegeType from './components/college-type'
import FilterSection from './components/filter-section'

import styles from './styles'

type Props = {
  classes?: Object
}

const majorOptions = [
  {
    value: 'all',
    label: 'All'
  },
  { value: 'agriculture', label: 'Agriculture & Agriculture Operations' },
  { value: 'resources', label: 'Natural Resources & Conservation' },
  { value: 'architecture', label: 'Architecture & Related Services' },
  { value: 'ethnicCulturalGender', label: 'Ethnic, Cultural, Gender Studies' },
  { value: 'communication', label: 'Communication & Journalism' },
  {
    value: 'communicationsTechnology',
    label: 'Communications Technologies/Technicians'
  },
  { value: 'computer', label: 'Computer and Information Sciences' },
  { value: 'personalCulinary', label: 'Personal & Culinary Services' },
  { value: 'education', label: 'Education' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'engineeringTechnology', label: 'Engineering Technologies' },
  { value: 'language', label: 'Foreign Languages & Linguistics' },
  { value: 'familyConsumerScience', label: 'Family and Consumer Sciences' },
  { value: 'legal', label: 'Legal Professions' },
  { value: 'english', label: 'English Language & Literature' },
  { value: 'humanities', label: 'Liberal Arts & Humanities' },
  { value: 'library', label: 'Library Science' },
  { value: 'biological', label: 'Biological & Biomedical Sciences' },
  { value: 'mathematics', label: 'Mathematics & Statistics' },
  { value: 'military', label: 'Military Technologies' },
  { value: 'multidiscipline', label: 'Multi/Interdisciplinary Studies' },
  { value: 'parksRecreationFitness', label: 'Recreation & Fitness Studies' },
  { value: 'philosophyReligious', label: 'Philosophy & Religious Studies' },
  {
    value: 'theologyReligious_vocation',
    label: 'Theology & Religious Vocations'
  },
  { value: 'physicalScience', label: 'Physical Sciences' },
  { value: 'scienceTechnology', label: 'Science Technologies/Technicians' },
  { value: 'psychology', label: 'Psychology' },
  {
    value: 'securityLawEnforcement',
    label: 'Homeland Security, Law Enforcement'
  },
  {
    value: 'publicAdministrationSocialService',
    label: 'Public Administration & Social Service'
  },
  { value: 'socialScience', label: 'Social Sciences' },
  { value: 'construction', label: 'Construction Trades' },
  {
    value: 'mechanicRepairTechnology',
    label: 'Mechanic & Repair Technologies/Technicians'
  },
  { value: 'precisionProduction', label: 'Precision Production' },
  { value: 'transportation', label: 'Transportation & Materials Moving' },
  { value: 'visualPerforming', label: 'Visual & Performing Arts' },
  { value: 'health', label: 'Health Professions' },
  { value: 'businessMarketing', label: 'Business, Marketing' },
  { value: 'history', label: 'History' }
]

const specialtyOptions = [
  {
    id: 'online',
    label: 'Online'
  },
  // NOTE: We don't have this info...
  // {
  //   id: 'liberalArts',
  //   label: 'Liberal Arts'
  // },
  {
    id: 'allWomen',
    label: 'All Women'
  },
  {
    id: 'allMen',
    label: 'All Men'
  }
  // NOTE: We don't have this info...
  // {
  //   id: 'hbcu',
  //   label: 'HBCU'
  // }
]

const admissionsOptions = [
  {
    id: 'noAdmissionsFee',
    label: 'No Admissions Fee'
  },
  {
    id: 'acceptsCommonApp',
    label: 'Accepts Common App'
  },
  {
    id: 'testOptional',
    label: 'Test-Optional'
  }
]

const religiousAffiliationOptions = [
  {
    id: 'catholic',
    label: 'Catholic'
  },
  {
    id: 'christian',
    label: 'Christian'
  },
  {
    id: 'jewish',
    label: 'Jewish'
  }
]

const formatNumber = (num: number) => {
  const money = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return money.substring(0, money.toString().lastIndexOf('.'))
}

export class Filter extends React.PureComponent<Props> {
  render() {
    const {
      classes = {},
      filterMap: {
        location,
        collegeType,
        major,
        cost,
        specialty,
        admissions,
        religiousAffiliation,
        studentBodySize,
        yourTestScores
      },
      setFilter
    } = this.props

    const filterDefinitions = [
      {
        header: 'College Type',
        type: 'nested-multichoice',
        filterKey: 'collegeType',
        value: collegeType,
        choices: [
          {
            id: '4year',
            label: '4-Year',
            options: [
              { label: 'Private', id: 'private' },
              { label: 'Public', id: 'public' }
            ]
          },
          {
            id: '2year',
            label: '2-Year'
            // options: [
            //   { label: 'Community', id: 'community' },
            //   { label: 'Trade/Career', id: 'tradeCareer' }
            // ]
          }
        ]
      },
      {
        header: 'Major',
        type: 'select',
        filterKey: 'major',
        options: majorOptions,
        value: major.value
      },
      {
        header: 'Cost (Net Price)',
        type: 'slider-value',
        filterKey: 'cost',
        value: cost,
        options: [
          {
            id: 'netPrice',
            label: 'Cost',
            format:
              cost.netPrice.value !== 36000
                ? `$0 - $${formatNumber(cost.netPrice.value)}`
                : `$0 - $${formatNumber(cost.netPrice.value)} +`,
            value: cost.netPrice.value,
            min: 2000,
            max: 36000,
            step: 1000
          }
        ]
      },
      {
        header: 'Specialty',
        type: 'multichoice',
        filterKey: 'specialty',
        options: specialtyOptions,
        value: specialty
      },
      // {
      //   header: 'Admissions',
      //   type: 'multichoice',
      //   filterKey: 'admissions',
      //   options: admissionsOptions,
      //   value: admissions
      // },
      {
        header: 'Religious Affiliation',
        type: 'multichoice',
        filterKey: 'religiousAffiliation',
        options: religiousAffiliationOptions,
        value: religiousAffiliation
      },
      {
        header: 'Student Body Size',
        type: 'buttons',
        filterKey: 'studentBodySize',
        options: [
          { label: 'Small', id: 'small', value: studentBodySize['small'] },
          { label: 'Medium', id: 'medium', value: studentBodySize['medium'] },
          { label: 'large', id: 'large', value: studentBodySize['large'] }
        ],
        value: studentBodySize
      },
      {
        header: 'Your Test Scores',
        type: 'slider-value',
        filterKey: 'yourTestScores',
        value: yourTestScores,
        options: [
          {
            id: 'sat',
            label: 'SAT',
            format: `SAT: ${yourTestScores.sat.value || 'Select a value'}`,
            min: 600,
            max: 1600,
            step: 10,
            value: yourTestScores.sat.value
          },
          {
            id: 'act',
            format: `ACT: ${yourTestScores.act.value || 'Select a value'}`,
            min: 12,
            max: 36,
            step: 1,
            value: yourTestScores.act.value
          }
        ]
      }
    ]

    return (
      <Paper className={classes.filterContainer}>
        {filterDefinitions.map((fd, ind) => {
          return [
            ind !== 0 ? <Divider light key={ind} /> : null,
            <FilterSection key={fd.filterKey} {...fd} setFilter={setFilter} />
          ]
        })}
      </Paper>
    )
  }
}

export default withStyles(styles)(Filter)
