import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './test.css'

function TestPhoto() {
  const sessionUser = useSelector(state => state.session.user);

  const [photo, setPhoto] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('userId', sessionUser.id)

    console.log(formData.values)
    console.log(photo)
    console.log('submit')
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  }

  return (
    <div id='main'>
      <h1>TEST</h1>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={updateImage}
        />
        <button type="submit">Submit</button>
        {(photoLoading) && <p>Loading...</p>}

      </form>

    </div>
  )
}

export default TestPhoto

