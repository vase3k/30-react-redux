import { v4 as uuid } from 'uuid'

const createBookWithId = (book, source) => {
  return {
    ...book,
    source,
    isFavorite: false,
    id: uuid(),
  }
}

export default createBookWithId
