import React, { Component } from 'react'
import Swal from 'sweetalert2'

export default class ValidationForm extends Component {

    state = {
        values: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            passwordconfirm: '',
        },
        errors: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            passwordconfirm: '',
        }

    }

    handelChangeValues = (event) => {
        let { name, value, type } = event.target;
        console.log(name, value);
        // baat dong bo
        let newValues = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors };
        console.log(value)
        if (value.trim() === '') {
            newErrors[name] = name + 'is required!';

        }
        if (type === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (value.match(re)) {
                newErrors[name] = '';
            } else {
                newErrors[name] = name + ' is ' + 'invalid!';;
            }
        }
        if (name === 'passwordconfirm') {
            if (value === newValues['password']) {
                newErrors['passwordconfirm'] = '';
            } else {
                newErrors['passwordconfirm'] = name + ' is invalid'
            }
        }
        this.setState({
            values: newValues,
            errors: newErrors,
        })
        // this.setState({
        //    value : {...this.state.value,[name]:value}
        // }, () => {
        //     console.log(this.state)
        // }
        // )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { values, errors } = this.state;
        // console.log(values,errors);
        let valid = true;
        let profile = '';
        let errorProfile = '';
        console.log('error', errors);
        console.log('values', values);
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
            }
            profile += `<p className='text-left'> <b>${key}</b>${values[key]}</p>`;
        }
        for (let key in errors) {
            if (errors[key] !== '') {
                valid = false;
                errorProfile += `<p class='text-left'><b class='text-danger'>${key} is invalid</b></p>`;

            }
        }

        if (!valid) {
            Swal.fire({
                title: 'Error!',
                html: errorProfile,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        } else {
            Swal.fire({
                title: 'Sucessfully!',
                html: profile,
                icon: 'sucess',
                confirmButtonText: 'continue'
            })

        }
        console.log(errors);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='container'>
                    <h3 className='text-center'>Profile</h3>
                    <div className='row '>
                        <div className='col-12 form-group'>
                            <label >firstname</label>
                            <input className='form-control' value={this.state.values.firstname} type="text" name='firstname' required onChange={this.handelChangeValues} />
                            <span className='text text-danger'>{this.state.errors.firstname}</span>
                        </div>
                        <div className='col-12 form-group'>
                            <label >Lastname</label>
                            <input className='form-control' value={this.state.values.lastname} type="text" name='lastname' required onChange={this.handelChangeValues}></input>
                            <span className='text text-danger'>{this.state.errors.lastname}</span>

                        </div>
                        <div className='col-12 form-group'>
                            <label >username</label>
                            <input className='form-control' value={this.state.values.username} type="text" name='username' required onChange={this.handelChangeValues}></input>
                            <span className='text text-danger'>{this.state.errors.username}</span>

                        </div>
                        <div className='col-12 form-group'>
                            <label >Email</label>
                            <input className='form-control' value={this.state.values.email} type='email' name='email' required onChange={this.handelChangeValues}></input>
                            <span className='text text-danger'>{this.state.errors.email}</span>

                        </div>
                        <div className='col-12 form-group'>
                            <label >password</label>
                            <input className='form-control' value={this.state.values.password} type="password" name='password' required onChange={this.handelChangeValues}></input>
                            <span className='text text-danger'>{this.state.errors.password}</span>

                        </div>
                        <div className='col-12 form-group'>
                            <label >passwordconfirm</label>
                            <input className='form-control' value={this.state.values.passwordconfirm} type="password" name='passwordconfirm' required onChange={this.handelChangeValues}></input>
                            <span className='text text-danger'>{this.state.errors.passwordconfirm}</span>

                        </div>
                        <div className='col-12'>
                            <input type='submit' value='submit' className='col-12 w-100 bg-dark text-white' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
