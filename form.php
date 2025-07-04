<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo POST – form.php</title>
</head>
<body>
    <h1>Enviar Mensagem</h1>
    <form action="receive.php" method="POST">
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="mensagem">Mensagem:</label><br>
        <textarea id="mensagem" name="mensagem" rows="4" required></textarea><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>
