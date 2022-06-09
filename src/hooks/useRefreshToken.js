import axios from 'axios';
// import useAuth from './useAuth';

const useRefreshToken = () => {
    // const { setAuth } = useAuth();

    const refresh = async () => {
       
          axios
            .get(`${process.env.REACT_APP_BASE_LINK}/user/ref-token`,{
              
              credentials:"include",
            })
            .then((response) => {
             
             localStorage.setItem("jwt", response.data.acessToken);
             window.location.reload("/");
             console.log(response.data,"ref")
            })
            .catch((err) => {
              console.log(err);
            });
        
    }
    return refresh;
};

export default useRefreshToken;