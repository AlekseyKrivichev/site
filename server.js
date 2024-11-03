const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Позволяет серверу получать данные в формате JSON
app.use(express.json());

// Маршрут для сохранения результата теста
app.post('/save-result', (req, res) => {
  const result = req.body;
  const timestamp = new Date().toISOString(); // Время записи

  // Строка с результатом, которая будет добавлена в файл
  const logEntry = `${timestamp} - ${result.testName}: ${result.score}/${result.totalQuestions}\n`;

  // Запись результата в файл "results.txt"
  fs.appendFile('results.txt', logEntry, (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
      return res.status(500).json({ message: 'Ошибка при сохранении результата' });
    }
    res.status(200).json({ message: 'Результат успешно сохранен' });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
