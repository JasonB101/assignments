
import axios from "axios"

const doRequest = ({ form: { fname, lname, type, price, killed, id } }) => {
    if (!id) {
        axios.post("/api/bounties/", {
            fname,
            lname,
            killed,
            price,
            type
        })

    } else {

        axios.put(`/api/bounties/${id}`, {
            fname,
            lname,
            killed,
            price,
            type
        })
    }
}

const deleteRequest = (id) => {
    axios.delete(`/api/bounties/${id}`)
}


export { deleteRequest }
export default doRequest
