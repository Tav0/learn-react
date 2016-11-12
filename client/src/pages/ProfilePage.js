import React from 'react';
import { connect } from 'react-redux';

import { Panel, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router';
import { isLoading } from '../util/loadingObject';
//import config from '../config/';

import { updateProfile } from '../actions/user.js';
import ProfileForm from '../containers/forms/ProfileForm';


class ProfilePage extends React.Component {
    static propTypes = {
        user : React.PropTypes.object
    }

    doUpdate(userObj) {
        this.props.dispatch(updateProfile(userObj.id, userObj))
    }

    render() {
        const user = this.props.user
        return (
            <Row>
                <Col xsOffset={0} xs={12} smOffset={4} sm={4}>
                    <Panel header={<h1>Profile</h1>} >
                        <ProfileForm
                            loading={isLoading(user)}
                            error={user.error}
                            onSubmit={v => this.doUpdate(v)} />
                    </Panel>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth
    };
}

export default connect(mapStateToProps)(ProfilePage);

