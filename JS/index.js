 // Captura o evento de mudança do input de arquivo
 document.getElementById('file-upload').addEventListener('change', function(event) {
    // Recupera o nome do arquivo selecionado
    var fileName = event.target.files[0] ? event.target.files[0].name : 'Nenhum arquivo selecionado';
    // Atualiza o texto na página com o nome do arquivo
    document.getElementById('file-name').textContent = fileName;
  });


  document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtém o arquivo selecionado

    // Verifica se o arquivo foi selecionado
    if (file) {
      // Verifica o tipo de arquivo
      const fileType = file.type;

      // Se o arquivo não for nem PDF nem imagem, cancela a seleção e exibe o erro
      if (fileType !== 'application/pdf' && !fileType.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos PDF ou imagem.');
        // Limpa o campo de input para impedir que o arquivo seja "carregado"
        event.target.value = ''; 
        document.getElementById('file-info').textContent = 'Nenhum arquivo selecionado';
        document.getElementById('image-preview').style.display = 'none'; // Oculta a imagem
        return;
      }

      // Se for um PDF, exibe o nome do arquivo PDF
      if (fileType === 'application/pdf') {
        document.getElementById('file-info').textContent = `Arquivo PDF selecionado: ${file.name}`;
        document.getElementById('image-preview').style.display = 'none'; // Oculta a imagem
      } 
      // Se for uma imagem, exibe a pré-visualização da imagem
      else if (fileType.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('image-preview').src = e.target.result;
          document.getElementById('image-preview').style.display = 'block'; // Exibe a imagem
        };
        reader.readAsDataURL(file); // Lê a imagem como URL
        document.getElementById('file-info').textContent = `Imagem selecionada: ${file.name}`;
      }
    }
  });