import React, {useEffect,useState} from 'react';
import BHOHomeMain from "../../Components/BoardingHouseOwner/BHOHomeMain.js";
import Spinner from '../../Components/StyleElements/Spinner.js';
const BHOHome = () =>{
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },800)
  },[]);

  if (loading) {
    return(<><Spinner/></>);
  }else{
    return(<BHOHomeMain/>);
  }
}

export default BHOHome;