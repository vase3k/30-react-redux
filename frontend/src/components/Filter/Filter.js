import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          value={titleFilter}
          placeholder="filter by title..."
          onChange={handleTitleFilterChange}
        />
      </div>
    </div>
  )
}

export default Filter
