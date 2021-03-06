import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";
import { editedUser } from "../store/user";
import { Link } from "react-router-dom";

const AdminUsers = props => {
  const user = props.user;

  return (
    <Fade>
      <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
        <div className="row">
          <div className="card-body">
            <div className="col-md">
              <Link to={`/users/admin/${user.id}`}>
                <h5 className="card-title">{user.email}</h5>
              </Link>
              <div className="col-md">
                <h5 className="card-text">{user.isAdmin ? "admin" : " "}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AdminUsers;
