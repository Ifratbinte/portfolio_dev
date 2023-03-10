import LightboxComponent, { LightboxExternalProps } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photos from "./photos";

export default function Lightbox(props: LightboxExternalProps) {
  return <LightboxComponent  slides={photos} {...props} /> 
}
