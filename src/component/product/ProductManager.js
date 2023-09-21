import React from 'react';

class ProductManager extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                id: 1,
                name: "Bằng",
                img: "https://haycafe.vn/wp-content/uploads/2022/03/anh-chan-dung-1.jpg"
            }],
            product: {},
            productEdit: {},
            search: "",
            searchArray: []
        }
    }

    create2 = () => {
        this.setState({products: [...this.state.products, this.state.product]})
    }

    changeInputProductCreate = (event) => {
        let {id, value} = event.target;
        this.setState({product: {...this.state.product, [id]: value}})
    }

    changeInputSearch = (event) => {
        let {value} = event.target;
        let arr = this.state.products.filter((p) => p.name.includes(value));
        this.setState({searchArray: arr, search: value});
    }

    changeInputProductEdit = (event) => {
        let {name, value} = event.target;
        this.setState({productEdit: {...this.state.productEdit, [name]: value}})
    }

    showEdit = (id) => {
        let productEdit = this.state.products.filter((p) => p.id == id);
        this.setState({productEdit: productEdit[0]});
    }

    edit = () => {
        let index = this.state.products.findIndex((p) => p.id == this.state.productEdit.id);
        let arr = [...this.state.products]
        arr[index] = this.state.productEdit;
        this.setState({products: arr})
    }


    render() {
        let products = [];
        if (this.state.search){
            products = this.state.searchArray;
        }else {
            products = this.state.products;
        }
        return (
            <div className="container">
                <h2>Striped Rows</h2>
                <p>The .table-striped class adds zebra-stripes to a table:</p>
                <div className="row">
                    <div className="col-8">
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                data-target="#modalCreate">Create
                        </button>
                    </div>
                    <input placeholder="search" onInput={this.changeInputSearch} className="col-2"/>
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
                        products.map((p) => {
                            return (<tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td><img src={p.img} width="300" height="250"/></td>
                                <td>
                                    <button type="button" onClick={() => this.showEdit(p.id)}
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
                                <input id="id" name="id" onInput={this.changeInputProductCreate} placeholder="id"/><br/>
                                <input id="name" name="name" onInput={this.changeInputProductCreate}
                                       placeholder="name"/><br/>
                                <input id="img" name="img" onInput={this.changeInputProductCreate}
                                       placeholder="img"/><br/>
                            </div>

                            <div className="modal-footer">
                                <button type="button" onClick={this.create2} className="btn btn-success"
                                        data-dismiss="modal">Create
                                </button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="modal" id="modalEdit">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Modal Edit</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <input name="id" value={this.state.productEdit.id} onInput={this.changeInputProductEdit}
                                       placeholder="id"/><br/>
                                <input name="name" value={this.state.productEdit.name}
                                       onInput={this.changeInputProductEdit} placeholder="name"/><br/>
                                <input name="img" value={this.state.productEdit.img}
                                       onInput={this.changeInputProductEdit} placeholder="img"/><br/>
                            </div>

                            <div className="modal-footer">
                                <button type="button" onClick={this.edit} className="btn btn-success"
                                        data-dismiss="modal">Edit
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


export default ProductManager;
