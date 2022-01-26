import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";

const Review = () => {
  // const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const reviewStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: 600,
  };
  const onSubmit = (data) => {
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("review inserted successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <Typography variant="h2" style={reviewStyle} sx={{ my: 4 }}>
       Share Your Travel Experience
      </Typography>
      <Box
        sx={{ width: { xs: "90%", sm: "80%", md: "80%" }, mx: "auto", my: 4 }}
        className="contact-form"
      >
        
        <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
          <input type="text" placeholder="Your Name" {...register("name")} />
          <input
            type="text"
            placeholder="Your Position"
            {...register("position")}
          />
          <input
            type="number"
            placeholder="Give us rating"
            {...register("rating")}
          />
          <input
            type="text"
            placeholder="Enter a image link"
            {...register("image")}
          />
          <textarea
            name=""
            id=""
            cols="22"
            rows="10"
            placeholder="Your Message"
            {...register("reviewText")}
          ></textarea>
          <Button
            variant="contained"
            sx={{
              background: "#000",
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

export default Review;
