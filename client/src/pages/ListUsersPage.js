import React from 'react';
import { connect } from 'react-redux';

import { Alert } from 'react-bootstrap';
import { isLoading, isError } from '../util/loadingObject';
import { LinkContainer } from 'react-router-bootstrap';

// workaround for https://github.com/react-bootstrap/react-bootstrap/issues/2304
// replace with Pager.Item once fixed
import FixedPagerItem from '../util/fixPagerItem';

/**
 * Lists users, including pagination.
 */
class ListAllUserPage extends React.Component {
    static contextTypes = {
        history: React.PropTypes.object.isRequired
    }

    /* fetch user list, using the ?page= query param in URL */
    fetchData(location) {
        const page = location.query.page || 0;
        // implement me - fetch the actual data
        this.page = Number(page)
    }

    /* Component is about to display - fetch the data from the server */
    componentWillMount() {
        this.fetchData(this.props.location);
    }

    /* Our props or state changed.  Our router has injected the 'location'
     * props. If it changed, refetch the data.
     */
    componentDidUpdate(prevProps, prevState) {
        if (this.props.location !== prevProps.location)
            this.fetchData(this.props.location);
    }

    hasPrevPage() {
        return this.page !== 0;
    }

    hasNextPage() {
        return this.props.userlist.has_more;
    }

    // the URL of the next page, suitable for use in <Link> or <LinkContainer>
    nextPageUrl() {
        const loc = this.props.location
        const newQuery = { ...loc.query, page: this.page + 1 }
        return ({ pathname: loc.pathname, query: newQuery })
    }

    // go to next page
    nextPage() {
        this.context.history.push(this.nextPageUrl())
    }

    prevPageUrl() {
        const loc = this.props.location
        const newQuery = { ...loc.query, page: this.page - 1 }
        return ({ pathname: loc.pathname, query: newQuery })
    }

    prevPage() {
        this.context.history.push(this.prevPageUrl())
    }

    render() {
        const userlist = this.props.userlist

        if (isLoading(userlist)) return (<p>Loading...</p>);
        if (isError(userlist)) return (<Alert bsStyle='danger'>{userlist.error.response.statusText}</Alert>);
        return (
          <div>Implement a table here that lists the current userlist. 
            Check out Pager and Table from react-bootstrap
            You could implement pagination like so:
               { this.hasNextPage() &&
                <LinkContainer to={this.nextPageUrl()}>
                  <FixedPagerItem next>Next Page &rarr;</FixedPagerItem>
                </LinkContainer>
               }
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userlist: state.admin.userlist
    };
}

export default connect(mapStateToProps)(ListAllUserPage);

