import axios from "axios"

const GOOOGLE_FONT_KEY = import.meta.env.VITE_APP_GOOGLE_FONT_KEY
const googleClient = axios.create({
  baseURL: `https://www.googleapis.com/webfonts`,
  headers: {
    type : "application/json",
    Authorization: GOOOGLE_FONT_KEY,
  },
})

export const getFontsSevice = () => {
  return googleClient.get(`/v1/webfonts?key=${GOOOGLE_FONT_KEY}`)
}

