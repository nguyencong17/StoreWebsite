import axiosClient from "./axiosClient";
const blogApi = {
    getAll(params){
        const url = '/posts';
        return axiosClient.get(url, { params });
    },

    get(id){
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url = '/posts';
        return axiosClient.post(url, data);
    },

    upadte(data){
        const url = `/posts/${data.id}`;
        return axiosClient.get(url, data);
    },

    remove(id){
        const url = `/posts/${id}`;
        return axiosClient.delete(url);
    }
};

export default blogApi;