import isChineseMainland from '../src'
import fetch from 'node-fetch'
;(globalThis as any).fetch = fetch

isChineseMainland().then((yes) => {
  console.info(yes ? 'Is Chinese!' : 'Not Chinese!')
})
