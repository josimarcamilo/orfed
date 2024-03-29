
import React from 'react';
import Heade from 'next/head';

export default function Pixel({Eventos}){
    let BasePixel = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2524192017884270');`;

    let EventosRecebidos = "";

    Eventos.map(function(evento){
        EventosRecebidos = EventosRecebidos + `fbq('track', '${evento}');`;
    });

    let PixelFinal = BasePixel + EventosRecebidos;

    return (
        <Heade>
            <script 
                dangerouslySetInnerHTML={{ __html: PixelFinal }}
            />
            <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=2524192017884270&ev=PageView&noscript=1" />` }}
            />
        </Heade>     
    );
}