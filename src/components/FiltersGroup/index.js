import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    crearFilters,
    changeCategory,
    changeRating,
    ratingsList,
    serchTheProduct,
  } = props
  const {changeSearch} = props
  const renderCat = (name, id) => {
    const catClick = () => {
      changeCategory(id)
    }
    return (
      <li>
        <button onClick={catClick} type="button">
          <p>{name}</p>
        </button>
      </li>
    )
  }

  const crearCliked = () => {
    crearFilters()
  }

  const renderRat = (ratingId, imageUrl) => {
    const ratClick = () => {
      changeRating(ratingId)
    }
    return (
      <li>
        <button onClick={ratClick} type="button">
          <img alt="rating {ratingId}" src={imageUrl} /> & up
        </button>
      </li>
    )
  }

  const cheangesrech = e => {
    changeSearch(e.target.value)
    console.log(e.target.value)
  }

  const serchproduct = e => {
    e.preventDefault()
    serchTheProduct()
  }

  return (
    <div className="filters-group-container">
      <form onSubmit={serchproduct}>
        <input onChange={cheangesrech} type="search" placeholder="search" />
      </form>
      <h1>Category</h1>
      <ul>{categoryOptions.map(i => renderCat(i.name, i.categoryId))}</ul>
      <h1>Rating</h1>
      <ul>{ratingsList.map(i => renderRat(i.ratingId, i.imageUrl))}</ul>
      <button onClick={crearCliked} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
