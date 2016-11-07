import React from 'react';
import { connect } from 'react-redux';

import { Panel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { isLoading } from '../util/loadingObject';
import { register } from '../actions/user.js';
import RegisterForm from '../containers/forms/RegisterForm';

class RegisterPage extends React.Component {
    static propTypes = {
        user : React.PropTypes.object
    }

    // how to dispatch the action that registers the user
    doRegister(userobject) {
        this.props.dispatch(register(userobject))
    }

    render() {
        const user = this.props.user
        return (
            <Row>
                <Col xsOffset={0} xs={10} smOffset={4} sm={4}>
                    <Panel header={<h1>Please log in</h1>} >
                        <RegisterForm
                            loading={isLoading(user)}
                            error={user.error}
                            onSubmit={v => this.doRegister(v)} />
                    </Panel>
                    <div className="text-center">
                        Have an account?
                        <Link to='/login'> Login</Link>.
                    </div>
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

export default connect(mapStateToProps)(RegisterPage);

