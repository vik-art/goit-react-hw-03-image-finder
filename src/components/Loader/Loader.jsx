import Loader from "react-loader-spinner";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Component } from 'react';
import s from './Loader.module.css'

class LoaderMark extends Component {
  render() {
    return (
      <div className={s.loader}>
      <Loader
        type="Circles"
        color="rgb(32, 236, 5)"
        height={100}
        width={100}
        timeout={2000}
      />
      </div>
    );
  }
}
export default LoaderMark