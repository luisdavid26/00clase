<?php
// Inicializar o reanudar la sesión
session_start();

// Variables de sesión
if (!isset($_SESSION['caraA'])) 
{
    $_SESSION['caraA'] = 0;
}
if (!isset($_SESSION['caraB'])) 
{
    $_SESSION['caraB'] = 0;
}

// Función para lanzar la moneda
function lanzarMoneda() 
{
    return rand(0, 1) == 0 ? 'A' : 'B';
}

// Actualizar las variables de sesión según el resultado
if (isset($_POST['lanzar'])) 
{
    $resultado = lanzarMoneda();

    if ($resultado == 'A') 
    {
        $_SESSION['caraA']++;
    } 
    else 
    {
        $_SESSION['caraB']++;
    }
}
else{$resultado="";}

if (isset($_POST['nuevaPartida'])) 
{
    session_destroy();
    header('Location: cara_cruz.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Cara o Cruz</h1>
    <form action="" method="post">
        <input type="submit" name="lanzar" value="Lanzar Moneda">
        <input type="submit" name="nuevaPartida" value="Nueva Partida">
    </form>
    <BR>
    <table align="left" border="0">
        <tr>
            <td></td>
            <td>Resultado</td>
            <td></td>
        </tr>

    <tr>
        <td>
    <?php
    if ($_SESSION['caraA'] > $_SESSION['caraB']) 
    { 
        echo 'Jugador A: <img src="Gato_gana.png" width="20">';
    } 
    elseif ($_SESSION['caraA'] == $_SESSION['caraB']) 
    {
        echo 'Jugador A: <img src="Gato_empata.png" width="20">';
    } 
    else 
    {
        echo 'Jugador A: <img src="Gato_pierde.png" width="20">';
    }?>
        </td>

    <td align="center"><?php
        if ($resultado ==="A") 
        { 
            echo '<img src="A.png" width="40">';
        }
        if ($resultado ==="B")  
        {
            echo '<img src="B.png" width="40">';
        } 
        else
        {
            echo"";
        }  ?>
   </td>

   <td>
<?php
    if ($_SESSION['caraB'] > $_SESSION['caraA']) 
    {
        echo 'Jugador B: <img src="Mono_gana.png" width="20">';
    } 
    elseif ($_SESSION['caraB'] == $_SESSION['caraA']) 
    {
        echo 'Jugador B: <img src="Mono_empata.png" width="20">';
    } 
    else 
    {
        echo 'Jugador B: <img src="Mono_pierde.png" width="20">';
    }
    ?>
   </td>
    </tr>
    <tr>

    <td align="center"><?php echo $_SESSION['caraA']; ?></td>
    <td></td>
    <td align="center"><?php echo $_SESSION['caraB']; ?></td>

    </tr>
    </table>
</body>
</html>