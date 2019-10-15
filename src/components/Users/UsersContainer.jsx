import * as React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers,
    getUsersTotalCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        if (this.props.users.length === 0) {
            this.props.requestUsers(currentPage, pageSize);
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {

        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Users {...this.props} onPageChanged={this.onPageChanged} />}
            </>);
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        linksOnPage: state.usersPage.linksOnPage
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        requestUsers,
        follow,
        unfollow
    }),
)(UsersContainer);