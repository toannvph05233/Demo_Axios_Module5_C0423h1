import React, {useEffect, useState} from 'react';
import studentService from "../student/StudentService";

const ProductHook = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    console.log("render")

    // useEffect(callback,[deps])
    useEffect(() => {
        getAll();
    },[search])


    let getAll = () => {
        studentService.getAll(search).then((students) => {
            setStudents(students)
        }).catch((error) => {
            alert("error");
        })
    }


    return (
        <div className="container">
            <h2>Striped Rows</h2>
            <div className="row">
                <div className="col-8">
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target="#modalCreate">Create
                    </button>
                </div>
                <div className="col-4">
                    <input value={search} onInput={(event) => setSearch(event.target.value)}/>
                </div>
            </div>
            <br/>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((s) => {
                        return (<tr>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td><img src={s.img} width="300" height="250"/></td>
                            <td>
                                <button type="button"
                                        className="btn btn-warning" data-toggle="modal"
                                        data-target="#modalEdit">Edit
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>)
                    })
                }


                </tbody>
            </table>


        </div>

    );
};

export default ProductHook;
