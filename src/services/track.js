import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { q, type } // ES2015 permite simplificar { q: q, type: type }
  })
    .then(res => res.data) // Si es unsa solo line y un solo parametro
}

export default trackService
