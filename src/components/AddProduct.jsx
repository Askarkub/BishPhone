import { TextField, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'

const AddProduct = () => {
    const [vacuumCleaner, setVacuumCleaner] = useState({
        title: "",
        description: "",
        price: "",
        year: "",
        color: "",
        photo: "",
        weight: "",
        brand: ""
    })
    const { createProduct } = useContext(adminContext)

    function handleInputs(e) {
        let newProduct = {
            ...vacuumCleaner,
            [e.target.name]: e.target.value
        }
        setVacuumCleaner(newProduct)
    }
    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField value={vacuumCleaner.title} id="standard-basic" label="Название пылесоса" name="title" onChange={handleInputs} />
                    <TextField value={vacuumCleaner.description} id="standard-basic" label="Описание пылесоса" name="description" onChange={handleInputs} />
                    <TextField type="number" value={vacuumCleaner.price} id="standard-basic" label="Цена пылесоса" name="price" onChange={handleInputs} />
                    <TextField type="date" value={vacuumCleaner.year} id="standard-basic" label="Дата выпуска пылесоса" name="year" onChange={handleInputs} />
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

                    <TextField value={vacuumCleaner.color} id="standard-basic" label="Цвет пылесоса" name="color" onChange={handleInputs} />
                    <TextField value={vacuumCleaner.photo} id="standard-basic" label="Фото пылесоса" name="photo" onChange={handleInputs} />
                    <TextField type="number" value={vacuumCleaner.weight} id="standard-basic" label="Вес пылесоса" name="weight" onChange={handleInputs} />
                    <TextField value={vacuumCleaner.brand} id="standard-basic" label="Бренд пылесоса" name="brand" onChange={handleInputs} />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !vacuumCleaner.title.trim() ||
                                !vacuumCleaner.description.trim() ||
                                !vacuumCleaner.price.trim() ||
                                !vacuumCleaner.color.trim() ||
                                !vacuumCleaner.photo.trim() ||
                                !vacuumCleaner.brand.trim() ||
                                !vacuumCleaner.weight.trim() ||
                                !vacuumCleaner.year.trim()) {
                                alert("Заполните все поля")
                                return
                            }
                            createProduct({
                                title: vacuumCleaner.title.trim(),
                                description: vacuumCleaner.description.trim(),
                                price: vacuumCleaner.price.trim(),
                                color: vacuumCleaner.color.trim(),
                                photo: vacuumCleaner.photo.trim(),
                                brand: vacuumCleaner.brand.trim(),
                                weight: vacuumCleaner.weight.trim(),
                                year: vacuumCleaner.year.trim()
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