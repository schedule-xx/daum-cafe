const cafe = require('obliviate/lib/tasks/daum/cafe')

async function daumCafe() {
  await cafe.perform({ id: '-ohmygirl', binId: '600066264f42973a289cde3b' })
  await cafe.perform({ id: 'WJSNcosmic', binId: '5ffeb19868f9f835a3de9e26' })
  await cafe.perform({ id: 'cube-g-i-dle', binId: '6000668ff98f6e35d5fc791b' })
}

daumCafe()
