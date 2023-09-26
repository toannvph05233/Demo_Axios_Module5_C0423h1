import React, {useEffect, useState} from 'react';

const Edit = (props) => {
    const [animal, setAnimal] = useState({});

    let changeInput=(e)=>{
        setAnimal({...animal, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        setAnimal(props.animal)
    },[props.animal])

    return (
        <div>
            <div className="container">
                <h1>Edit Animal</h1>
                <input name="id" onChange={changeInput} value={animal.id} placeholder="Nhập id"/><br/>
                <input name="name" onChange={changeInput} value={animal.name} placeholder="Nhập name"/><br/>
                <input name="img" onChange={changeInput} value={animal.img} placeholder="Nhập img"/><br/>
                <button onClick={()=>props.editAnimal(animal)}>Create</button>
            </div>
        </div>
    );
};

export default Edit;
