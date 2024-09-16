import React from 'react'

function proj_1() {
  return (
      <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
    </div>
  )
}

export default proj_1
