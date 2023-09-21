import axios from "axios";

class StudentService {
    getAll = () => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:8080/students")
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


export default StudentService;
