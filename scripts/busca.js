var obj;
var obj1;
var obj2;
var obj3;
var salida = '';
var valor;
var newArray;
var envioUrl;

var appi1 = "https://script.googleusercontent.com/macros/echo?user_content_key=F50kUuixg_1_YNRBwi-XJB9Irsas9MzbLt4HIRZSSQW6mLPfwDXhVX1mvQ0tFXI9qN3e22ahv33gsDNlgmxmCNfjzRWAR42Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7FvHuoCA3aY6oYh_uPeR7OGIv6mE7OArfLpHEi2SkZG7auUhcX8GvYge8pF1VBKFasVhBWVkFc&lib=MlfAK7sYzDUKhAPiLWJ3BQCiYTb7JmIRw";

var appi2 = "https://script.google.com/macros/s/AKfycby_mP3ow6lHHhp5KoZ2cp-JvapWOc6bCEDHQqEdko2k9D1Y-ali/exec";

var appi3 = "https://script.google.com/macros/s/AKfycbwh4AaAthKZ9R9n0aaYdXa4GnINTOWVImp1s9C5U6ZifKUBw6o2/exec";


ft1(appi1);
ft2(appi2);
ft3(appi3);



/* window.onload = inicio; */

function inicio() {
    obj = JSON.parse(localStorage.getItem("obj1"));
    localStorage.setItem("mundo", 1);
    if (navigator.onLine) {
        // el navegador está conectado a la red
        console.log("Si hay internet");
    } else {
        // el navegador NO está conectado a la red
        console.log("No hay internet");
        var internet = `
                          <div onclick="conexion();" class="conexion">
                            <span  class="white-text" style="font-size:1em;">
                                SIN CONEXIÓN
                            </span>
                          </div>
                    `;
        document.getElementById("footer").innerHTML = internet;
    }
}

function cambiaMundo(num) {
    var mundo = num;
    localStorage.setItem("mundo", mundo);
    if (localStorage.getItem("mundo") == 1) {
        console.log(localStorage.getItem("mundo"));
        document.body.className = 'fondo1';
        obj = obj1;

        /*  appi = "https://script.googleusercontent.com/macros/echo?user_content_key=F50kUuixg_1_YNRBwi-XJB9Irsas9MzbLt4HIRZSSQW6mLPfwDXhVX1mvQ0tFXI9qN3e22ahv33gsDNlgmxmCNfjzRWAR42Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7FvHuoCA3aY6oYh_uPeR7OGIv6mE7OArfLpHEi2SkZG7auUhcX8GvYge8pF1VBKFasVhBWVkFc&lib=MlfAK7sYzDUKhAPiLWJ3BQCiYTb7JmIRw";
         ft(appi); */
        document.getElementById("resultado").innerHTML = `                                                    
                                                            <div class="card">
                                                            <div onclick="mundoInfo();" id="mundoActual" class="cost">
                        
                                                            Dimensión ${localStorage.getItem("mundo")}
                                                        </div>
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;
        limpiar();
    } else if (localStorage.getItem("mundo") == 2) {
        limpiar();
        console.log(localStorage.getItem("mundo"));
        document.body.className = 'fondo2';
        obj = obj2;
        /* appi = "https://script.google.com/macros/s/AKfycby_mP3ow6lHHhp5KoZ2cp-JvapWOc6bCEDHQqEdko2k9D1Y-ali/exec";
        ft(appi); */
        document.getElementById("resultado").innerHTML = `
                                                            <div class="card">
                                                            <div onclick="mundoInfo();" id="mundoActual" class="cost">
                        
                                                            Dimensión ${localStorage.getItem("mundo")}
                                                        </div>
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;

    } else if (localStorage.getItem("mundo") == 3) {
        limpiar();
        console.log(localStorage.getItem("mundo"));
        document.body.className = 'fondo3';
        obj = obj3;
        /*  appi = "https://script.google.com/macros/s/AKfycbwh4AaAthKZ9R9n0aaYdXa4GnINTOWVImp1s9C5U6ZifKUBw6o2/exec";
         ft(appi); */
        document.getElementById("resultado").innerHTML = `
                                                            <div class="card">
                                                            <div onclick="mundoInfo();" id="mundoActual" class="cost">
                        
                                                            Dimensión ${localStorage.getItem("mundo")}
                                                        </div>
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;
    }
}

function ft1(appi) {

    fetch(appi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj1 = data;

            /*  console.log(obj); */
            localStorage.setItem("obj1", JSON.stringify(obj1));
        })
        .catch(function (err) {
            console.error(err);
        });

}

function ft2(appi) {

    fetch(appi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj2 = data;

            /*  console.log(obj); */
            localStorage.setItem("obj2", JSON.stringify(obj2));
        })
        .catch(function (err) {
            console.error(err);
        });

}

function ft3(appi) {

    fetch(appi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj3 = data;

            /*  console.log(obj); */
            localStorage.setItem("obj3", JSON.stringify(obj3));
        })
        .catch(function (err) {
            console.error(err);
        });

}



function asistencia() {
    /* alert("qr pulsado"); */
    enviarDatos();


    var typeNumber = 0;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(envioUrl);
    qr.make();
    document.getElementById('asisQR').innerHTML = qr.createImgTag();
    /* document.getElementById("asis").innerHTML += `
    <h2 class="name">
    QR asistencia: </h2>
    <br>
    <br>
    <center>
        <img id="QRgrande" src="images/qr-code.png" >
    </center>
   
 `; */
    document.getElementById("qr").style.display = 'none'

    /* console.log("https://script.google.com/macros/s/AKfycbwTHXhMhopagulACv9bKOvc6d2v_ItICPjM7ip5jVd32_BDv8XtzAMheeDqCt3PAcphdQ/exec"+hoy + " " + newArray[0].ID + " " + newArray[0].COMPLETO + " " + ); */
    /*  var qrcode = new QRCode(document.getElementById("qr"), {
           width: 200,
           height: 200
       }); */

}



var enviarDatos = function () {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    var url =
        "https://script.google.com/macros/s/AKfycbwTHXhMhopagulACv9bKOvc6d2v_ItICPjM7ip5jVd32_BDv8XtzAMheeDqCt3PAcphdQ/exec";
    /*  Equipo = "SinEquipo"; */
    envioUrl = url + "?Ti=" + encodeURIComponent(hoy.toLocaleString("es-MX")) + "&No=" + encodeURIComponent(newArray[0].COMPLETO) + "&Id=" + encodeURIComponent(newArray[0].ID) + "&Pe=" + encodeURIComponent(localStorage.getItem("mundo"));
  
}


function recibir() {
    valor = document.getElementById("texto").value;
    localStorage.setItem("id", valor);
    newArray = obj.filter(function (el) {
        return (el.ID === localStorage.getItem("id"));
    });
    console.log(newArray);
    document.getElementById("texto").focus();
    var stil = "images/stilos/" + newArray[0].ESTILO + "2.png";

    salida = `
    
                <br>
                <div id="carta0" class="card no-seleccionable">
                    <div id="cinta1">
                        
                    </div>
                    <div id="elemento0">
                        <!--<h2 onclick="clanInfo();" class="name1 ">
                            ${newArray[0].EQUIPO}   
                        </h2>-->
                        
                        <img class="animal " id="clan1" src="images/animales/${newArray[0].EQUIPO}.png" width="15%" onclick="clanInfo();"/>
                        
                        <div onclick="mundoInfo();" id="mundoActual" class="cost">
                        
                            Dimensión ${localStorage.getItem("mundo")}
                        </div>
                        <div class="image">
                        
                            <img id="avatar" src="" width="100%">
                        </div>
                        <div id="stilo" class="nick" style="text-align:center;font-size: 1.5em; background-image:url(${stil});">
                            ${newArray[0].NICK.substring(0, 10)}
                        </div>
                        <br>
                        <div  >
                            <center id="descripcion"></center>
                        </div>
                        <div id="res" class="abilities insignias" >
                           Resumen:
                        

                            
                                <canvas id="resumen" width="100%" height="70hv"></canvas>
                                
                                
                        </div>
                        <div class="insignias">Tus monstruos:
                            <center id="centro">
                                <img onclick="cuestInfo();" id="cuest" title="Misión cuestionarios" src="images/sinInsgCuest.png" />
                                <img onclick="actInfo();" id="act" title="Misión actividades" src="images/sinInsgAct.png" />
                                <img onclick="bitInfo();" id="bit" title="Misión bitácora" src="images/sinInsgBit.png" />
                                <img onclick="proInfo();" id="pro" title="Misión proyecto" src="images/sinInsgPlat.png" />
                                
                                <img onclick="masInfo();" id="mas" title="Misión puntos Extra" src="images/sinInsgPuntos.png" /><span id="por"></span>
                            </center>
                        </div>
                        <div class="power stat" onclick="monedasInfo();">
                            ${parseInt((parseFloat(newArray[0].CALI) + parseFloat(newArray[0].PUNTOEX)) * 100)}<span style="font-size:0.5em;">p</span> 
                        </div>
                        <div class="defense stat" onclick="puntosInfo();">
                        <span id="txtRango1" ></span>
                            <img  title="Rango" id="rango1" src="images/nivel2.png" />
                           
                        </div>
                        <div class="sheen"></div>   
                        <br id="desglose">
                        <br>
                    </div>
                </div>

                <br>
                <br>
                
                <div id="carta"  class="card no-seleccionable" >
                        <div id="cinta2">
                            
                        </div>
                    <div id="elemento">
                        <!--
                        <h2 class="name" >
                            Datos Generales
                        </h2> 
                        -->
                        <br>
                        <br>
                        <div id="mundoActualDesg" onclick="mundoInfo();" class="cost">
                            Dimensión ${localStorage.getItem("mundo")}
                        </div>
                        
                        <center>
                            
                            <!--<h2 id="eq" style="color:white;" onclick="clanInfo();" >
                            
                            ${newArray[0].EQUIPO}
                            </h2>-->
                            
                            <div id="pie">
                                <img id="caracter" src="images/caracter.png" />
                            </div>

                            <div id="stilo1" class="abilities" style="background-image:url(${stil});">
                            
                            <h2 id="nic" style="" >
                            
                                ${newArray[0].NICK.substring(0, 10)}
                            </h2>
                            </div>
                        </center>
                        <h2 class="name">
                            Iniciales: 
                        </h2>
                            <br>
                            
                        <h2 class="tamaño nomIniciales">${newArray[0].COMPLETO.split(" ").map((n) => n[0]).join("∙∙∙ ")}∙∙∙</h2>
                       
                        <h2 class="name">
                            Grupo: <span class="tamaño ">${newArray[0].GRUPO}</span>
                        </h2>
                        <h2 class="name">
                            Clan: <span class="tamaño ">${newArray[0].EQUIPO} </span><img class="animal" id="clan" src="images/animales/${newArray[0].EQUIPO}.png" width="500%" onclick="clanInfo();" /> 
                        </h2>

                        <h2 class="name" style="display:none">
                            Punto Extra: <img class="" id="mas1" src="images/insgPuntos.png" /><span class="" id="por1"></span>
                        </h2>
                        <br>
                        <div class="abilities " >
                            <center>
                                <h2 class="name" onclick="asisInfo();" >
                                    Quemado:
                                    </h2>
                                   <canvas id="quemado" width="100%" height="70hv"></canvas>
                            </center>
                                    <h4 style="text-align: right">Pendientes: ${newArray[0].DIA12}</h4>
                                
                                <div class="meter azul meterDerecha" id="">
                                    <span class="animate" style="width: ${(parseInt(newArray[0].DIA12) * 100) / 10}%"></span>
                                </div>
                                <br>
                                
                                <div class="meter verde" id="">
                                    <span class="animate" style="width: ${(parseInt(10 - newArray[0].DIA12) * 100) / 10}%"></span>
                                </div>
                                <br>
                                
                                <h4>Completadas: ${10 - newArray[0].DIA12}</h4>
                               
                               
                        </div>
                        
                        <div id="asis" class="abilities " >
                            <center>
                                <h2 class="name" onclick="asisInfo();" >
                                    Asistencias:
                                    </h2>
                                   
                            </center>
                                <div class="meter negro" id="">
                                    <span class="animate" style="width: ${(parseInt(newArray[0].TOTALASIS) * 100) / 12}%"></span>
                                </div>
                                <br>
                                <center>
                                <h1>${newArray[0].TOTALASIS}</h1>
                                </center>
                                <img id="qr" src="images/qr-code.png" width="10%" onclick="asistencia()">

                                <div id="asisQR"></div>
                        </div>
                        
                        
                            <div class="abilities cali" onclick="finalInfo();">
                            <center>
                                <h2 class="name" >
                                    Nivel (calificación) Final: 
                                </h2>
                            </center>
                        <div class="meter">
			                <span style="width: ${(parseInt(newArray[0].FINAL) * 100) / 10}%"></span>
		                </div>
                           <center>
                                <br>
                                <span id="calificacionFinal">${parseInt(newArray[0].FINAL)}</span>
                               
                                <img id="reaccion" src="images/reaccion_neutral.png" >
                            <center>
                            </div>
                            <div class="abilities cali">
                                <br>
                                <center>
                                <span class="ayuda" style="font-size: 2em" onclick="pFinalInfo();"> 
                                    ${parseInt((parseFloat(newArray[0].CALI) + parseFloat(newArray[0].PUNTOEX)) * 100)}<span style="font-size:0.5em;">p</span>
                                </span> <img title="Rango" id="rango" src="images/nivel2.png" />
                                <span id="txtRango" class="txtRango"></span>
                                <h1 id="estado">
                                    REPROBADO
                                </h1>
                                </center>
                            </div>
                            
                        </center>
                        <div class="sheen"></div>
                    </div>
                </div>
                
                <br>
                <br>

                
                <div  class="card no-seleccionable" id="carta2" >

                    <div id="elemento2">
                        <h2 class="name">
                            Cuestionarios 
                        </h2>
                        <div class="desglo">
                            <img onclick="cuestInfo()" id="cuest1" src="images/insgCuest.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;"> ${newArray[0].PUNTOSCUES * 100}</a> </h4>
                        <center class="insignias">
                            <canvas  id="cuestChart" width="100%"></canvas>
                        </center>
                        <div class="abilities">
                            <div class="meter azul">
                                <span style="width: ${(parseInt(newArray[0].PROMCUES) * 100) / 10}%"></span>
                            </div>
                            <br>
                            <center>
                                <h4 class="ayuda">Nivel (promedio): <a  style="font-size:1.5em;">${newArray[0].PROMCUES}</a></h4>
                                
                            </center>
                            </div>
                            <div class="abilities">
                                <center>
                                    <span class="evolution" >
                                        <img id="fmonPro0" src="images/Huevo_001.png" />
                                        ⇒
                                        <img id="fmonCuest1" src="" />
                                        ⇒
                                        <img id="fmonCuest2" src="" />
                                        ⇒
                                        <img id="fmonCuest3" src="" />
                                    </span>
                                </center>
                            </div>
                        <div class="sheen"></div>
                    </div>
                </div>

                <br>
                <br>
                <div  class="card no-seleccionable " id="carta3" >

                    <div id="elemento3">
                        <h2 class="name">
                            Actividades
                        </h2>
                        <div class="desglo">
                            <img onclick="actInfo()" id="act1"  src="images/insgAct.png" />
                        </div>
                        <h4 class="ayuda"> Puntos totales: <span style="font-size:1.5em;">${Math.round(newArray[0].PUNTOSACT * 100)}</span></h4>
                        <center class="insignias">
                            <canvas  id="actChart" width="100%"></canvas>
                        </center>
                        <div class="abilities">
                        <div class="meter red">
			                <span style="width: ${(parseInt(newArray[0].PROMACT) * 100) / 10}%"></span>
		                </div>
                         <br>
                        <center>
                            <h4 class="ayuda">Nivel (promedio): <span style="font-size:1.5em">${newArray[0].PROMACT}</span></h4>
                            
                        </center>
                        </div>
                        <div class="abilities">
                            <center>
                                <span class="evolution" >
                                    <img id="fmonPro0" src="images/Huevo_002.png" />
                                    ⇒
                                    <img id="fmonAct1" src="" />
                                    ⇒
                                    <img id="fmonAct2" src="" />
                                    ⇒
                                    <img id="fmonAct3" src="" />
                                </span>
                            </center>
                        </div>
                        <div class="sheen"></div>
                    </div>
                </div>
                <br>
                <br>
                <div  class="card no-seleccionable " id="carta4" >

                    <div id="elemento4">
                        <h2 class="name">
                            Bitácora
                        </h2>
                        <div class="desglo">
                            <img onclick="bitInfo()" id="bit1"  src="images/insgBit.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSBIT * 100}</a></h4>
                        <center class="insignias">
                            <canvas  id="bitChart" width="50"></canvas>
                        </center>
                      
                        <div class="abilities">
                        <div class="meter morado">
			                <span style="width: ${(parseInt(newArray[0].BITACORA) * 100) / 10}%"></span>
		                </div>
                        <br>
                         <center>
                            <h4 class="ayuda">Nivel (promedio): <a  style="font-size:1.5em;">${newArray[0].BITACORA}</a></h4>
                            
                        <center>
                        </div>
                        <div class="abilities">
                            <center>
                                <span class="evolution" >
                                    <img id="fmonPro0" src="images/Huevo_003.png" />
                                    ⇒
                                    <img id="fmonBit1" src="" />
                                    ⇒
                                    <img id="fmonBit2" src="" />
                                    ⇒
                                    <img id="fmonBit3" src="" />
                                </span>
                            </center>
                        </div>
                        <div class="sheen"></div>
                    </div>
                </div>
                <br>
                <br>

                
                <div  class="card no-seleccionable " id="carta5" >

                    <div id="elemento5">
                        <h2 class="name">
                            Proyecto
                        </h2>
                        <div class="desglo">
                            <img onclick="proInfo()" id="pro1" src="images/insgPlat.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSPRO * 100}</a></h4>
                        <center class="insignias">
                            <canvas  id="proChart" width="100%"></canvas>
                        </center>
                        
                        <div class="abilities">
                        <div class="meter caqui">
			                <span style="width: ${(parseInt(newArray[0].PROYECTO) * 100) / 10}%"></span>
		                </div>
                        <br>
                       <center>
                            <h4 class="ayuda">Nivel (promedio): <a  style="font-size:1.5em;">${newArray[0].PROYECTO}</a></h4>
                            
                        </center>
                        </div>
                        <div class="abilities">
                            <center>
                                <span class="evolution" >
                                    <img id="fmonPro0" src="images/Huevo_004.png" />
                                    ⇒
                                    <img id="fmonPro1" src="" />
                                    ⇒
                                    <img id="fmonPro2" src="" />
                                    ⇒
                                    <img id="fmonPro3" src="" />
                                </span>
                            </center>
                        </div>
                        <div class="sheen"></div>
                    </div> 
                </div>
                <br>
                <br>
                <div  class="card no-seleccionable" id="carta6" >

                    <div id="elemento6">
                        <h2 class="name">
                            Puntos Extra 
                        </h2>
                        <div class="desglo">
                            <img onclick="masInfo()" id="mas2" src="images/insgCuest.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOEX * 100}</a></h4>
                        <center class="insignias">
                            <canvas  id="extraChart" width="100%"></canvas>
                        </center>
                        <div class="abilities">
                            <div class="meter gris">
                                <span style="width: ${(parseInt(newArray[0].PUNTOEX) * 100) / 2}%"></span>
                            </div>
                            <br>
                            <center>
                                <h4 class="ayuda">Puntos (sobre calificacion final): <a  style="font-size:1.5em;">${newArray[0].PUNTOEX}</a></h4>
                                
                            </center>
                            </div>
                            <div class="abilities">
                                <center>
                                    <span class="evolution" >
                                        <img id="fmonMas0" src="images/Huevo_005.png" />
                                        ⇒
                                        <img id="fmonMas1" src="" />
                                        ⇒
                                        <img id="fmonMas2" src="" />
                                    </span>
                                </center>
                            </div>
                        <div class="sheen"></div>
                    </div>
                </div>

                <br>
                <br>
                `;
    document.getElementById("resultado").innerHTML = salida;

    if (localStorage.getItem("mundo") == 1) {
        document.getElementById('pie').style.backgroundImage = "url('images/Ruins.png')";
    } else if (localStorage.getItem("mundo") == 2) {
        document.getElementById('pie').style.backgroundImage = "url('images/Mine.png')";
    } else if (localStorage.getItem("mundo") == 3) {
        document.getElementById('pie').style.backgroundImage = "url('images/DemonCastle.png')";
    }


    var def = ``;
    if (newArray[0].Def == 1) {
        def = `<span title="Calificaciones definitivas" onclick="cinta();" id="forkongithub"><a href="#!"></a></span>`;
        Push.create("Calificaciones Definitivas", { //Titulo de la notificación
            body: "Tus calificaciones de este mundo ya son definitivas", //Texto del cuerpo de la notificación
            icon: 'images/icon-512x512.png', //Icono de la notificación
            timeout: 9000, //Tiempo de duración de la notificación

        });
    }
    document.getElementById("cinta1").innerHTML = def;
    document.getElementById("cinta2").innerHTML = def;

    var rango = "";
    var txtRango = "";
    if (newArray[0].FINAL < 6) {
        rango = "images/sinNivel.png";
        txtRango = "Noob";
        document.getElementById("rango1").addEventListener("click", rangoNoob);
        document.getElementById("rango").addEventListener("click", rangoNoob);
    } else if (newArray[0].FINAL < 8) {
        rango = "images/nivel1.png";
        txtRango = "Traine";
        document.getElementById("rango1").addEventListener("click", rangoTraine);
        document.getElementById("rango").addEventListener("click", rangoTraine);
    } else if (newArray[0].FINAL < 10) {
        rango = "images/nivel2.png";
        txtRango = "Junior";
        document.getElementById("rango1").addEventListener("click", rangoJunior);
        document.getElementById("rango").addEventListener("click", rangoJunior);
    } else if (newArray[0].FINAL == 10) {
        rango = "images/nivel3.png";
        txtRango = "Senior";
        document.getElementById("rango1").addEventListener("click", rangoSenior);
        document.getElementById("rango").addEventListener("click", rangoSenior);
    }
    document.getElementById("rango1").src = rango;
    document.getElementById("rango").src = rango;
    document.getElementById("txtRango").innerHTML = txtRango;
    document.getElementById("txtRango1").innerHTML = txtRango;


    /* insignias => monstruo */

    var act = "";
    var act_min = "";

    if (newArray[0].PROMACT < 6) {
        act = "images/Huevo_001.png";
        act_min = "images/Huevo_001.png";
        document.getElementById("fmonAct1").style.filter = "brightness(0%)";
        document.getElementById("fmonAct2").style.filter = "brightness(0%)";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT < 8 && localStorage.getItem("mundo") == 1) {
        act = "images/fmon_1-1.png";
        act_min = "images/fmon_1-1_min.png";
        document.getElementById("fmonAct2").style.filter = "brightness(0%)";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT < 8 && localStorage.getItem("mundo") == 2) {
        act = "images/fmon_6-1.png";
        act_min = "images/fmon_6-1_min.png";
        document.getElementById("fmonAct2").style.filter = "brightness(0%)";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT < 8 && localStorage.getItem("mundo") == 3) {
        act = "images/fmon_11-1.png";
        act_min = "images/fmon_11-1_min.png";
        document.getElementById("fmonAct2").style.filter = "brightness(0%)";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT < 10 && localStorage.getItem("mundo") == 1) {
        act = "images/fmon_1-2.png";
        act_min = "images/fmon_1-2_min.png";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT < 10 && localStorage.getItem("mundo") == 2) {
        act = "images/fmon_6-2.png";
        act_min = "images/fmon_6-2_min.png";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT < 10 && localStorage.getItem("mundo") == 3) {
        act = "images/fmon_11-2.png";
        act_min = "images/fmon_11-2_min.png";
        document.getElementById("fmonAct3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMACT == 10 && localStorage.getItem("mundo") == 1) {
        act = "images/fmon_1-3.png";
        act_min = "images/fmon_1-3_min.png";
    } else if (newArray[0].PROMACT == 10 && localStorage.getItem("mundo") == 2) {
        act = "images/fmon_6-3.png";
        act_min = "images/fmon_6-3_min.png";
    } else if (newArray[0].PROMACT == 10 && localStorage.getItem("mundo") == 3) {
        act = "images/fmon_11-3.png";
        act_min = "images/fmon_11-3_min.png";
    }
    /*  var act = "";
     if (newArray[0].PROMACT == 10) {
         act = "images/fmon_1-1.png";
     } else {
         act = "images/Huevo_002.png";
     } */
    document.getElementById("act").src = act_min;
    document.getElementById("act1").src = act;



    var cuest = "";
    var cuest_min = "";
    /* if (newArray[0].PROMCUES == 10) {
        cuest = "images/fmon_2-1.png";
    } else {
        cuest = "images/Huevo_001.png";
    } */
    if (newArray[0].PROMCUES < 6) {
        cuest = "images/Huevo_002.png";
        cuest_min = "images/Huevo_002.png";
        document.getElementById("fmonCuest1").style.filter = "brightness(0%)";
        document.getElementById("fmonCuest2").style.filter = "brightness(0%)";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES < 8 && localStorage.getItem("mundo") == 1) {
        cuest = "images/fmon_2-1.png";
        cuest_min = "images/fmon_2-1_min.png";
        document.getElementById("fmonCuest2").style.filter = "brightness(0%)";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES < 8 && localStorage.getItem("mundo") == 2) {
        cuest = "images/fmon_7-1.png";
        cuest_min = "images/fmon_7-1_min.png";
        document.getElementById("fmonCuest2").style.filter = "brightness(0%)";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES < 8 && localStorage.getItem("mundo") == 3) {
        cuest = "images/fmon_12-1.png";
        cuest_min = "images/fmon_12-1_min.png";
        document.getElementById("fmonCuest2").style.filter = "brightness(0%)";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES < 10 && localStorage.getItem("mundo") == 1) {
        cuest = "images/fmon_2-2.png";
        cuest_min = "images/fmon_2-2_min.png";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES < 10 && localStorage.getItem("mundo") == 2) {
        cuest = "images/fmon_7-2.png";
        cuest_min = "images/fmon_7-2_min.png";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES < 10 && localStorage.getItem("mundo") == 3) {
        cuest = "images/fmon_12-2.png";
        cuest_min = "images/fmon_12-2_min.png";
        document.getElementById("fmonCuest3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROMCUES == 10 && localStorage.getItem("mundo") == 1) {
        cuest = "images/fmon_2-3.png";
        cuest_min = "images/fmon_2-3_min.png";
    } else if (newArray[0].PROMCUES == 10 && localStorage.getItem("mundo") == 2) {
        cuest = "images/fmon_7-3.png";
        cuest_min = "images/fmon_7-3_min.png";
    } else if (newArray[0].PROMCUES == 10 && localStorage.getItem("mundo") == 3) {
        cuest = "images/fmon_12-3.png";
        cuest_min = "images/fmon_12-3_min.png";
    }
    document.getElementById("cuest").src = cuest_min;
    document.getElementById("cuest1").src = cuest;

    var bit = "";
    var bit_min = "";
    /* if (newArray[0].BITACORA == 10) {
        bit = "images/fmon_3-1.png";
    } else {
        bit = "images/Huevo_003.png";
    } */
    if (newArray[0].BITACORA < 6) {
        bit = "images/Huevo_003.png";
        bit_min = "images/Huevo_003.png";
        document.getElementById("fmonBit1").style.filter = "brightness(0%)";
        document.getElementById("fmonBit2").style.filter = "brightness(0%)";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA < 8 && localStorage.getItem("mundo") == 1) {
        bit = "images/fmon_3-1.png";
        bit_min = "images/fmon_3-1_min.png";
        document.getElementById("fmonBit2").style.filter = "brightness(0%)";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA < 8 && localStorage.getItem("mundo") == 2) {
        bit = "images/fmon_8-1.png";
        bit_min = "images/fmon_8-1_min.png";
        document.getElementById("fmonBit2").style.filter = "brightness(0%)";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA < 8 && localStorage.getItem("mundo") == 3) {
        bit = "images/fmon_13-1.png";
        bit_min = "images/fmon_13-1_min.png";
        document.getElementById("fmonBit2").style.filter = "brightness(0%)";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA < 10 && localStorage.getItem("mundo") == 1) {
        bit = "images/fmon_3-2.png";
        bit_min = "images/fmon_3-2_min.png";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA < 10 && localStorage.getItem("mundo") == 2) {
        bit = "images/fmon_8-2.png";
        bit_min = "images/fmon_8-2_min.png";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA < 10 && localStorage.getItem("mundo") == 3) {
        bit = "images/fmon_13-2.png";
        bit_min = "images/fmon_13-2_min.png";
        document.getElementById("fmonBit3").style.filter = "brightness(0%)";
    } else if (newArray[0].BITACORA == 10 && localStorage.getItem("mundo") == 1) {
        bit = "images/fmon_3-3.png";
        bit_min = "images/fmon_3-3_min.png";
    } else if (newArray[0].BITACORA == 10 && localStorage.getItem("mundo") == 2) {
        bit = "images/fmon_8-3.png";
        bit_min = "images/fmon_8-3_min.png";
    } else if (newArray[0].BITACORA == 10 && localStorage.getItem("mundo") == 3) {
        bit = "images/fmon_13-3.png";
        bit_min = "images/fmon_13-3_min.png";
    }
    document.getElementById("bit").src = bit_min;
    document.getElementById("bit1").src = bit;

    var pro = "";
    var pro_min = "";
    /* if (newArray[0].PROYECTO == 10) {
        pro = "images/fmon_4-1.png";
    } else {
        pro = "images/Huevo_004.png";
    } */
    if (newArray[0].PROYECTO < 6) {
        pro = "images/Huevo_004.png";
        pro_min = "images/Huevo_004.png";
        document.getElementById("fmonPro1").style.filter = "brightness(0%)";
        document.getElementById("fmonPro2").style.filter = "brightness(0%)";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO < 8 && localStorage.getItem("mundo") == 1) {
        pro = "images/fmon_4-1.png";
        pro_min = "images/fmon_4-1_min.png";
        document.getElementById("fmonPro2").style.filter = "brightness(0%)";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO < 8 && localStorage.getItem("mundo") == 2) {
        pro = "images/fmon_9-1.png";
        pro_min = "images/fmon_9-1_min.png";
        document.getElementById("fmonPro2").style.filter = "brightness(0%)";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO < 8 && localStorage.getItem("mundo") == 3) {
        pro = "images/fmon_14-1.png";
        pro_min = "images/fmon_14-1_min.png";
        document.getElementById("fmonPro2").style.filter = "brightness(0%)";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO < 10 && localStorage.getItem("mundo") == 1) {
        pro = "images/fmon_4-2.png";
        pro_min = "images/fmon_4-2_min.png";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO < 10 && localStorage.getItem("mundo") == 2) {
        pro = "images/fmon_9-2.png";
        pro_min = "images/fmon_9-2_min.png";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO < 10 && localStorage.getItem("mundo") == 3) {
        pro = "images/fmon_14-2.png";
        pro_min = "images/fmon_14-2_min.png";
        document.getElementById("fmonPro3").style.filter = "brightness(0%)";
    } else if (newArray[0].PROYECTO == 10 && localStorage.getItem("mundo") == 1) {
        pro = "images/fmon_4-3.png";
        pro_min = "images/fmon_4-3_min.png";
    } else if (newArray[0].PROYECTO == 10 && localStorage.getItem("mundo") == 2) {
        pro = "images/fmon_9-3.png";
        pro_min = "images/fmon_9-3_min.png";
    } else if (newArray[0].PROYECTO == 10 && localStorage.getItem("mundo") == 3) {
        pro = "images/fmon_14-3.png";
        pro_min = "images/fmon_14-3_min.png";
    }
    document.getElementById("pro").src = pro_min;
    document.getElementById("pro1").src = pro;

    /* var pla = "";
    if (newArray[0].PLATAFORMA == 10) {
        pla = "images/insgPro.png";
    } else {
        pla = "images/sinInsgPro.png";
    }
    document.getElementById("pla").src = pla;
    document.getElementById("pla1").src = pla; */
    var por = "";
    var por1 = "";
    var mas = "";
    var mas_min = "";

    if (newArray[0].PUNTOEX == 1 && localStorage.getItem("mundo") == 1) {
        mas = "images/fmon_5-1.png";
        mas_min = "images/fmon_5-1_min.png";
        document.getElementById("fmonMas2").style.filter = "brightness(0%)";
        por = "1";
        por1 = "X1";
    } else if (newArray[0].PUNTOEX == 2 && localStorage.getItem("mundo") == 1) {
        mas = "images/fmon_5-2.png";
        mas_min = "images/fmon_5-2_min.png";
        por = "2";
        por1 = "X2";
    } else if (newArray[0].PUNTOEX == 1 && localStorage.getItem("mundo") == 2) {
        mas = "images/fmon_10-1.png";
        mas_min = "images/fmon_10-1_min.png";
        document.getElementById("fmonMas2").style.filter = "brightness(0%)";
        por = "1";
        por1 = "X1";
    } else if (newArray[0].PUNTOEX == 2 && localStorage.getItem("mundo") == 2) {
        mas = "images/fmon_10-2.png";
        mas_min = "images/fmon_10-2_min.png";
        por = "2";
        por1 = "X2";
    } else if (newArray[0].PUNTOEX == 1 && localStorage.getItem("mundo") == 3) {
        mas = "images/fmon_15-1.png";
        mas_min = "images/fmon_15-1_min.png";
        document.getElementById("fmonMas2").style.filter = "brightness(0%)";
        por = "1";
        por1 = "X1";
    } else if (newArray[0].PUNTOEX == 2 && localStorage.getItem("mundo") == 3) {
        mas = "images/fmon_15-2.png";
        mas_min = "images/fmon_15-2_min.png";
        por = "2";
        por1 = "X2";
    } else {
        mas = "images/Huevo_005.png";
        mas_min = "images/Huevo_005.png";
        document.getElementById("fmonMas1").style.filter = "brightness(0%)";
        document.getElementById("fmonMas2").style.filter = "brightness(0%)";
        document.getElementById("por").style.display = "none";
    }

    document.getElementById("por").innerHTML = por;
    document.getElementById("por1").innerHTML = por1;
    document.getElementById("mas").src = mas_min;
    document.getElementById("mas1").src = mas_min;
    document.getElementById("mas2").src = mas;


    /* lineas evolutivas */
    var fmonAct1, fmonAct2, fmonAct3, fmonCuest1, fmonCuest2, fmonCuest3, fmonBit1, fmonBit2, fmonBit3, fmonPro1, fmonPro2, fmonPro3 = "";
    if (localStorage.getItem("mundo") == 1) {
        fmonAct1 = "images/fmon_1-1_min.png";
        fmonAct2 = "images/fmon_1-2_min.png";
        fmonAct3 = "images/fmon_1-3_min.png";
        fmonCuest1 = "images/fmon_2-1_min.png";
        fmonCuest2 = "images/fmon_2-2_min.png";
        fmonCuest3 = "images/fmon_2-3_min.png";
        fmonBit1 = "images/fmon_3-1_min.png";
        fmonBit2 = "images/fmon_3-2_min.png";
        fmonBit3 = "images/fmon_3-3_min.png";
        fmonPro1 = "images/fmon_4-1_min.png";
        fmonPro2 = "images/fmon_4-2_min.png";
        fmonPro3 = "images/fmon_4-3_min.png";
        fmonMas1 = "images/fmon_5-1_min.png";
        fmonMas2 = "images/fmon_5-2_min.png";
    } else
        if (localStorage.getItem("mundo") == 2) {
            fmonAct1 = "images/fmon_6-1_min.png";
            fmonAct2 = "images/fmon_6-2_min.png";
            fmonAct3 = "images/fmon_6-3_min.png";
            fmonCuest1 = "images/fmon_7-1_min.png";
            fmonCuest2 = "images/fmon_7-2_min.png";
            fmonCuest3 = "images/fmon_7-3_min.png";
            fmonBit1 = "images/fmon_8-1_min.png";
            fmonBit2 = "images/fmon_8-2_min.png";
            fmonBit3 = "images/fmon_8-3_min.png";
            fmonPro1 = "images/fmon_9-1_min.png";
            fmonPro2 = "images/fmon_9-2_min.png";
            fmonPro3 = "images/fmon_9-3_min.png";
            fmonMas1 = "images/fmon_10-1_min.png";
            fmonMas2 = "images/fmon_10-2_min.png";
        } else
            if (localStorage.getItem("mundo") == 3) {
                fmonAct1 = "images/fmon_11-1_min.png";
                fmonAct2 = "images/fmon_11-2_min.png";
                fmonAct3 = "images/fmon_11-3_min.png";
                fmonCuest1 = "images/fmon_12-1_min.png";
                fmonCuest2 = "images/fmon_12-2_min.png";
                fmonCuest3 = "images/fmon_12-3_min.png";
                fmonBit1 = "images/fmon_13-1_min.png";
                fmonBit2 = "images/fmon_13-2_min.png";
                fmonBit3 = "images/fmon_13-3_min.png";
                fmonPro1 = "images/fmon_14-1_min.png";
                fmonPro2 = "images/fmon_14-2_min.png";
                fmonPro3 = "images/fmon_14-3_min.png";
                fmonMas1 = "images/fmon_15-1_min.png";
                fmonMas2 = "images/fmon_15-2_min.png";
            }

    document.getElementById("fmonAct1").src = fmonAct1;
    document.getElementById("fmonAct2").src = fmonAct2;
    document.getElementById("fmonAct3").src = fmonAct3;
    document.getElementById("fmonCuest1").src = fmonCuest1;
    document.getElementById("fmonCuest2").src = fmonCuest2;
    document.getElementById("fmonCuest3").src = fmonCuest3;
    document.getElementById("fmonBit1").src = fmonBit1;
    document.getElementById("fmonBit2").src = fmonBit2;
    document.getElementById("fmonBit3").src = fmonBit3;
    document.getElementById("fmonPro1").src = fmonPro1;
    document.getElementById("fmonPro2").src = fmonPro2;
    document.getElementById("fmonPro3").src = fmonPro3;
    document.getElementById("fmonMas1").src = fmonMas1;
    document.getElementById("fmonMas2").src = fmonMas2;

    var backgroundColor = '#062e6b80';
    var borderColor = '#0042A6';
    var pointBackgroundColor = '#0a58ce';
    if (localStorage.getItem("mundo") == 2) {
        backgroundColor = '#08590B80';
        borderColor = '#107A14';
        pointBackgroundColor = '#099410';
    } else if (localStorage.getItem("mundo") == 3) {
        backgroundColor = '#870C0C80';
        borderColor = '#870C0C';
        pointBackgroundColor = '#990909';
    } else {
        backgroundColor = '#062e6b80';
        borderColor = '#0042A6';
        pointBackgroundColor = '#0a58ce';
    }
    var ctx = document.getElementById("resumen");
    Chart.defaults.global.defaultFontColor = 'black';
    var resumenChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Actividades', 'Bitácora', 'Cuestionarios', 'Proyecto'],
            datasets: [{
                label: 'Nivel',
                fontColor: '#fff',
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                pointBackgroundColor: pointBackgroundColor,
                data: [
                    newArray[0].PROMACT, newArray[0].BITACORA, newArray[0].PROMCUES, newArray[0].PROYECTO
                ]
            }]
        },
        options: {
            "elements": {
                "line": {
                    "tension": 0,
                    "borderWidth": 4
                }
            },

            legend: {
                position: 'none',
            },
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });

    /* grafica de quemado */

    var ctx = document.getElementById("quemado");
    var quemado = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Terminados", "Pendientes"],
            datasets: [{
                label: 'Cantidad',
                data: [10 - newArray[0].DIA12, newArray[0].DIA12],
                backgroundColor: [
                    'rgba(69, 242, 69, 0.6)',
                    'rgba(43, 43, 43, 0.6)'

                ]
            }]
        }
    });

    if (localStorage.getItem("mundo") == 1) {

        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Act1", "Act2", "Act3"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD1, newArray[0].ACTIVIDAD2, newArray[0].ACTIVIDAD3],
                    backgroundColor: [
                        'rgba(243, 145, 159, 0.6)',
                        'rgba(208, 97, 112, 0.6)',
                        'rgba(167, 58, 73, 0.6)'
                        /* ,
                                                'rgba(126, 28, 42, 0.6)',
                                                'rgba(120, 19, 14, 0.6)',
                                                'rgba(85, 8, 19, 0.6)',
                                                'rgba(60, 3, 0, 0.6)' */
                    ]
                }]
            },
            options: {

                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
                /*  scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }, */


            }
        });
        var ctx = document.getElementById("cuestChart");
        var cuestChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Cuest1", "Cuest2", "Cuest3"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].CUESTIONARIO1, newArray[0].CUESTIONARIO2, newArray[0].CUESTIONARIO3],
                    backgroundColor: [
                        'rgba(3, 106, 255, 0.6)',
                        'rgba(27, 15, 255, 0.6)',
                        'rgba(50, 65, 119, 0.6)'
                        /* ,
                                                
                                                'rgba(22, 36, 89, 0.6)',
                                                'rgba(5, 17, 57, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });
        var ctx = document.getElementById("proChart");
        var proChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Proyecto", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PROYECTO, 10 - newArray[0].PROYECTO],
                    backgroundColor: [
                        'rgba(255, 227, 194, 0.6)'

                    ]
                }]
            }
        });
        /* var ctx = document.getElementById("plaChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Plataforma", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PLATAFORMA, 10 - newArray[0].PLATAFORMA],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)'

                    ]
                }]
            }
        }); */
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }

        });

        var ctx = document.getElementById("extraChart");
        var extraChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Extra1", "Extra2"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PUNTOEX1, newArray[0].PUNTOEX2],
                    backgroundColor: [
                        'rgba(15, 14, 22, 0.6)',
                        'rgba(30, 31, 38, 0.6)'
                        /* ,
                                                'rgba(50, 65, 119, 0.6)'
                                                'rgba(22, 36, 89, 0.6)',
                                                'rgba(5, 17, 57, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });


    } else if (localStorage.getItem("mundo") == 2) {
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Act4", "Act5", "Act6"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD4, newArray[0].ACTIVIDAD5, newArray[0].ACTIVIDAD6],
                    backgroundColor: [
                        'rgba(243, 145, 159, 0.6)',
                        'rgba(208, 97, 112, 0.6)',
                        'rgba(167, 58, 73, 0.6)'


                        /*
                        ,
                        'rgba(167, 58, 73, 0.6)'
                        'rgba(197, 204, 215, 0.6)',
                        'rgba(106, 127, 159, 0.6)',
                        'rgba(47, 74, 116, 0.6)',
                        'rgba(12, 37, 76, 0.6)',
                        'rgba(1, 13, 32, 0.6)',
                        'rgba(0, 8, 21, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });
        var ctx = document.getElementById("cuestChart");
        var cuestChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Cuest4", "Cuest5", "Cuest6"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].CUESTIONARIO4, newArray[0].CUESTIONARIO5, newArray[0].CUESTIONARIO6],

                    backgroundColor: [
                        'rgba(3, 106, 255, 0.6)',
                        'rgba(27, 15, 255, 0.6)',
                        'rgba(50, 65, 119, 0.6)'


                        /*
                        ,
                        'rgba(50, 65, 119, 0.6)'
                        'rgba(92, 171, 137, 0.6)',
                        'rgba(64, 146, 111, 0.6)',
                        'rgba(42, 120, 87, 0.6)' ,
                        'rgba(24, 95, 65, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });
        var ctx = document.getElementById("proChart");
        var proChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Proyecto", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PROYECTO, 10 - newArray[0].PROYECTO],
                    backgroundColor: [
                        'rgba(255, 227, 194, 0.6)'

                    ]
                }]
            }
        });
        /* var ctx = document.getElementById("plaChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Plataforma", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PLATAFORMA, 10 - newArray[0].PLATAFORMA],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)'
    
                    ]
                }]
            }
        }); */
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }

        });

        var ctx = document.getElementById("extraChart");
        var extraChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Extra1", "Extra2"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PUNTOEX1, newArray[0].PUNTOEX2],
                    backgroundColor: [
                        'rgba(80, 78, 78, 0.6)',
                        'rgba(68, 65, 65, 0.6)'
                        /* ,
                                                'rgba(50, 65, 119, 0.6)'
                                                'rgba(22, 36, 89, 0.6)',
                                                'rgba(5, 17, 57, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });
    } else if (localStorage.getItem("mundo") == 3) {

        /*generar paleta http://paletton.com/#uid=55C050kkZm31qv5aYqCuJhzVNc+ */
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Act7", "Act8", "Act9"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD7, newArray[0].ACTIVIDAD8, newArray[0].ACTIVIDAD9],
                    backgroundColor: [
                        'rgba(243, 145, 159, 0.6)',
                        'rgba(208, 97, 112, 0.6)',
                        'rgba(167, 58, 73, 0.6)'


                        /*  ,
                            
                            
                            'rgba(56, 2, 59, 0.6)',
                            'rgba(162, 136, 227, 0.6)'
                           ,
                                                    'rgba(187, 213, 237, 0.6)',
                                                    'rgba(206, 253, 255, 0.6)',
                                                                            'rgba(204, 255, 203, 0.6)',
                                                                            'rgba(186, 232, 185, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
                /*  scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 } */
            }
        });
        var ctx = document.getElementById("cuestChart");
        var cuestChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Cuest7", "Cuest8", "Cuest9"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].CUESTIONARIO7, newArray[0].CUESTIONARIO8, newArray[0].CUESTIONARIO9],
                    backgroundColor: [
                        'rgba(3, 106, 255, 0.6)',
                        'rgba(27, 15, 255, 0.6)',
                        'rgba(50, 65, 119, 0.6)'
                        /*,
                         
                        'rgba(64, 146, 111, 0.6)',
                         'rgba(42, 120, 87, 0.6)'
                          ,
                                                 'rgba(24, 95, 65, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });
        var ctx = document.getElementById("proChart");
        var proChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Proyecto", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PROYECTO, 10 - newArray[0].PROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'

                    ]
                }]
            }
        });
        /* var ctx = document.getElementById("plaChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Plataforma", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PLATAFORMA, 10 - newArray[0].PLATAFORMA],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)'
    
                    ]
                }]
            }
        }); */
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }

        });

        var ctx = document.getElementById("extraChart");
        var extraChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Extra1", "Extra2"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PUNTOEX1, newArray[0].PUNTOEX2],
                    backgroundColor: [
                        'rgba(80, 78, 78, 0.6)',
                        'rgba(68, 65, 65, 0.6)'
                        /* ,
                                                'rgba(50, 65, 119, 0.6)'
                                                'rgba(22, 36, 89, 0.6)',
                                                'rgba(5, 17, 57, 0.6)' */
                    ]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1
                        }
                    }]
                }
                /* scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                } */
            }
        });
    }

    /* habilidades */
    /* if (newArray[0].HABILIDAD1 == 1) {
        document.getElementById("habilidad1").style.textDecoration = "line-through";
    
    }
    if (newArray[0].HABILIDAD2 == 1) {
        document.getElementById("habilidad2").style.textDecoration = "line-through";
    }
    if (newArray[0].HABILIDAD3 == 1) {
        document.getElementById("habilidad3").style.textDecoration = "line-through";
    } */





    var caracter = "";
    if (localStorage.getItem("mundo") == 1) {

        animaHover = "";
        switch (newArray[0].AVATAR) {
            case 1:
                /* caracter = "images/avatarAnimado.gif"; */
                caracter = "images/caracter.png";
                break;
            case 2:
                caracter = "images/caracter_H.png";
                break;
            case 3:
                caracter = "images/caracter2.png";
                break;
            case 4:
                caracter = "images/caracter2_H.png";
                break;
            case 5:
                caracter = "images/caracter3.png";
                break;
            case 6:
                caracter = "images/caracter3_H.png";
                break;
            case 7:
                caracter = "images/caracter4.png";
                break;
            case 8:
                caracter = "images/caracter4_H.png";
                break;
            case 9:
                caracter = "images/caracter5.png";
                break;
            case 10:
                caracter = "images/caracter5_H.png";
                break;
            case 11:
                caracter = "images/caracter6.png";
                break;
            case 12:
                caracter = "images/caracter6_H.png";
                break;
            case 13:
                caracter = "images/caracter7.png";
                break;
            case 14:
                caracter = "images/caracter7_H.png";
                break;
            case 15:
                caracter = "images/caracter8.png";
                break;
            case 16:
                caracter = "images/caracter8_H.png";
                break;
            case 17:
                caracter = "images/caracter9.png";
                break;
            case 18:
                caracter = "images/caracter9_H.png";
                break;
            case 19:
                caracter = "images/caracter10.png";
                break;
            case 20:
                caracter = "images/caracter10_H.png";
                break;
            case 21:
                caracter = "images/caracter11.png";
                break;
            case 22:
                caracter = "images/caracter11_H.png";
                break;
            case 23:
                caracter = "images/caracter12.png";
                break;
            case 24:
                caracter = "images/caracter12_H.png";
                break;
            case 25:
                caracter = "images/caracter13.png";
                break;
            case 26:
                caracter = "images/caracter13_H.png";
                break;
            case 0:
                caracter = "images/caracter0.png";
                break;
            default:
                caracter = "images/caracter.png";
                break;
        }
    } else if (localStorage.getItem("mundo") == 2) {

        switch (newArray[0].AVATAR) {
            case 1:
                /* caracter = "images/avatarAnimado.gif"; */
                caracter = "images/caracter.png";
                break;
            case 2:
                caracter = "images/caracter_H.png";
                break;
            case 3:
                caracter = "images/caracter2.png";
                break;
            case 4:
                caracter = "images/caracter2_H.png";
                break;
            case 5:
                caracter = "images/caracter3.png";
                break;
            case 6:
                caracter = "images/caracter3_H.png";
                break;
            case 7:
                caracter = "images/caracter4.png";
                break;
            case 8:
                caracter = "images/caracter4_H.png";
                break;
            case 9:
                caracter = "images/caracter5.png";
                break;
            case 10:
                caracter = "images/caracter5_H.png";
                break;
            case 11:
                caracter = "images/caracter6.png";
                break;
            case 12:
                caracter = "images/caracter6_H.png";
                break;
            case 13:
                caracter = "images/caracter7.png";
                break;
            case 14:
                caracter = "images/caracter7_H.png";
                break;
            case 15:
                caracter = "images/caracter8.png";
                break;
            case 16:
                caracter = "images/caracter8_H.png";
                break;
            case 17:
                caracter = "images/caracter9.png";
                break;
            case 18:
                caracter = "images/caracter9_H.png";
                break;
            case 19:
                caracter = "images/caracter10.png";
                break;
            case 20:
                caracter = "images/caracter10_H.png";
                break;
            case 21:
                caracter = "images/caracter11.png";
                break;
            case 22:
                caracter = "images/caracter11_H.png";
                break;
            case 23:
                caracter = "images/caracter12.png";
                break;
            case 24:
                caracter = "images/caracter12_H.png";
                break;
            case 25:
                caracter = "images/caracter13.png";
                break;
            case 26:
                caracter = "images/caracter13_H.png";
                break;
            case 0:
                caracter = "images/caracter0.png";
                break;
            default:
                caracter = "images/caracter.png";
                break;
        }
    } else if (localStorage.getItem("mundo") == 3) {
        switch (newArray[0].AVATAR) {
            case 1:
                /* caracter = "images/avatarAnimado.gif"; */
                caracter = "images/caracter.png";
                break;
            case 2:
                caracter = "images/caracter_H.png";
                break;
            case 3:
                caracter = "images/caracter2.png";
                break;
            case 4:
                caracter = "images/caracter2_H.png";
                break;
            case 5:
                caracter = "images/caracter3.png";
                break;
            case 6:
                caracter = "images/caracter3_H.png";
                break;
            case 7:
                caracter = "images/caracter4.png";
                break;
            case 8:
                caracter = "images/caracter4_H.png";
                break;
            case 9:
                caracter = "images/caracter5.png";
                break;
            case 10:
                caracter = "images/caracter5_H.png";
                break;
            case 11:
                caracter = "images/caracter6.png";
                break;
            case 12:
                caracter = "images/caracter6_H.png";
                break;
            case 13:
                caracter = "images/caracter7.png";
                break;
            case 14:
                caracter = "images/caracter7_H.png";
                break;
            case 15:
                caracter = "images/caracter8.png";
                break;
            case 16:
                caracter = "images/caracter8_H.png";
                break;
            case 17:
                caracter = "images/caracter9.png";
                break;
            case 18:
                caracter = "images/caracter9_H.png";
                break;
            case 19:
                caracter = "images/caracter10.png";
                break;
            case 20:
                caracter = "images/caracter10_H.png";
                break;
            case 21:
                caracter = "images/caracter11.png";
                break;
            case 22:
                caracter = "images/caracter11_H.png";
                break;
            case 23:
                caracter = "images/caracter12.png";
                break;
            case 24:
                caracter = "images/caracter12_H.png";
                break;
            case 25:
                caracter = "images/caracter13.png";
                break;
            case 26:
                caracter = "images/caracter13_H.png";
                break;
            case 0:
                caracter = "images/caracter0.png";
                break;
            default:
                caracter = "images/caracter.png";
                break;
        }
    }

    document.getElementById("caracter").src = caracter;

    var estado = "";
    if (newArray[0].FINAL < 6) {
        estado = "REPROBADO";
    } else {
        estado = "APROBADO";
    }
    document.getElementById("estado").innerHTML = estado;

    var reaccion = "";
    if (newArray[0].FINAL == 0) {
        reaccion = "images/reaccion_horror.png";
    } else if (newArray[0].FINAL <= 2) {
        reaccion = "images/reaccion_verguenza.png";
    } else if (newArray[0].FINAL <= 4) {
        reaccion = "images/reaccion_desepcion.png";
    } else if (newArray[0].FINAL == 5) {
        reaccion = "images/reaccion_resignacion.png";
    } else if (newArray[0].FINAL < 8) {
        reaccion = "images/reaccion_esfuerzo.png";
    } else if (newArray[0].FINAL < 10) {
        reaccion = "images/reaccion_neutral.png";
    } else if (newArray[0].FINAL == 10) {
        reaccion = "images/reaccion_orgullo.png";
    }
    document.getElementById("reaccion").src = reaccion;


    var avatar = "";
    var habilidad = "";
    var descripcion = "";
    switch (newArray[0].AVATAR) {
        case 1:
            avatar = "images/personaje1.png";
            /* habilidad = 'Pista en el examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Ama la ciudad, su fortaleza es una memoria prodigiosa';
            break;
        case 2:
            avatar = "images/personaje1_H.png";
            /* habilidad = 'Otro intento 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Imposible de engañar, siempre tiene mucho cuidado';
            break;
        case 3:
            avatar = "images/personaje2.png";
            /* habilidad = 'Trampa en examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Tiene mucho carisma y una envidiable ágilidad';
            break;
        case 4:
            avatar = "images/personaje2_H.png";
            /* habilidad = 'Entregar un dia después 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'No olvida su cabeza porque la tiene pegada al cuello';
            break;
        case 5:
            avatar = "images/personaje3.png";
            /* habilidad = 'Mas tiempo 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Posee una voz encantadora pero también un carácter fuerte ';
            break;
        case 6:
            avatar = "images/personaje3_H.png";
            /*  habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'De pocas palabras pero muchas mas acciones';
            break;
        case 7:
            avatar = "images/personaje4.png";
            /*  habilidad = 'Comer en clase 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Su sigilo y ágilidad le dan una amplia ventaja';
            break;
        case 8:
            avatar = "images/personaje4_H.png";
            /* habilidad = 'Otro intento 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Muy fuerte, usa correctamente su astucia';
            break;
        case 9:
            avatar = "images/personaje5.png";
            /* habilidad = 'Trampa en examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Tiene una voluntad de hierro al mismo nivel de su rudeza';
            break;
        case 10:
            avatar = "images/personaje5_H.png";
            /* habilidad = 'Entregar un dia después 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Su mente prodigiosa le permite actuar con rápidez';
            break;
        case 11:
            avatar = "images/personaje6.png";
            /* habilidad = 'Pista en el examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Ama la ciudad, su fortaleza es una memoria prodigiosa';
            break;
        case 12:
            avatar = "images/personaje6_H.png";
            /* habilidad = 'Mas tiempo 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Su mente prodigiosa le permite actuar con rápidez';
            break;
        case 13:
            avatar = "images/personaje7.png";
            /* habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Imposible de engañar, siempre tiene mucho cuidado';
            break;
        case 14:
            avatar = "images/personaje7_H.png";
            /* habilidad = 'Comer en clase 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Tiene mucho carisma y una envidiable ágilidad';
            break;
        case 15:
            avatar = "images/personaje8.png";
            /* habilidad = 'Otro intento 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'No olvida su cabeza porque la tiene pegada al cuello';
            break;
        case 16:
            avatar = "images/personaje8_H.png";
            /*  habilidad = 'Trampa en examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Posee una voz encantadora pero también un carácter fuerte ';
            break;
        case 17:
            avatar = "images/personaje9.png";
            /*  habilidad = 'Entregar un dia después 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'De pocas palabras pero muchas mas acciones';
            break;
        case 18:
            avatar = "images/personaje9_H.png";
            /*  habilidad = 'Pista en el examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Su sigilo y ágilidad le dan una amplia ventaja';
            break;
        case 19:
            avatar = "images/personaje10.png";
            /*   habilidad = 'Mas tiempo 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Muy fuerte, usa correctamente su astucia';
            break;
        case 20:
            avatar = "images/personaje10_H.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Tiene una voluntad de hierro al mismo nivel de su rudeza';
            break;
        case 21:
            avatar = "images/personaje11.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Su sigilo y ágilidad le dan una amplia ventaja';
            break;
        case 22:
            avatar = "images/personaje11_H.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'De pocas palabras pero muchas mas acciones';
            break;
        case 23:
            avatar = "images/personaje12.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'De pocas palabras pero muchas mas acciones';
            break;
        case 24:
            avatar = "images/personaje12_H.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'No olvida su cabeza porque la tiene pegada al cuello';
            break;
        case 25:
            avatar = "images/personaje13.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Tiene una voluntad de hierro al mismo nivel de su rudeza';
            break;
        case 26:
            avatar = "images/personaje13_H.png";
            /*   habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Tiene mucho carisma y una envidiable ágilidad';
            break;
        case 0:
            avatar = "images/personaje0.png";
            /*   habilidad = 'Comer en clase 300<span style="font-family:Poke;font-size:0.6em;">$</span>'; */
            descripcion = 'Único';
            break;
        default:
            break;
    }
    document.getElementById("avatar").src = avatar;
    /* document.getElementById("habilidad3").innerHTML = '<img class="habilidad"  src="images/habilidad3.png" /> ' + habilidad; */
    document.getElementById("descripcion").innerHTML = descripcion;


}



function limpiar() {
    document.getElementById("texto").value = "";
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 5000);
}

//para los demas elementos
var elementosScrollTop = function () {
    // Reveal the button


    var reveal = function () {
        console.log(window.scrollY);
        var elemento = document.querySelector("#elemento");
        var carta = document.querySelector("#carta");
        if (window.scrollY >= 110) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline";
            carta.style.opacity = "1";
            carta.style = "animation: llega 1.2s forwards 0s ease-in";

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            /* elemento.style.display = "none";
            carta.style.opacity = "0";
            carta.style ="animation: va 1.2s forwards 0s ease-in"; */
        }
    }
    // Listeners
    window.addEventListener('scroll', reveal);

    var reveal2 = function () {
        var elemento = document.querySelector("#elemento2");
        var carta = document.querySelector("#carta2");
        if (window.scrollY >= 1030) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline";
            carta.style.opacity = "1";
            carta.style = "animation: llega 1.2s forwards 0s ease-in";

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            /* elemento.style.display = "none";
            carta.style.opacity = "0";
            carta.style ="animation: va 1.2s forwards 0s ease-in"; */
        }
    }
    // Listeners
    window.addEventListener('scroll', reveal2);

    var reveal3 = function () {
        var elemento = document.querySelector("#elemento3");
        var carta = document.querySelector("#carta3");
        if (window.scrollY >= 1480) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline";
            carta.style.opacity = "1";
            carta.style = "animation: llega 1.2s forwards 0s ease-in";

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            /* elemento.style.display = "none";
            carta.style.opacity = "0";
            carta.style ="animation: va 1.2s forwards 0s ease-in"; */
        }
    }
    // Listeners
    window.addEventListener('scroll', reveal3);

    var reveal4 = function () {
        var elemento = document.querySelector("#elemento4");
        var carta = document.querySelector("#carta4");
        if (window.scrollY >= 1860) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline";
            carta.style.opacity = "1";
            carta.style = "animation: llega 1.2s forwards 0s ease-in";

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            /* elemento.style.display = "none";
            carta.style.opacity = "0";
            carta.style ="animation: va 1.2s forwards 0s ease-in"; */
        }
    }
    // Listeners
    window.addEventListener('scroll', reveal4);

    var reveal5 = function () {
        var elemento = document.querySelector("#elemento5");
        var carta = document.querySelector("#carta5");
        if (window.scrollY >= 2200) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline";
            carta.style.opacity = "1";
            carta.style = "animation: llega 1.2s forwards 0s ease-in";

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            /*   elemento.style.display = "none";
              carta.style.opacity = "0";
              carta.style ="animation: va 1.2s forwards 0s ease-in"; */
        }
    }
    // Listeners
    window.addEventListener('scroll', reveal5);

    var reveal6 = function () {
        var elemento = document.querySelector("#elemento6");
        var carta = document.querySelector("#carta6");
        if (window.scrollY >= 2540) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline";
            carta.style.opacity = "1";
            carta.style = "animation: llega 1.2s forwards 0s ease-in";

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            /*   elemento.style.display = "none";
              carta.style.opacity = "0";
              carta.style ="animation: va 1.2s forwards 0s ease-in"; */
        }
    }
    // Listeners
    window.addEventListener('scroll', reveal6);


};
elementosScrollTop();