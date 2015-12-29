/* global fetch */

export default function api (url) {
  return fetch(url).then(resp => resp.json())
}
