
import React, { Component } from "react";
import Employees from "./Employees.js";
import Search from "./Search.js";


class Directory extends Component {

    state = {

        employees: [],

        empSort: [],

        search: "",

        sorted: false
    };


    componentDidMount = () => {

        fetch(`https://randomuser.me/api/?results=20&nat=us&inc=name,email,phone,id,picture,dob`)
            .then(res => res.json())

            .then(json => {

                this.setState({ employees: json.results })
            })
    };

}
