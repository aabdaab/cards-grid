import axios from 'axios'

const photosURL = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL: photosURL
})

export function getPhotos(currentPage, order, property, limit) {
  return api.get(`/photos?_page=${currentPage}&_limit=${limit}&_sort=${property}&_order=${order}`)
}
