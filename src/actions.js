// actions.js
import axios from "axios";

const submitFormData = async (formData, setIsFormSubmitted) => {
  try {
    // Отправка данных формы через Axios
    await axios.post("https://backend.xeonexus.su/api/requests/add", formData);

    // Устанавливаем состояние для отображения сообщения об успешной отправке
    setIsFormSubmitted(true);
  } catch (error) {
    // Обработка ошибок
    throw error;
  }
};

export default submitFormData;
