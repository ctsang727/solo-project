import { useEffect, useState, } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editBusiness } from "../store/business";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditBusinessForm = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('Alabama');
    const [zipCode, setZipCode] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const ownerId = sessionUser?.id

        const payload = {
            id,
            title,
            description,
            address,
            city,
            state,
            zipCode,
        };

        const updatedBusiness = await dispatch(editBusiness(payload));
        console.log('11111111', updatedBusiness)
        history.push(`/business/${id}`)
    };
    //cancel button later

    return (
        <div>
            <h1>Edit Business Form</h1>
            <form onSubmit={handleSubmit}>
                
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Name of Business'  
                    name='title' />
                <input
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
                <button type="submit">Submit</button>
            </form>

        </div>
    )


}

export default EditBusinessForm;