import React, { useState, useEffect } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - ${sO.price.formatted}` }))

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision])

    return (
        <>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
            <div className="px-4 sm:px-0"></div>
              <div className="text-2xl text-center tracking-widest">Adres dostawy</div>
              <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6 w-10/12 mx-auto">
                            <div className="col-span-6 sm:col-span-3">
                              <FormInput required name='Imie' label='first Name' placeholder='Jan' />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <FormInput required name='Nazwisko' label='last Name' />
                            </div>
                            <div className="col-span-6 sm:col-span-4">  
                              <FormInput required name='Adres' label='Adres' />
                            </div>
                            <div className="col-span-6 sm:col-span-3">  
                              <FormInput required name='Email' label='Email' />
                            </div>
                            <div className="col-span-6">  
                              <FormInput required name='Miasto' label='City' />
                            </div>  
                            <div className="col-span-6">
                              <FormInput required name='Kod pocztowy' label='Zip' />
                            </div>  
                            <div className="col-span-6 sm:col-span-3 w-10/12 mx-auto"></div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Kraj</label>
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  value={shippingCountry}
                                  onChange={(e) => setShippingCountry(e.target.value)}
                                >
                                  {countries.map((country) => (
                                        <option key={country.id} value={country.id}>
                                            {country.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/*<div className="col-span-6 sm:col-span-3">
                                <InputLabel>Subdivisions</InputLabel>
                                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                    {subdivisions.map((subdivision) => (
                                        <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel>Opcje dostawy</InputLabel>
                                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.targer.value)}>
                                    {options.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                              </div>*/}
                          </div>
                        </div>
                      <br />
                      <div className="flex justify-between w-10/12 mx-auto mb-6">
                          <Link to="/cart" className="text-center text-base tracking-widest cursor-pointer my-2 border-b-2 border-black" >Powrót do koszyka!</Link>
                          <button  type='submit' className="text-center  tracking-widest border-2 border-black cursor-pointer px-4 py-2">Dalej</button>
                      </div>
                  </form>
              </FormProvider>
            </div>
          </div>
        </div>
        </>
    )
}

export default AddressForm