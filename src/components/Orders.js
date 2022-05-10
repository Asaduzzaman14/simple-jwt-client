import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'get',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status !== 200 || res.status === 403) {
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
                console.log(data);
            })
    }, [])

    return (
        <div>

            <h1>This is Orders page:{orders.length} </h1>
        </div>
    );
};


export default Orders;