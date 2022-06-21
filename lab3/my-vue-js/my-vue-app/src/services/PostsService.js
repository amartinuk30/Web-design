import api from '../services/api.js'

export default {
  fetchComment_1 () {
    return api().get('post1')
  },
  fetchComment_2 () {
    return api().get('post2')
  },
  fetchComment_3 () {
    return api().get('post3')
  },
  fetchRegister () {
    return api().get('registers')
  },
  addComment_1 (params) {
    return api().post('post1', params)
  },
  addComment_2 (params) {
    return api().post('post2', params)
  },
  addComment_3 (params) {
    return api().post('post3', params)
  },
  addRegister (params) {
    return api().post('registers', params)
  },
  deleteComment_1 (id) {
    return api().delete('post1/' + id)
  },
  deleteComment_2 (id) {
    return api().delete('post2/' + id)
  },
  deleteComment_3 (id) {
    return api().delete('post3/' + id)
  },
  changeTrue (params) {
    return api().put('registers/' + params.id, params)
  }

}