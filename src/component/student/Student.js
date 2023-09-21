import React, {PureComponent} from 'react';
import StudentService from "./StudentService";

class Student extends PureComponent {
    studentService = new StudentService();

    constructor() {
        super();
        this.state = {
            students: [],
            student: {}
        }
        this.getAll();
    }

    getAll = () => {
        this.studentService.getAll().then((students) => {
            this.setState({students: students})
        }).catch((error) => {
            alert("error");
        })
    }

    save = () => {
        this.studentService.save(this.state.student).then((response) => {
            alert("thanh cong")
            this.getAll();
        }).catch((error) => {
            alert("error");
        })
    }


    changeInputProductCreate = (event) => {
        let {name, value} = event.target;
        this.setState({student: {...this.state.student, [name]: value}})
    }


    render() {
        return (
            <div className="container">
                <h2>Striped Rows</h2>
                <div className="row">
                    <div className="col-8">
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                data-target="#modalCreate">Create
                        </button>
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
                        this.state.students.map((s) => {
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

                <div className="modal" id="modalCreate">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Modal Create</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <input name="id" onInput={this.changeInputProductCreate} placeholder="id"/><br/>
                                <input name="name" onInput={this.changeInputProductCreate}
                                       placeholder="name"/><br/>
                                <input name="img" onInput={this.changeInputProductCreate}
                                       placeholder="img"/><br/>
                            </div>

                            <div className="modal-footer">
                                <button type="button" onClick={this.save} className="btn btn-success"
                                        data-dismiss="modal">Create
                                </button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}


export default Student;
