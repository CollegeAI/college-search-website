// @flow
/*
 * Tracking API sagas, e.g. facebook/ga tracking
 */

import { take, takeEvery, call, put, select, race } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { constants as apiConstants } from '../redux'

/*
 * ========================= Google Analytics Events =========================
 * Link for more info: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 * ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
 *
 * Field Name       |  Value Type	| Required	| Description
 * eventCategory    |  text       | yes       |	Typically the object that was interacted with (e.g. 'Video')
 * eventAction      |  text       | yes       |	The type of interaction (e.g. 'play')
 * eventLabel       |  text       | no        |	Useful for categorizing events (e.g. 'Fall Campaign')
 * eventValue	      |  integer    | no        |	A numeric value associated with the event (e.g. 42)
 */

/*
  * ========================= Facebook Pixel Analytics 'ViewContent' Event =========================
  * Link for more info: https://developers.facebook.com/docs/marketing-api/audiences-api/pixel
  * fbq('track', 'ViewContent', {
  * });
  *
  * Event Name: ViewContent
	* Event Description: When a page viewed such as landing on a product detail page
  * Parameters: value, currency, content_name, content_type, content_ids
  * Required Parameters: None. For Dynamic Product Ads content_ids and content_type required.
  * Note that value is of type integer, but refers to the value of someone
  * performing this event to the business as opposed to the value of the event as in ga
  */

/*
   * ========================= Facebook Pixel Analytics 'ViewContent' Event =========================
   * Link for more info: https://developers.intercom.com/reference#events
   *
   * Attribute       |   Required        | Description
   * ________________|___________________|___________________________________________________________________
   * event_name      |     Yes           | The name of the event that occured- a good event name is typically a past tense 'verb-noun' combination.
   * created_at      |     Yes           | The time the event occured as a UTC unix timestamp
   * user_id         | Yes if no email   | Your identifier for the user
   * id              | Yes if no email   | Your identifier for a lead or a user
   * email           | Yes if no user_id | An email address for your uesr.
   * metadata        |     No            | Optional metadata about the event
   */

/* eslint-enable */

function* trackEvent({ event, info }: any): Generator<*, *, *> {
  if (window.location.hostname === 'localhost') return
  switch (event) {
    default: {
      console.error('Invalid Track Event')
    }
  }
}

export function* trackLocation(): Generator<*, *, *> {
  if (window.location.hostname === 'localhost') return
  while (true) {
    let { payload: { pathname } = {} } = yield take(LOCATION_CHANGE)
    if (pathname) {
      // window.ga('set', 'page', pathname)
      // window.ga('send', 'pageview')
    }
  }
}

export default function* trackingSaga(): Generator<*, *, *> {
  yield takeEvery(apiConstants.TRACK_EVENT, trackEvent)
}
