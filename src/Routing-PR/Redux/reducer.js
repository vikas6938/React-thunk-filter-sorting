import React from 'react'

const initialState = {
    team: [
        { SrNo: '01', name: 'Vikas Borse', Dep: 'Mechanical', id: 'A123', Country: 'INDIA' },
        { SrNo: '02', name: 'Kashyap Chauhan', Dep: 'IT', id: 'B123', Country: 'Canada' },
        { SrNo: '03', name: 'Omprakash', Dep: 'Electrical', id: 'C123', Country: 'Dubai' },
        { SrNo: '04', name: 'Jay Nandarbarwala', Dep: 'Civil', id: 'D123', Country: 'Australiya' },
        { SrNo: '05', name: 'Riya Bhakta', Dep: 'B.Com', id: 'E123', Country: 'Dubai' },
        { SrNo: '06', name: 'Nilay', Dep: 'Automobile', id: 'F123', Country: 'Australiya' },
        { SrNo: '07', name: 'Priyanshu Mishra', Dep: 'LLB', id: 'G123', Country: 'INDIA' },
        { SrNo: '07', name: 'Dev Chauhan', Dep: 'Civil', id: 'H123', Country: 'INDIA' },
        { SrNo: '07', name: 'Nitya Patel', Dep: 'BCA', id: 'I123', Country: 'INDIA' },
    ],
    filteredTeam: [],
    sortOrder: 'asc'
};

const reducer = (state = initialState, action) => {
    if (action.type === 'filter') {
        return {
            ...state, filteredTeam: state.team.filter(item => item.name.toLocaleLowerCase().includes(action.payload.toLowerCase()))
        }
    }
    if (action.type === 'sortTeam') {
        const sortedTeam = [...state.filteredTeam].sort((a, b) => {
            if (action.payload === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        return {
            ...state, filteredTeam: sortedTeam, sortOrder: action.payload
        };
    }
    if (action.type === 'filterByCountry') {
        
        let x = state.team.filter((item) => {
            return action.payload === 'All' ? true : action.payload === item.Country;
        })
        return {
            ...state, filteredTeam: x
        }

    }
    return state;
}

export default reducer