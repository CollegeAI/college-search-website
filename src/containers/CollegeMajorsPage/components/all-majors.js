// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import InformationCard from '../../../components/InformationCard'
import GradeLabel from '../../../components/GradeLabel'
import ListFacts from '../../../components/ListFacts'
import CollegeRankingsList from '../../../components/CollegeRankingsList'

type Props = {
  classes: Object
}

const styles = theme => ({
  categoryLabelContainer: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  categoryLabel: {
    color: blue[500],
    border: `1px solid ${blue[500]}`,
    padding: '8px 12px',
    borderRadius: 2,
    marginRight: 8,
    marginBottom: 4,
    fontSize: '0.8rem',
    cursor: 'pointer'
  },
  subheader: {
    textAlign: 'left',
    color: '#787878',
    fontSize: '0.875rem',
    marginBottom: 8
  },
  categoryContainer: {
    padding: '16px 0px'
  },
  majorsContainer: {},
  headerContainer: {
    paddingBottom: 8,
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between'
  },
  categoryName: {
    color: blue[500]
  },
  graduates: {
    color: '#919191'
  }
})

export class AllMajors extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { academics } = college
    const cardHeader = `All Majors`

    const majors = [
      {
        category: 'Business',
        label: 'Business Administration and Management',
        majorKey:
          'numberOfGraduatesInBusinessAdministrationAndManagementGeneral'
      },
      {
        category: 'Business',
        label: 'Business Administration Management and Operations',
        majorKey:
          'numberOfGraduatesInBusinessAdministrationManagementAndOperationsOther'
      },
      {
        category: 'Business',
        label: 'Business Management, Marketing and Related Support Services',
        majorKey:
          'numberOfGraduatesInBusinessManagementMarketingAndRelatedSupportServicesOther'
      },
      {
        category: 'Humanities',
        label: 'Cognitive Science',
        majorKey: 'numberOfGraduatesInCognitiveScience'
      },
      {
        category: 'Humanities',
        label: 'Communication Sciences and Disorders General',
        majorKey: 'numberOfGraduatesInCommunicationSciencesAndDisordersGeneral'
      },
      {
        category: 'Humanities',
        label: 'Economics',
        majorKey: 'numberOfGraduatesInEconomicsGeneral'
      },
      {
        category: 'Humanities',
        label: 'Liberal Arts and Humanities',
        majorKey: 'numberOfGraduatesInLiberalArtsAndSciencesLiberalStudies'
      },
      {
        category: 'Humanities',
        label: 'Psychology',
        majorKey: 'numberOfGraduatesInPsychologyGeneral'
      },
      {
        category: 'Humanities',
        label: 'Digital Communication and Media',
        majorKey: 'numberOfGraduatesInDigitalCommunicationAndMediaMultimedia'
      },

      {
        category: 'Science, Technology, and Math',
        label: 'Aerospace Engineering',
        majorKey:
          'numberOfGraduatesInAerospaceAeronauticalAndAstronauticalSpaceEngineering'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Architecture',
        majorKey: 'numberOfGraduatesInArchitecture'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Biochemistry and Molecular Biology',
        majorKey: 'numberOfGraduatesInBiochemistry'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Bioengineering and Biomedical Engineering',
        majorKey: 'numberOfGraduatesInBioengineeringAndBiomedicalEngineering'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Bioinformatics',
        majorKey: 'numberOfGraduatesInBioinformatics'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Biology',
        majorKey: 'numberOfGraduatesInHumanBiology'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Chemical Engineering',
        majorKey: 'numberOfGraduatesInChemicalEngineering'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Chemistry',
        majorKey: 'numberOfGraduatesInChemistryGeneral'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Civil Engineering',
        majorKey: 'numberOfGraduatesInCivilEngineeringGeneral'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Computer Science',
        majorKey: 'numberOfGraduatesInComputerScience'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Electrical and Electronics Engineering',
        majorKey: 'numberOfGraduatesInElectrical and Electronics Engineering'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Engineering Science',
        majorKey: 'numberOfGraduatesInEngineering Science'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Environmental Sciences',
        majorKey: 'numberOfGraduatesInEngineeringScience'
      },
      {
        category: 'Science, Technology, and Math',
        label: 'Environmental Studies',
        majorKey: 'numberOfGraduatesInEnvironmentalScience'
      },
      {
        category: 'Trades and Personal Services',
        label: 'Robotics Technology Technician',
        majorKey: 'numberOfGraduatesInRoboticsTechnologyTechnician'
      },
      {
        category: 'Trades and Personal Services',
        label: 'Science Technologies Technicians',
        majorKey: 'numberOfGraduatesInScienceTechnologiesTechniciansOther'
      }
    ]
      .map(major => {
        return {
          ...major,
          numberGraduates: academics.majors[major.majorKey]
        }
      })
      .filter(m => m.numberGraduates && m.numberGraduates > 0)

    const { categories, categoryMap } = majors.reduce(
      (acc, major) => {
        const majorItem = {
          label: major.label,
          value: major.numberGraduates
        }
        if (!acc.categories.includes(major.category)) {
          acc.categories.push(major.category)
          acc.categoryMap[major.category] = [majorItem]
        } else {
          acc.categoryMap[major.category].push(majorItem)
        }
        return acc
      },
      { categories: [], categoryMap: {} }
    )

    categories.sort()

    Object.keys(categoryMap).forEach(category => {
      categoryMap[category].sort((a, b) => {
        if (a.label < b.label) return -1
        else if (a.label > b.label) return 1
        return 0
      })
    })

    return (
      <InformationCard header={cardHeader}>
        <div className={classes.container}>
          <Typography className={classes.subheader}>
            Discover the majors and programs offered by Rensselaer Polytechnic
            Institute and the types of degrees awarded.
          </Typography>

          <div className={classes.categoryLabelContainer}>
            {categories.map((category, ind) => (
              <Link
                key={ind}
                className={classes.categoryLabel}
                activeClass={classes.sidebarLinkActive}
                to={category}
                smooth={true}
                duration={300}
                offset={-12}
                isDynamic
              >
                {category}
              </Link>
            ))}
          </div>

          {categories.map((category, ind) => (
            <Element
              name={category}
              key={ind}
              className={classes.categoryContainer}
            >
              <div className={classes.headerContainer}>
                <Typography variant="title" className={classes.categoryName}>
                  {category}
                </Typography>
                <Typography className={classes.graduates}>Graduates</Typography>
              </div>
              <div className={classes.majorsContainer}>
                <ListFacts
                  items={categoryMap[category]}
                  itemLabelStyle={{ paddingLeft: 8 }}
                  itemValueStyle={{ paddingRight: 8 }}
                />
              </div>
            </Element>
          ))}
        </div>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(AllMajors)
