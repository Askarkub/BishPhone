import React, { useContext, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom'
import { clientContext } from '../contexts/ClientContext';
import { Button, makeStyles, Slider, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const LeftSidebar = () => {
    const [price, setPrice] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const history = useHistory()
    const { getProducts, brands, getBrands } = useContext(clientContext)



    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get("price_lte"))
        setBrand(search.get("brand"))
        getProducts()
    }



    let search = new URLSearchParams(history.location.search)
    useEffect(() => {
        setPrice(search.get("price_lte"));
        setBrand(search.get("brand"))
        getBrands()
    }, [])



    const resetFilter = () => {
        setPrice('')
        setBrand('')
        history.push('/')
        getProducts()
    }


    return (
        <div className='left-sidebar'>
            <FormControl component="fieldset">
                <FormLabel component="legend">Цена</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterProducts('price_lte', e.target.value)}>
                    <FormControlLabel value="10000" control={<Radio />} label="10000" />
                    <FormControlLabel value="30000" control={<Radio />} label="30000" />
                    <FormControlLabel value="50000" control={<Radio />} label="50000" />
                    <FormControlLabel value="100000" control={<Radio />} label="100000" />
                </RadioGroup>
            </FormControl>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Брэнд</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={brand} onChange={(e) => filterProducts('brand', e.target.value)}>
                        {
                            brands.map(item => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <Button onClick={resetFilter}>Reset</Button>
        </div>


    );
};

export default LeftSidebar;

