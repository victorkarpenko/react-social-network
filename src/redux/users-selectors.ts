import {createSelector} from "reselect";
import {AppStateType} from "./store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
};

export const getUsersSuper = createSelector(getUsers, (users)=>{
   return users.filter(u => true);
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
};

export const getUsersTotalCount = (state: AppStateType) => {
   return state.usersPage.totalItemsCount;
};

export const getCurrentPage = (state: AppStateType) => {
    return  state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
};

export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter;
};