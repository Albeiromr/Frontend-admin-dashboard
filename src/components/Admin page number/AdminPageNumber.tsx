import React, {FC, Fragment, useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {componentProps} from './types';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminPageNumber:FC<componentProps> = (props) => {

    const {pageNumberSelected, setPageNumberSelected, setProductOffset} = useContext(AdminDashboardContext);

    const handleClick = () => {
      if (pageNumberSelected !== props.number) setPageNumberSelected(props.number);
      else return;

      setProductOffset(props.number * 6 - 6);
    };

    return(
        <Fragment >
            <p 
            onClick={handleClick}
            className={pageNumberSelected === props.number ?
            "admin-page-number--selected" :
            "admin-page-number" }
            >{props.number}</p>
        </Fragment>
    )
};

export default AdminPageNumber;