<!--
document.write(unescape("%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%09%3Chead%3E%0A%09%09%3Ctitle%3EFrame%3C/title%3E%0A%09%09%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%09%09%3Cmeta%20name%3D%22robots%22%20content%3D%22noindex%2C%20nofollow%22%3E%0A%09%09%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1%2C%20user-scalable%3Dno%22%3E%0A%3Cscript%3E%0A//%20--%20iniciamos%20la%20variable%20del%20n%FAmero%20de%20veces%20encriptada%0Avar%20as%3D0%3B%0A//%20--%20creamos%20la%20funci%F3n%20para%20la%20Encriptaci%F3n%0Afunction%20codificar%28%29%20%0A%7B%0Acodigo%20%3D%20document.form.texto.value%3B%0Aif%20%28codigo%29%0A%7B%0Adocument.form.texto.value%3D%27Encriptando...%20Por%20favor%2C%20espere%20un%20momento%27%3B%20//%20--%20Mensaje%20en%20la%20caja%20de%20texto%0AsetTimeout%28%22compilar%28%29%22%2C0%29%3B%20//%20--%20Tiempo%20que%20muestra%20el%20mensaje%201%2C5%20segundos%0A%7D%0A//%20--%20Pulsamos%20Encriptar%20con%20la%20caja%20de%20texto%20vacia%0Aelse%20alert%28%27Antes%20de%20pulsar%20Encriptar%20debes%20escribir%20el%20c%F3digo%20HTML%27%29%20//%20--%20Mensaje%20de%20aviso%20de%20caja%20vacia%0A%7D%0A//%20--%20Creamos%20la%20funci%F3n%20que%20escribe%20el%20c%F3digo%20en%20la%20caja%20de%20texto%0Afunction%20compilar%28%29%0A%7B%0Adocument.form.texto.value%3D%27%27%3B%0Acompilado%3Descape%28codigo%29%3B%0Adocument.form.texto.value%3D%22%3Cscript%3E%5Cn%3C%21--%5Cndocument.write%28unescape%28%5C%22%22+compilado+%22%5C%22%29%29%3B%5Cn//--%3E%5Cn%3C%5C/script%3E%22%3B%0A//%20--%20Averiguamos%20el%20n%FAmero%20de%20veces%20que%20ha%20sido%20encriptada%0Aas++%3B%0Aif%20%28as%3D1%29%20alert%28%22%A1P%E1gina%20encriptada%21%22%29%3B%20//%20--%20Si%20es%20la%20primera%20encriptaci%F3n%0Aelse%20alert%28%22%A1P%E1gina%20encriptada%20%22+as+%22%20veces%21%22%29%3B%20//%20--%20Si%20se%20ha%20encriptado%20m%E1s%20de%20una%20vez%0A%7D%0A//%20--%20Creamos%20la%20funci%F3n%20de%20selecci%F3n%20del%20texto%20en%20la%20caja%0Afunction%20seleccionar%28%29%0A%7B%0Aif%28document.form.texto.value.length%3E0%29%0A%7B%0Adocument.form.texto.focus%28%29%3B%0Adocument.form.texto.select%28%29%3B%0A%7D%0Aelse%20alert%28%27No%20hay%20nada%20para%20seleccionar%27%29%20//%20--%20Mensaje%20si%20la%20caja%20de%20texto%20esta%20vacia%0A%7D%0A//%20--%20Creamos%20la%20funci%F3n%20de%20previsualizaci%F3n%20en%20una%20ventana%20nueva%0Afunction%20previsualizar%28%29%0A%7B%0Aif%28document.form.texto.value.length%3E0%29%0A%7B%0Aprevio%3Dwindow.open%28%22%22%2C%22Previsualizar%22%2C%22scrollbars%3D1%2Cmenubar%3D1%2Cstatus%3D1%2Cwidth%3D640%2Cheight%3D320%2Cleft%3D100%2Ctop%3D100%22%29%3B%20//%20--%20Crea%20la%20ventana%2C%20las%20medidas%20son%20editables%0Aprevio.document.write%28document.form.texto.value%29%3B%0A%7D%0Aelse%20alert%28%27No%20hay%20nada%20para%20previsualizar%27%29%20//%20--%20Mensaje%20si%20la%20caja%20de%20texto%20no%20contiene%20ningun%20c%F3digo%0A%7D%0A//%20--%20Creamos%20la%20funci%F3n%20para%20desencriptar%20el%20c%F3digo%0Afunction%20decompilar%28%29%0A%7B%0Aif%20%28document.form.texto.value.length%3E0%29%0A%7B%0Adecompilado%3Dunescape%28document.form.texto.value%29%3B%0Adocument.form.texto.value%3D%22%22+decompilado+%22%22%3B%0A%7D%0Aelse%20alert%28%27No%20hay%20nada%20para%20desencriptar%27%29%20//%20--%20Mensaje%20si%20la%20caja%20de%20texto%20no%20contiene%20ningun%20c%F3digo%0A%7D%0A//%20Final%20del%20script%0A%3C/script%3E%0A%09%3Cstyle%3E%0A%09*%20%7B%0A%09%09margin%3A0%3B%0A%09%09padding%3A0%3B%0A%09%09width%3A100%25%3B%0A%09%7D%0A%09*%3Afocus%20%7B%0A%09%09outline%3Anone%3B%0A%09%7D%0A%09body%20%7B%0A%09%09background%3A%23FFFFFF%3B%0A%09%09box-sizing%3Aborder-box%3B%0A%09%09padding%3A1em%3B%0A%09%09width%3A100%25%3B%0A%09%7D%0A%09input%20%7B%0A%09%09background%3A%23222222%3B%0A%09%09border%3Anone%3B%0A%09%09margin%3A.1em%200px%3B%0A%09%09box-sizing%3Aborder-box%3B%0A%09%09color%3A%23FFFFFF%3B%0A%09%09padding%3A1em%3B%0A%09%7D%0A%09textarea%20%7B%0A%09%09border%3Anone%3B%0A%09%09height%3A300px%3B%0A%09%7D%0A%09%3C/style%3E%0A%09%3C/head%3E%0A%3Cbody%3E%0A%09%3Cform%20name%3D%22form%22%3E%0A%09%09%3Ctextarea%20rows%3D%2210%22%20cols%3D%2260%22%20name%3D%22texto%22%20placeholder%3D%22Escribe%20tu%20c%F3digo%20HTML%22%3E%3C/textarea%3E%0A%09%09%3Cinput%20type%3D%22button%22%20value%3D%22Encriptar%22%20onclick%3D%22codificar%28%29%22%3E%0A%09%09%3Cinput%20type%3D%22button%22%20value%3D%22Seleccionar%22%20onclick%3D%22seleccionar%28%29%22%3E%0A%09%3C/form%3E%0A%3C/body%3E%0A%3C/html%3E"));
//-->