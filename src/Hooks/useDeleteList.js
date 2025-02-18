import React, { useEffect, useState } from 'react'
import api from '../Api/apiUrl';

const useFetch = async(url, id) => {
    try {
        await api.delete(`${url}/${id}`)
    } catch (err) {
        console.log(err.message);
    }
}

export default useFetch;