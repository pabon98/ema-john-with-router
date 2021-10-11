const { useContext } = require("react")
const { AuthContext } = require("../Context/Authprovider")

const useAuth=()=>{
    return useContext(AuthContext)
}
export default useAuth