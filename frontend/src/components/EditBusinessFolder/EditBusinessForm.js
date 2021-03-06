import { useEffect, useState, } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editBusiness } from "../../store/business"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusinesses } from "../../store/business";
import './EditBusiness.css'

const EditBusinessForm = () => {
    //console.log('on edit form page')
    const { id } = useParams();
    console.log(id)
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const selectBusiness = useSelector((state) => state.businessState)
    //console.log('@@@@####', selectBusiness[id])
    const [errors, setValidationErrors] = useState([])

    useEffect(() => {
        dispatch(fetchBusinesses())
    }, [dispatch])

    const [title, setTitle] = useState(selectBusiness[id]?.title);
    const [description, setDescription] = useState(selectBusiness[id]?.description)
    const [address, setAddress] = useState(selectBusiness[id]?.address);
    const [city, setCity] = useState(selectBusiness[id]?.city);
    const [state, setState] = useState(selectBusiness[id]?.state);
    const [zipCode, setZipCode] = useState(selectBusiness[id]?.zipCode);

    useEffect(() => {
        const errors = []
        if (!title) errors.push('Name of business required')
        if (!description) errors.push('Description of business required')
        if (!address) errors.push('Address of business required')
        if (!city) errors.push('City required')
        if (!zipCode) errors.push('Zip code required')

        setValidationErrors(errors)
    }, [title, description, address, city, zipCode])


    const handleSubmit = async (e) => {
        e.preventDefault();
        //const ownerId = sessionUser?.id

        const payload = {
            id: +id,
            title,
            description,
            address,
            city,
            state,
            zipCode,
        };

        const updatedBusiness = await dispatch(editBusiness(payload));
        //console.log('11111111', updatedBusiness)
        history.push(`/business/${id}`)
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/business/${id}`)
    }

    return (
        <div className="edit-container">
            <div className="right-half-edit">
                <h1>Edit Business Form</h1>
                <form onSubmit={handleSubmit}>
                    <ul className="errors">
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
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
                    <button type="submit">Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            </div>


        </div>
    )


}

export default EditBusinessForm;