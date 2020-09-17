import Axios from "axios";
import qs from 'qs';

export const getAnimes = async (params) => {
    const result = await Axios.get(
      "https://kitsu.io/api/edge/anime?" +
        qs.stringify(params, { encode: true })
    );
    return result.data;
};
