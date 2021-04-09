import Obrigado from "../components/Obrigado";
import Pixel from "../components/PixelFacebook"

export default function PageObrigado(){
    return(
        <div>
            <Pixel Eventos={["PageView", "ViewContent", "Lead"]}/>
            <Obrigado />
        </div>
        
    );
}