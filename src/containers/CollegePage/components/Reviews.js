// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import Rating from '../../../components/Rating'
import LetterGrade from '../../../components/LetterGrade'
import BarGraph from '../../../components/BarGraph'
import CollegeReview from '../../../components/CollegeReview'
import FactFooter from './FactFooter'

type Props = {
  classes: Object,
  onPushRoute: Function
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '30px 30px 10px'
  },
  title: {
    textAlign: 'left',
    color: blue[500]
  },
  titleContainer: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    textAlign: 'left',
    width: '100%',
    paddingBottom: 30
  },
  rating: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 4,
    color: blue[500]
  },
  ratingItem: {
    width: 250,
    marginBottom: 8,
    padding: 8,
    position: 'relative'
  },
  ratingItemBackground: {
    backgroundColor: '#f6f6f6',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 2
  },
  ratingItemBackgroundGood: {
    backgroundColor: green[100],
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 3
  },
  raised: {
    zIndex: 4
  },
  reviewContainer: {
    paddingLeft: 24
  },
  reviewItem: {
    textAlign: 'left',
    maxHeight: 110,
    overflowY: 'hidden',
    position: 'relative',
    marginBottom: 8
  },
  reviewItemExpanded: {
    maxHeight: 'inherit'
  },
  reviewText: {
    textAlign: 'left'
  },
  moreReview: {
    cursor: 'pointer',
    position: 'absolute',
    bottom: 0,
    height: '100%',
    zIndex: 1,
    display: 'inline-flex',
    background:
      'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,1) 15%, rgba(255,255,255,0))',
    alignItems: 'flex-end',
    width: '100%',
    color: blue[400]
  },
  moreReviewExpanded: {
    display: 'none'
  },
  reviewCredentials: {
    textAlign: 'left',
    fontSize: '0.75rem',
    marginBottom: 22,
    color: grey[600]
  },
  dot: {
    padding: '0px 2px'
  }
})

type State = {
  expanded: {
    review: Array<Boolean>
  }
}
export class Reviews extends React.Component<Props, State> {
  state = {
    expanded: {
      review: [false, false, false]
    }
  }

  handleReviewExpandClick = (ind: number) => {
    return () => {
      this.state.expanded.review[ind] = !this.state.expanded.review[ind]
      this.setState({
        expanded: {
          ...this.state.expanded,
          review: this.state.expanded.review
        }
      })
    }
  }

  render() {
    const { classes, onPushRoute } = this.props

    const name = 'Harvard University'
    const cardTitle = `${name} Reviews`
    const schoolRating = 4.5
    const reviewsText = '623 Reviews'

    const ratings = [
      {
        label: 'Excellent',
        rating: 5,
        value: 248
      },
      {
        label: 'Very Good',
        rating: 4,
        value: 207
      },
      {
        label: 'Average',
        rating: 3,
        value: 156
      },
      {
        label: 'Poor',
        rating: 2,
        value: 22
      },
      {
        label: 'Terrible',
        rating: 1,
        value: 13
      }
    ]

    const total = ratings.reduce((acc, r) => acc + r.value, 0)
    const footerLabel = 'Read More Reviews'

    const reviews = [
      {
        rating: 4.5,
        text:
          'Harvard University offers the most incredible experience for its students. From the rich history to the esteemed faculty to the vibrant atmosphere of Harvard Square, it is truly one of a kind and inspiring. During my time at Harvard, I got to dance to Gangnam Style with Psy, read a Gutenberg Bible, study and work under my hero, perform fMRIs, and eat brunch in what is essentially the Great Hall of Hogwarts. I cannot begin to tell you the opportunities available here nor what you will learn from working and studying.',
        role: 'Alum',
        date: 'Mar 28 2017',
        tags: [{ name: 'Overall Expereince', id: 'overallExpereince' }]
      },
      {
        rating: 3,
        text: `The academics aren't really more difficult than your average college, but I think the high ability level of the students makes the grading harsher than your average college. I think a B at Harvard would be an A at the average college in America.
        Some of the professors are very rude and arrogant toward undergrads. I experienced that firsthand on at least four occasions (four different professors).
        The place can feel overwhelming and lonely at times, and there's no hand-holding. Also, when it comes to finding a job at graduation, you're on your own. Nobody's going to knock on your door with a job offer. Career Services exists, of course, but they aren't going to knock on your door either, and they're primarily only useful if you want to work on Wall Street. If you want any help at Harvard (job-seeking help, mental health help...any help), you have to seek it out.`,
        role: 'Sophomore',
        date: 'Mar 28 2017',
        tags: [{ name: 'Overall Expereince', id: 'overallExpereince' }]
      }
    ]

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.titleContainer}>
                <Typography
                  className={classes.title}
                  variant="display1"
                  component="p"
                >
                  {cardTitle}
                </Typography>
                <div className={classes.rating}>
                  <Rating rating={schoolRating} />
                  <div>{reviewsText}</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.ratingContainer}>
                <BarGraph items={ratings} total={total} />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className={classes.reviewContainer}>
                {reviews.map((review, ind) => (
                  <CollegeReview review={review} key={ind} />
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
        <FactFooter onClickCTA={onPushRoute} label={footerLabel} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Reviews)
