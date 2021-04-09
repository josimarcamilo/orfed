import Obrigado from "../components/Obrigado";
import Pixel from "../components/PixelFacebook"

export default function PageObrigado(){
    return(
        <div>
            <Pixel Eventos={["ViewContent", "Lead"]}/>
            <Obrigado />
        </div>
        
    );
}