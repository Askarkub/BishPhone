import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { adminContext } from '../contexts/AdminContext';
import { useHistory, useParams } from 'react-router';

const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editVacuumCleaner, setEditVacuumCleaner] = useState(productToEdit)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        setEditVacuumCleaner(productToEdit)
    }, [productToEdit])
    useEffect(() => {
        getProductToEdit(id)
    }, [])
    const handleInputs = (e) => {
        let obj = {
            ...editVacuumCleaner,
            [e.target.name]: e.target.value
        }
        setEditVacuumCleaner(obj)
    }
    return (
        <div>
            {
                editVacuumCleaner ? (
                    <div className="add-inputs">
                        <form>
                            <TextField value={editVacuumCleaner.title} id="standard-basic" label="Название пылесоса" name="title" onChange={handleInputs} />
                            <TextField value={editVacuumCleaner.description} id="standard-basic" label="Описание пылесоса" name="description" onChange={handleInputs} />
                            <TextField type="number" value={editVacuumCleaner.price} id="standard-basic" label="Цена пылесоса" name="price" onChange={handleInputs} />
                            <TextField type="date" value={editVacuumCleaner.year} id="standard-basic" label="Дата выпуска пылесоса" name="year" onChange={handleInputs} />
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={new Date('2014-08-18T21:11:54')}
                                    onChange={handleInputs}
                                    name="year"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider> */}

                            <TextField value={editVacuumCleaner.color} id="standard-basic" label="Цвет пылесоса" name="color" onChange={handleInputs} />
                            <TextField value={editVacuumCleaner.photo} id="standard-basic" label="Модель пылесоса" name="photo" onChange={handleInputs} />
                            <TextField type="number" value={editVacuumCleaner.weight} id="standard-basic" label="Вес пылесоса" name="weight" onChange={handleInputs} />
                            <TextField value={editVacuumCleaner.brand} id="standard-basic" label="Бренд пылесоса" name="brand" onChange={handleInputs} />
                            <Button
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (
                                        !editVacuumCleaner.title.trim() ||
                                        !editVacuumCleaner.description.trim() ||
                                        !editVacuumCleaner.price.trim() ||
                                        !editVacuumCleaner.color.trim() ||
                                        !editVacuumCleaner.photo.trim() ||
                                        !editVacuumCleaner.brand.trim() ||
                                        !editVacuumCleaner.weight.trim() ||
                                        !editVacuumCleaner.year.trim()) {
                                        alert("Заполните все поля")
                                        return
                                    }
                                    saveEditedProduct(editVacuumCleaner)
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