import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aca577f80fe5433384a909c577ea49e7",
  },
});
