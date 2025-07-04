<?php
// Segurança básica: verifica se o formulário foi enviado via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os valores
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS);
} else {
    // Se não for POST, redireciona de volta ao formulário
    header('Location: form.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo POST – receive.php</title>
</head>
<body>
    <h1>Dados recebidos</h1>
    <p><strong>Nome:</strong> <?= htmlspecialchars($nome) ?></p>
    <p><strong>Mensagem:</strong> <?= nl2br(htmlspecialchars($mensagem)) ?></p>

    <p><a href="form.php">Voltar ao formulário</a></p>
</body>
</html>
