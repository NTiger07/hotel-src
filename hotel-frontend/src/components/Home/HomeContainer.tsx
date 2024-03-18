import axios from "axios"

const HomeContainer = () => {
  const getHome = () => {
    axios
      .get(`${import.meta.env.VITE_CLOUD_URL}hello`)
      .then((res) => {
       console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div onClick={getHome}>HomeContainer</div>
  )
}

export default HomeContainer