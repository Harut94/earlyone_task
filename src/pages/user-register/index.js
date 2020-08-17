import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//selectors
import { userSelector } from '../../reducers/user'
//components
import Input from '../../components/input'
//actions
import { registerUser } from '../../reducers/user'
//styles
import './index.css';

const UserRegister = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    //user info
    const user = useSelector(userSelector)

    //validation schema
    const schema = yup.object().shape({
        name: yup.string().required('this field is required'),
        education: yup.string().required('this field is required'),
        image: yup
            .mixed()
            .required('this field is required'),
    });

    const { register, errors, handleSubmit, isSubmitting, reset } = useForm({
        resolver: yupResolver(schema),
        shouldUnregister: false,
        defaultValues: {
            name: '',
            education: '',
            image: '',
        }
    });

    useEffect(() => {
        if (Object.keys(user).length) {
            reset(user)
            setImage(user.imageUrl)
        }
    }, [])

    const onSubmit = (values) => {
        dispatch(registerUser({ ...values, imageUrl: image }))
        history.push('/user-view')
    }

    const [image, setImage] = useState('')

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setImage(URL.createObjectURL(img));
        }
    };

    return (
        <div className="user-registration-wrapper">
            <div className="user-reg-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {image ?
                            <div className="user-image-wrapper">
                                <img className="user-image" src={image} alt={'oops'} />
                            </div> :
                            <Input
                                name="image"
                                title={'Image'}
                                register={register}
                                errors={errors}
                                type="file"
                                className={'fileUpload'}
                                handleChange={onImageChange}
                                accept={'image/png, image/jpeg'}
                            />}
                        <Input
                            name="name"
                            title={'Name'}
                            register={register}
                            errors={errors}
                            className="input-wrapper"
                        />
                        <Input
                            name="education"
                            title={'Education'}
                            register={register}
                            errors={errors}
                            className="input-wrapper"
                        />
                        <button className="reg-button" disabled={isSubmitting}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default UserRegister