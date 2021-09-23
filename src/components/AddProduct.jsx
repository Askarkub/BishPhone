import { TextField, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'

const AddProduct = () => {
    const [bishPhone, setBishPhone] = useState({
        title: "",
        description: "",
        price: "",
        year: "",
        color: "",
        photo: "",
        brand: ""
    })
    const { createProduct } = useContext(adminContext)

    function handleInputs(e) {
        let newProduct = {
            ...bishPhone,
            [e.target.name]: e.target.value
        }
        setBishPhone(newProduct)
    }
    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField value={bishPhone.title} id="standard-basic" label="Название телефона" name="title" onChange={handleInputs} />
                    <TextField value={bishPhone.description} id="standard-basic" label="Описание телефона" name="description" onChange={handleInputs} />
                    <TextField type="number" value={bishPhone.price} id="standard-basic" label="Цена телефона" name="price" onChange={handleInputs} />
                    <TextField type="date" value={bishPhone.year} id="standard-basic" label="Дата выпуска телефона" name="year" onChange={handleInputs} />
                    <TextField value={bishPhone.color} id="standard-basic" label="Цвет телефона" name="color" onChange={handleInputs} />
                    <TextField value={bishPhone.photo} id="standard-basic" label="Фото телефона" name="photo" onChange={handleInputs} />
                    <TextField value={bishPhone.brand} id="standard-basic" label="Бренд телефона" name="brand" onChange={handleInputs} />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !bishPhone.title.trim() ||
                                !bishPhone.description.trim() ||
                                !bishPhone.price.trim() ||
                                !bishPhone.color.trim() ||
                                !bishPhone.photo.trim() ||
                                !bishPhone.brand.trim() ||
                                !bishPhone.year.trim()) {
                                alert("Заполните все поля")
                                return
                            }
                            createProduct({
                                title: bishPhone.title.trim(),
                                description: bishPhone.description.trim(),
                                price: bishPhone.price.trim(),
                                color: bishPhone.color.trim(),
                                photo: bishPhone.photo.trim(),
                                brand: bishPhone.brand.trim(),
                                year: bishPhone.year.trim()
                            })
                        }}
                        variant="outlined"
                        color="primary"
                    >
                        Создать
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;