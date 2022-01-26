import React from "react";
import './Product.css';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Rating from "react-rating";
import { NavLink, useHistory } from "react-router-dom";
const AllProducts = ({ products, sliceNumber }) => {
  const history = useHistory();
  const bannerFontStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: "600",
  };
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ color:"#171717", marginTop:'120px', marginBottom:'20px', fontSize:'40px'}}
        >
          World Tourist Places
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color:"#171717", marginBottom:'60px', fontSize:'20px'}}>
          Our Places
        </Typography>
      </Box>
      <Grid  container spacing={3}>
        {products.slice(0, sliceNumber).map((product) => (
          <Grid key={product._id} item spacing={3} xs={12} sm={6} md={12}>
          
          <div style={{display:'flex', alignItems:'center', marginTop:'80px'}}  className="row singelNewsbox">
            <div className="col-lg-3 clo-md-3 col-12">
            <div className="newsImage">
                        <img src={product.image} alt="" />

                        <div className="link-newsbox">
                            <NavLink to="#">Belongs on List?</NavLink>
                            <NavLink to="#"><i className="far fa-thumbs-up"></i>Yes</NavLink>
                            <NavLink to="#"><i className="far fa-thumbs-down"></i>No</NavLink>
                        </div>

          </div>
            </div>
            <div className="col-lg-9 clo-md-9 col-12">
              
          
          <div className="newsDescription">
                        <h2>{product.name} </h2>
                        <p>{product.description}</p>
                        
                  
                     <button onClick={() => {
                    history.push(`/explore/${product._id}`);
                  }}>  
                   <NavLink  className="parisBtn" to="#"> <i className="fas fa-chevron-right"></i> Booking Place</NavLink>
                  </button>
                  <div style={{paddingTop:'6px', paddingBottom:'10px'}}>
                  <Rating
       
                    initialRating={product.rating}
                    readonly
                    emptySymbol="far fa-star rating"
                    fullSymbol="fas fa-star rating"
                  ></Rating>
                  </div>


                        <div className="alinknews">
                            <NavLink className="prbtn" to="#"><i className="fas fa-bed"></i>BEST HOTELS</NavLink>
                            <NavLink className="prbtn" to="#"><i className="fas fa-plane-departure"></i>FLIGHTS</NavLink>
                            <NavLink className="prbtn" to="#"><i className="fas fa-map-marker-alt"></i>THINGS TO DO</NavLink>
                        </div>
                    </div>
            </div>
          </div>
          
          <div >
          
         
          </div>
        
          
          
         
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllProducts;
