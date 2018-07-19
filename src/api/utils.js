// @flow
/*
 * Use this for all calls to the API
 */

import fetch from 'isomorphic-fetch'

const apiURL =
  process.env.NODE_ENV === 'test' ? 'http://127.0.0.1:3000/api' : '/api'

type APIRequest = {
  url: string,
  payload?: Object
}

async function get(req: APIRequest) {
  const { url, payload } = req
  const query = !payload
    ? ''
    : Object.keys(payload).reduce(
        (acc, key) =>
          `${acc}&${encodeURIComponent(key)}=${encodeURIComponent(
            payload[key]
          )}`,
        ''
      )
  const response = await fetch(`${apiURL}${url}?${query}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })

  const content = await response.text()
  try {
    return JSON.parse(content)
  } catch (e) {
    throw new Error(`Error parsing response as json "${url.toString()}"`)
  }
}

async function post(req: APIRequest) {
  const { url, payload } = req

  const response = await fetch(`${apiURL}${url}`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: payload ? JSON.stringify(payload) : undefined
  })

  try {
    return await response.json()
  } catch (e) {
    console.log({ e })
    throw new Error(`Error parsing response as json ${response.toString()}`)
  }
}

async function put(req: APIRequest) {
  const { url, payload } = req

  const response = await fetch(`${apiURL}${url}`, {
    method: 'PUT',
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: payload ? JSON.stringify(payload) : undefined
  })

  try {
    return await response.json()
  } catch (e) {
    console.error({ url, payload })
    throw new Error(`Error parsing response as json ${response.toString()}`)
  }
}

async function del(req: APIRequest) {
  const { url, payload } = req

  const response = await fetch(`${apiURL}${url}`, {
    method: 'DELETE',
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: payload ? JSON.stringify(payload) : undefined
  })

  try {
    return await response.json()
  } catch (e) {
    throw new Error(`Error parsing response as json ${response.toString()}`)
  }
}

export default { get, post, put, del }
