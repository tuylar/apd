import React, { Component } from 'react'
import { getAllMember } from '../../../service/Service';
import './All.css'

export class AllMember extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allMembers: [],

        }
        console.log(props);
    }

    componentDidMount() {

        getAllMember()
            .then((response) => {
                this.setState({
                    allMembers: response
                })
            })
    }

    getMember = (id) => {
        this.props.history.push(`/getMember/${id}`)
    }


    goBack = () => {
        this.props.history.push(`/admin`)
    }

    render() {
        return (
            <>
                <div class="user-all-main">
                    <h1 class="user-title">Members</h1>
                    <table class="user-table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="user-th">ID</th>
                                <th class="user-th">Name</th>
                                <th class="user-th">Email</th>
                                <th class="user-th">Condition</th>
                                <th class="user-th">Status</th>
                                <th class="user-th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allMembers.map(member =>
                                    <tr class="user-tr">
                                        <td class="user-td">{member.id}</td>
                                        <td class="user-td">{member.memberName}</td>
                                        <td class="user-td">{member.email}</td>
                                        <td class="user-td">{member.memberCondition}</td>
                                        <td class="user-td">{member.memberStatus}</td>
                                        <td class="user-td">
                                            <button class="user-btn" onClick={() => this.getMember(member.id)}>VIEW</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className='user-btn-div'>
                        <button class="user-back-btn" role="button" onClick={this.goBack}>Back</button>
                    </div>
                </div>

            </>
        )
    }
}

export default AllMember