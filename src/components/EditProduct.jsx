import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { adminContext } from '../contexts/AdminContext';
import { useHistory, useParams } from 'react-router';

const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editBishPhone, setEditBishPhone] = useState(productToEdit)
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setEditBishPhone(productToEdit)
    }, [productToEdit])

    useEffect(() => {
        getProductToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editBishPhone,
            [e.target.name]: e.target.value
        }
        setEditBishPhone(obj)
    }
    return (
        <div>
            {
                editBishPhone ? (
                    <div className="add-inputs">
                        <form>
                            <TextField value={editBishPhone.title} id="standard-basic" label="Название телефона" name="title" onChange={handleInputs} />
                            <TextField value={editBishPhone.description} id="standard-basic" label="Описание телефона" name="description" onChange={handleInputs} />
                            <TextField type="number" value={editBishPhone.price} id="standard-basic" label="Цена телефона" name="price" onChange={handleInputs} />
                            <TextField type="date" value={editBishPhone.year} id="standard-basic" label="Дата выпуска телефона" name="year" onChange={handleInputs} />

                            <TextField value={editBishPhone.color} id="standard-basic" label="Цвет телефона" name="color" onChange={handleInputs} />
                            <TextField value={editBishPhone.photo} id="standard-basic" label="Модель телефона" name="photo" onChange={handleInputs} />
                            <TextField value={editBishPhone.brand} id="standard-basic" label="Бренд телефона" name="brand" onChange={handleInputs} />
                            <Button
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (
                                        !editBishPhone.title.trim() ||
                                        !editBishPhone.description.trim() ||
                                        // !editBishPhone.price.trim() ||
                                        !editBishPhone.color.trim() ||
                                        !editBishPhone.photo.trim() ||
                                        !editBishPhone.brand.trim() ||
                                        !editBishPhone.year.trim()
                                    ) {
                                        alert("Заполните все поля")
                                        return
                                    }
                                    saveEditedProduct(editBishPhone)
                                    history.push('/admin')
                                }}
                                variant="outlined"
                                color="primary"
                            >
                                Сохранить изменения
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>

    );
};

export default EditProduct;