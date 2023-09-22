import axios from "axios";

class StudentService {
    getAll = (search) => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/students?search="+search)
                .then(response => {
                    resolve(response.data);
                })
                .catch(function (err) {
                    reject(err)
                });
        })

    }

    save = (student) => {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/students", student)
                .then(response => {
                    resolve(response);
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }
}

let studentService = new StudentService();


export default studentService;
