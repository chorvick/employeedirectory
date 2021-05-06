import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/APIcalls";

class EmployeeContainer extends Component {


    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        sortDirections: this.initialSortDirections,
    };



    get initialSortDirections() {
        return {
            name: "",
            phone: "",
            email: "",
            dob: "",
        };
    }

    // load random people from api
    componentDidMount() {
        API.getEmployees()


            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results,
                })
            )
            .catch((err) => console.log(err));
    }

    /// set up ability to filter by employee name not working properly
    handleInputChange = (event) => {
        const value = event.target.value;

        this.setState({ search: value });

        this.filterEmployees(value.toLowerCase().trim());
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };


    sortBy = (key, primary = 0, secondary = 0) => {
        let sortedEmployees = this.state.filteredEmployees;

        if (this.state.sortDirections[key]) {
            this.setState({
                filteredEmployees: sortedEmployees.reverse(),
                sortDirections: {
                    ...this.initialSortDirections,
                    [key]: this.state.sortDirections[key] === "asc" ? "desc" : "asc",
                },
            });

        } else {
            sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
                a = a[key];
                b = b[key];

            });

            this.setState({
                filteredEmployees: sortedEmployees,

                sortDirections: {
                    ...this.initialSortDirections,

                    [key]: "asc",
                },
            });
        }
    };

    formatDate = (date) => {
        date = new Date(date);
        let dob = [];
        dob.push(("0" + (date.getMonth() + 1)).slice(-2));

        dob.push(("0" + date.getDate()).slice(-2));

        dob.push(date.getFullYear());


        return dob.join("-");
    };

    render() {
        return (
            <>

                <SearchBar
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <div className="container mt-4">
                    <EmployeeTable
                        state={this.state}
                        sortBy={this.sortBy}
                        filterEmployees={this.filterEmployees}
                        formatDate={this.formatDate}
                    />
                </div>
            </>
        );
    }
}

export default EmployeeContainer;