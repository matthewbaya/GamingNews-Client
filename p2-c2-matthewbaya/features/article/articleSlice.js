import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

// const dispatch = useDispatch(s);
const initialState = {
  list: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setFetchArticles: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const fetchArticles = () => {
  return async (dispatch) => {
    const { data } = await axios({
      method: "GET",
      url: "https://berita-terkini.matthew-baya.online/articles",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
    dispatch(setFetchArticles(data));
    console.log(data, "Fetch articles dari redux");
  };
};

export const deleteArticleById = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios({
        method: "DELETE",
        url: "https://berita-terkini.matthew-baya.online/articles/" + id,
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchArticles());
      if (response) {
        Swal.fire({
          title: "Post Deleted",
          text: "byeeeeeee~",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  };
};

export const { setFetchArticles } = articleSlice.actions;
export default articleSlice.reducer;
