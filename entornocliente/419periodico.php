<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    
</head>
<body>
    <?php
    // Primero leo la cookie por si existe
    if (isset($_COOKIE['secciones']) && !empty($_COOKIE['secciones'])) 
    {
        /// Recuperar la cookie 'secciones' y dividir la cadena en sus valores originales
        $secciones = explode(',', $_COOKIE['secciones']);
      
    } // Ahora, $secciones es un array que contiene los valores originales.
    else 
    {
        $secciones = [];
    }

    // Si he dado borrar cookie, la borro y anulo el valor de la variable
    // que contiene la cookie para la ejecución actual
    if (isset($_POST['borrar'])) {
        setcookie('secciones', '', time() - 1);
        $secciones = [];
    }

    // Si he dado enviar es para guardar la cookie
    // La leo del input checkbox y me guardo esos valores
    // en un array para el script actual
    //la función "implode" se utiliza para concatenar elementos de un array en una cadena
    if (isset($_POST['enviar'])) 
    {
        $secciones = isset($_POST['seccion']) ? $_POST['seccion'] : [];
        setcookie('secciones', implode(',', $secciones), time() + 3600);
    }
    ?>

    <h3>Selecciona tus secciones favoritas y solo verás esas</h3>
    <form action="" method="POST">
        <input type="checkbox" name="seccion[]" value="noticias" <?php if (in_array('noticias', $secciones)) echo 'checked'; ?>> Noticias<br />
        <input type="checkbox" name="seccion[]" value="deporte" <?php if (in_array('deporte', $secciones)) echo 'checked'; ?>> Deporte<br />
        <input type="checkbox" name="seccion[]" value="economia" <?php if (in_array('economia', $secciones)) echo 'checked'; ?>> Economía<br />
        <input type="submit" value="Recordar" name="enviar">
        <hr />
    </form>

    <?php
    // Si no hay cookie muestro los checkboxes, si no no los muestro
    if (empty($secciones)) 
    {
        // Mostrar el formulario de selección
        echo "Selecciona alguna sección para ver su contenido!";
    } 
    else 
    {   
        echo '<table>';
        echo '<tr>';
        
        // Mostrar las secciones seleccionadas
        foreach ($secciones as $seccion) 
        {    
            // Mostrar el contenido de cada sección seleccionada
            if ($seccion == "noticias") 
            {
                ?>
                 <td>
                    <h2>Noticias</h2>
                    <p>
                        La realidad virtual, además de verse y oírse, ahora puede tocarse.
                        Un grupo de estudiantes del London’s Royal College of Art han creado
                        un traje que permite sentirla a través del tacto.
                        Utiliza solenoides, dispositivos que producen
                        campos magnéticos a partir de corrientes eléctricas.
                        En este caso crean los campos a partir de diferentes sonidos,
                        cuyas vibraciones se sienten en la piel.
                        Las distintas frecuencias y ondas sonoras provocan sensaciones variadas.
                    </p>
                </td>
                <?php
            }
            if ($seccion == "economia") {
                ?>
                <td>
                    <h2>Economía</h2>
                        La actividad económica española, medida por el producto interior bruto
                        (PIB), se multiplicó por 50 entre 1850 y 2015,
                        lo que supone una tasa acumulativa anual del 2, 4%.
                        Pero, ¿en qué medida afectó a las condiciones de vida de la población?
                        Dado que la población se triplicó, el PIB real por habitante
                        aumentó alrededor de 16 veces,
                        creciendo anualmente, en promedio, al 1, 7%, pero mostrando un ritmo
                        desigual.
                        Así, entre 1850 y 1950, el PIB per cápita creció al 0, 7%,
                        duplicando su nivel inicial.   
                    </td>
                <?php
            }
            if ($seccion == "deporte") 
            {?>
                <td>
                    <h2>Deporte</h2>
                        El español Rafael Nadal derrotó al canadiense Milos Raonic,
                        tercer favorito, por 6-4, 7-6 (7) y 6-4 en dos horas y 44 minutos,
                        para marcar su victoria 50 en el Abierto de Australia y alcanzar por
                        quinta vez las semifinales.
                        El campeón de 2009 y finalista en 2012 y 2014,
                        se enfrentará por un puesto para la final contra el búlgaro
                        Grigor Dimitrov, que derrotó antes al belga David Goffin,
                        por 6-3, 6-2 y 6-4, en dos horas y 13 minutos.
                        Será la 24 semifinal de Rafael Nadal en el Grand Slam,     
                </td>
                <?php
            }
        }   ?>
       </tr>
      </table>

      <br /><br />

    <table align="center">
    <tr>
       <td colspan="3" align="center">
       <form action='' method='POST'><input type='submit' value='Borrar Cookie' name='borrar'> </form>
       </td>
    </tr>
    </table>
<?php 
}?>
</body>
</html>
