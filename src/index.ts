export default function isChineseMainland(delay: number = 1000) {
  return Promise.race([
    fetch('https://graph.facebook.com/feed')
      .then(() => false)
      .catch(() => true),
    new Promise<false>((resolve) => setTimeout(() => resolve(false), delay)),
  ])
}

export { isChineseMainland as isMainlandChina }
