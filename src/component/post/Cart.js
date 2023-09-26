import React from 'react';
import {useSelector} from "react-redux";

const Cart = () => {
    const carts = useSelector((state) => state.carts);

    return (
        <div>
            <table>
                <tr>
                    <td>id</td>
                    <td>name</td>
                </tr>
                {
                    carts.map((c)=>{
                        return  <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
};

export default Cart;
