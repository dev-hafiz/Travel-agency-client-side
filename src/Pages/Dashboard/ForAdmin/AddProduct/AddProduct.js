import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://pacific-sierra-58687.herokuapp.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added product successfully");
          reset();
        }
      });
  };
  const contactStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: 600,
    marginTop: "2rem",
  };
  return (
    <Container>
      <Typography variant="h3" style={contactStyle}>
        Add A BEAUTIFUL PLACES
      </Typography>
      <Box
        sx={{ width: { xs: "90%", sm: "80%", md: "80%" }, mx: "auto", my: 4 }}
        className="contact-form"
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", pt: 4 }}
          style={contactStyle}
        >
          Send us a message
        </Typography>
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter  Place Name*"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Enter Visiting Cost*"
            {...register("price")}
          />
          <input
            type="text"
            placeholder="Enter Image Link*"
            {...register("image")}
          />
          <input
            type="text"
            placeholder="Enter Visited Rating*"
            {...register("rating")}
          />
          <textarea
            name=""
            id=""
            cols="22"
            rows="10"
            placeholder="Enter Little Description "
            {...register("description")}
          ></textarea>
          <Button
            variant="contained"
            sx={{
              background: "#756146",
              color:'#fff',
              borderRadius: "25px",
              p: "8px 40px",
              mt: 3,
              fontSize: "17px",
              fontWeight: 600,
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddProduct;
