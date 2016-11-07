import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert, Button, ButtonToolbar, 
         Form, FormGroup } from 'react-bootstrap';
import { propTypes as reduxFormPropTypes } from 'redux-form';

import connectedForm from './connectedForm';
import LabeledFormField from './LabeledFormField';

/*
 * This form (for now at least) doubles as registration and profile
 * update form.
 */
class RegisterForm extends React.Component {
  static propTypes = {
    ...reduxFormPropTypes,
    onSubmit : React.PropTypes.func.isRequired,
    autherror : React.PropTypes.object
  }

  render() {
    // remove the eslint suppressions when you start developing.
    const {
      // eslint-disable-next-line 
      onSubmit,     // submission callback provided by parent component
      // eslint-disable-next-line 
      handleSubmit, // provided by redux-form, read http://redux-form.com/6.1.1/docs/api/Props.md/ 
                    // if we used 'handleSubmit' instead of 'handleSubmit(onSubmit)' it would call
                    // this.props.onSubmit implicitly.  We use onSubmit for clarity.
      // eslint-disable-next-line 
      loading,
      // eslint-disable-next-line 
      valid
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <LabeledFormField name="username" label={'User Name'} />
         <LabeledFormField name="password" label={'Password'} type="password" />
         <LabeledFormField name="firstname" label={'First Name'} />
         <LabeledFormField name="lastname" label={'Last Name'} />
         <LabeledFormField name="email" label={'Email'} type="email" />

         { this.props.autherror &&
             <FormGroup>
                <Alert bsStyle='danger'>
                  {this.props.message || 'Check your input'}
                </Alert>
             </FormGroup>
         }

         <ButtonToolbar>
            <Button
              disabled={!valid}
              type='submit'
              bsStyle='success'>
              Submit
            </Button> 
            <LinkContainer to={'/'}>
              <Button>Cancel</Button>
            </LinkContainer>
         </ButtonToolbar>
      </Form>
    );
  }
}

const validate = (values) => {
    const errors = {}
    // implement me

    return errors
}

function mapStateToProps(state) {
  return {
    autherror: state.auth.error,
    initialValues: state.auth
  };
}

export default connectedForm({
  form: 'login',
  validate,
}, mapStateToProps)(RegisterForm);

