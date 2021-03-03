import React,{useState,useEffect} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
  const [sortfunc,setSortfunc]=useState(descend);


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light" >Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={()=>setSortfunc(ascend)}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={()=>setSortfunc(dateorder)}>Most Recent</button>
            </div>
            <Articles articles={articles} />
        </div>
    );

}

function descend(a,b)
{
  return (a.upvotes<b.upvotes)?1:(a.upvotes>b.upvotes)?-1:0;
}

function ascend(a,b)
{
  return (a.upvotes>b.upvotes)?1:(a.upvotes<b.upvotes)?-1:0;
}

function dateorder(a,b)
{
var arrStartDate = a.date.split("-");
var date1 = new Date(arrStartDate[0], arrStartDate[1], arrStartDate[2]);
var arrEndDate = b.date.split("-");
var date2 = new Date(arrEndDate[0], arrEndDate[1], arrEndDate[2]);
  return (date1<date2)?1:(date1>date2)?-1:0;
}

export default App;
