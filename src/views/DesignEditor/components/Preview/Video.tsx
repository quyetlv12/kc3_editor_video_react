import React from "react"
import { Block } from "baseui/block"
import ReactPlayer from "react-player"
import { useEditor } from "@layerhub-io/react"
import Loading from "~/components/Loading"
import useDesignEditorPages from "~/hooks/useDesignEditorScenes"
// import Whammy from 'react-whammy';

const Video = () => {
  const editor = useEditor()
  const pages = useDesignEditorPages()
  const [loading, setLoading] = React.useState(true)
  const [state, setState] = React.useState({
    video: "",
  })

  const makePreview = React.useCallback(async () => {
    // const template = editor.scene.exportToJSON()

    // console.log("editor" , editor);
    // console.log("template" , template);
    
    

    // const clips = pages.map((page) => {
    //   const currentTemplate = editor.scene.exportToJSON()
    //   if (page.id === currentTemplate.id) {
    //     return {
    //       duration: page.duration! / 1000,
    //       layers: currentTemplate.layers,
    //     }
    //   }
    //   return {
    //     duration: 5,
    //     layers: page.layers,
    //   }
    // })

    // const options = {
    //   outPath: "./position.mp4",
    //   verbose: false,
    //   duration: 5,
    //   fps: 25,
    //   dimension: template.frame,
    //   clips: clips,
    // }
    // const output = new Whammy.Video();
    // console.log("pages" , pages);
    
    // const layerVideo = new Whammy.Video();

    // options.clips.forEach((frame) => {
    //     console.log("frame" , frame);
        
    //     layerVideo.add(frame, options.duration || 100);
    //   });

    //   const layerBlob = layerVideo.compile();
    //   output.add(layerBlob, layerBlob.duration);

    // const blob = output.compile();
    // const url = URL.createObjectURL(blob);

    // // Download the video or use the URL as needed
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'output-video.webm';
    // a.click();

    // URL.revokeObjectURL(url);

    // console.log("url" , url);
    
  }, [editor])

  React.useEffect(() => {
    makePreview()
  }, [editor])

  return (
    <Block $style={{ flex: 1, alignItems: "center", justifyContent: "center", display: "flex", padding: "5rem" }}>
      {loading ? (
        <Loading text="Generating preview" />
      ) : (
        <ReactPlayer
          muted={false}
          className="react-player"
          width="100%"
          height="100%"
          controls
          autoPlay
          url={state.video}
        />
      )}
    </Block>
  )
}

export default Video
