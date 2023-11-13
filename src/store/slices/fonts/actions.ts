import { IFontFamily } from "~/interfaces/editor"
import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import api from "~/services/api"
export const setFonts = createAction<IFontFamily[]>("fonts/setFonts")

export const getFonts = createAsyncThunk<void, never, { rejectValue: Record<string, string[]> }>(
  "fonts/getFonts",
  async (_, { rejectWithValue, dispatch }) => {
   const apiUrl = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDIv-oIlfRiWZNP1ddqUAImOThOIKFVBM0"
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Process the font data from the 'data' object
          const _data = data.items.map((_elt: any, fontIndex: number) => {                        
            return {
              ..._elt,
              id: fontIndex,
              full_name : _elt.family,
              postscript_name : _elt.family,
              preview : "https://www.fontsquirrel.com/presentation/theme_site/images/matcherator/matcherator_help_rotate_good.png",
              style : "regular",
              url : _elt.menu,
              layers: [
                {
                  id: fontIndex,
                  angle: 0,
                  stroke: "#ffffff",
                  strokeWidth: 0,
                  left: 0,
                  top: 0,
                  width: 363.87,
                  height: 107.4,
                  opacity: 1,
                  originX: "left",
                  originY: "top",
                  scaleX: 1,
                  scaleY: 1,
                  type: "StaticText",
                  flipX: false,
                  flipY: false,
                  skewX: 0,
                  skewY: 0,
                  visible: true,
                  start: 0,
                  stop: 10,
                  text: `${_elt.family}`,
                  fontSize: 44,
                  fontFamily: _elt.family,
                  textAlign: "center",
                  fontStyle: "normal",
                  fontURL: _elt.menu,
                  fill: "#000000",
                  fontWeight: "normal",
                  charSpacing: 0,
                  template: _elt.family,
                  lineHeight: 1.16,
                },
              ],
              metadata: {
                category: "single",
                types: ["StaticText"],
              },
              userId: "_O8L0WDPlpKhDXspugZe3",
            }
          })          
          dispatch(setFonts(_data))
        })
        .catch((error) => console.error("Error fetching fonts: ", error))
  }
)
