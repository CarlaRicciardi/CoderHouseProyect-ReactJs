import React, { useState, useContext } from 'react'
import { cartContext } from '../../context/CartContext';
import './CheckOut.css'
import swal from 'sweetalert';
import { addDoc, collection, Firestore, getFirestore } from 'firebase/firestore';

export default function CheckOut() {

    const {cart, clear} = useContext(cartContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState('')

    const total = cart.reduce((previous, item)=> previous + (item.price * item.quantity), 0)

    let handleOnClickComprar = () => {
        const pedido = { buyer: { name, phone, email },
        cart , total
        };
        
        let nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        let phoneRegex = /^[0-9]/gm
        let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        if(!nameRegex.test(name) || !phoneRegex.test(phone) || !emailRegex.test(email)) {
            swal(`Error!`, `Por favor completa el formulario correctamente` , `error`);
            return;
        }
                
        const db = getFirestore();
        const collectionAlimentos = collection (db, 'orders')
        addDoc(collectionAlimentos, pedido).then(({id}) => {
            setOrderId(id);
            swal(`Gracias por tu compra!`, `En el transcurso del día nos contactaremos para coordinar la entrega de tu compra. Tu numero de orden es: ${id}.` , `success`);

        })
        setName('')
        setPhone('')
        setEmail('')
    }

  return (
    <>
        <div className='cssForm'>
            <h2 className='title1'>¡ÚLTIMO PASO!</h2>
            <h3 className='subtitle'>Completá estos datos para finalizar tu compra</h3>
        
        <input onChange={(e)=> setName(e.target.value)} value={name} type={"text"} className='input' placeholder='Ingrese su Nombre' />
        <input onChange={(e)=> setPhone(e.target.value)} value={phone} type={"tel"} className='input' placeholder='Ingrese su Telefono' />
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type={"email"} className='input' placeholder='Ingrese su Email' />

        <button className='btnFinalizCompra' onClick={handleOnClickComprar}>Finalizar Compra</button>
        </div>
    </>
  )
}
