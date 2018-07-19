// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'

// Material ui colors
import blue from '@material-ui/core/colors/blue'

import HomeIcon from '@material-ui/icons/Home'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import TerrainIcon from '@material-ui/icons/Terrain'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import { withStyles } from '@material-ui/core/styles'

// Import Sections

type Props = {
  classes: Object,
  sortOrder: Object,
  setSortOrder: Function
}

type State = {
  expanded: boolean
}

const styles = theme => ({
  root: {
    paddingLeft: 20,
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  },
  headerContainer: {
    paddingLeft: 20,
    display: 'inline-flex',
    justifyContent: 'flex-start',
    width: '100%',
    boxSizing: 'border-box'
  },
  searchSetting: {
    marginRight: 16
  },
  topicText: {
    cursor: 'pointer',
    paddingBottom: 7,
    '&:hover': {
      color: blue[500]
    }
  },
  active: {
    color: blue[500],
    borderBottom: `3px solid ${blue[500]}`,
    paddingBottom: 4
  },
  sortCategoriesContainer: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  expandedContainer: {
    marginLeft: 20,
    marginTop: 12,
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  sortCategoryContainer: {
    textAlign: 'left',
    paddingRight: 24
  },
  categoryName: {
    marginBottom: 8
  },
  sortName: {
    marginBottom: 8,
    color: blue[500],
    cursor: 'pointer'
  },
  moreSortOptions: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
})

const sortOrderCategories = [
  {
    id: 'general',
    name: 'General'
  },
  {
    id: 'bestPrograms',
    name: 'Best Programs'
  },
  {
    id: 'students',
    name: 'Students'
  },
  {
    id: 'socialScene',
    name: 'Social Scene'
  },
  {
    id: 'campus',
    name: 'Campus'
  },
  {
    id: 'athletics',
    name: 'Athletics'
  }
]

const sortOrders = [
  {
    name: 'Best Colleges',
    collegeKey: 'bestColleges',
    id: 'best-colleges',
    category: 'general'
  },
  {
    name: 'Best Value',
    collegeKey: 'bestValueColleges',
    id: 'best-value-colleges',
    category: 'general'
  },
  {
    name: 'Best Academics',
    collegeKey: 'bestCollegeAcademics',
    id: 'best-college-academics',
    category: 'general'
  },
  {
    name: 'Best Professors',
    collegeKey: 'bestCollegeProfessors',
    id: 'best-college-professors',
    category: 'general'
  },
  {
    name: 'Hardest to Get Into',
    collegeKey: 'hardestToGetIn',
    id: 'hardest-to-get-in',
    category: 'general'
  },
  {
    name: 'Accounting/Finance',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-accounting-finance',
    category: 'bestPrograms'
  },
  {
    name: 'Agricultural Sciences',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-agricultural-sciences',
    category: 'bestPrograms'
  },
  {
    name: 'Anthropology',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-anthropology',
    category: 'bestPrograms'
  },
  {
    name: 'Architecture',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-architecture',
    category: 'bestPrograms'
  },
  {
    name: 'Art',
    collegeKey: 'bestCollegesForArt',
    id: 'best-colleges-for-art',
    category: 'bestPrograms'
  },
  {
    name: 'Biology',
    collegeKey: 'bestCollegesForBiology',
    id: 'best-colleges-for-biology',
    category: 'bestPrograms'
  },
  {
    name: 'Business',
    collegeKey: 'bestCollegesForBusiness',
    id: 'best-colleges-for-business',
    category: 'bestPrograms'
  },
  {
    name: 'Chemistry',
    collegeKey: 'bestCollegesForChemistry',
    id: 'best-colleges-for-chemistry',
    category: 'bestPrograms'
  },
  {
    name: 'Communications',
    collegeKey: 'bestCollegesForCommunications',
    id: 'best-colleges-for-communications',
    category: 'bestPrograms'
  },
  {
    name: 'Computer Science',
    collegeKey: 'bestCollegesForComputerScience',
    id: 'best-colleges-for-computer-science',
    category: 'bestPrograms'
  },
  {
    name: 'Criminal Justice',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-criminal-justice',
    category: 'bestPrograms'
  },
  {
    name: 'Culinary Arts',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-culinary-arts',
    category: 'bestPrograms'
  },
  {
    name: 'Design',
    collegeKey: 'bestCollegesForDesign',
    id: 'best-colleges-for-design',
    category: 'bestPrograms'
  },
  {
    name: 'Economics',
    collegeKey: 'bestCollegesForEconomics',
    id: 'best-colleges-for-economics',
    category: 'bestPrograms'
  },
  {
    name: 'Education',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-education',
    category: 'bestPrograms'
  },
  {
    name: 'Engineering',
    collegeKey: 'bestCollegesForEngineering',
    id: 'best-colleges-for-engineering',
    category: 'bestPrograms'
  },
  {
    name: 'English',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-english',
    category: 'bestPrograms'
  },
  {
    name: 'Environmental Science',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-environmental-science',
    category: 'bestPrograms'
  },
  {
    name: 'Film/Photography',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-film-photography',
    category: 'bestPrograms'
  },
  {
    name: 'History',
    collegeKey: 'bestCollegesForHistory',
    id: 'best-colleges-for-history',
    category: 'bestPrograms'
  },
  {
    name: 'Information Technology',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-information-technology',
    category: 'bestPrograms'
  },
  {
    name: 'International Relations',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-international-relations',
    category: 'bestPrograms'
  },
  {
    name: 'Kinesiology/Therapy',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-kinesiology-therapy',
    category: 'bestPrograms'
  },
  {
    name: 'Math',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-math',
    category: 'bestPrograms'
  },
  {
    name: 'Music',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-music',
    category: 'bestPrograms'
  },
  {
    name: 'Nursing',
    collegeKey: 'bestCollegesForNursing',
    id: 'best-colleges-for-nursing',
    category: 'bestPrograms'
  },
  {
    name: 'Performing Arts',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-performing-arts',
    category: 'bestPrograms'
  },
  {
    name: 'Philosophy',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-philosophy',
    category: 'bestPrograms'
  },
  {
    name: 'Physics',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-physics',
    category: 'bestPrograms'
  },
  {
    name: 'Political Science',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-political-science',
    category: 'bestPrograms'
  },
  {
    name: 'Psychology',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-psychology',
    category: 'bestPrograms'
  },
  {
    name: 'Religious Studies',
    collegeKey: 'bestColleges',
    id: 'best-colleges-for-religious-studies',
    category: 'bestPrograms'
  },
  {
    name: 'Most Diverse',
    collegeKey: 'bestColleges',
    id: 'most-diverse-colleges',
    category: 'students'
  },
  {
    name: 'Most Liberal',
    collegeKey: 'mostLiberalColleges',
    id: 'most-liberal-colleges',
    category: 'students'
  },
  {
    name: 'Most Conservative',
    collegeKey: 'mostConservativeColleges',
    id: 'most-conservative-colleges',
    category: 'students'
  },
  {
    name: 'Best Student Life',
    collegeKey: 'bestColleges',
    id: 'best-student-life',
    category: 'socialScene'
  },
  {
    name: 'Top Party Schools',
    collegeKey: 'rankingsTopPartySchools',
    id: 'top-party-schools',
    category: 'socialScene'
  },
  {
    name: 'Best Greek Life',
    collegeKey: 'bestGreekLifeColleges',
    id: 'best-greek-life',
    category: 'socialScene'
  },
  {
    name: 'Best Campuses',
    collegeKey: 'bestColleges',
    id: 'best-college-campuses',
    category: 'campus'
  },
  {
    name: 'Best College Dorms',
    collegeKey: 'bestColleges',
    id: 'best-college-dorms',
    category: 'campus'
  },
  {
    name: 'Best College Food',
    collegeKey: 'bestColleges',
    id: 'best-college-food',
    category: 'campus'
  },
  {
    name: 'Best Locations',
    collegeKey: 'bestColleges',
    id: 'best-college-locations',
    category: 'campus'
  },
  {
    name: 'Safest Campuses',
    collegeKey: 'bestColleges',
    id: 'safest-campuses',
    category: 'campus'
  },
  {
    name: 'College Athletics',
    collegeKey: 'bestColleges',
    id: 'best-college-athletics',
    category: 'athletics'
  },
  {
    name: 'Best for Student Athletes',
    collegeKey: 'bestColleges',
    id: 'best-student-athletes',
    category: 'athletics'
  }
]

const sortMap = sortOrders.reduce((sortMap, sortOrder) => {
  if (!sortMap[sortOrder.category]) {
    sortMap[sortOrder.category] = [sortOrder]
  } else {
    sortMap[sortOrder.category].push(sortOrder)
  }
  return sortMap
}, {})

const sortColumns = sortOrderCategories.reduce(
  (cols, sortOrderCategory, ind) => {
    const rows = cols.length
    const items = cols[rows - 1].reduce(
      (total, sortCat) => total + sortCat.sortOrders.length,
      0
    )
    if (ind === 0 || items + sortMap[sortOrderCategory.id].length < 10) {
      cols[rows - 1].push({
        categoryId: sortOrderCategory.id,
        sortOrders: sortMap[sortOrderCategory.id]
      })
    } else {
      cols.push([
        {
          categoryId: sortOrderCategory.id,
          sortOrders: sortMap[sortOrderCategory.id]
        }
      ])
    }
    return cols
  },
  [[]]
)

export class CollegeSearchPageBanner extends React.Component<Props, State> {
  state = { expanded: false, showMore: {} }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  onSetSortOrder = (ds: Object) => {
    return () => {
      this.props.setSortOrder(ds)
      this.setState({
        expanded: false,
        showMore: {}
      })
    }
  }

  onToggleShowMore = categoryId => {
    return () => {
      this.setState({
        showMore: {
          ...this.state.showMore,
          [categoryId]: !Boolean(this.state.showMore[categoryId])
        }
      })
    }
  }

  render() {
    const { classes, sortOrder } = this.props

    const displaySorts = [
      sortOrder,
      ...sortOrders.filter(s => s.id !== sortOrder.id).slice(0, 4)
    ]

    return (
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          {displaySorts.map((ds, ind) => (
            <div key={ind} className={classes.searchSetting}>
              <Typography
                variant="subheading"
                className={classnames(classes.topicText, {
                  [classes.active]: ds.id === sortOrder.id
                })}
                onClick={this.onSetSortOrder(ds)}
              >
                {ds.name}
              </Typography>
            </div>
          ))}
          <div className={classes.moreHoriz}>
            <MoreHorizIcon
              style={{ color: blue[500], cursor: 'pointer' }}
              onClick={this.handleExpandClick}
            />
          </div>
        </div>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <div className={classes.expandedContainer}>
            <div className={classes.sortCategoriesContainer}>
              {sortColumns.map((sortColumn, sortColumnsInd) => (
                <div key={sortColumnsInd} className={classes.sortColumn}>
                  {sortColumn.map((sortCategory, ind) => (
                    <div key={ind} className={classes.sortCategoryContainer}>
                      {sortCategory.categoryId !== 'general' && (
                        <Typography className={classes.categoryName}>
                          {
                            (sortOrderCategories.find(
                              c => c.id === sortCategory.categoryId
                            ): any).name
                          }
                        </Typography>
                      )}
                      <div className={classes.sortItems}>
                        {sortMap[sortCategory.categoryId]
                          .slice(
                            0,
                            this.state.showMore[sortCategory.categoryId]
                              ? sortMap[sortCategory.categoryId].length
                              : Math.min(
                                  sortMap[sortCategory.categoryId].length,
                                  10
                                )
                          )
                          .map((sort, sortInd) => (
                            <Typography
                              key={sortInd}
                              className={classes.sortName}
                              onClick={this.onSetSortOrder(sort)}
                            >
                              {sort.name}
                            </Typography>
                          ))}
                        {sortMap[sortCategory.categoryId].length > 10 && (
                          <div
                            className={classes.moreSortOptions}
                            onClick={this.onToggleShowMore(
                              sortCategory.categoryId
                            )}
                          >
                            {this.state.showMore[sortCategory.categoryId]
                              ? [
                                  <RemoveIcon key={'icon'} />,
                                  <Typography key={'text'}>Less</Typography>
                                ]
                              : [
                                  <AddIcon key={'icon'} />,
                                  <Typography key={'text'}>More</Typography>
                                ]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Button onClick={this.handleExpandClick} variant="outlined">
              Close
            </Button>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default withStyles(styles)(CollegeSearchPageBanner)
