export default function isChineseMainland(delay = 2000): Promise<boolean> {
  return Promise.race([
    fetch('https://discovery.googleapis.com/discovery/v1/apis?name=0')
      .then(() => false)
      .catch(() => true),
    new Promise<boolean>((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, delay)
    ),
  ])
}

export { isChineseMainland as isMainlandChina }
