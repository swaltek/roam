import Cookie from 'js-cookie'

const apiHelpers = { }

apiHelpers.getCsrfConfig = () => {
  return {
    // needs to exist with separate projects 
    withCredentials: true, 
    headers: {
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  }
}

apiHelpers.tryCatchFetch = async (axiosCall) => {
  // async always returns a promise
  try {
    //await- wait for promise. similar to .then
    const response = await axiosCall() 
    // this doesnt look like a promise but gets converted to a promise via async ... success avoids returning null
    return response.data ? response.data : { message:"success" } 
  }
  catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e)
    return null
  }
}

export default apiHelpers