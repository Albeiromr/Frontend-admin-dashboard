import React, { Fragment, useContext, FC} from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { componentProps } from "./types";
import { MainNavContext } from "../../context/Main nav context/MainNavContext";
import {useHistory} from 'react-router-dom';

const MainNavButton: FC<componentProps> = (props) => {
  const { setOptionSelected, optionSelected, productOptions } = useContext(
    MainNavContext
  );

  const history = useHistory();

  const handleClick = () => {
    if (optionSelected !== props.name) setOptionSelected(props.name);
    else return;
    history.push(props.path)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

 

  const productsLength: number = productOptions.length - 1;

  return (
    <Fragment>
        <li
          className={
            optionSelected === props.name
              ? "main-nav__option--selected"
              : "main-nav__option"
          }
          onClick={handleClick}
        >
          <p
            className={
              optionSelected === props.name
                ? "main-nav__option-text--selected"
                : "main-nav__option-text"
            }
          >
            {props.name}
          </p>
        </li>
      <div
        className={
          props.name !== productOptions[productsLength].name
            ? "main-nav__line"
            : "main-nav__line--hidden"
        }
      ></div>
    </Fragment>
  );
};

export default MainNavButton;
