import React, {useState} from 'react';
import Edit from "./Edit";

const Animal = () => {
    const [animals, setAnimals] = useState([
        {
            id: 1,
            name: "Mèo",
            img: "https://songkhoemoingay.com/wp-content/uploads/2019/03/Vietnamese_Sexy_Bae_Group-1.jpg"
        },
        {
            id: 2,
            name: "Chó",
            img: "https://songkhoemoingay.com/wp-content/uploads/2019/03/Vietnamese_Sexy_Bae_Group-1.jpg"
        }
    ]);
    const [animal, setAnimal] = useState({});

    const editAnimal = (animalEdit) => {
        let index = animals.findIndex((a)=> a.id == animalEdit.id)
        animals[index] = animalEdit;
        let arr = [...animals];
        setAnimals(arr);
    }

    return (
        <div className="container">
            <h2>List Animal</h2>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    animals.map((a) => {
                        return <tr>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td><img src={a.img} width="300" height="250"/></td>
                            <td>
                                <button type="button" className="btn btn-warning" onClick={() => setAnimal(a)}>Edit
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>

            <Edit animal={animal} editAnimal={editAnimal} />
        </div>
    );
};

export default Animal;
