import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import './Home.css';

const ASearch = props => {
    const [search_input, setSearchInput] = useState("")
    const [output, setOutput] = useState(null)

    async function getData() {
        const res = await Axios.get("https://dbproject-group22.herokuapp.com/api/a-search", { params: {"search_input": search_input }});
        console.log(res.data)
        if (res.data){
            setOutput(JSON.stringify(res.data));
        }

    }

    const clickSearch = props => {
        getData();
        }

    const clickCharges = () => {
        Axios.post('https://dbproject-group22.herokuapp.com/api/charges', {
            RollNumber: search_input}).then((response)=>{
                if (response.data.message !== "Success"){
                    alert("Try again!")
                }
                else{
                    alert('No charges remaining for this user!')
                }
            })
        }
    
        console.log(output)
    return(
        <div>
            <h1> Student Financial Details</h1>
            <input className="search-bar" type="text" placeholder= "Search by Student ID" onChange={(e)=>{setSearchInput(e.target.value)}}/>
            <button className="search-btn" onClick={clickSearch}> Search </button>
            <div> &nbsp;&nbsp;&nbsp;&nbsp;</div>
            <h3> {output}</h3>
                <button id="btn" className="clear" onClick={clickCharges}> Clear Dues </button>
                {/* <script>
                    if (output) {
                        document.getElementById("btn").style = "none"
                    }
                </script> */}


        </div>
    )
}

export default ASearch;

