import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { q, type } // ES2015 permite simplificar { q: q, type: type }
  })
    .then(res => res.data) // Si es unsa solo line y un solo parametro
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
