/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { searchText } from "../../store/actions";

function Nav(props) {
  const { callBack } = props;

  const dispatch = useDispatch();

  const searchResult = (event) => {
    callBack(event.target.value);
    dispatch(searchText({ search: event.target.value }));
  };
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          Social<b>Boat</b>
        </a>
        <button
          type="button"
          data-target="#navbarCollapse"
          data-toggle="collapse"
          className="navbar-toggle"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div id="navbarCollapse">
        <div className="navbar-form form-inline">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Search Here..."
            onChange={searchResult}
            // value={search}
          />
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <i className="fa fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
