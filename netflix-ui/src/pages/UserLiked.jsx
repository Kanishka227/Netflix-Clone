import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getUserLikedMovies } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import Card from "../components/Card";

export default function UserLiked() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const movies = useSelector((state) => state.netflix.movies);

  const [email, setEmail] = useState(undefined);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email));
    }
  }, [dispatch]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled}>
        <div className="content flex column">
          <h1>My List</h1>
          <div className="grid flex">
            {movies.map((movie, index) => {
              return (
                <Card
                  movieData={movie}
                  index={index}
                  key={movie.id}
                  isLiked={true}
                />
              );
            })}
          </div>
        </div>
      </Navbar>
    </Container>
  );
}

const Container = styled.div``;
