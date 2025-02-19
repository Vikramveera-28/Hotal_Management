import React, { useEffect, useState } from 'react'
import api from '../Api/apiUrl';
import { useNotification } from './useNotification';


const useFetch = async(url, id, item) => {
    try {
        const Confirm = confirm("If you want to delete this item")
        if (Confirm) {
            await api.delete(`${url}/${id}`)
            useNotification(`Your item ${item} is Deleted`)    
        }
    } catch (err) {
        console.log(err.message);
    }
}

export default useFetch;