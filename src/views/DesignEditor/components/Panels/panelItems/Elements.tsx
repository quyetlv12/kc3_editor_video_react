import React from "react"
import { useEditor } from "@layerhub-io/react"
import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import { Button, SIZE } from "baseui/button"
import AngleDoubleLeft from "~/components/Icons/AngleDoubleLeft"
import Scrollable from "~/components/Scrollable"
import { graphics } from "~/constants/mock-data"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"

const Elements = () => {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()

  const addObject = React.useCallback(
    (item: any) => {
      if (editor) {
        editor.objects.add(item)
      }
    },
    [editor]
  )

  return (
    <Block $style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Block
        $style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          justifyContent: "space-between",
          padding: "1.5rem",
        }}
      >
        <Block>Thành phần</Block>

        <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block>
      </Block>
      <Scrollable>
        {/* <Block padding={"0 1.5rem"}>
          <Button
            size={SIZE.compact}
            overrides={{
              Root: {
                style: {
                  width: "100%",
                },
              },
            }}
          >
            Computer
          </Button>
        </Block> */}
        <Block>
          <Block $style={{ display: "grid", gap: "8px", padding: "1.5rem", gridTemplateColumns: "1fr 1fr" }}>
            {graphics.map((graphic, index) => (
              <ImageItem onClick={() => addObject(graphic)} key={index} preview={graphic.preview} graphic={graphic} />
            ))}
          </Block>
        </Block>
      </Scrollable>
    </Block>
  )
}

const ImageItem = ({ preview, onClick, graphic }: { preview: any; onClick?: (option: any) => void; graphic: any }) => {
  const [css] = useStyletron()
  const pathString = preview.map((segment: any) => segment.join(" ")).join(" ")

  return (
    <div
      onClick={onClick}
      className={css({
        position: "relative",
        background: "#f8f8fb",
        cursor: "pointer",
        borderRadius: "20px",
        padding : "7px",
        textAlign : "center",
        verticalAlign: "middle",
        overflow: "hidden",
        ":hover": {
          opacity: 1,
          background: "rgb(233,233,233)",
        },
      })}
    >
      <svg
        width="70"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <path id="svgPath" d={pathString} fill={graphic.fill} />
      </svg>
    </div>
  )
}

export default Elements
