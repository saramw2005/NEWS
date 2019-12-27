function Ventana_alerta()
{
    alert ("ATENCION VENTANA DE ALERTA");
}


function VentanaConfirmacion()
{
    var respuesta;
        if(confirm("Desea Confirmar?"))
    {
        respuesta="Has pulsado OK";
    }
    else
    {
        respuesta="Has pulsado CANCEL";
    }
    document.getElementById("MensajeConfirmacion").innerHTML=respuesta;
}


function PideInformacion()
{
    var respuesta;
        var person=prompt("Cómo te llamas?");
        if(person==null || person=="")
    {
        respuesta="EL USUARIO PULSÓ CANCEL";
    }
    else
    {
        respuesta="Hola "+person+" qué tal te va la vida?";
    }
    document.getElementById("MensajeInformacion").innerHTML=respuesta;
}


function InicioSesion()
{
    var respuesta;
    var person=prompt("¿Cómo te llamas?");
    if(person==null || person=="")
    {
        respuesta="ERROR"
    }
}