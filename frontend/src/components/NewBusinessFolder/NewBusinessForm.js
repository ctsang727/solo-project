import { useDispatch } from "react-redux"
import { postBusiness } from "../../store/business"
import { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './NewForm.css'



const NewBusinessForm = () => {
    //console.log('Start of front end')
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // const nextBusiness = useSelector(state => state.businessState);
    // console.log(nextBusiness)
    //console.log(sessionUser?.id)
    const [errors, setValidationErrors] = useState([])


    //const [ownerId, setOwnerId] = useState(sessionUser)
    const [id, setId] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    //will have to update model
    //country?
    //phone?
    //many locations?   

    const space = /^\S+$/

    useEffect(() => {
        const errors = []
        if (!title || title === space) errors.push('Name of business required')
        if (!description) errors.push('Description of business required')
        if (!address) errors.push('Address of business required')
        if (!city) errors.push('City required')
        if (!zipCode) errors.push('Zip code required')
        if (!imageUrl) errors.push('Image required')


        setValidationErrors(errors)
    }, [title,description,address,city,zipCode,imageUrl])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ownerId = sessionUser?.id
        const business = {
            ownerId,
            title,
            description,
            address,
            city,
            state,
            zipCode,
            imageUrl,
        }


        const newBusiness = await dispatch(postBusiness(business))
        console.log(newBusiness)
        // console.log('NEW BIZ AFTER DISPATCH', business)
        // console.log(nextBusiness)

        history.push(`/business/${newBusiness.id}`)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/`)
    }

    return (
        <div className="new-form-large-container">
            <div className="left-half">
                <div><h1>New Business Form</h1></div>

                <form className="new-business-form" onSubmit={handleSubmit}>
                    <ul className="errors">
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <input
                        type='hidden'
                        name='ownerId'
                    ></input>
                    <input
                        type='hidden'
                        name='businessId'
                        value={id}>
                    </input>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder='Name of Business'
                        name='title' />
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder='Description'
                        name='description' />
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder='Address'
                        name='address' />
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        placeholder='City'
                        name='city' />
                    <label>State:</label>
                    <select
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        name='state'
                    >
                        <option>--Select State--</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <input
                        onChange={(e) => setZipCode(e.target.value)}
                        value={zipCode}
                        placeholder='Zip Code'
                        name='zipCode' />
                    <input
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        placeholder='Image URL'
                        name='imageUrl'
                        />
                    <button type="submit">Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            </div>
            <div className="right-half"></div>

        </div>
    )

}

export default NewBusinessForm