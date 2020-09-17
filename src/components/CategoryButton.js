import React from 'react'

const CategoryButton = ({categoryName, slug, onClickCategoryHandler}) => {
    return (
        <button onClick={(e)=>onClickCategoryHandler(e, slug)}>
            {categoryName}
        </button>
    )
}

export default CategoryButton
