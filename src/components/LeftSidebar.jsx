import React, { useContext, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom'
import { clientContext } from '../contexts/ClientContext';
import { Button } from '@material-ui/core';

const LeftSidebar = () => {
    const [price, setPrice] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const history = useHistory()
    const { getProducts, brands, getBrands } = useContext(clientContext)

    /***** filterProducts ***************************** */

    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get("price_lte"))
        setBrand(search.get("brand"))
        getProducts()
    }

    /****************************************************** */

    let search = new URLSearchParams(history.location.search)
    useEffect(() => {
        setPrice(search.get("price_lte"));
        setBrand(search.get("brand"))
        getBrands()
    }, [])

    /****************************************************** */

    const resetFilter = () => {
        setPrice('')
        setBrand('')
        history.push('/')
        getProducts()
    }
    /**************************************************** */
    return (
        <div className='left-sidebar'>
            <FormControl component="fieldset">
                <FormLabel component="legend">Цена</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterProducts('price_lte', e.target.value)}>
                    <FormControlLabel value="5000" control={<Radio />} label="5000" />
                    <FormControlLabel value="10000" control={<Radio />} label="10000" />
                    <FormControlLabel value="15000" control={<Radio />} label="15000" />
                    <FormControlLabel value="20000" control={<Radio />} label="20000" />
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