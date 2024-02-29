import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { filter, filterByCountry, sortTeam } from '../Redux/Action';
import css from '../Assets/css/main.css'

const Users = ({ user, setUser }) => {
    const team = useSelector((state) => state.team)
    const dispatch = useDispatch()
    const filteredTeam = useSelector((state) => state.filteredTeam)
    const sortOrder = useSelector((state) => state.sortOrder);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCountry, setSearchfess] = useState('');


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        dispatch(filter(e.target.value));
    } 

    const handleFilter = (e) => {
        let x = e.target.value
        // // setSearchfess(e.target.value);
        // console.log(e.target.value)
        dispatch(filterByCountry(x));
    };
    useEffect(() => {
        dispatch(filterByCountry('All'));
    },[])


    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        dispatch(sortTeam(newSortOrder));
    };

    const filteredData = searchTerm ? filteredTeam : team;


    return (
        <div className=' container px-3'>
            <div className="breadcrumb-header d-flex my-3 justify-content-evenly bg">
                <div className="my-auto">
                    <h4 className='text-white'>All Over Country Empolyee In Myntra</h4>
                </div>
               
            </div>
            <div className=" m-auto bg">
            <button className='btn btn-lg btn-block btn-warning  px-4 py-6 fs-6' onClick={handleSort}>
                    Sort By Name 
                    {/* {sortOrder === 'asc' ? <i class="ms-2 fa-regular fa-circle-up"></i> : <i class="bi bi-arrow-down-circle-fill"></i>} */}
                </button>
                
                <table class="table  mb-0 border-none" >
                
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name
                                <input type="text" placeholder='search..' value={searchTerm} onChange={handleChange} className=' ms-2 search px-2 py-1 text-white' />
                            </th>
                            <th scope="col">Department</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">
                                Work Place
                                <select name="" id="" onChange={handleFilter} className='search px-2 py-1 text-center text-theme ms-2'>
                                    <option value="" >-Select Country-</option>
                                    <option value="INDIA">INDIA</option>
                                    <option value="Australiya">Australiya</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="All">All</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{
                        filteredTeam && filteredTeam.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row">{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Dep}</td>
                                    <td>{item.id}</td>
                                    {
                                        item.Country == 'Paid' ?
                                            (<td><span className='fw-bold ' >{item.Country}</span></td>)
                                            : (<td><span className='fw-bold ' >{item.Country}</span></td>)
                                    }
                                </tr>
                            )
                        })

                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
