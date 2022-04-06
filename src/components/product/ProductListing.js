import BootstrapTable from "react-bootstrap-table-next";
import * as ReactBootstrap from 'react-bootstrap'
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";
import Select from "react-select";

import { Link } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { setProducts, nextProducts } from "../../redux/actions/productActions";
import Filter from "./Filter";



const columns = [
  {
    dataField: "paymentAmount",
    hidden: true
  },
  {
    dataField: "paymentCurrency",
    text: "Currency",
    sort: true
  },
  {
    dataField: "paymentType",
    text: "Payment mode",
    sort: true
  },
  {
    dataField: "paymentDate",
    text: "Payment Date",
    sort: true
  },
  {
    dataField: "paymentStatus",
    text: "Payment status",
    sort: true
  },
];
const options = [
  {
    id: "P",
    name: "Pending"
  },
  {
    id: "A",
    name: "Approved"
  }
];

const ProductListing = () => {
  const [data, setData] = useState([]);
  const [cat, setcat] = useState([]);
  const [moreList, setMoreList] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);


  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "http://localhost:9001/api/Payments"
      )
      .then(response => {
        setData(response.data.results);
        setMoreList(response.data.metaDatal.nextPageIndex)
        dispatch(setProducts(response.data.results))
        dispatch(nextProducts(response.data.metaDatal))
      })

      .catch(function(error) {
        console.log(error);
      });

      
  }, []);
  const handleChange = (event) => {
    fetch(`http://localhost:9001/api/Payments?pagelndex=${moreList}`)
      .then(res => res.json())
      .then(res => {
        setData(response.data.results);
      });
  }
  const filteringName = (e) => {
    let categ = e.target.value;

    if (categ === "All") {
      setcat(categ)
      setData(data)
    } else {
      setcat(categ)
      setData(data.filter((product) => {
           return product.paymentStatus.indexOf(e.target.value) >= 0;
      }))
    }
  };

  return (
    <div>

<Filter filteringName={filteringName} cat={cat} />
      <ReactBootstrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>payment Amount</th>
          <th>payment Currency</th>
          <th>paymentType</th>
          <th>payment Status</th>
          <th>payment Date</th>
        </tr>
      </thead>
      <tbody>
    
      {data.map((p, i) => {
              return (
                <tr key={i}>
                  <td className="selectorTextL">{p.paymentAmount}</td>
                  <td className="selectorTextL">{p.paymentCurrency}</td>
                  <td className="selectorTextL">{p.paymentType}</td>
                  <td className="selectorTextL">{p.paymentStatus}</td>
                  <td className="selectorTextL">{p.paymentDate}</td>
                </tr>
              );
            })}   
      </tbody>
      </ReactBootstrap.Table>
      <button className="btn-load-more" onClick={(event) => handleChange(event, data.metaDatal)}>Load More</button>
    </div>
    
  );
};

export default ProductListing;
