import type { AuthStateInterface } from '@/store/slices/types';
import store from '@/store/store';
import axios, { AxiosError, AxiosResponse, } from 'axios';

let auth = {} as AuthStateInterface

const useAxios = (loading: boolean) => {

    store.subscribe(() => {
        const storeState = store.getState()
        auth = storeState.auth
    })

    const axiosInstance = axios.create({
        baseURL: `${import.meta.env.DI_API_BASE_URL}`,
    });

    axiosInstance.interceptors.request.use((config: any): any => {
        config.headers['Accept'] = 'application/json';
        config.headers['Content-Type'] = 'application/json';
        const state = store.getState();
        const token = state.auth?.access_token;
        const organization_id = state?.auth?.user?.organization
        config.headers.Authorization = token ? `Bearer ${token}` : null;
        config.params = { ...config.params, organization_id: organization_id }
        if (loading) {
            // implement Loader
        }
        return config;
    }, (error: AxiosError) => {
        if (loading) {
            // implement Loader
        }
        return Promise.reject(error)
    })

    axiosInstance.interceptors.response.use((response: AxiosResponse): any => {
        if (loading) {
            // implement Loader
        }
        return response
    }, (error: any) => {
        if (loading) {
            // implement Loader
        }
        
    })
}